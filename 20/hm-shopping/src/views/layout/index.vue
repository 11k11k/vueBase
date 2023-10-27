<template>
    <div>
        <router-view></router-view>
        <van-tabbar route v-model="active" active-color="skyblue" inactive-color="#000">
            <van-tabbar-item to="/home" icon="wap-home-o" info="5">首页</van-tabbar-item>
            <van-tabbar-item to="/category" icon="search">分类页</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="location-o">购物车</van-tabbar-item>

            <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style></style>
