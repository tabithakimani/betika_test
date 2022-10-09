import api from "../api";
import {ElMessage} from 'element-plus'

export default {
    namespaced: true,
    state: {
        products: {data: [], total: 0, per_page: 25, current_page: 1},
        product: {},
        tags: {},
        cart_items: {},
        total: ''
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
        async getCartItems({commit}) {
            let cart = JSON.parse(localStorage.getItem('cart')) ?? []
            let cart_items = Object.values(cart.reduce((a, {id, name, image, uom_id, price, uom_name}) => {
                a[uom_id] = a[uom_id] || {uom_id, quantity: 0, name, image, id, price, uom_name};
                a[uom_id].quantity++;
                return a;
            }, Object.create(null)));

            let total = cart_items.reduce(function (s, a) {
                return s + (a.price * a.quantity);
            }, 0);

            commit('setCartItems', cart_items)
            commit('setTotal', total)
        },
    }
}
