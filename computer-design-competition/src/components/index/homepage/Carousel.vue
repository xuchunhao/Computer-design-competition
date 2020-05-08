<template>
  <div class="carousel">
    <div class="container">
      <el-carousel indicator-position="outside" class="carousel-box">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="@/assets/image/test.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import "@/assets/css/index/carousel.less";

export default {};
</script>