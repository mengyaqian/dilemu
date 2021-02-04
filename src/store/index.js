import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  // key:'rto',
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    onlineIsSolve: 1, //在线验证是否解决 0未解决，1解决
    currentStep: 0 //当前步骤
  },
  mutations: {
    INITSTATICDATA(state, obj) {
      state[obj.key] = obj.value;
    }
  },
  actions: {
    changeCurrentStep({ commit }, pdata) {
      commit("INITSTATICDATA", { key: "currentStep", value: pdata });
    }
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
