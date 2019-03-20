import Vue from "vue";
import App from "./App.vue";

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
axios.defaults.withCredentials=true
Vue.prototype.$axios = axios;
//引入vue_router
import router from "./router";
import Vuex from "vuex";
import store from './store'

Vue.use(Vuex);
Vue.use(MintUI);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
