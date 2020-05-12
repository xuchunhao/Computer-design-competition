<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <index/> -->
      <!-- <router-link to="/">主页</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/inviate">邀请</router-link> |
      <router-link to="/conversation">聊天</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<script>
// import Index from '@/views/Index'

export default {
  // components:{
  //   Index
  // }
}
</script>

<style lang="less">
body{
  // position: relative;
  margin: 0;
  padding: 0;
}

// body{
//   background: url("~@/assets/image/background.jpg");
//   background-attachment: fixed;
//   background-size: cover;
//   background-position: center center;
// }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container{
  max-width: 1140px;
  margin: 0 auto;
}

.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
</style>
