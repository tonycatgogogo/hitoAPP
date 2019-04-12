//入口文件
import Vue from 'vue'

import { Header } from 'mint-ui'

Vue.component(Header.name, Header)

import './lib/mui/css/mui.min.css'

import app from './app.vue'

let vm = new Vue({
  el: '#app',
  data: {},
  render: c => c(app)
});