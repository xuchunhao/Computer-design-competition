<template>
  <div class="match">
    <div class="container">
      <div class="match-head clearfix">
        <el-input class="match-search" placeholder="搜索你想要的比赛" v-model="match">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
        <router-link to="/secondPage/matchSubmit" tag="el-button" class="match-btn">发布需求</router-link>
      </div>
      <div class="match-box">
        <el-row>
          <el-col v-for="(match, index) in endList" :key="index" :md="12">
            <router-link tag="div" :to="'/secondPage/match/' + match.matchID" class="match-every">
              <h1>{{ match.match }}</h1>
              <p>队长：{{ match.caption }}</p>
              <p>队伍名：{{ match.team }}</p>
              <p>当前人数：{{ match.person }}</p>
              <p>队伍需求：{{ match.require }}</p>
            </router-link>
          </el-col>
        </el-row>
        <el-pagination @current-change="paging" layout="prev, pager, next" :total="total*10"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/secondPage/match.less"

export default {
  data() {
    return {
      match: "",
      matchList: [
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '多媒体设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '多媒体设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '多媒体设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        }
      ],
      tempList: [
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '多媒体设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '多媒体设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '多媒体设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        }
      ],
      endList: [
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '多媒体设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '多媒体设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '多媒体设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        },
        {
          match: '计算机设计大赛',
          caption: 'xxx',
          team: 'xx队',
          person: 1,
          require: '我们需要balalala',
          matchID: 123
        }
      ]
    };
  },
  computed:{
    total() {
      return this.tempList.length/4;
    }
  },
  methods:{
    paging(e){
      let chunk = 4;
      this.endList = this.tempList.slice( (e-1)*chunk, e*chunk);
    },
    search() {
      var that = this;
      this.tempList = this.matchList.filter(function(match){
        return match.match.indexOf(that.match)>-1;
      })
      this.paging(1);
    }
  },
  created() {
    this.paging(1);
  }
};
</script>