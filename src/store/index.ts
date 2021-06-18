import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reqMap: new Array<any>()
  },
  getters: {
    getReqMap: state => state.reqMap
  },
  mutations: {
    setReqMap(state, payload) {
      state.reqMap.push(payload);
    }
  },
  actions: {},
  modules: {},
});
