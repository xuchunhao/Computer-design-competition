<template>
  <div class="basic-info">
    <div class="container info-content">
      <porotrait />
      <div class="info-fans clearfix">
        <div class="info-fans-list">
          <p>关注</p>
          <p>{{ userinfo.concernsNum }}</p>
        </div>
        <div class="info-fans-list">
          <p>粉丝</p>
          <p>{{ userinfo.fansNum }}</p>
        </div>
        <div class="info-fans-list">
          <p>获赞</p>
          <p>{{ userinfo.likesNum }}</p>
        </div>
      </div>
      <div class="info-box">
        <div class="info-list">
          账号：
          <el-input v-model="userinfo.phone"></el-input>
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
      let info = {
        phone: this.userinfo.phone,
        name: this.userinfo.name,
        nickname: this.userinfo.nickname
      };
      userinfo.phone = info.phone;
      userinfo.name = info.name;
      userinfo.nickname = info.nickname;
    }
  }
};
</script>
