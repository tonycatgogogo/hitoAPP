<!--https://avatars3.githubusercontent.com/u/47498037?s=460&v=4-->
<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left"
                         src="https://avatars3.githubusercontent.com/u/47498037?s=460&v=4">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left"
                         src="https://avatars3.githubusercontent.com/u/47498037?s=460&v=4">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left"
                         src="https://avatars3.githubusercontent.com/u/47498037?s=460&v=4">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left"
                         src="https://avatars3.githubusercontent.com/u/47498037?s=460&v=4">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left"
                         src="https://avatars3.githubusercontent.com/u/47498037?s=460&v=4">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left"
                         src="https://avatars3.githubusercontent.com/u/47498037?s=460&v=4">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left"
                         src="https://avatars3.githubusercontent.com/u/47498037?s=460&v=4">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left"
                         src="https://avatars3.githubusercontent.com/u/47498037?s=460&v=4">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left"
                         src="https://avatars3.githubusercontent.com/u/47498037?s=460&v=4">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left"
                         src="https://avatars3.githubusercontent.com/u/47498037?s=460&v=4">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left"
                         src="https://avatars3.githubusercontent.com/u/47498037?s=460&v=4">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left"
                         src="https://avatars3.githubusercontent.com/u/47498037?s=460&v=4">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link to="'/home/newsinfo' + item.id">
                    <img class="mui-media-object mui-pull-left"
                         :src="item.img_url">
                    <div class="mui-media-body">
                        {{ item.title }}
                    </div>
                    <p class='mui-ellipsis'>
                        <span>发表时间：{{ item.add_time | dateFormat }}</span>
                        <span>点击：{{item.click}}次</span>
                    </p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  import {Toast} from "mint-ui"
  export default {
    data () {
      return {
        newsList: []
      }
    },
//    created() {
//      this.getNewsList()
//    },
//    methods: {
//      getNewsList() {
//        this.$http.get("api/getnewslist").then(result => {
//          if (result.body.status === 0) {
//            this.newsList = result.body.message
//          } else {
//            Toast('获取新闻列表失败！')
//          }
//        })
//      }
//    }
  }
</script>

<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px;
            }
            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>