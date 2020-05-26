<template>
  <div class="navigation">
    <div class="container clearfix">
      <div class="project">智能化组队管理系统</div>
      <div class="entry">
        <router-link to="/login" tag="el-button">登录</router-link>
        <router-link to="/register" tag="el-button" class="btn-entry">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/index/navigation.less'

export default {
  
}
</script>