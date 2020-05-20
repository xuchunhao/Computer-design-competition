<template>
  <div class="match-each">
    <div class="container">
      <div class="match-each-box">
        <h1>{{ matchInfo.match }}</h1>
        <p>队长：{{ matchInfo.caption }}</p>
        <p>队伍名：{{ matchInfo.team }}</p>
        <p>当前人数：{{ matchInfo.person }}</p>
        <p>队伍需求：{{ matchInfo.require }}</p>
        <div class="match-each-btn">
          <el-button>私聊</el-button>
          <el-button>加入</el-button>
          <router-link to="/secondPage/match" tag="el-button">返回大厅</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      matchID: 0,
      matchInfo: {
        match: "计算机设计大赛",
        caption: "xxx",
        team: "xx队",
        person: 1,
        require: "我们需要balalala",
        matchID: 123
      }
    };
  },
  created() {
    this.matchID = this.$route.params.matchID;
    console.log(this.matchID);
  }
};
</script>

<style lang="less" scoped>
  @import '~@/assets/css/secondPage/matchEach.less';
</style>