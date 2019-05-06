<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">大标题</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{ Date.now() | dateFormat }}</span>
            <span>点击：10次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content">
            一篇文章
            基本概念
            Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。本章详细介绍 Generator 函数的语法和 API，它的异步编程应用请看《Generator 函数的异步应用》一章。

            Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。

            执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

            形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
            上面代码定义了一个 Generator 函数helloWorldGenerator，它内部有两个yield表达式（hello和world），即该函数有三个状态：hello，world 和 return 语句（结束执行）。

            然后，Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。

            下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
        </div>

        <!--<h3 class="title">{{ newsinfo.title }}</h3>-->
        <!-- 子标题 -->
        <!--<p class="subtitle">-->
        <!--<span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>-->
        <!--<span>点击：{{ newsinfo.click }}次</span>-->
        <!--</p>-->

        <!--<hr>-->

        <!--&lt;!&ndash; 内容区域 &ndash;&gt;-->
        <!--<div class="content" v-html="newsinfo.content"></div>-->

        <!-- 评论子组件区域 -->
        <comment-box></comment-box>
    </div>
</template>

<script>
  // 1. 导入 评论子组件
  import comment from "../subcomponents/comment.vue";

  export default {
//    data() {
//      return {
//        id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
//      };
//    },
    created() {
//      this.getNewsInfo();
    },
    methods: {
//      getNewsInfo() {
//        // 获取新闻详情
//        this.$http.get("api/getnew/" + this.id).then(result => {
//          if (result.body.status === 0) {
//            this.newsinfo = result.body.message[0];
//          } else {
//            Toast("获取新闻失败！");
//          }
//        });
//      }
    },
    components: {
      // 用来注册子组件的节点
      "comment-box": comment
    }
  };
</script>

<style lang="scss" scoped>
    .newsinfo-container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content {
            font-size: 12px;
            img {
                width: 100%;
            }
        }
    }
</style>