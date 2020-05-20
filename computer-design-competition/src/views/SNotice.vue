<template>
  <div class="notice">
    <div class="inner"> 
      <div class="innerbox">
        <h1>系统通知</h1>
        <div class="notice-tpl" v-for="(notice, index) in noticeArray" :key="index">
          {{notice.notice}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticeArray: [
        {
          notice: "撒娇开发的时间年福建福建三分还是你飞拉萨沙发的"
        },
        {
          notice: "askjfhdasujfhujadhfujadkfdajhf"
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/secondPage/notice.less';
</style>