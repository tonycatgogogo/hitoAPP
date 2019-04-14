//入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import moment from 'moment'

Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:MM:SS') {
  return moment(dataStr).format(pattern)
})

import  VueResource from  'vue-resource'

Vue.use(VueResource)

//设置请求根路径

Vue.http.options.root = 'http://vue.studyit.io'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import {Header, Swipe, SwipeItem, Button} from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

import router from './router.js'

import app from './app.vue'

let vm = new Vue({
  el: '#app',
  data: {},
  render: c => c(app),
  router
});