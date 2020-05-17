<template>
  <div class="blog-each">
    <div class="container clearfix">
      <aside class="blog-header">
        <div class="blog-writer">
          <img :src="writerinfo.img" alt />
          <h3>{{ writerinfo.user }}</h3>
        </div>
        <div class="blog-writer-info">
          <div class="blog-writer-list">
            <p>关注</p>
            <p>{{ writerinfo.concernsNum }}</p>
          </div>
          <div class="blog-writer-list">
            <p>粉丝</p>
            <p>{{ writerinfo.fansNum }}</p>
          </div>
          <div class="blog-writer-list">
            <p>获赞</p>
            <p>{{ writerinfo.likesNum }}</p>
          </div>
        </div>
        <el-button>关注</el-button>
        <el-button>私信</el-button>
      </aside>
      <div class="blog-content">
        <h1>{{ bloginfo.title }}</h1>
        <h3>{{ writerinfo.user }}</h3>
        <p v-html="bloginfo.content"></p>
        <div class="blog-content-btn clearfix">
          <div class="blog-btn-box" @click="like">
            <i class="el-icon-star-off"></i>
            点赞{{ bloginfo.blogLikesNum }}
          </div>
          <div class="blog-btn-box">
            浏览量{{ bloginfo.blogLookNum }}
          </div>
        </div>
        <div class="write-comment">
          <img :src="userinfo.img" alt="">
          <span>{{ userinfo.user }}</span>
          <el-input v-model="comment"></el-input>
          <el-button size="small" type="danger" @click="writeComment">评论</el-button>
        </div>
        <div class="blog-comment" v-for="(comment, index) in bloginfo.blogcomments" :key=index>
          <img :src="comment.img" alt="">
          <span>{{ comment.user }}</span>
          <p v-html="comment.comment"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/secondPage/blogEach.less'

export default {
  data() {
    return {
      blogID: 0,
      bloginfo: {
        title: "测试标题1",
        content:
          "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        user: "作者1",
        img: require("@/assets/image/test.jpg"),
        userID: 123,
        blogID: 123,
        blogLikesNum: 12,
        blogLookNum: 12,
        tag: "lalala",
        blogcomments:[{
          user: 123,
          img:require("@/assets/image/test.jpg"),
          comment: "写的很好"
        }]
      },
      writerinfo: {
        user: "作者1",
        img: require("@/assets/image/test.jpg"),
        userID: 123,
        concernsNum: 321,
        fansNum: 456,
        likesNum: 789
      },
      comment: "说说你的看法……",
      userinfo:{
        user: "作者1",
        img: require("@/assets/image/test.jpg"),
        userID: 123,
        concernsNum: 321,
        fansNum: 456,
        likesNum: 789
      }
    };
  },
  methods: {
    like() {
      this.bloginfo.blogLikesNum++;
    },
    writeComment() {
      let newComment = {
        user: this.userinfo.user,
        img: this.userinfo.img,
        comment: this.comment
      }
      this.bloginfo.blogcomments.push(newComment);
    }
  },
  created() {
    this.blogID = this.$route.params.blogID;
  }
};
</script>