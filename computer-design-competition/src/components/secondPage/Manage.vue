<template>
  <div class="manage">
    <div class="container">
      <div class="input-content">
        <div class="input-box">个人技能：<el-input v-model="personalSkill"></el-input></div>
        <div class="input-box">用户名：<el-input v-model="nickname"></el-input></div>
        <el-button icon="el-icon-search" @click="search">搜索</el-button>
      </div>
      <div class="input-content">
        <div class="input-box">队伍id：<el-input v-model="teamid"></el-input></div>
      </div>
      <table>
        <thead>
          <tr>
            <th>用户名</th>
            <th>头像</th>
            <th>个人技能</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in endArray" :key="index">
            <td>{{ person.nickname }}</td>
            <td><img :src="person.img" alt=""></td>
            <td>{{ person.personalSkill }}</td>
            <td><el-button type="danger" @click="invite">邀请</el-button><el-button type="success" @click="message">私信</el-button></td>
          </tr>
        </tbody>
        <el-pagination @current-change="paging" layout="prev, pager, next" :total="total*10"></el-pagination>
      </table>
    </div>
  </div>
</template>

<script>
import '@/assets/css/secondPage/manage.less'

export default {
  data () {
    return {
      // total:1,
      personalSkill: "",
      teamid: "",
      nickname: "",
      personArray: [
        {
          id: 123456,
          img: require('@/assets/image/head/head1.jpg'),
          nickname: "取个名字真难",
          personalSkill: "擅长前端,vue"
        },
        {
          id: 123456,
          img: require('@/assets/image/head/head2.jpg'),
          nickname: "沙雕程序员",
          personalSkill: "精于java"
        },
        {
          id: 123456,
          img: require('@/assets/image/head/head3.jpg'),
          nickname: "头秃少年",
          personalSkill: "擅长python"
        },
        {
          id: 123456,
          img: require('@/assets/image/head/head4.jpg'),
          nickname: "菜鸡码农",
          personalSkill: "有一定C语言基础"
        },
        {
          id: 654321,
          img: require('@/assets/image/head/head5.jpg'),
          nickname: "有志青年",
          personalSkill: "php是世界上最好的语言"
        },
        {
          id: 654321,
          img: require('@/assets/image/head/head6.jpg'),
          nickname: "不知道叫啥",
          personalSkill: "精通vue"
        },
        {
          id: 654321,
          img: require('@/assets/image/head/head7.jpg'),
          nickname: "没有对象的野指针",
          personalSkill: "对网络安全有兴趣"
        },
        {
          id: 654321,
          img: require('@/assets/image/head/head8.jpg'),
          nickname: "不知道说啥",
          personalSkill: "会用php做后端"
        },
      ],
      tempArray: [
        {
          id: 123456,
          img: require('@/assets/image/head/head1.jpg'),
          nickname: "取个名字真难",
          personalSkill: "擅长前端,vue"
        },
        {
          id: 123456,
          img: require('@/assets/image/head/head2.jpg'),
          nickname: "沙雕程序员",
          personalSkill: "精于java"
        },
        {
          id: 123456,
          img: require('@/assets/image/head/head3.jpg'),
          nickname: "头秃少年",
          personalSkill: "擅长python"
        },
        {
          id: 123456,
          img: require('@/assets/image/head/head4.jpg'),
          nickname: "菜鸡码农",
          personalSkill: "有一定C语言基础"
        },
        {
          id: 654321,
          img: require('@/assets/image/head/head5.jpg'),
          nickname: "有志青年",
          personalSkill: "php是世界上最好的语言"
        },
        {
          id: 654321,
          img: require('@/assets/image/head/head6.jpg'),
          nickname: "不知道叫啥",
          personalSkill: "精通vue"
        },
        {
          id: 654321,
          img: require('@/assets/image/head/head7.jpg'),
          nickname: "没有对象的野指针",
          personalSkill: "对网络安全有兴趣"
        },
        {
          id: 654321,
          img: require('@/assets/image/head/head8.jpg'),
          nickname: "不知道说啥",
          personalSkill: "会用php做后端"
        },
      ],
      endArray: [
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
          personalSkill: ""
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
          personalSkill: ""
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
          personalSkill: ""
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
          personalSkill: ""
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
          personalSkill: ""
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
          personalSkill: ""
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
          personalSkill: ""
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
          personalSkill: ""
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
          personalSkill: ""
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
          personalSkill: ""
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
          personalSkill: ""
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
          personalSkill: ""
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
          personalSkill: ""
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
          personalSkill: ""
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
          personalSkill: ""
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
          personalSkill: ""
        }
      ]
    }
  },
  computed:{
    total() {
      return this.tempArray.length/8;
    }
  },
  methods: {
    paging(e) {
      let chunk = 8;
      this.endArray = this.tempArray.slice( (e-1)*chunk, e*chunk);
    },
    search() {
      var that = this;
      this.tempArray = this.personArray.filter(function(person){
        return person.personalSkill.indexOf(that.personalSkill)>-1&&person.nickname.indexOf(that.nickname)>-1;
      })
      this.paging(1);
    },
    invite(){
      this.$router.push({name: 'Message', params: {messageKind:'snotice'}})
    },
    message(){
      this.$router.push({name: 'Message', params: {messageKind:'privateMessage'}})
    }
  },
  created() {
    this.paging(1);
    // this.total = this.tempArray.length/10;
  }
}
</script>