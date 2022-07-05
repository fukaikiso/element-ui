import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    database: 'http://127.0.0.1:3000/',
    user: null,
  },
  getters: {},
  mutations: {
    updateUser(state, newValue) {
      state.user = newValue;
    },
  },
  actions: {},
  modules: {},
});
