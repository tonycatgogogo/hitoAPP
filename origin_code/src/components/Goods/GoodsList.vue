<template>
    <div class="good-list">
        <div class="good-item" @click="goDetail(1)">
            <img
                src="https://img11.360buyimg.com/n1/s450x450_jfs/t1/5479/8/3546/70556/5b997c0cE40f64978/6540f1c2a6090257.jpg"
                alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥899</span>
                    <span class="old">¥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="good-item" @click="goDetail(2)">
            <img
                src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/33346/26/1398/278371/5ca57160Ea53e0265/38d2d8705211b798.jpg"
                alt="">
            <h1 class="title">尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥899</span>
                    <span class="old">¥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="good-item" @click="goDetail(3)">
            <img
                src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/33346/26/1398/278371/5ca57160Ea53e0265/38d2d8705211b798.jpg"
                alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥899</span>
                    <span class="old">¥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="good-item" @click="goDetail(4)">
            <img
                src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/33346/26/1398/278371/5ca57160Ea53e0265/38d2d8705211b798.jpg"
                alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥899</span>
                    <span class="old">¥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="good-item" @click="goDetail(5)">
            <img
                src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/33346/26/1398/278371/5ca57160Ea53e0265/38d2d8705211b798.jpg"
                alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥899</span>
                    <span class="old">¥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="good-item" @click="goDetail(1)">
            <img
                src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/33346/26/1398/278371/5ca57160Ea53e0265/38d2d8705211b798.jpg"
                alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥899</span>
                    <span class="old">¥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="good-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥{{ item.sell_price }}</span>
                    <span class="old">¥{{ item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
  import {Toast} from 'mint-ui'
  export default {
    data() {
      return {
        pageindex: 1,
        goodslist: []
      }
    },
    created() {
      this.getGoodsList()
    },
    methods: {
      getGoodsList() {
        this.$http.get('api/getgoods?pageindex=' + this.pageindex).then(result => {
          if (result.body.status === 0) {
            this.goodslist = this.goodslist.concat(this.result.body.message)
          } else {
            return Toast('想加载，但是请求不到数据')
          }
        }).then(err => {
          Toast('想加载，但是请求不到数据' + err.message)
        })
      },
      getMore() {
        this.pageindex++
        this.getGoodsList()
        Toast('想加载，但是请求不到数据')
      },
      goDetail(id) {
        this.$router.push({name: 'goodsinfo', params: {id}})
      }
    }

  }
</script>

<style lang="scss" scoped>
    .good-list {
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;

        .good-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #999;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 264px;
            img {
                width: 100%;
            }
            .title {
                font-size: 14px;
            }
            .info {
                background-color: rgba(255, 255, 0, 0.3);
                p {
                    margin: 0;
                    padding: 5px;
                }
                .price {
                    .now {
                        color: red;
                        font-weight: 700;
                        font-size: 16px;
                    }
                    .old {
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }
</style>
