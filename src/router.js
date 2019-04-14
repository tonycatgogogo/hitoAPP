/**
 * Created by USER on 2019/4/12.
 */

import  VueRouter from 'vue-router'

//导入底部tabbar对应路由组件

import HomeContainer from './components/tabbar/homeComponent.vue'
import CartContainer from './components/tabbar/cartCompotent.vue'
import SearchContainer from './components/tabbar/searchCompotent.vue'
import MemberContainer from './components/tabbar/memberCompotent.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
//创建路由对象
let router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeContainer},
    {path: '/cart', component: CartContainer},
    {path: '/search', component: SearchContainer},
    {path: '/member', component: MemberContainer},
    {path: '/home/newslist', component: NewsList},
    {path: '/member/newsinfo/:id', component: NewsInfo},
  ],
  linkActiveClass: 'mui-active'
});

export default router