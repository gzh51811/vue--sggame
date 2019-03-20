import Vue from "vue";
import App from "./App.vue";

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import axios from 'axios';
axios.defaults.withCredentials=true
Vue.prototype.$axios = axios;
//引入vue_router
import router from "./router";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.use(MintUI);

Vue.config.productionTip = false;


const store = new Vuex.Store({
    state:{
      navs: [
        {
          text: "商城",
          name: "Home",
          icon: "el-icon-goods"
        },
        {
          text: "头条",
          name: "Headlines",
          icon: "el-icon-document"
        },
        {
          text: "社区",
          name: "Community",
          icon: "el-icon-message"
        },
        {
          text: "购物车",
          name: "Cart",
          icon: "el-icon-menu"
        },
        {
          text: "我的",
          name: "MyPerson",
          icon: "el-icon-setting"
        }
      ],
      selected: false
    }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
