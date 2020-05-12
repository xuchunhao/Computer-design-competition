<template>
  <div class="homepage">
    <navigation/>
    <carousel/>
  </div>
</template>

<script>
import Navigation from '@/components/index/homepage/Navigation';
import Carousel from '@/components/index/homepage/Carousel'

export default {
  components:{
    Navigation,
    Carousel
  }
}
</script>

<style lang="less">
@import '~@/assets/css/index/homepage.less';
</style>