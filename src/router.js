import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import Register from './views/Register/Register.vue';
import Login from './views/Login/Login.vue';
import MyPage from './views/MyPage/MyPage.vue';
import TestPage from './views/TestPage/TestPage.vue';
import { getCookie } from '@/utils/CookieUtils.js';

Vue.use(Router);

const router = new Router({
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
      component: MyPage,
      meta: {
        requireAuth: true // 设置规则，若为true会被下面的router.beforeEach捕获进行token验证
      }
    },
    {
      path: '/TestPage',
      name: 'TestPage',
      component: TestPage
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const token = getCookie('token'); // 获取token
    // 判断cookie中的token是否存在（包括是否失效）
    if (token) {
      // token存在时，不进行拦截
      next();
    } else {
      // token为null时，重定向到登陆页面
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});
export default router;
