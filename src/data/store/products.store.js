import api from "../api";
import {ElMessage} from 'element-plus'

export default {
    namespaced: true,
    state: {
        products: {data: [], total: 0, per_page: 25, current_page: 1},
        product: {},
        tags: {},
        cart_items:{},
        total:''
    },
    getters: {
        products: state => state.products,
        cart_items: state => state.cart_items,
        product: state => state.product,
        tags: state => state.tags,
        total: state => state.total,
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setProduct(state, product) {
            state.product = product;
        },
        setTags(state, tags) {
            state.tags = tags;
        },
        setTotal(state, total) {
            state.total = total;
        },
        setCartItems(state, cart_items) {
            state.cart_items = cart_items;
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
        async getTags({commit}, filters) {
            try {
                const response = await api.getTags(filters);
                commit('setTags', response);
            } catch (e) {
                ElMessage({
                    dangerouslyUseHTMLString: true,
                    message: 'Error fetching tags!',
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
