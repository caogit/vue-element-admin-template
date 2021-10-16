import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui';
import './styles/index.scss';
import './permission.js'; // content permission
import element from '@/utils/element';
import babelPolyfill from 'babel-polyfill';
// import '@babel/polyfill';
import request from './api/request';

Vue.use(Element);
Vue.use(babelPolyfill);

Vue.config.productionTip = false;
Vue.prototype.$element = element;
Vue.prototype.request = request;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
