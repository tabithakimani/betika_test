import {createStore} from 'vuex'
import products from "@/data/store/products.store";
import uoms from "@/data/store/uoms.store"
import users from "@/data/store/users.store";
import orders from "@/data/store/orders.store";

export default createStore({
    state: {
        autoSave: true,
        loading: {},
        clear_form: false,
        visible:false,
        nav_visible:false
    },
    getters: {
        visible: state => state.visible,
        nav_visible: state => state.nav_visible,
        clear_form: state => state.clear_form
    },
    mutations: {
        setVisible(state,visible){
            state.visible = visible;
        },
        setNavVisible(state,nav_visible){
            state.nav_visible = nav_visible;
        },
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
        orders,
        users
    }
})
