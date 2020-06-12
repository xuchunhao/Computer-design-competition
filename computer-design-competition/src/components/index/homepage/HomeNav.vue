<template>
  <div class="home-nav">
    <div class="nav-content">
      <div class="container clearfix">
        <div class="manage-box">智能化组队管理系统</div>
        <div class="navs">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="-2">
              <router-link to="/index" tag="div">主页</router-link>
            </el-menu-item>
            <el-menu-item index="1">
              <router-link to="/secondPage/match" tag="div">我要入队</router-link>
            </el-menu-item>
            <el-menu-item index="-1">
              <router-link to="/secondPage/manage" tag="div">我要组队</router-link>
            </el-menu-item>
            <el-menu-item index="0">
              <router-link to="/secondPage/blog" tag="div">博客</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/secondPage/dynamic" tag="div">好友动态</router-link>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">消息</template>
              <el-menu-item index="3-1">
                <router-link
                  :to="{ name: 'Message', params: {messageKind:'snotice'}}"
                  tag="div"
                >系统通知</router-link>
              </el-menu-item>
              <el-menu-item index="3-2">
                <router-link
                  :to="{ name: 'Message', params: {messageKind:'privateMessage'}}"
                  tag="div"
                >私信</router-link>
              </el-menu-item>
              <el-menu-item index="3-3">
                <router-link :to="{ name: 'Message', params: {messageKind:'notice'}}" tag="div">公告</router-link>
              </el-menu-item>
            </el-submenu>
            <template v-if="!token">
              <el-menu-item index="4">
                <router-link to="/login" tag="div">登录</router-link>
              </el-menu-item>
              <el-menu-item index="5">
                <router-link to="/register" tag="div">注册</router-link>
              </el-menu-item>
            </template>
            <template v-if="token">
              <!-- <el-menu-item index="6">
                <img :src="img" alt />
              </el-menu-item>-->
              <el-submenu index="6">
                <template slot="title">
                  <img :src="img" alt />
                </template>
                <el-menu-item index="6-1">
                  <div @click="exit">退出账号</div>
                </el-menu-item>
                <!-- <el-menu-item index="3-2">
              <router-link
                :to="{ name: 'Message', params: {messageKind:'privateMessage'}}"
                tag="div"
              >私信</router-link>
            </el-menu-item>
            <el-menu-item index="3-3">
              <router-link :to="{ name: 'Message', params: {messageKind:'notice'}}" tag="div">公告</router-link>
                </el-menu-item>-->
              </el-submenu>
            </template>
          </el-menu>
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
      token: undefined,
      img: ""
    };
  },
  methods: {
    exit() {
      localStorage.setItem("token", "");
      this.token = localStorage.getItem("token");
    }
  },
  created() {
    this.token = localStorage.getItem("token");
    if (this.token) {
      api
        .loadimg({
          type: "img",
          data: {
            user_id: this.token
          }
        })
        .then(res => {
          this.img = res.data.data.base64;
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/index/homenav.less";
</style>