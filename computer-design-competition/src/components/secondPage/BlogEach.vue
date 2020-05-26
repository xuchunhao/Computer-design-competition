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
            <p>{{ writerinfo.follower_num }}</p>
          </div>
          <div class="blog-writer-list">
            <p>粉丝</p>
            <p>{{ writerinfo.followed_num }}</p>
          </div>
          <div class="blog-writer-list">
            <p>获赞</p>
            <p>{{ star_num }}</p>
          </div>
        </div>
        <template v-if="follow == 'unfollowed'"><el-button type="danger" plain @click="followed">关注</el-button></template>
        <template v-if="follow == 'followed'"><el-button type="danger" @click="unfollowed">已关注</el-button></template>
        <el-button type="danger" plain>私信</el-button>
      </aside>
      <div class="blog-content">
        <h1>{{ bloginfo.blog_name }}</h1>
        <h3>{{ writerinfo.user }}</h3>
        <p v-html="bloginfo.blog_text"></p>
        <div class="blog-content-btn clearfix">
          <div class="blog-btn-box" @click="like">
            <i class="el-icon-star-off"></i>
            点赞{{ star_num }}
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
      star_num: 0,
      follow: "unfollowed",
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
    followed() {
      let token = localStorage.getItem('token');
      api.follow({
        type: 'follow',
        data: {
          follower_id: token,
          followed_id: this.bloginfo.blog_author
        }
      }).then(res => {
        if(res.data.status == 0){
          this.$router.go(0);
          // this.follow = 'unfollowed'
        }
      })
    },
    unfollowed() {
      let token = localStorage.getItem('token');
      api.follow({
        type: 'unfollow',
        data: {
          follower_id: token,
          followed_id: this.bloginfo.blog_author
        }
      }).then(res => {
        if(res.data.status == 0){
          this.$router.go(0);
          // this.follow = 'followed'
        }
      })
    },
    like() {
      api
        .star({
          type: "star",
          data: {
            blog_id: this.blogID
          }
        })
        .then(res => {
          this.star_num++;
        });
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
    let token = localStorage.getItem("token");
    api
      .blogid({
        type: "blog",
        data: {
          blog_id: this.blogID
        }
      })
      .then(res => {
        console.log(res);
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
        api
          .getinfo({
            type: "followed_num",
            data: {
              user_id: this.bloginfo.blog_author
            }
          })
          .then(res => {
            this.writerinfo.followed_num = res.data.data.num;
          });
        api
          .getinfo({
            type: "follower_num",
            data: {
              user_id: this.bloginfo.blog_author
            }
          })
          .then(res => {
            this.writerinfo.follower_num = res.data.data.num;
          });
        api
          .getinfo({
            type: "star_num",
            data: {
              user_id: this.bloginfo.blog_author
            }
          })
          .then(res => {
            this.star_num = res.data.data.num;
          });

        api
          .getFollow({
            type: "followinfo",
            data: {
              follower_id: token,
              followed_id: this.bloginfo.blog_author
            }
          })
          .then(res => {
            console.log(res)
            this.follow = res.data.data.status;
            console.log(this.follow)
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
        if(res.data.length > 0){
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
        }
      });

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