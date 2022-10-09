import {createRouter, createWebHistory} from 'vue-router'
import Account from '../views/account'
import About from '../views/About'
import Home from '../views/home'
import Checkout from '../views/checkout'
import authMiddleware from './middlewares/auth-middleware';

const routes = [
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/account',
        name: 'account',
        component: Account
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
        meta: {
            auth: true,
            show_in_search: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let result;
    if (to.meta.auth) {
        result = authMiddleware(to, next);
    } else {
        result = next();
    }
    return result;
});

export default router
