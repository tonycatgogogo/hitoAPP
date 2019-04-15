<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
            <img :src="item.src" alt="..." :class="{'full': isfull}">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
  export default{
    props: ['lunbotuList', 'isfull']
  }
</script>
<style lang="scss" scoped="">
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