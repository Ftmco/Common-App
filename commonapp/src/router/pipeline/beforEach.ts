import store from "@/store";
import { NavigationGuardNext, Route } from "vue-router";
import pipeline from ".";


export const routerBeforEach = (to: any, from: Route, next: NavigationGuardNext<Vue>) => {
    let meta = to.meta(to)
    document.title = meta.title
    if (!meta.middleware) {
        return next()
    }

    const middleware = meta.middleware
    const context = {
        to,
        from,
        next,
        store
    }

    return middleware({
        ...context,
        next: pipeline(context, middleware, 1)
    })
}