// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.prototype.$ajax = axios

import vuex from 'vuex'
Vue.use(vuex);
import store from './store' //引入store


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 页面自适应
import './assets/js/font.min.js'

// 初始css
import './assets/css/rest.css'
Vue.config.productionTip = false


import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store, //使用store
    components: { App },
    template: '<App/>'
})