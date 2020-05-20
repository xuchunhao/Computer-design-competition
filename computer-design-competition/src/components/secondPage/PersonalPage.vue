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
          :to="'/secondPage/blog/' + blog.blogID"
          class="blog-every"
          v-for="(blog, index) in blogTempList"
          :key="index"
        >
          <h3>{{blog.title}}</h3>
          <div class="blog-summary">{{blog.content}}</div>
          <div class="blog-writer">
            <img :src="blog.img" alt />
            <span>{{blog.user}}</span>
          </div>
        </router-link>
        <el-pagination @current-change="blogPaging" layout="prev, pager, next" :total="blogTotal*10"></el-pagination>
      </div>
      <div class="match-list" v-if="thisTag == 'match'">
        <router-link
          tag="div"
          :to="'/secondPage/match/' + match.matchID"
          class="match-every"
          v-for="(match, index) in matchTempList"
          :key="index"
        >
          <h3>{{ match.match }}</h3>
          <p>队长：{{ match.caption }}</p>
          <p>队伍名：{{ match.team }}</p>
          <p>当前人数：{{ match.person }}</p>
          <p>队伍需求：{{ match.require }}</p>
        </router-link>
        <el-pagination @current-change="matchPaging" layout="prev, pager, next" :total="matchTotal*10"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/secondPage/personalPage.less";

export default {
  data() {
    return {
      thisTag: "blog",
      blogList: [
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: require("@/assets/image/test.jpg"),
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: "",
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: "",
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: "",
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: require("@/assets/image/test.jpg"),
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: "",
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: "",
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: "",
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: "",
          userID: 123,
          blogID: 123,
          tag: "lalala"
        }
      ],
      matchList: [
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        }
      ],
      blogTempList: [
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: require("@/assets/image/test.jpg"),
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: require("@/assets/image/test.jpg"),
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: "",
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: "",
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: "",
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: require("@/assets/image/test.jpg"),
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: "",
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: "",
          userID: 123,
          blogID: 123,
          tag: "lalala"
        },
        {
          title: "测试标题1",
          content:
            "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
          user: "作者1",
          img: "",
          userID: 123,
          blogID: 123,
          tag: "lalala"
        }
      ],
      matchTempList:  [
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        },
        {
          match: "计算机设计大赛",
          caption: "xxx",
          team: "xx队",
          person: 1,
          require: "我们需要balalala",
          matchID: 123
        }
      ]
    };
  },
  computed:{
    blogTotal() {
      return this.blogList.length/4;
    },
    matchTotal() {
      return this.matchList.length/2;
    }
  },
  methods: {
    changeTag(tag) {
      this.thisTag = tag;
    },
    blogPaging(e){
      let chunk = 4;
      this.blogTempList = this.blogList.slice( (e-1)*chunk, e*chunk);
    },
    matchPaging(e){
      let chunk = 2;
      this.matchTempList = this.matchList.slice( (e-1)*chunk, e*chunk);
    }
  },
  created() {
    this.blogPaging(1);
    this.matchPaging(1);
  }
};
</script>