import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import Register from './views/Register/Register.vue';
import Login from './views/Login/Login.vue';
import MyPage from './views/MyPage/MyPage.vue';

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/MyPage',
      name: 'MyPage',
      component: MyPage
    }
  ]
});
