<template>
  <div class="basic-info">
    <div class="container info-content">
      <porotrait />
      <div class="info-fans clearfix">
        <div class="info-fans-list">
          <p>关注</p>
          <p>{{ userinfo.follower_num }}</p>
        </div>
        <div class="info-fans-list">
          <p>粉丝</p>
          <p>{{ userinfo.followed_num }}</p>
        </div>
        <div class="info-fans-list">
          <p>获赞</p>
          <p>{{ userinfo.star_num }}</p>
        </div>
      </div>
      <div class="info-box">
        <div class="info-list">
          账号：
          <el-input v-model="userinfo.phone" disabled></el-input>
        </div>
        <div class="info-list">
          姓名：
          <el-input v-model="userinfo.name"></el-input>
        </div>
        <div class="info-list">
          昵称：
          <el-input v-model="userinfo.nickname"></el-input>
        </div>
        <el-button @click="changeinfo">修改信息</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import porotrait from "@/components/secondPage/porotrait/porotrait.vue";
import "@/assets/css/secondPage/basicInfo.less";
import api from "@/api/index.js";

export default {
  components: {
    porotrait
  },
  data() {
    return {
      userinfo: {
        user: "作者1",
        img: require("@/assets/image/test.jpg"),
        concernsNum: 321,
        fansNum: 456,
        likesNum: 789,
        phone: 123456,
        name: 123,
        nickname: 123
      }
    };
  },
  methods: {
    changeinfo() {
      let token = localStorage.getItem("token");
      let info = {
        user_id: token,
        real_name: this.userinfo.name,
        nick_name: this.userinfo.nickname
      };
      api
        .infoChange({
          type: "modify",
          data: info
        })
        .then(
          res => {
            if (res.data.status == 0) {
              this.$message({
                message: "修改成功",
                type: "success",
                offset: 100
              });
            }else{
              this.$message({
                message: "修改失败",
                type: "error",
                offset: 100
              });
            }
          },
          error => {
            // console.log(error);
          }
        );
    }
  },
  created() {
    let token = localStorage.getItem("token");
    api
      .infoSearch({
        type: "user_info",
        data: {
          user_id: token
        }
      })
      .then(
        res => {
          let userinfo = res.data.data;
          this.userinfo.phone = userinfo.phone;
          this.userinfo.name = userinfo.real_name;
          this.userinfo.nickname = userinfo.nick_name;
        },
        error => {
          console.log(error);
        }
      );
    api.getinfo({
      type: 'followed_num',
      data: {
        user_id: token
      }
    }).then(res => {
      this.userinfo.followed_num = res.data.data.num;
    })
    api.getinfo({
      type: 'follower_num',
      data: {
        user_id: token
      }
    }).then(res => {
      this.userinfo.follower_num = res.data.data.num;
    })
    api.getinfo({
      type: 'star_num',
      data: {
        user_id: token
      }
    }).then(res => {
      this.userinfo.star_num = res.data.data.num;
    })
  }
};
</script>
