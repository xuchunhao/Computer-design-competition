<template>
  <div class="match-each">
    <div class="container">
      <div class="match-each-box">
        <h1>{{ matchInfo.demand_name }}</h1>
        <p>队长：{{ team_leader }}</p>
        <p>队伍名：{{ matchInfo.team_name }}</p>
        <p>当前人数：{{ matchInfo.team_mem_num }}</p>
        <p>队伍需求：{{ matchInfo.team_needs }}</p>
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
import api from "@/api/index.js";

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
        matchID: 123,
        team_leader_name: "xxx"
      },
      team_leader:""
    };
  },
  created() {
    this.matchID = this.$route.params.matchID;
    api.demandid({
      type:'demand',
      data: {
        demand_id: this.matchID
      }
    }).then(res => {
      this.matchInfo = res.data.data[0];
      api.infoSearch({
        type: 'user_info',
        data: {
          user_id: this.matchInfo.team_leader
        }
      }).then(res => {
        this.team_leader = res.data.data.nick_name;
      })
    })
  }
};
</script>

<style lang="less" scoped>
  @import '~@/assets/css/secondPage/matchEach.less';
</style>