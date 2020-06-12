<template>
  <div class="register">
    <div class="content">
      <h1 class="title">注册</h1>
      <div class="form">
        <div class="form-line">
          <el-input v-model="phone" type="text" placeholder="请输入手机号" prefix-icon="el-icon-phone" />
        </div>
        <div class="form-line">
          <el-input
            v-model="password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          />
        </div>
        <div class="form-line-more">
          <el-button @click="getSms">获取验证码</el-button>
          <el-input v-model="sms" placeholder="请输入验证码"></el-input>
        </div>
        <div class="form-btn">
          <el-button @click="register">注册</el-button>
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
      phone: "",
      password: "",
      sms: ""
    };
  },
  methods: {
    register() {
      api
        .register({
          type: "sms",
          data: {
            phone: this.phone,
            sms: this.sms,
            pwd: this.password
          }
        })
        .then(
          res => {
            if (res.data.status == 0) {
              this.$message({
                message: "注册成功",
                type: "success",
                offset: 100
              });
//var foo = localStorage.getItem("bar");  
// // ...  
// localStorage.setItem("bar", foo);  
              localStorage.setItem("token", res.data.data.token);
              this.$router.push({ path: "/index"});
            } else {
              this.$message({
                message: "注册失败",
                type: "error",
                offset: 100
              });
            }
          },
          error => {
            console.log(error);
          }
        );
    },
    getSms() {
      api
        .register({
          type: "phone",
          data: {
            phone: this.phone
          }
        })
        .then(res => {
          console.log(res,res.data)
          if (res.data.status == 0) {
            this.$message({
              message: "验证码已发送",
              type: "success",
              offset: 100
            });
          } else {
            this.$message({
                message: "验证码发送失败",
                type: "error",
                offset: 100
              });
          }
        }, error => {
          console.log(error)
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/form.less";
</style>