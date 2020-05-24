<template>
  <div class="match-submit">
    <div class="container match-submit-box">
      <h1>发布需求</h1>
      <div class="match-submit-list">
        <p>比赛：</p>
        <el-input v-model="match"></el-input>
      </div>
      <div class="match-submit-list">
        <p>队伍名：</p>
        <el-input v-model="team"></el-input>
      </div>
      <div class="match-submit-list">
        <p>当前人数：</p>
        <el-input v-model="person"></el-input>
      </div>
      <div class="match-submit-list">
        <p>队伍需求：</p>
        <el-input v-model="teamRequire"></el-input>
      </div>
      <div class="match-submit-btn">
        <el-button @click="releaseMatch">提交</el-button>
        <router-link to="/secondPage/match" tag="el-button">返回大厅</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";

export default {
  data() {
    return {
      match: "",
      caption: "",
      team: "",
      person: "",
      teamRequire: ""
    };
  },
  methods: {
    releaseMatch() {
      let token = localStorage.getItem("token");
      api.demandsRelease({
        type: 'demand',
        data: {
          demand_name: this.match,
          leader: token,
          team_name: this.team,
          mem_num: this.person,
          content: this.teamRequire
        }
      }).then(res => {
        if(res.data.status == 0){
          this.$message({
            message: "发布成功",
            type: "success",
            offset: 100
          });
        }else{
          this.$message({
            message: "发布失败",
            type: "error",
            offset: 100
          });
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/secondPage/matchSubmit.less";
</style>