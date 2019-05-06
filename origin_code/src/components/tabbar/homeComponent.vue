<template>
    <div class="banner">
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imagesList" :key="item.id">
                <img :src='item.src' alt="..." class="full">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                <img src="../../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  export default {
    data() {
      return {
        imagesList: [
          {id: 1, 'src': require('../../../images/l1.jpg')},
          {id: 2, 'src': require('../../../images/l2.jpg')},
          {id: 3, 'src': require('../../../images/l3.jpg')},
          {id: 4, 'src': require('../../../images/l4.jpg')},
          {id: 5, 'src': require('../../../images/l5.jpg')},
          {id: 6, 'src': require('../../../images/l6.jpg')},
          {id: 7, 'src': require('../../../images/l7.jpg')},
          {id: 8, 'src': require('../../../images/l8.jpg')}
        ]
      }
    },
    created(){
    },
    methods: {
//      getImageList(){
//        this.$http.get("api/getlunbo").then(result =>{
//          if(result.body.status === 0) {
//            this.imagesList = result.body.message
//          }else {
//            Toast("加载失败")
//          }
//        })
//      }
    }
  }
</script>

<style lang="scss" scoped>
    .mui-grid-view.mui-grid-9 {
        background: #fff;
        border: none;
        img {
            width: 60px;
            height: 60px;
        }
        .mui-media-body {
            font-size: 13px;
        }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none;
    }
    .mint-swipe {
        height: 155.55px;
        .mint-swipe-item {
            display: block;
            img {
                display: block;
            }
        }
    }

    .full {
        width: 100%;
    }
</style>