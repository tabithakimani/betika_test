import api from "../api";
import router from "@/router";

export default {
    namespaced: true,
    state: {
        orders: {data: [], total: 0, per_page: 25, current_page: 1},
    },
    getters: {
        orders: state => state.orders,
    },
    mutations: {
        setOrder(state, orders) {
            state.orders = orders;
        },
    },
    actions: {
        async createOrder({dispatch, commit}, data) {
            try {
                commit('hasErrors', false)
                const response = await api.createOrder(data);
                router.push('/');
            } catch (e) {
                commit('hasErrors', true)
                commit('setErrors', e.response)
                this._vm.$message.error({
                    message: 'Please correct the Errors below',
                    duration: 10000
                });
            }
        },
    }
}
