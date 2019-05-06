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
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/Goods/GoodsList.vue'
import GoodsInfo from './components/Goods/GoodsInfo.vue'
import GoodsDesc from './components/Goods/GoodsDesc.vue'
import GoodsComment from './components/Goods/GoodsComment.vue'
//创建路由对象
let router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeContainer},
    {path: '/cart', component: CartContainer},
    {path: '/search', component: SearchContainer},
    {path: '/member', component: MemberContainer},
    {path: '/home/newslist', component: NewsList},
    {path: '/home/newsinfo/:id', component: NewsInfo},
    {path: '/home/photolist', component: PhotoList},
    {path: '/home/photoinfo/:id', component: PhotoInfo},
    {path: '/home/goodslist', component: GoodsList},
    {path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo'},
    {path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc'},
    {path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment'},
  ],
  linkActiveClass: 'mui-active'
});

export default router