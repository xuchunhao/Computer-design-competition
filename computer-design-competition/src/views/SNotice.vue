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
          notice: "您向用户取个名字真难发送了组队邀请"
        },
        {
          notice: "用户沙雕程序员向您发送了组队邀请"
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/secondPage/notice.less';
</style>