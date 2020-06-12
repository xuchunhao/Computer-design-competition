<template>
  <div class="second-page-nav">
    <div class="container clearfix">
      <div class="manage-box">智能化组队管理系统</div>
      <div class="navs">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
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
              <router-link :to="{ name: 'Message', params: {messageKind:'snotice'}}" tag="div">系统通知</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link :to="{ name: 'Message', params: {messageKind:'privateMessage'}}" tag="div">私信</router-link>
            </el-menu-item>
            <el-menu-item index="3-3">
              <router-link :to="{ name: 'Message', params: {messageKind:'notice'}}" tag="div">公告</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><img :src="img" alt /></template>
            <el-menu-item index="4-1">
              <router-link to="/secondPage/basicInfo" tag="div">基本资料</router-link>
            </el-menu-item>
            <el-menu-item index="4-2">
              <router-link to="/secondPage/personalSkill" tag="div">个人技能</router-link>
            </el-menu-item>
            <el-menu-item index="4-3">
              <router-link to="/secondPage/personalPage" tag="div">个人主页</router-link>
            </el-menu-item>
            <el-menu-item index="4-4">
              <div @click="exit">退出账号</div>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/secondPage/secondPageNav.less";
import api from "@/api/index.js";

export default {
  data() {
    return {
      activeIndex: "",
      token: undefined,
      img: ""
    };
  },
  methods: {
    exit() {
      localStorage.setItem("token", "");
      this.token = localStorage.getItem("token");
      this.$router.push('/index');
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