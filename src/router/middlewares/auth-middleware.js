import store from '../../data/store';
import router from "@/router";

const aclMiddleware = (to, next) => {
    setTimeout(() => {
        const loggedIn = store.getters['users/loggedIn'];
        if (!loggedIn) {
            router.push('/account');
            return next(false);
        }
        return next();
    }, 1000)
};

export default aclMiddleware;
