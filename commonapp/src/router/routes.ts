import { Route, RouteConfig } from "vue-router";
import auth from "./middleware/auth";
import guest from "./middleware/guest";

export const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/tabs/home'
    },
    {
        path: '/account/',
        redirect: '/account/login'
    },
    {
        path: '/tabs/',
        component: () => import("@/pages/home/TabsPage.vue"),
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import("@/pages/home/HomePage.vue"),
                meta: (route: Route) => ({
                    title: 'اپلیکیشن مشترک',
                    middleware: auth,
                    route
                })
            },
            {
                path: 'settings',
                name: 'Settings',
                component: () => import("@/pages/home/SettingsPage.vue"),
                meta: (route: Route) => ({
                    title: 'تنظیمات',
                    middleware: auth,
                    route,
                    hasBack: true
                })
            },
            {
                path: '/account/profile',
                name: 'Profile',
                component: () => import("@/pages/account/Profile.vue"),
                meta: (route: Route) => ({
                    title: 'پروفایل',
                    middleware: auth,
                    hasBack: true,
                    route
                })
            },
        ]
    },

    {
        path: '/account/login',
        name: 'Login',
        component: () => import("@/pages/account/LoginPage.vue"),
        meta: (route: Route) => ({
            title: 'ورود',
            middleware: guest,
            route
        })
    },
    {
        path: '/account/register',
        name: 'SignUp',
        component: () => import("@/pages/account/SignUp.vue"),
        meta: (route: Route) => ({
            title: 'ثبت نام',
            middleware: guest,
            route
        })
    },
    {
        path: '/account/activation',
        name: 'ActiveAccount',
        component: () => import("@/pages/account/AccountActivation.vue"),
        meta: (route: Route) => ({
            title: 'فعال سازی حساب',
            middleware: guest,
            route
        })
    },

];
