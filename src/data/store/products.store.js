import api from "../api";
import { ElMessage } from 'element-plus'

export default {
    namespaced: true,
    state: {
        products: {data: [], total: 0, per_page: 25, current_page: 1},
        product: {},
    },
    getters: {
        products: state => state.products,
        product: state => state.product,
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setProduct(state, product) {
            state.product = product;
        },
    },
    actions: {
        async getProducts({commit}, filters) {
            try {
                const response = await api.getProducts(filters);
                commit('setProducts', response);
            } catch (e) {
                ElMessage({
                    dangerouslyUseHTMLString: true,
                    message: 'Error fetching products!',
                })
            }
        },
        async getProduct({commit}, filters) {
            try {
                const response = await api.getProduct(filters);
                commit('setProduct', response);
            } catch (e) {
                ElMessage({
                    dangerouslyUseHTMLString: true,
                    message: 'Error fetching product!',
                })
            }
        },
    }
}
