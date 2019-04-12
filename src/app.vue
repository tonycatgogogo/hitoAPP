<template>
    <div class="container">
        <div>
            <!--顶部通栏-->
            <mt-header fixed title="Hito商城" class="header"></mt-header>
            <!--中间预留区域-->
            <router-view></router-view>
            <!--底部tabbar-->
            <nav class="mui-bar mui-bar-tab">
                <router-link class="mui-tab-item" to="/home">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="mui-tab-item" to="/member">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">会员</span>
                </router-link>
                <router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
                    <span class="mui-tab-label">购物车</span>
                </router-link>
                <router-link class="mui-tab-item" to="/search">
                    <span class="mui-icon mui-icon-search"></span>
                    <span class="mui-tab-label">搜索</span>
                </router-link>
            </nav>
        </div>
    </div>

</template>
<script>

</script>
<style lang="scss" scoped>
    .container {
        position: relative;
        overflow-x: hidden;
        .header {
            position: fixed;
            top: 0;
            left: 0;
            height: 40px;
            width: 100%;
            z-index: 999;
        }
    }
</style>
		