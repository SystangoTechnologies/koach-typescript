import { Context } from 'koa'
import _ from 'lodash'

export class RequestValidator {
    constructor() { }

    // checking that request body contains required fields or not
    checkRequestBody(ctx: Context, requiredFields: Array<string>) {
        let result = { fail: false, msg: '' }
        _.map(requiredFields, (val) => {
            if (!_.has(ctx.request.body, val)) {
                result.fail = true
                result.msg = val + ' is required.'
            }
        })
        return result
    }

    // checking that request query contains required fields or not
    checkRequestQuery(ctx: Context, requiredFields: Array<string>) {
        let result = { fail: false, msg: '' }
        _.map(requiredFields, (val) => {
            if (!_.has(ctx.request.body, val)) {
                result.fail = true
                result.msg = val + ' is required.'
            }
        })
        return result
    }
}


let requestValidator: RequestValidator = new RequestValidator()

export default requestValidator