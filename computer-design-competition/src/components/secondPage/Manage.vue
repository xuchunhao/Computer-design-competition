<template>
  <div class="manage">
    <div class="container">
      <div class="input-content">
        <div class="input-box">个人技能：<el-input v-model="id"></el-input></div>
        <div class="input-box">用户名：<el-input v-model="nickname"></el-input></div>
        <el-button icon="el-icon-search" @click="search">搜索</el-button>
      </div>
      <div class="input-content">
        <div class="input-box">队伍id：<el-input v-model="id"></el-input></div>
      </div>
      <table>
        <thead>
          <tr>
            <th>账号</th>
            <th>头像</th>
            <th>用户名</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in endArray" :key="index">
            <td>{{ person.id }}</td>
            <td><img :src="person.img" alt=""></td>
            <td>{{ person.nickname }}</td>
            <td><el-button type="danger">邀请</el-button></td>
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
      id: "",
      nickname: "",
      personArray: [
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        }
      ],
      tempArray: [
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        }
      ],
      endArray: [
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 123456,
          img: require('@/assets/image/test.jpg'),
          nickname: "lalala",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
        },
        {
          id: 654321,
          img: require('@/assets/image/test.jpg'),
          nickname: "sdfghj",
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
        return person.id.toString().indexOf(that.id)>-1&&person.nickname.indexOf(that.nickname)>-1;
      })
      this.paging(1);
    }
  },
  created() {
    this.paging(1);
    // this.total = this.tempArray.length/10;
  }
}
</script>