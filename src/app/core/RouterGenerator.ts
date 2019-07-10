import glob from 'glob'
import Koa from 'koa'
import Router from 'koa-router'

// manager for maintaining the routers
export default class RouterGenerator {

    constructor(private dirPath: string, private baseUrl: string) {
    }
    // generating the routers         
    generateRoute(app: Koa) {
        glob(`${this.dirPath}/*`, { ignore: ['**/index.js', '**/index.ts'] }, (err: Error, modules: string[]) => {
            if (err) {
                return
            }
            modules.forEach((module: string) => {
                const routerManager = require(module).default
                let router: Router = new Router({ prefix: this.baseUrl })
                router.use(routerManager.getRoutes())
                app.use(router.routes())
            })
        })
    }
}