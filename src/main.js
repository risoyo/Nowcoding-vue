import Vue from 'vue';
import { service } from '@/utils/Service.js';
import { get, post, getService, postService } from '@/utils/request.js';
import { getCookie, setCookie, delCookie } from '@/utils/CookieUtils.js';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuex from 'vuex';
import './plugins/element.js';
Vue.config.productionTip = false;
Vue.prototype.$axios = service;
Vue.prototype.get = get;
Vue.prototype.post = post;
Vue.prototype.getService = getService;
Vue.prototype.postService = postService;
Vue.prototype.getCookie = getCookie;
Vue.prototype.setCookie = setCookie;
Vue.prototype.delCookie = delCookie;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

Vue.use(Vuex);
