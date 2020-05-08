<template>
  <div class="blog-each">
    <div class="container clearfix">
      <aside class="blog-header">
        <div class="blog-writer">
          <img :src="userinfo.img" alt />
          <h3>{{ userinfo.user }}</h3>
        </div>
        <div class="blog-writer-info">
          <div class="blog-writer-list">
            <p>关注</p>
            <p>{{ userinfo.concernsNum }}</p>
          </div>
          <div class="blog-writer-list">
            <p>粉丝</p>
            <p>{{ userinfo.fansNum }}</p>
          </div>
          <div class="blog-writer-list">
            <p>获赞</p>
            <p>{{ userinfo.likesNum }}</p>
          </div>
        </div>
        <el-button>关注</el-button>
        <el-button>私信</el-button>
      </aside>
      <div class="blog-content">
        <h1>{{ bloginfo.title }}</h1>
        <h3>{{ userinfo.user }}</h3>
        <p v-html="bloginfo.content"></p>
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
        tag: "lalala"
      },
      userinfo: {
        user: "作者1",
        img: require("@/assets/image/test.jpg"),
        userID: 123,
        concernsNum: 321,
        fansNum: 456,
        likesNum: 789
      }
    };
  },
  created() {
    this.blogID = this.$route.params.blogID;
  }
};
</script>