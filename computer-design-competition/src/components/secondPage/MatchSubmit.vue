<template>
  <div class="match-submit">
    <div class="container match-submit-box">
      <h1>发布需求</h1>
      <p>比赛：<el-input v-model="match"></el-input></p>
      <p>队长：<el-input v-model="caption"></el-input></p>
      <p>队伍名：<el-input v-model="team"></el-input></p>
      <p>当前人数：<el-input v-model="person"></el-input></p>
      <p>队伍需求：<el-input v-model="teamRequire"></el-input></p>
      <div class="match-submit-btn">
        <el-button>提交</el-button>
        <router-link to="/secondPage/match" tag="el-button">返回大厅</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      match:"",
      caption: "",
      team: "",
      person: "",
      teamRequire: ""
    }
  }
};
</script>

<style lang="less" scoped>
  @import '~@/assets/css/secondPage/matchSubmit.less';
</style>