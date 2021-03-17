import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import VueLazyLoad from 'vue-lazyload'
// import VueCookie from 'vue-cookie'
// import { Message } from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import ElementUI from 'element-ui';
import _api from './api/api.js'
import VueAnime from 'vue-animejs';
import {anime} from 'vue-animejs';

import './assets/scss/index.scss'
import 'swiper/swiper-bundle.css'
// import 'font-awesome/css/font-awesome.css'
// import '../src/assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'jquery'

Vue.use(Vuex)
// Vue.use(VueCookie);
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.use(VueAnime);
Vue.use({anime});

Vue.prototype.$axios = axios;
// Vue.prototype.$message = Message;
// Vue.config.productionTip = false;
Vue.prototype.$_api = _api;

Vue.use(VueLazyLoad, {
  preload: 1,
  error: require('./assets/img/error.png'),
  loading: require('./assets/img/loading.gif'),
  attempt: 1
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})