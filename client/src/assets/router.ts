import { lazy } from 'react';

const router = {
    home: {
        path: '/',
        component: lazy(() => import('../components/pages/home' /* webpackChunkName: "home-page" */)),
    },
    auth: {
        path: '/auth',
        component: lazy(() => import('../components/pages/auth' /* webpackChunkName: "auth-page" */)),
    },
    profile: {
        path: '/profiles/:profile',
        dynamic: (value: string | number): string => `/profiles/${value}`,
        component: lazy(() => import('../components/pages/profile' /* webpackChunkName: "profile-page" */)),
    },
    product: {
        single: {
            path: '/products/:product',
            dynamic: (value: string | number): string => `/products/${value}`,
            component: lazy(() => import('../components/pages/product' /* webpackChunkName: "product-page" */)),
        },
        create: {
            path: '/products/create',
            component: lazy(() => import('../components/pages/product/create' /* webpackChunkName: "product-page" */)),
        },
    },
};

export default router;
