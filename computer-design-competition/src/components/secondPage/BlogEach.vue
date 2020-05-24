<template>
  <div class="blog-each">
    <div class="container clearfix">
      <aside class="blog-header">
        <div class="blog-writer">
          <img :src="writerimg" alt />
          <h3>{{ writerinfo.nick_name }}</h3>
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
        <h1>{{ bloginfo.blog_name }}</h1>
        <h3>{{ writerinfo.user }}</h3>
        <p v-html="bloginfo.blog_text"></p>
        <div class="blog-content-btn clearfix">
          <div class="blog-btn-box" @click="like">
            <i class="el-icon-star-off"></i>
            点赞{{ bloginfo.blogLikesNum }}
          </div>
          <div class="blog-btn-box">浏览量{{ bloginfo.blogLookNum }}</div>
        </div>
        <div class="write-comment">
          <img :src="userinfo.img" alt />
          <!-- <span>{{ userinfo.nick_name }}</span> -->
          <el-input v-model="comment"></el-input>
          <el-button size="small" type="danger" @click="writeComment">评论</el-button>
        </div>
        <div class="blog-comment" v-for="(comment, index) in blogcomments" :key="index">
          <img :src="comment.img" alt />
          <span>{{ comment.commentAuthorName }}</span>
          <p>{{ comment.cmt_content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/secondPage/blogEach.less";
import api from "@/api/index.js";

export default {
  data() {
    return {
      writerimg: "",
      blogID: 0,
      bloginfo: {
        title: "测试标题1",
        content:
          "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        user: "作者1",
        userID: 123,
        blogID: 123,
        blogLikesNum: 12,
        blogLookNum: 12,
        tag: "lalala",
        blogcomments: [
          {
            user: 123,
            img: require("@/assets/image/test.jpg"),
            comment: "写的很好"
          }
        ]
      },
      blogcomments: [],
      writerinfo: {
        user: "作者1",
        img: require("@/assets/image/test.jpg"),
        userID: 123,
        concernsNum: 321,
        fansNum: 456,
        likesNum: 789
      },
      comment: "说说你的看法……",
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
  methods: {
    like() {
      this.bloginfo.blogLikesNum++;
    },
    writeComment() {
      // let newComment = {
      //   user: this.userinfo.user,
      //   img: this.userinfo.img,
      //   comment: this.comment
      // };
      // this.bloginfo.blogcomments.push(newComment);
      let token = localStorage.getItem("token");
      api
        .blogcmt({
          type: "blog_cmt",
          data: {
            blog_id: this.blogID,
            cmter_id: token,
            content: this.comment
          }
        })
        .then(res => {
          console.log(res);
          this.$router.go(0);
        });
    }
  },
  created() {
    this.blogID = this.$route.params.blogID;
    api
      .blogid({
        type: "blog",
        data: {
          blog_id: this.blogID
        }
      })
      .then(res => {
        this.bloginfo = res.data.data[0];
        api
          .infoSearch({
            type: "user_info",
            data: {
              user_id: this.bloginfo.blog_author
            }
          })
          .then(res => {
            this.writerinfo = res.data.data;
          });
        api
          .loadimg({
            type: "img",
            data: {
              user_id: this.bloginfo.blog_author
            }
          })
          .then(res => {
            this.writerimg = res.data.data.base64;
          });
      });

    api
      .getcmt({
        type: "blog_cmt",
        data: {
          blog_id: this.blogID
        }
      })
      .then(res => {
        console.log(res);
        let newArr = res.data.map((comment, index, arr) => {
          api
            .infoSearch({
              type: "user_info",
              data: {
                user_id: comment.cmter
              }
            })
            .then(res => {
              comment.commentAuthorName = res.data.data.nick_name;
            });
          api
            .loadimg({
              type: "img",
              data: {
                user_id: comment.cmter
              }
            })
            .then(res => {
              comment.img = res.data.data.base64;
            });
          return comment;
        });
        var that = this;
        setTimeout(function() {
          that.blogcomments = newArr;
          // that.tempArray = that.blogArray;
          // that.paging(1);
        }, 500);
      });

    let token = localStorage.getItem("token");
    api
      .infoSearch({
        type: "user_info",
        data: {
          user_id: token
        }
      })
      .then(res => {
        this.userinfo = res.data.data;
      });
    api
      .loadimg({
        type: "img",
        data: {
          user_id: token
        }
      })
      .then(res => {
        this.userinfo.img = res.data.data.base64;
      });
  }
};
</script>