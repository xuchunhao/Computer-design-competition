<template>
  <div class="carousel">
    <div class="container">
      <el-carousel indicator-position="outside" class="carousel-box">
        <el-carousel-item v-for="item in 3" :key="item">
          <img :src="require('@/assets/image/pic' + item + '.jpg')" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import "@/assets/css/index/carousel.less";

export default {};
</script>