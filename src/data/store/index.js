import {createStore} from 'vuex'
import products from "@/data/store/products.store";
import uoms from "@/data/store/uoms.store"
import users from "@/data/store/users.store";

export default createStore({
    state: {
        autoSave: true,
        loading: {},
        clear_form: false
    },
    getters: {
        clear_form: state => state.clear_form
    },
    mutations: {
        setAutoSave(state, autoSave) {
            state.autoSave = autoSave;
        },
        setClearForm(state, val) {
            state.clear_form = val
        }
    },
    modules: {
        products,
        uoms,
        users
    }
})
