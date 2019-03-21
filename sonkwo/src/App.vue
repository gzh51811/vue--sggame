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
$store
<script>
import Vue from "vue";
import { Tabbar, TabItem } from "mint-ui";
import axios from 'axios';
// 把axios设置到Vue的原型对象上，方便在任意组件中使用
Vue.prototype.$axios = axios;
//设置请求头
axios.defaults.headers.post["Content-type"] = "appliction/x-www-form-urlencoded"

export default {
  name: "app",
  data() {
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
      ]
    };
  },
  components:{
  	Tabbar,
  	TabItem
  },
  methods: {
    goto(nav, idx) {
      this.$router.push({ name: nav.name });
      this.active = idx;
      // console.log("tag", nav);
    },
    checkname() {
      let name = this.$route.name;
      console.log(name);
      let navs = this.navs;
      console.log(navs);
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
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: space-around;
  background: #333;
}
.bitem {
  color: #fff;
}
.is-selected {
  color: #ff0000;
}
</style>
