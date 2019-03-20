<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected" v-if="iftabbar" class="bottom" fixed>
      <mt-tab-item
        class="bitem"
        v-for="nav in navs"
        :id="nav.name"
        @click.native="goto(nav)"
        :key="nav.name"
      >{{nav.text}}</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Vue from "vue";

//引入axios
import axios from "axios";

Vue.prototype.$axios = axios;

import { Tabbar, TabItem } from "mint-ui";

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
  name: "app",
  data() {
    return {
      iftabbar: false,
      rCompent: ["Home", "Headlines", "Community", "Cart", "MyPerson"],
      navs: [
        {
          text: "商城",
          name: "Home"
        },
        {
          text: "头条",
          name: "Headlines"
        },
        {
          text: "社区",
          name: "Community"
        },
        {
          text: "购物车",
          name: "Cart"
        },
        {
          text: "我的",
          name: "MyPerson"
        }
      ],
      selected: false
    };
  },
  methods: {
    goto(nav) {
      this.$router.push({ name: nav.name });
      // console.log("tag", nav);
    }
  },
  created() {
    let ifTitle = this.rCompent.includes(this.$route.name);
    if (ifTitle) {
      this.iftabbar = ifTitle;
    }
  }
};
</script>

<style scoped>
.bottom {
  height: 2.688787rem;
  padding: 0.457666rem 0 0.343249rem;
  background: #333;
}
.bitem {
  color: #fff;
}
.is-selected {
  color: #ff0000;
}
</style>
