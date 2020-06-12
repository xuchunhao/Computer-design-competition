<template>
  <div class="match">
    <div class="container">
      <div class="match-head clearfix">
        <el-input class="match-search" placeholder="搜索你想要的比赛" v-model="match">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
        <router-link to="/secondPage/matchSubmit" tag="el-button" class="match-btn">组建队伍</router-link>
      </div>
      <div class="match-box">
        <el-row>
          <el-col v-for="(match, index) in endList" :key="index" :md="12">
            <router-link tag="div" :to="'/secondPage/match/' + match.team_id" class="match-every">
              <h1>{{ match.demand_name }}</h1>
              <p>队长：{{ match.teamAuthorName }}</p>
              <p>队伍id：{{ match.team_id }}</p>
              <p>队伍名：{{ match.team_name }}</p>
              <p>当前人数：{{ match.team_mem_num }}</p>
              <p>队伍需求：{{ match.team_needs }}</p>
            </router-link>
          </el-col>
        </el-row>
        <el-pagination @current-change="paging" layout="prev, pager, next" :total="total*10"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/secondPage/match.less";
import api from "@/api/index.js";

export default {
  data() {
    return {
      match: "",
      matchList: [],
      tempList: [],
      endList: []
    };
  },
  computed: {
    total() {
      return this.tempList.length / 4;
    }
  },
  methods: {
    paging(e) {
      let chunk = 4;
      this.endList = this.tempList.slice((e - 1) * chunk, e * chunk);
    },
    search() {
      var that = this;
      this.tempList = this.matchList.filter(function(match) {
        return match.demand_name.indexOf(that.match) > -1;
      });
      this.paging(1);
    }
  },
  created() {
    // this.paging(1);
    api
      .demandsList({
        type: "demands"
      })
      .then(res => {
        let newArr = res.data.data.map((match, index, arr) => {
          api
            .infoSearch({
              type: "user_info",
              data: {
                user_id: match.team_leader
              }
            })
            .then(res => {
              match.teamAuthorName = res.data.data.nick_name;
            });
          return match;
        });
        var that = this;
        setTimeout(function() {
          that.matchList = newArr;
          that.tempList = that.matchList;
          that.paging(1);
        }, 500);
        console.log(this.tempList);
        // this.matchList = newArr;
        // this.tempList = this.matchList;
        // this.paging(1);
      });
  }
};
</script>