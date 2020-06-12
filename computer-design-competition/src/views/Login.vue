<template>
  <div class="login">
    <div class="content">
      <h1 class="title">登录</h1>
      <div class="form">
        <div class="form-line">
          <el-input
            v-model="credential"
            type="text"
            placeholder="请输入手机号"
            prefix-icon="el-icon-phone"
          />
        </div>
        <div class="form-line">
          <el-input
            v-model="password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          />
        </div>
        <div class="form-btn">
          <el-button @click="login()">登录</el-button>
          <router-link to="/index" tag="el-button">返回主页</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";

export default {
  data() {
    return {
      credential: "",
      password: ""
    };
  },
  methods: {
    login() {
      api
        .login({
          data: {
            credential: this.credential,
            password: this.password
          }
        })
        .then(res => {
          if (res.data.data.errmsg == "OK") {
              this.$message({
                message: "登录成功",
                type: "success",
                offset: 100
              });
              localStorage.setItem("token", res.data.data.token);
              this.$router.push({ path: "/index"});
            } else {
              this.$message({
                message: "登录失败",
                type: "error",
                offset: 100
              });
            }
        }, error=> {
          console.log(error)
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/form.less";
</style>