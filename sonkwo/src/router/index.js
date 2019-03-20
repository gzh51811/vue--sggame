import Vue from "vue";
//引入vue-router
import VueRouter from "vue-router";

//引入单文件组件
import Login from '../pages/Login';
import Reg from '../pages/Reg';
import MyPerson from '../pages/MyPerson';
import Info from '../pages/Info';

// 拓展路由
Vue.use(VueRouter);

// 实例化路由
let router = new VueRouter({
  //参数
  routes: [
    {
      path: '/',   //重定向：当浏览器url地址为/,自动跳转到/home
      redirect: '/myperson'
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Reg',
      path: '/reg',
      component: Reg
    },
    {
      name: 'MyPerson',
      path: '/myperson',
      component: MyPerson
    },
    {
      name: 'Info',
      path: '/info',
      component: Info
    }
  ]
});

//暴露router
export default router;
