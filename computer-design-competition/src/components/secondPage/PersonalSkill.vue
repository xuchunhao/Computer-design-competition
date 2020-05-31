<template>
  <div class="personal-skill">
    <div class="container">
      <div class="person-skill-box">
        <p>个人技能：</p>
        <el-input type="textarea" :rows="4" placeholder="请输入您的个人技能" v-model="specialty"></el-input>
      </div>
      <div class="person-skill-box">
        <p>成果：</p>
        <el-input type="textarea" :rows="4" placeholder="请输入您的成果" v-model="achievements"></el-input>
      </div>
      <div class="person-skill-box">
        <p>兴趣：</p>
        <el-input type="textarea" :rows="4" placeholder="请输入您的兴趣" v-model="interest"></el-input>
      </div>
    </div>
    <el-button @click="addinfo">修改信息</el-button>
  </div>
</template>

<script>
import api from "@/api/index.js";

export default {
  data() {
    return {
      specialty: '',
      achievements: '',
      interest: '',
      infoList: {}
    }
  },
  methods: {
    addinfo() {
      let token = localStorage.getItem('token');
      api.addinfo({
        type: 'info',
        data: {
          user_id: token,
          specialty: this.specialty,
          achievements: this.achievements,
          interest: this.interest
        }
      }).then(res => {
        console.log(res)
        if(res.data.status == 0){
          this.$message({
            message: "修改成功",
            type: "success",
            offset: 100
          });
        }
      })
    }
  },
  created() {
    let token = localStorage.getItem('token');
    api.getaddinfo({
      type: 'info',
      data: {
        user_id:token
      }
    }).then(res => {
      console.log(res)
      let infoList = res.data.data.info_list;
      this.specialty = infoList. specialty;
      this.achievements = infoList. achievements;
      this.interest = infoList.interest;
    })
  }
};
</script>

<style lang="less" scoped>
  @import '~@/assets/css/secondPage/personalSkill.less';
</style>