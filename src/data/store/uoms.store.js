import api from "../api";

export default {
    namespaced: true,
    state: {
        uoms: {data: [], total: 0, per_page: 25, current_page: 1},
    },
    getters: {
        uoms: state => state.uoms,
    },
    mutations: {
        setUnitOfMeasure(state, uoms) {
            state.uoms = uoms;
        },
    },
    actions: {
        async getUnitOfMeasure({commit}, filters) {
            try {
                const response = await api.getUnitOfMeasure(filters);
                commit('setUnitOfMeasure', response);
            } catch (e) {
                this._vm.$message.error('Error fetching uoms!');
            }
        },
    }
}
