<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected" v-if="iftabbar" class="bottom" fixed>
      <mt-tab-item
        class="bitem"
        :class="{active:idx===active}"
        v-for="(nav,idx) in this.$store.state.navs"
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
import { Tabbar, TabItem } from "mint-ui";
import axios from 'axios';
import ElementUI from "element-ui";
//引入elementUI的css
import "element-ui/lib/theme-chalk/index.css";
// 把axios设置到Vue的原型对象上，方便在任意组件中使用
Vue.prototype.$axios = axios;
//设置请求头
// axios.defaults.headers.post["Content-type"] = "appliction/x-www-form-urlencoded"
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
      let navs = this.$store.state.navs;
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
.mint-tabbar > .mint-tab-item.is-selected,
.active {
  color: #ff5722;
  background: #333;
}
</style>
