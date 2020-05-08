<template>
  <div class="dynamic">
    <div class="container dynamic-box">
      <div class="dynamic-write">
        <wangeditor v-model="detail" :isClear="isClear"></wangeditor>
        <el-button>发布</el-button>
      </div>
      <div class="dynamic-each" v-for="(dynamic, index) in dynamicList" :key="index">
        <img :src="dynamic.img" alt="">
        <h2>{{ dynamic.user }}</h2>
        <p>{{ dynamic.create_time }}</p>
        <div v-html="dynamic.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import wangeditor from '@/components/wangeditor.vue'
import '@/assets/css/secondPage/dynamic.less'

export default {
  components:{
    wangeditor
  },
  data() {
    return {
      detail: "快来发布自己的动态吧！",
      isClear: false,
      dynamicList: [
        {
          content: 'lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd',
          user: '作者1',
          img: require('@/assets/image/test.jpg'),
          userID: 123,
          dynamicID: 123,
          create_time: "2020-5-6"
        },
        {
          content: 'lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd',
          user: '作者1',
          img: require('@/assets/image/test.jpg'),
          userID: 123,
          dynamicID: 123,
          create_time: "2020-5-6"
        },
        {
          content: 'lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd',
          user: '作者1',
          img: require('@/assets/image/test.jpg'),
          userID: 123,
          dynamicID: 123,
          create_time: "2020-5-6"
        },
        {
          content: 'lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd',
          user: '作者1',
          img: require('@/assets/image/test.jpg'),
          userID: 123,
          dynamicID: 123,
          create_time: "2020-5-6"
        }
      ]
    }
  }
}
</script>