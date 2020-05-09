<template>
  <div class="register">
    <div class="content">
      <h1 class="title">
        注册
      </h1>
      <div class="form">
        <div class="form-line">
          <el-input v-model="phone" type="text" placeholder="请输入手机号" prefix-icon="el-icon-phone" />
        </div>
        <div class="form-line">
          <el-input v-model="password" type="password" placeholder="请输入密码" prefix-icon="el-icon-lock" />
        </div>
        <el-input placeholder="请输入验证码"></el-input>
        <el-button @click="register">注册</el-button>
        <router-link to="/index" tag="el-button">返回主页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/form.less'
import api from '@/api/index.js'

export default {
  data() {
    return {
      phone: "",
      password: ""
    }
  },
  methods: {
    register() {
      api.register({
        phone: this.phone,
        password: this.password
      })
    }
  }
}
</script>