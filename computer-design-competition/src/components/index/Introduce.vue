<template>
  <div class="introduce">
    <div class="container">
      <el-row class="introduce-box">
        <el-col :md="12">
          <div data-aos="zoom-in-right" class="introduce-image">
            <img style="width:100%" src="@/assets/image/test.jpg" alt />
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
            <img style="width:100%" src="@/assets/image/test.jpg" alt />
          </div>
        </el-col>
      </el-row>
      <el-row class="introduce-box">
        <el-col :md="12">
          <div data-aos="zoom-in-right" class="introduce-image">
            <img style="width:100%" src="@/assets/image/test.jpg" alt />
          </div>
        </el-col>
        <el-col :md="12">
          <div class="introduce-text">你可以关注喜欢的用户，及时了解他的动态，并可以和他即时聊天，分享技能和组队</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import "@/assets/css/index/introduce.less";

export default {
  data() {
    return {};
  }
};
</script>