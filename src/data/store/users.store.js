import api from "../api";
import {ElMessage} from 'element-plus'
import router from "@/router";

export default {
    namespaced: true,
    state: {
        user: {},
        errors: {
            data: {
                errors: {
                    full_name: [],
                    phone_number: [],
                    password: [],
                }
            }
        },
        has_errors: false,
    },
    getters: {
        loggedIn() {
            return !!window.localStorage.getItem('citadel');
        },
        user: state => state.user === null ? JSON.parse(localStorage.getItem('user')) : state.user,
        errors: state => state.errors,
        has_errors: state => state.has_errors,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setErrors(state, errors) {
            state.errors = errors
        },
        hasErrors(state, val) {
            state.has_errors = val
            if (!val) {
                // no errors
                state.errors = {
                    data: {
                        errors: {
                            full_name: [],
                            phone_number: [],
                            password: [],
                        }
                    }
                };
            }
        }
    },
    actions: {
        async login({commit}, credentials) {
            try {
                const response = await api.login(credentials);
                await localStorage.setItem('citadel', response.token);
                await localStorage.setItem('user', JSON.stringify(response.user))
                commit('setUser', response.user);
                let searchParams = new URLSearchParams(window.location.search);

                if (searchParams.has("redirect")) {
                    window.location.href = searchParams.get("redirect")
                } else {
                    window.location.href = '/'
                }
                ElMessage({type: 'success', message: 'Logged in successfully, Please proceed to checkout'});
            } catch (e) {
                console.log(e)
                let status = e.response.status
                if (status === 422) {
                    ElMessage({type: 'error', message: 'Please correct the error below'});
                }
                if (status === 403) {
                    ElMessage({type: 'error', message: e.response.data.message, duration: 10000});
                }
            }
        },
        async logout(context, filters = {}) {
            await api.logout(filters);
            localStorage.removeItem('citadel');
            localStorage.removeItem('user');
            window.location.href = '/account'
        },
        async register({dispatch, commit}, data) {
            try {
                commit('hasErrors', false)
                const response = await api.register(data);
                await localStorage.setItem('user', JSON.stringify(response.user))
                window.location.href = '/'
            } catch (e) {
                commit('hasErrors', true)
                commit('setErrors', e.response)
                ElMessage({type: 'error', message: 'Please correct the Errors below', duration: 10000});
            }
        },

    }
}
