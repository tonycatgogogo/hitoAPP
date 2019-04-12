//入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import  VueResource from  'vue-resource'

Vue.use(VueResource)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import {Header, Swipe, SwipeItem} from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import router from './router.js'

import app from './app.vue'

let vm = new Vue({
  el: '#app',
  data: {},
  render: c => c(app),
  router
});