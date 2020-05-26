<template>
  <div class="personal-page">
    <div class="container">
      <div class="tags">
        <span @click="changeTag('blog')" :class="{ active: thisTag == 'blog' }">博客</span>
        <span @click="changeTag('match')" :class="{ active: thisTag == 'match' }">比赛</span>
      </div>
      <div class="blog-list" v-if="thisTag == 'blog'">
        <router-link
          tag="div"
          :to="'/secondPage/blog/' + blog.blog_id"
          class="blog-every"
          v-for="(blog, index) in blogTempList"
          :key="index"
        >
          <h3>{{blog.blog_name}}</h3>
          <div class="blog-summary" v-html="blog.blog_text"></div>
          <div class="blog-writer">
            <img :src="blog.img" alt />
            <span>{{blog.blogAuthorName}}</span>
          </div>
        </router-link>
        <el-pagination
          @current-change="blogPaging"
          layout="prev, pager, next"
          :total="blogTotal*10"
        ></el-pagination>
      </div>
      <div class="match-list" v-if="thisTag == 'match'">
        <router-link
          tag="div"
          :to="'/secondPage/match/' + match.team_id"
          class="match-every"
          v-for="(match, index) in matchTempList"
          :key="index"
        >
          <h3>{{ match.demand_name }}</h3>
          <p>队长：{{ match.teamAuthorName }}</p>
          <p>队伍id：{{ match.team_id }}</p>
          <p>队伍名：{{ match.team_name }}</p>
          <p>当前人数：{{ match.team_mem_num }}</p>
          <p>队伍需求：{{ match.team_needs }}</p>
        </router-link>
        <el-pagination
          @current-change="matchPaging"
          layout="prev, pager, next"
          :total="matchTotal*10"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/secondPage/personalPage.less";
import api from "@/api/index.js";

export default {
  data() {
    return {
      thisTag: "blog",
      blogList: [],
      matchList: [],
      blogTempList: [],
      matchTempList: []
    };
  },
  computed: {
    blogTotal() {
      return this.blogList.length / 4;
    },
    matchTotal() {
      return this.matchList.length / 2;
    }
  },
  methods: {
    changeTag(tag) {
      this.thisTag = tag;
    },
    blogPaging(e) {
      let chunk = 4;
      this.blogTempList = this.blogList.slice((e - 1) * chunk, e * chunk);
    },
    matchPaging(e) {
      let chunk = 2;
      this.matchTempList = this.matchList.slice((e - 1) * chunk, e * chunk);
    }
  },
  created() {
    // this.matchPaging(1);
    let token = localStorage.getItem("token");
    api
      .blogsinfo({
        type: "blog",
        data: {
          user_id: token
        }
      })
      .then(res => {
        console.log(res);
        // this.blogList = res.data.data;
        // this.blogPaging(1);
        let newArr = res.data.data.map((blog, index, arr) => {
          api
            .infoSearch({
              type: "user_info",
              data: {
                user_id: blog.blog_author
              }
            })
            .then(res => {
              blog.blogAuthorName = res.data.data.nick_name;
            });
          api
            .loadimg({
              type: "img",
              data: {
                user_id: blog.blog_author
              }
            })
            .then(res => {
              blog.img = res.data.data.base64;
            });
          return blog;
        });
        var that = this;
        setTimeout(function() {
          that.blogList = newArr;
          // that.tempArray = that.blogArray;
          that.blogPaging(1);
        }, 500);
      });

    api
      .demandsinfo({
        type: "demand",
        data: {
          user_id: token
        }
      })
      .then(res => {
        console.log(res);
        this.matchList = res.data.data;
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
          that.matchPaging(1);
        }, 500);
      });
  }
};
</script>