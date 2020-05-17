<template>
  <div class="second-page">
    <second-page-nav></second-page-nav>
    <router-view style="padding-top: 62px"></router-view>
  </div>
</template>

<script>
import secondPageNav from '@/components/secondPage/SecondPageNav';

export default {
  components: {
    secondPageNav,

  }
}
</script>

<style lang="less" scoped>
  .second-page{
    background: linear-gradient(0deg,rgba(208,231,251,.7), rgba(152,193,236) 100%);
    min-height: 100%;
    // background-attachment: fixed;
  }
</style>