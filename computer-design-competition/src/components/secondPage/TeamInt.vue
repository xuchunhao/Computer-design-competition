<template>
  <div class="team-int">
    <div class="container match-submit-box">
      <h1>发布意向</h1>
      <div class="match-submit-list">
        <p>个人介绍：</p>
        <el-input v-model="introduct"></el-input>
      </div>
      <div class="match-submit-list">
        <p>组队意向：</p>
        <el-input type="textarea" :rows="4" v-model="intention" placeholder="输入你想要加入怎样的队伍"></el-input>
      </div>
      <div class="match-submit-btn">
        <el-button @click="releaseTeam">提交</el-button>
        <router-link to="/secondPage/manage" tag="el-button">返回大厅</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";

export default {
  data() {
    return {
      intention: "",
      introduct: "",
    };
  },
  methods: {
    releaseTeam() {
      let token = localStorage.getItem("token");
      api
        .teamint({
          type: "teamint",
          data: {
            user_id: token,
            introduct: this.introduct,
            intention: this.intention,
            requirement: ""
          }
        })
        .then(res => {
          if (res.data.status == 0) {
            this.$message({
              message: "发布成功",
              type: "success",
              offset: 100
            });
          } else {
            this.$message({
              message: "发布失败",
              type: "error",
              offset: 100
            });
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/secondPage/teamInt.less";
</style>