import Vue from "vue";
//引入vue-router
import VueRouter from "vue-router";

//引入单文件组件
import Home from "../pages/Home.vue";
import Headlines from "../pages/Headlines.vue";
import Product from "../pages/Product.vue";
import Title from "../pages/Headlines/Title.vue";
// 拓展路由
Vue.use(VueRouter);

// 实例化路由
let router = new VueRouter({
  //参数
  routes: [
    {
      path: "/", //重定向：当浏览器url地址为/,自动跳转到/home
      redirect: "/home"
    },
    {
      name: "Home",
      path: "/home",
      component: Home
    },
    {
      name: "Headlines",
      path: "/headlines",
      component: Headlines
    },
    {
      name: "Product",
      path: "/product/:product_id",
      component: Product
    },
    {
      name: "Title",
      path: "/title/:id",
      component: Title
    }
  ]
});

//暴露router
export default router;
