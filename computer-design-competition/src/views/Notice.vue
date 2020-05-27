<template>
  <div class="notice">
    <div class="inner"> 
      <div class="innerbox">
        <h1>公告</h1>
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
          notice: "欢迎来到智能化组队系统，您可以在这里寻找志同道合的人组成团队"
        },
        {
          notice: "计算机设计大赛即将举行，有兴趣的同学可以组队参加"
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/secondPage/notice.less';
</style>