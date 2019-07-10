import { Context } from "koa";
import { decode } from 'jsonwebtoken'
import httpConstants from '../../constant/httpConstants'
import models from '../../db/entity/library'

class ErrorMiddleware {
    private getToken(ctx: Context) {
        const header = ctx.request.headers.authorization
        if (!header) {
            return null
        }
        const parts = header.split(' ')
        if (parts.length !== 2) {
            return null
        }
        const scheme = parts[0]
        const token = parts[1]
        if (/^Bearer$/i.test(scheme)) {
            return token
        }
        return null
    }
    errorMiddleware() {
        return async (ctx: Context, next) => {
            try {
                await next()
            } catch (err) {
                ctx.status = err.status || 500
                ctx.body = err.message
                ctx.app.emit('error', err, ctx)
            }
        }
    }

    async jwtMiddleWare() {
        let getToken = this.getToken
        return async (ctx: Context, next) => {
            const token = getToken(ctx)
            if (!token) {
                ctx.status = httpConstants.HTTP_UNAUTHORISED
                ctx.body = { error: { code: 'GEN-UNAUTHORIZED', http_code: 401 } }
                return
            }
            let decoded = null
            try {
                decoded = decode(token)
                ctx.state.user = decoded

                // The client's session has expired and must log in again.
                if (decoded.exp < Math.floor(Date.now() / 1000)) {
                    ctx.status = httpConstants.HTTP_UNAUTHORISED
                    ctx.body = { error: { code: 'GEN-UNAUTHORIZED', http_code: 401 } }
                    return
                }
                // return next()
                // here will be the project specific code to check information inside the token
                let sqlQuery = 'SELECT * FROM `Users` where user_id = :userId and d2t_token = :tokenId'
                await models.sequelize.query(sqlQuery,
                    { replacements: { userId: decoded.user_id, tokenId: decoded.token_id }, type: models.sequelize.QueryTypes.SELECT })
                    .then(users => {
                        if (users.length === 0) {
                            throw new Error()
                        }
                    }, reason => {
                        let error = new Error()
                        throw error
                    })

                ctx.state.user = decoded
                if (!ctx.state.user) {
                    throw new Error()
                }
                return next()
            } catch (err) {
                ctx.status = httpConstants.HTTP_UNAUTHORISED
                ctx.body = { error: { code: 'GEN-UNAUTHORIZED', http_code: 401 } }
            }
        }
    }
}

const errorMiddleware: ErrorMiddleware = new ErrorMiddleware()
export default errorMiddleware