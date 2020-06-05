<template>
  <div class="notice">
    <div class="inner"> 
      <div class="innerbox">
        <h1>系统通知</h1>
        <div class="notice-tpl" v-for="(notice, index) in noticeArray" :key="index">
          {{notice.msg_content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      noticeArray: [
        // {
        //   notice: "您向用户取个名字真难发送了组队邀请"
        // },
        // {
        //   notice: "用户沙雕程序员向您发送了组队邀请"
        // },
      ]
    }
  },
  created() {
    let token = localStorage.getItem('token');
    api
        .getmsg({
          type: "msg",
          data: {
            sender_id: "88888888",
            recever_id: token
          }
        })
        .then(res => {
          console.log(res);
          this.noticeArray = res.data.data;
        });
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/secondPage/notice.less';
</style>