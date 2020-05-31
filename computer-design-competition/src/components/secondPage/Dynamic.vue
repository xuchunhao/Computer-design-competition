<template>
  <div class="dynamic">
    <div class="container dynamic-box">
      <div class="dynamic-write">
        <wangeditor v-model="detail" :isClear="isClear"></wangeditor>
        <el-button @click="release">发布</el-button>
      </div>
      <div class="dynamic-each" v-for="(dynamic, index) in tempList" :key="index">
        <img :src="dynamic.img" alt />
        <h2>{{ dynamic.user }}</h2>
        <p class="time">{{ dynamic.create_time }}</p>
        <div v-html="dynamic.upd_text"></div>
      </div>
      <el-pagination @current-change="paging" layout="prev, pager, next" :total="total*10"></el-pagination>
    </div>
  </div>
</template>

<script>
import wangeditor from "@/components/wangeditor.vue";
import "@/assets/css/secondPage/dynamic.less";
import api from "@/api/index.js";

export default {
  components: {
    wangeditor
  },
  computed: {
    total() {
      return this.dynamicList.length / 4;
    }
  },
  data() {
    return {
      detail: "快来发布自己的动态吧！",
      isClear: false,
      user: "lalaal",
      img: require("@/assets/image/test.jpg"),
      create_time: "2020-5-30",
      dynamicList: [
        // {
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: require("@/assets/image/test.jpg"),
        //   userID: 123,
        //   dynamicID: 123,
        //   create_time: "2020-5-6"
        // },
        // {
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: require("@/assets/image/test.jpg"),
        //   userID: 123,
        //   dynamicID: 123,
        //   create_time: "2020-5-6"
        // },
        // {
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: require("@/assets/image/test.jpg"),
        //   userID: 123,
        //   dynamicID: 123,
        //   create_time: "2020-5-6"
        // },
        // {
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: require("@/assets/image/test.jpg"),
        //   userID: 123,
        //   dynamicID: 123,
        //   create_time: "2020-5-6"
        // }
      ],
      tempList: [
        // {
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: require("@/assets/image/test.jpg"),
        //   userID: 123,
        //   dynamicID: 123,
        //   create_time: "2020-5-6"
        // },
        // {
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: require("@/assets/image/test.jpg"),
        //   userID: 123,
        //   dynamicID: 123,
        //   create_time: "2020-5-6"
        // },
        // {
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: require("@/assets/image/test.jpg"),
        //   userID: 123,
        //   dynamicID: 123,
        //   create_time: "2020-5-6"
        // },
        // {
        //   content:
        //     "lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd",
        //   user: "作者1",
        //   img: require("@/assets/image/test.jpg"),
        //   userID: 123,
        //   dynamicID: 123,
        //   create_time: "2020-5-6"
        // }
      ]
    };
  },
  methods: {
    release() {
      // let obj = {
      //   content: this.detail,
      //   user: this.user,
      //   img: this.img,
      //   create_time: this.create_time
      // }
      // this.dynamicList.push(obj);
      let token = localStorage.getItem("token");
      api
        .updateRelease({
          type: "update",
          data: {
            user: token,
            content: this.detail
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.status == 0) {
            this.$router.go(0);
          }
        });
      this.paging(1);
    },
    paging(e) {
      let chunk = 4;
      console.log(this.tempList, this.dynamicList);
      this.tempList = this.dynamicList.slice((e - 1) * chunk, e * chunk);
    },
    timechange(time) {
      if (time) {
        let day = time.slice(5, 7);
        let month = time.slice(8, 11);
        let minute = time.slice(17, 25);
        let newMonth;
        let en_mon_arr = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Spt",
          "Oct",
          "Nov",
          "Dec"
        ];
        for (var i = 0; i < en_mon_arr.length; i++) {
          //循环匹配
          if (month == en_mon_arr[i]) {
            newMonth = i;
          }
        }
        return newMonth + "-" + day + "," + minute;
      }
    }
  },
  created() {
    let token = localStorage.getItem("token");
    api
      .updateList({
        type: "update",
        data: {
          user_id: token
        }
      })
      .then(res => {
        console.log(res);
        let that = this;
        this.dynamicList = res.data.map(function(dynamic, index, arr) {
          api
            .infoSearch({
              type: "user_info",
              data: {
                user_id: dynamic.upd_author
              }
            })
            .then(res => {
              dynamic.updAuthorName = res.data.data.nick_name;
            });
          api
            .loadimg({
              type: "img",
              data: {
                user_id: dynamic.upd_author
              }
            })
            .then(res => {
              dynamic.img = res.data.data.base64;
            });
          let time = that.timechange(dynamic.create_time);
          dynamic.create_time = time;
          return dynamic;
        });
        // let that = this;
        setTimeout(function() {
          that.paging(1);
        }, 500);
      });
  }
};
</script>