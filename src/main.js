import Vue from 'vue';
import { service } from '@/utils/Service.js';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuex from 'vuex';
import './plugins/element.js';
Vue.config.productionTip = false;
Vue.prototype.$axios = service;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

Vue.use(Vuex);
