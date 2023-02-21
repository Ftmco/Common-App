import Vue from 'vue'
import VueRouter, { NavigationGuardNext, Route } from 'vue-router';
import { routerBeforEach } from './pipeline/beforEach';
import { routes } from './routes';

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes,
    mode: 'history',
})

router.beforeEach((to: any, from: Route, next: NavigationGuardNext<Vue>) => routerBeforEach(to,from,next))

export default router;