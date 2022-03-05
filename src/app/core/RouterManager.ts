import Router from "koa-router"
import { Middleware } from "koa-compose"
import Koa from 'koa'

export class RouterManager {
    private router: Router

    constructor(baseUrl: string) {
        this.router = new Router({ prefix: baseUrl })
    }

    // get route
    get(route: string | RegExp, ...handlers: Array<Middleware<any>>) {
        this.router.get(route, ...handlers)
    }

    // post route
    post(route: string | RegExp, ...handlers: Array<Middleware<any>>) {
        this.router.post(route, ...handlers)
    }

    // put route
    put(route: string | RegExp, ...handlers: Array<Middleware<any>>) {
        this.router.put(route, ...handlers)
    }

    // delete route
    delete(route: string | RegExp, ...handlers: Array<Middleware<any>>) {
        this.router.delete(route, ...handlers)
    }

    // options route
    options(route: string | RegExp, ...handlers: Array<Middleware<any>>) {
        this.router.options(route, ...handlers)
    }

    // patch route
    patch(route: string | RegExp, ...handlers: Array<Middleware<any>>) {
        this.router.patch(route, ...handlers)
    }


    // will return all routes
    getRoutes(): Router.IMiddleware<any> {
        return this.router.routes()
    }

}
