<template>
  <div class="blog">
    <div class="container">
      <div class="blog-box clearfix">
        <ul class="tags">
          <li @click="changeTag('all')" :class="{active: indexTag == 'all'}">全部</li>
          <li @click="changeTag('recmd')" :class="{active: indexTag == 'recmd'}">推荐</li>
          <li @click="changeTag('computer')" :class="{active: indexTag == 'computer'}">计算机</li>
          <li @click="changeTag('math')" :class="{active: indexTag == 'math'}">数学</li>
          <li @click="changeTag('bigdata')" :class="{active: indexTag == 'bigdata'}">大数据</li>
          <li @click="changeTag('AI')" :class="{active: indexTag == 'AI'}">人工智能</li>
          <li @click="changeTag('blockchain')" :class="{active: indexTag == 'blockchain'}">区块链</li>
          <li @click="changeTag('5G')" :class="{active: indexTag == '5G'}">5G</li>
          <li @click="changeTag('game')" :class="{active: indexTag == 'game'}">游戏开发</li>
          <li @click="changeTag('other')" :class="{active: indexTag == 'other'}">其他</li>
        </ul>
        <div class="blog-list">
          <router-link to="/secondPage/blogWrite" class="writebtn" tag="el-button">写博客</router-link>
          <router-link
            tag="div"
            :to="'/secondPage/blog/' + blog.blog_id"
            class="blog-every"
            v-for="(blog, index) in endArray"
            :key="index"
          >
            <h3>{{blog.blog_name}}</h3>
            <div class="blog-summary" v-html="blog.blog_text"></div>
            <div class="blog-writer">
              <img :src="blog.img" alt />
              <span>{{blog.blogAuthorName}}</span>
            </div>
          </router-link>
          <el-pagination @current-change="paging" layout="prev, pager, next" :total="total*10"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/secondPage/blog.less";
import api from "@/api/index.js";

export default {
  data() {
    return {
      // total: 1,
      indexTag: "all",
      blogArray: [
        // {
        //   title: "测试标题1",
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: require("@/assets/image/test.jpg"),
        //   userID: 123,
        //   blogID: 123,
        //   tag: "recommand"
        // },
        // {
        //   title: "测试标题1",
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: "",
        //   userID: 123,
        //   blogID: 123,
        //   tag: "computer"
        // },
        // {
        //   title: "测试标题1",
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: "",
        //   userID: 123,
        //   blogID: 123,
        //   tag: "math"
        // },
        // {
        //   title: "测试标题1",
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: "",
        //   userID: 123,
        //   blogID: 123,
        //   tag: "lalala"
        // },
        // {
        //   title: "测试标题1",
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: "",
        //   userID: 123,
        //   blogID: 123,
        //   tag: "lalala"
        // },
        // {
        //   title: "测试标题1",
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: "",
        //   userID: 123,
        //   blogID: 123,
        //   tag: "lalala"
        // },
        // {
        //   title: "测试标题1",
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: require("@/assets/image/test.jpg"),
        //   userID: 123,
        //   blogID: 123,
        //   tag: "recommand"
        // },
        // {
        //   title: "测试标题1",
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: "",
        //   userID: 123,
        //   blogID: 123,
        //   tag: "computer"
        // },
        // {
        //   title: "测试标题1",
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: "",
        //   userID: 123,
        //   blogID: 123,
        //   tag: "math"
        // },
        // {
        //   title: "测试标题1",
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: "",
        //   userID: 123,
        //   blogID: 123,
        //   tag: "lalala"
        // },
        // {
        //   title: "测试标题1",
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: "",
        //   userID: 123,
        //   blogID: 123,
        //   tag: "lalala"
        // },
        // {
        //   title: "测试标题1",
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: "",
        //   userID: 123,
        //   blogID: 123,
        //   tag: "lalala"
        // }
      ],
      tempArray: [],
      endArray: []
    };
  },
  computed: {
    total() {
      return this.tempArray.length / 4;
    }
  },
  methods: {
    changeTag(tag) {
      this.indexTag = tag;
      this.filterTag(tag);
      this.paging(1);
    },
    filterTag(tag) {
      if (tag == "all") {
        this.tempArray = this.blogArray;
        this.endArray = this.tempArray;
      } else {
        this.tempArray = this.blogArray.filter(function(blog) {
          return blog.blog_tag == tag;
        });
        this.endArray = this.tempArray;
      }
      // this.paging(1);
    },
    paging(e) {
      let chunk = 4;
      this.endArray = this.tempArray.slice((e - 1) * chunk, e * chunk);
    }
  },
  created() {
    let token = localStorage.getItem("token");
    api
      .blogSearch({
        type: "search",
        data: {
          content: "",
          token: token
        }
      })
      .then(
        res => {
          console.log(res)
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
            that.blogArray = newArr;
            that.tempArray = that.blogArray;
            that.paging(1);
          }, 800);
        },
        error => {
          console.log(error);
        }
      );
    // this.paging(1);
  }
};
</script>