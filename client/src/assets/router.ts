import { lazy } from 'react';

const router = {
    home: {
        path: '/',
        component: lazy(() => import('../pages/home' /* webpackChunkName: "home-page" */)),
    },
    auth: {
        path: '/auth',
        component: lazy(() => import('../pages/auth' /* webpackChunkName: "auth-page" */)),
    },
    profile: {
        path: '/profiles/:profile',
        dynamic: (value: string): string => `/${value}`,
        component: lazy(() => import('../pages/profile' /* webpackChunkName: "profile-page" */)),
    },
    product: {
        path: '/products/:product',
        dynamic: (value: string): string => `/${value}`,
        component: lazy(() => import('../pages/product' /* webpackChunkName: "product-page" */)),
    },
};

export default router;
