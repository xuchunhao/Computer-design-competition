<template>
  <div class="introduce">
    <home-nav/>
    <div class="container">
      <el-row class="introduce-box">
        <el-col :md="12">
          <div data-aos="zoom-in-right" class="introduce-image">
            <img style="width:100%" src="@/assets/image/introduce1.jpg" alt />
          </div>
        </el-col>
        <el-col :md="12">
          <div class="introduce-text">你可以邀请其他用户参加组队任务，并限制人数，并可以及时统计组队情况</div>
        </el-col>
      </el-row>
      <el-row class="introduce-box">
        <el-col :md="12">
          <div class="introduce-text">你可以在需求大厅添加组队任务，邀请拥有特长的伙伴参加特定比赛</div>
        </el-col>
        <el-col :md="12">
          <div data-aos="zoom-in-left" class="introduce-image">
            <img style="width:100%" src="@/assets/image/introduce2.jpg" alt />
          </div>
        </el-col>
      </el-row>
      <el-row class="introduce-box">
        <el-col :md="12">
          <div data-aos="zoom-in-right" class="introduce-image">
            <img style="width:100%" src="@/assets/image/introduce3.jpg" alt />
          </div>
        </el-col>
        <el-col :md="12">
          <div class="introduce-text">你可以关注喜欢的用户，及时了解他的动态，并可以和他即时聊天，分享技能和组队</div>
        </el-col>
      </el-row>
      <carousel />
      <div class="reaction-box">
        <h1>反馈</h1>
        <el-row class="reaction-input">
          <el-col :md="12">
            <p>用户名</p>
            <el-input></el-input>
            <p>E-mail</p>
            <el-input></el-input>
            <p>内容</p>
            <el-input type="textarea" :rows="4"></el-input>
            <el-button>提交</el-button>
          </el-col>
          <el-col class="share-box" :md="12">
            <h3>分享</h3>
            <share :config="config"></share>
          </el-col>
        </el-row>
      </div>
      <a href="http://www.beian.gov.cn">浙ICP备19046299号-1</a>
    </div>
  </div>
</template>

<script>
import "@/assets/css/index/introduce.less";
import Carousel from "@/components/index/homepage/Carousel";
import HomeNav from '@/components/index/homepage/HomeNav';

export default {
  data() {
    return {
      config: {
        sites: ["qzone", "qq", "weibo", "wechat"] // 启用的站点
      }
    };
  },
  components: {
    Carousel,
    HomeNav
  }
};
</script>