import store from '../../data/store';
import router from "@/router";

const aclMiddleware = (to, next) => {
    setTimeout(() => {
        const loggedIn = store.getters['users/loggedIn'];
        if (!loggedIn) {
            next({
                path: '/account',
                query: {redirect: to.fullPath}
            })
            // router.push('/account');
            // return next(false);
        }
        return next();
    }, 1000)
};

export default aclMiddleware;
