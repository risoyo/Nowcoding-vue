import Vue from 'vue';
import { service } from '@/utils/Service.js';
import { get, post, getService, postService } from '@/utils/request.js';
import { getCookie, setCookie, delCookie } from '@/utils/CookieUtils.js';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuex from 'vuex';
import './plugins/element.js';
import Router from 'vue-router';
Vue.config.productionTip = false;
Vue.prototype.$axios = service;
Vue.prototype.get = get;
Vue.prototype.post = post;
Vue.prototype.getService = getService;
Vue.prototype.postService = postService;
Vue.prototype.getCookie = getCookie;
Vue.prototype.setCookie = setCookie;
Vue.prototype.delCookie = delCookie;
Vue.use(Router); // 引入Router
const routerPush = Router.prototype.push;
// 重写Vue-router的push方法，解决本页不能导向本页问题
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

Vue.use(Vuex);
