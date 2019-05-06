<template>
    <div>
        <!--顶部滑动区域-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates"
                       :key="item.id" @tap="getPhotoListByCateId(item.id)">
                        {{ item.title }}
                    </a>
                    <a class="mui-control-item mui-active" href="#;">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#;">
                        热点
                    </a>
                    <a class="mui-control-item" href="#;">
                        北京
                    </a>
                    <a class="mui-control-item" href="#;">
                        社会
                    </a>
                    <a class="mui-control-item" href="#;">
                        娱乐
                    </a>
                    <a class="mui-control-item" href="#;">
                        科技
                    </a>
                </div>
            </div>

        </div>
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.describe }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
  import mui from "../../lib/mui/js/mui.min"
  export default {
    data() {
      return {
        cates: [],
        list: [{
          id: 50,
          title: '有气质且带可爱的美女组图',
          img_url: 'http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg',
          describe: '有气质且带可爱的美女组图有气质且带可爱的美女组图'
        }, {
          id: 51,
          title: '有气质且带可爱的美女组图',
          img_url: 'http://img0.imgtn.bdimg.com/it/u=1393771583,1541386921&fm=26&gp=0.jpg',
          describe: '有气质且带可爱的美女组图有气质且带可爱的美女组图'
        }, {
          id: 53,
          title: '有气质且带可爱的美女组图',
          img_url: 'http://img1.imgtn.bdimg.com/it/u=282564059,849247250&fm=26&gp=0.jpg',
          describe: '有气质且带可爱的美女组图有气质且带可爱的美女组图'
        }, {
          id: 54,
          title: '有气质且带可爱的美女组图',
          img_url: 'http://img2.imgtn.bdimg.com/it/u=2309772032,1565890452&fm=200&gp=0.jpg',
          describe: '有气质且带可爱的美女组图有气质且带可爱的美女组图'
        }, {
          id: 55,
          title: '有气质且带可爱的美女组图',
          img_url: 'http://img4.imgtn.bdimg.com/it/u=2291382945,2489252111&fm=200&gp=0.jpg',
          describe: '有气质且带可爱的美女组图有气质且带可爱的美女组图'
        }]
      }
    },
    created() {
      this.getAllCategory();
      this.getPhotoListByCateId(0)
    },
    mounted() {
      mui(".mui-scroll-wrapper").scroll({
        deceleration: 0.0005
      });
    },
    methods: {
      getAllCategory() {
        this.$http.get("api/getimgcategory").then(result => {
          if (result.body.status === 0) {
            result.body.message.unshift({title: '全部', id: 0})
            this.cates = result.body.message
          }
        })
      },
      getPhotoListByCateId(cateId) {
        this.$http.get('api/getimages/' + cateId).then(result => {
          if (result.body.status === 0) {
            this.list = result.body.message
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }

    .photo-list {
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
        li {
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;
            img {
                width: 100%;
                vertical-align: middle;
            }
            img[lazy="loading"] {
                width: 40px;
                height: 300px;
                margin: auto;
            }

            .info {
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.4);
                max-height: 84px;
                .info-title {
                    font-size: 14px;
                }
                .info-body {
                    font-size: 13px;
                }
            }
        }
    }
</style>

