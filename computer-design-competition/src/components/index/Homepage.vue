<template>
  <div class="homepage">
    <navigation/>
    <carousel/>
  </div>
</template>

<script>
import '@/assets/css/index/homepage.less';
import Navigation from '@/components/index/homepage/Navigation';
import Carousel from '@/components/index/homepage/Carousel'

export default {
  components:{
    Navigation,
    Carousel
  }
}
</script>