import store from "@/store"
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router"

export const pipeline = (context: any, middleware: any, index: number) => {
    const nextMiddleware = middleware[index]
    if (!nextMiddleware) {
        return context.next
    }

    return () => {
        const nextPipeline = pipeline(context, middleware, index + 1)
        nextMiddleware({
            ...context,
            next: nextPipeline
        })
    }
}

export const routerBeforeEach = ((to: any, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    // to and from are both route objects. must call `next`.
    const meta = to.meta(to)
    document.title = meta.title

    if (!meta.middleware)
        return next()


    const middleware = meta.middleware
    const context = {
        to, from, next, store
    }

    return middleware({
        ...context,
        next: pipeline(context, middleware, 1)
    })
})