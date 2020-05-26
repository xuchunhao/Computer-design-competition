<template>
  <div class="personal-skill">
    <div class="container">
      <div class="person-skill-box">
        <p>个人技能：</p>
        <el-input type="textarea" :rows="2" placeholder="请输入您的个人技能" v-model="specialty"></el-input>
      </div>
      <div class="person-skill-box">
        <p>成果：</p>
        <el-input type="textarea" :rows="2" placeholder="请输入您的成果" v-model="achievements"></el-input>
      </div>
      <div class="person-skill-box">
        <p>兴趣：</p>
        <el-input type="textarea" :rows="2" placeholder="请输入您的兴趣" v-model="intrest"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";

export default {
  data() {
    return {
      specialty: '',
      achievements: '',
      intrest: ''
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
    })
  }
};
</script>