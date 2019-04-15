<template>
    <div class="goodsinfo-container">
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <div class="mui-card">
            <!-- 商品轮播图区域 -->
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="imagesList" :isfull="true"></swiper>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-header">{{ goodsinfo.title }}</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p class="price">
                            市场价：
                            <del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span
                            class="now_price">￥{{ goodsinfo.sell_price }}</span>
                        </p>
                        <p>购买数量：
                            <numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox>
                        </p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                            <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
                            <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
                            <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
                            <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
                            <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
                        </p>
                    </div>
                </div>
                <div class="mui-card">
                    <div class="mui-card-header">商品参数</div>
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                            <p>商品货号：{{ goodsinfo.goods_no }}</p>
                            <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
                            <p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>
                        </div>
                    </div>
                    <div class="mui-card-footer">
                        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import swiper from '../subcomponents/swiper.vue'
  import numbox from '../subcomponents/goodsinfo_numbox.vue'
  export default {
    data() {
      return {
        id: this.$route.params.id,
        imagesList: [
          {id: 1, src: '../images/l1.jpg'},
          {id: 2, src: '../images/l2.jpg'},
          {id: 3, src: '../images/l3.jpg'},
          {id: 4, src: '../images/l4.jpg'},
          {id: 5, src: '../images/l5.jpg'},
          {id: 6, src: '../images/l6.jpg'},
          {id: 7, src: '../images/l7.jpg'},
          {id: 8, src: '../images/l8.jpg'}
        ],
        ballFlag: false,
        selectedCount: 1,
        goodsinfo: {
          id: 1,
          title: 'Shinco/新科 S2300 无线麦克风',
          add_time: Date.now(),
          goods_no: 'SD21312931829',
          stock_quantity: 20,
          market_price: 269,
          sell_price: 199
        }
      }
    },
    created() {
      this.getLunbotu()
      this.getGoodsInfo()
    },
    methods: {
      getLunbotu() {
        this.$http.get("api/getthumimages/" + this.id).then(result => {
          if (result.body.status === 0) {
            this.lunbotu = result.body.message;
          }
        })
      },
      getGoodsInfo() {
        // 获取商品的信息
        this.$http.get("api/goods/getinfo/" + this.id).then(result => {
          if (result.body.status === 0) {
            this.goodsinfo = result.body.message[0];
          }
        })
      },
      goDesc(id) {
        this.$router.push({
          name: 'goodsdesc', params: {id}
        })
      },
      goComment(id) {
        this.$router.push({
          name: 'goodscomment', params: {id}
        })
      },
      addToShopCar() {
        this.ballFlag = !this.ballFlag
      },
      beforeEnter(el) {
        el.style.transform = "translate(0,0)"
      },
      enter(el, done) {
        el.offsetWidth;
        const ballPosition = document.querySelector(".ball").getBoundingClientRect()
        const badgePosition = document.getElementById("badge").getBoundingClientRect()
        const xDist = badgePosition.left - ballPosition.left;
        const yDist = badgePosition.top - ballPosition.top;
        el.style.transform = `translate(${xDist}px, ${yDist}px)`
        el.style.transition = 'all 0.5s cubic-bezier(.4,-0.3,1,.68)'
        done()
      },
      afterEnter(el) {
        this.ballFlag = !this.ballFlag
      },
      getSelectedCount(count) {
        this.selectCount = count;
      }
    },
    components: {
      swiper,
      numbox
    }
  }
</script>
<style lang="scss" scoped>
    .goodsinfo-container {
        overflow: hidden;
        background-color: #eee;
        .now_price {
            color: red;
            font-size: 16px;
            font-weight: bold;
        }

        .mui-card-footer {
            display: block;
            button {
                margin: 15px 0;
            }
        }

        .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 99;
            top: 345px;
            left: 162px;
        }
    }
</style>