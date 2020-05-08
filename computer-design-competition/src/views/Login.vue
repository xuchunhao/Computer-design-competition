<template>
  <div class="login">
    <div class="content">
      <h1 class="title">
        登录
      </h1>
      <div class="form">
        <div class="form-line">
          <el-input v-model="credential" type="text" placeholder="请输入手机号" prefix-icon="el-icon-phone" />
        </div>
        <div class="form-line">
          <el-input v-model="password" type="password" placeholder="请输入密码" prefix-icon="el-icon-lock" />
        </div>
        <el-button @click="login()">登录</el-button>
        <router-link to="/index" tag="el-button">返回主页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/form.less'

export default {
  data() {
    return {
      credential: "",
      password: ""
    }
  },
  methods: {
    login () {
      this.$router.push({path: '/secondPage/blog'});
    }
  }
}
</script>