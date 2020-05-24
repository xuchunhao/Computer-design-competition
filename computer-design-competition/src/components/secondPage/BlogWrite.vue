<template>
  <div class="blog-write">
    <div class="blog-write-box container">
      <h2>写博客</h2>
      <div class="blog-write-title">
        <label for>标题：</label>
        <el-input class="blog-write-title-input" v-model="title"></el-input>
      </div>
      <div class="blog-write-tag">
        <label for>标签：</label>
        <el-select v-model="tag" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="blog-write-content">
        <label for="">内容：</label>
        <wangeditor class="wangeditor" v-model="detail" :isClear="isClear"></wangeditor>
      </div>
      <div class="blog-write-btn">
        <el-button @click="blogWrite">发布</el-button>
        <router-link to="/secondPage/blog" tag="el-button">返回</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/secondPage/blogWrite.less";
import wangeditor from '@/components/wangeditor.vue'
import api from "@/api/index.js";

export default {
  components:{
    wangeditor
  },
  data() {
    return {
      options: [
        {
          value: "recmd",
          label: "推荐"
        },
        {
          value: "computer",
          label: "计算机"
        },
        {
          value: "math",
          label: "数学"
        },
        {
          value: "bigdata",
          label: "大数据"
        },
        {
          value: "AI",
          label: "人工智能"
        },{
          value: "blockchain",
          label: "区块链"
        },{
          value: "5G",
          label: "5G"
        },{
          value: "game",
          label: "游戏开发"
        },{
          value: "other",
          label: "其他"
        }
      ],
      title: "",
      tag: "",
      isClear: false,
      detail: "",
    };
  },
  methods: {
    blogWrite(){
      let token = localStorage.getItem('token');
      api.blogRelease({
        type: 'blog',
        data:{
          title: this.title,
          tag: this.tag,
          content: this.detail,
          user_id: token
        }
      }).then(res=>{
        console.log(res.data.errmsg)
        if(res.data.status == 0){
          this.$message({
            message: "添加成功",
            type: "success",
            offset: 100
          });
        }else{
          this.$message({
            message: "添加失败",
            type: "error",
            offset: 100
          });
        }
      },error=>{
        console.log(error)
      })
      //this.$router.push({path: "/secondPage/blog"});
    }
  }
};
</script>