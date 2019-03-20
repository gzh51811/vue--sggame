import Vue from "vue";
import Vuex, { Store } from "vuex";

import state from "./state";

// 使用
Vue.use(Vuex);

const store = new Store({
  // 公共数据
  state,

  getters: {},

  // 定义state的修改方式：mutations
  mutations: {
    setHomedata(state, playload) {
      state.homedata = JSON.parse(playload);
    }
  },

  actions: {}
});

export default store;
