<template>
  <div class="blog">
    <div class="container">
      <div class="blog-box clearfix">
        <ul class="tags">
          <li @click="changeTag('recommand')" :class="{active: indexTag == 'recommand'}">推荐</li>
          <li @click="changeTag('computer')" :class="{active: indexTag == 'computer'}">计算机</li>
          <li @click="changeTag('math')" :class="{active: indexTag == 'math'}">数学</li>
          <li @click="changeTag('bigdata')" :class="{active: indexTag == 'bigdata'}">大数据</li>
          <li @click="changeTag('ai')" :class="{active: indexTag == 'ai'}">人工智能</li>
          <li @click="changeTag('blockchain')" :class="{active: indexTag == 'blockchain'}">区块链</li>
          <li @click="changeTag('fiveg')" :class="{active: indexTag == 'fiveg'}">5G</li>
          <li @click="changeTag('game')" :class="{active: indexTag == 'game'}">游戏开发</li>
          <li @click="changeTag('other')" :class="{active: indexTag == 'other'}">其他</li>
        </ul>
        <div class="blog-list">
          <router-link to="/secondPage/blogWrite" class="writebtn" tag="el-button">写博客</router-link>
          <router-link tag="div" :to="'/secondPage/blog/' + blog.blogID" class="blog-every" v-for="(blog, index) in blogArray" :key="index">
            <h3>{{blog.title}}</h3>
            <div class="blog-summary">{{blog.content}}</div>
            <div class="blog-writer">
              <img :src="blog.img" alt="">
              <span>{{blog.user}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/secondPage/blog.less'

export default {
  data() {
    return {
      indexTag: 'recommand',
      blogArray: [{
        title: '测试标题1',
        content: 'lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd',
        user: '作者1',
        img: require('@/assets/image/test.jpg'),
        userID: 123,
        blogID: 123,
        tag: 'lalala'
      },{
        title: '测试标题1',
        content: 'lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd',
        user: '作者1',
        img: '',
        userID: 123,
        blogID: 123,
        tag:'lalala'
      },{
        title: '测试标题1',
        content: 'lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd',
        user: '作者1',
        img: '',
        userID: 123,
        blogID: 123,
        tag:'lalala'
      },{
        title: '测试标题1',
        content: 'lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd',
        user: '作者1',
        img: '',
        userID: 123,
        blogID: 123,
        tag:'lalala'
      },{
        title: '测试标题1',
        content: 'lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd',
        user: '作者1',
        img: '',
        userID: 123,
        blogID: 123,
        tag:'lalala'
      },{
        title: '测试标题1',
        content: 'lalalalalalallalaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssslkkkkkkkkkkkkkkkkkkkkdfaaaaaaaaaaaaaaaaasdsadsddasd',
        user: '作者1',
        img: '',
        userID: 123,
        blogID: 123,
        tag:'lalala'
      }]
    }
  },
  methods: {
    changeTag(tag) {
      this.indexTag = tag;
    }
  }
}
</script>