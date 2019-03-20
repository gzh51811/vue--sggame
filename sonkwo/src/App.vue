<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected" v-if="iftabbar" class="bottom" fixed>
      <mt-tab-item
        class="bitem"
        :class="{active:idx===active}"
        v-for="(nav,idx) in navs"
        :id="nav.name"
        @click.native="goto(nav,idx)"
        :key="nav.name"
      >
        <i :class="nav.icon"></i>
        <div>{{nav.text}}</div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Vue from "vue";

//引入axios
import axios from "axios";
//elementUI框架
import ElementUI from "element-ui";
//引入elementUI的css
import "element-ui/lib/theme-chalk/index.css";

Vue.prototype.$axios = axios;
axios.defaults.headers.post["Content-type"] = "appliction/x-www-form-urlencoded";

import { Tabbar, TabItem } from "mint-ui";

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

// Vue.use(MintUI);
Vue.use(ElementUI);

export default {
  name: "app",
  data() {
    let name = this.$route.name;
    return {
      active: 0,
      iftabbar: false,
      rCompent: ["Home", "Headlines", "Community", "Cart", "MyPerson"],
      name: name,
      selected: false,
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
    };
  },
  methods: {
    goto(nav, idx) {
      this.$router.push({ name: nav.name });
      this.active = idx;
      // console.log("tag", nav);
    },
    checkname() {
      let name = this.$route.name;
      let navs = this.navs;
      for (var i = 0; i < navs.length; i++) {
        if (navs[i].name == name) {
          this.active = i;
        }
      }
    }
  },
  created() {
    let ifTitle = this.rCompent.includes(this.$route.name);
    if (ifTitle) {
      this.iftabbar = ifTitle;
    }
    this.checkname();
  }
};
</script>

<style scoped>
.bottom {
  height: 47px;
  background: #333;
}
.bitem {
  color: #fff;
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  align-items: center;
}
.bitem i {
  font-size: 16px;
}
.mint-tabbar > .mint-tab-item.is-selected,
.active {
  color: #ff5722;
  background: #333;
}
</style>
