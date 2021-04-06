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
        dynamic: (value: string | number): string => `/${value}`,
        component: lazy(() => import('../components/pages/profile' /* webpackChunkName: "profile-page" */)),
    },
    product: {
        path: '/products/:product',
        dynamic: (value: string | number): string => `/${value}`,
        component: lazy(() => import('../components/pages/product' /* webpackChunkName: "product-page" */)),
    },
};

export default router;
