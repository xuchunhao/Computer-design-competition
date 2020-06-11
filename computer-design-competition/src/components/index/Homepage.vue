<template>
  <div class="homepage">
    <home-nav/>
    <navigation/>
    <!-- <carousel/> -->
  </div>
</template>

<script>
import HomeNav from '@/components/index/homepage/HomeNav';
import Navigation from '@/components/index/homepage/Navigation';
import Carousel from '@/components/index/homepage/Carousel'

export default {
  components:{
    HomeNav,
    Navigation,
    Carousel
  }
}
</script>

<style lang="less">
@import '~@/assets/css/index/homepage.less';
</style>