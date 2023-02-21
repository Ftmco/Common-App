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
                    title: 'پنل مدیریت کافی شاپ',
                    middleware: auth,
                    route
                })
            },

            {
                path: 'comments',
                name: 'Comments',
                component: () => import("@/pages/home/CommentsPage.vue"),
                meta: (route: Route) => ({
                    title: 'نظرات',
                    middleware: auth,
                    route,
                    hasBack: true
                }),
            },
            {
                path: 'tickets',
                name: 'Tickets',
                component: () => import("@/pages/home/TicketsPage.vue"),
                meta: (route: Route) => ({
                    title: 'تیکت ها',
                    middleware: auth,
                    route,
                    hasBack: true
                }),
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
            }, {
                path: 'groups',
                name: 'Groups',
                component: () => import("@/pages/home/GroupsPage.vue"),
                meta: (route: Route) => ({
                    title: 'گروه ها',
                    middleware: auth,
                    route,
                    hasBack: true
                }),
            },
            {
                path: 'stores',
                name: 'Stores',
                component: () => import('@/pages/home/CoffeeShopsPage.vue'),
                meta: (route: Route) => ({
                    title: 'کافی شاپ ها',
                    middleware: auth,
                    route,
                    hasBack: true,
                }),
            },
            {
                path: 'products',
                name: 'Products',
                component: () => import('@/pages/home/ProductsPage.vue'),
                meta: (route: Route) => ({
                    title: 'محصولات',
                    middleware: auth,
                    route,
                    hasBack: true,
                }),
            },
            {
                path: 'productSellers',
                name: 'ProductSellers',
                component: () => import('@/pages/product/Sellers.vue'),
                meta: (route: Route) => ({
                    title: `فروشندگان ${route.query.name}`,
                    middleware: auth,
                    route,
                    hasBack: true,
                }),
            },
            {
                path: '/store/detail',
                name: 'StoreDetail',
                component: () => import("@/pages/store/detail.vue"),
                meta: (route: Route) => ({
                    title: `جزئیات ${route.query.name}`,
                    middleware: auth,
                    route,
                    hasBack: true,
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
