<template>
  <div class="manage">
    <div class="container">
      <div class="input-content">
        <div class="input-box">账号：<el-input v-model="id"></el-input></div>
        <div class="input-box">用户名：<el-input v-model="nickname"></el-input></div>
        <el-button icon="el-icon-search">搜索</el-button>
      </div>
      <div class="input-content"></div>
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
          <tr v-for="(person, index) in personArray" :key="index">
            <td>{{ person.id }}</td>
            <td><img :src="person.img" alt=""></td>
            <td>{{ person.nickname }}</td>
            <td><el-button type="danger">邀请</el-button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import '@/assets/css/secondPage/manage.less'

export default {
  data () {
    return {
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
        }
      ]
    }
  }
}
</script>