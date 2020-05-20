<template>
  <div class="dynamic">
    <div class="container dynamic-box">
      <div class="dynamic-write">
        <wangeditor v-model="detail" :isClear="isClear"></wangeditor>
        <el-button @click="release">发布</el-button>
      </div>
      <div class="dynamic-each" v-for="(dynamic, index) in tempList" :key="index">
        <img :src="dynamic.img" alt="">
        <h2>{{ dynamic.user }}</h2>
        <p class="time">{{ dynamic.create_time }}</p>
        <div v-html="dynamic.content"></div>
      </div>
      <el-pagination @current-change="paging" layout="prev, pager, next" :total="total*10"></el-pagination>
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
  computed: {
    total() {
      return this.dynamicList.length/4;
    }
  },
  data() {
    return {
      detail: "快来发布自己的动态吧！",
      isClear: false,
      user: 'lalaal',
      img: require('@/assets/image/test.jpg'),
      create_time: "2020-5-30",
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
      ],
      tempList: [
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
  },
  methods: {
    release() {
      let obj = {
        content: this.detail,
        user: this.user,
        img: this.img,
        create_time: this.create_time
      }
      this.dynamicList.push(obj);
      this.paging(1);
    },
    paging(e){
      let chunk = 4;
      this.tempList = this.dynamicList.slice( (e-1)*chunk, e*chunk);
    }
  },
  created() {
    this.paging(1);
  }
}
</script>