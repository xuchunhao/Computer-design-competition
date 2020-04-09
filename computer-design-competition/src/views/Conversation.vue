<template>
  <div class="conversation">
    <div class="conversation-show">
      <div v-for="(item, index) in conversation" :key="index">
        <img src="" :alt="item.img">
        <span>{{item.name}}</span>
        <p v-html="item.content"></p>
      </div>
    </div>
    <div class="conversation-edit">
      <wangeditor class="wangeditor" v-model="detail" :isClear="isClear" @change="change"></wangeditor>
      <el-button @click="send()">发送消息</el-button>
    </div>
  </div>
</template>

<script>
import wangeditor from "@/components/wangeditor";

export default {
  components: { wangeditor },
  data() {
    return {
      isClear: false,
      detail: "",
      conversation:[{
        name: "张三",
        img: 123,
        content: "<p>啦啦啦safkjkjfdjdlkfnsdklfnsdkvnsfjkngjsnfklsdngklsnfklsdnfklssfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdndnfkldsnfkslndfksdnflnsdkfksdnkflsdnflskdnfkl</p>"
      },{
        name: "李四",
        img: 987,
        content: "<p>哈哈哈</p>"
      },{
        name: "张三",
        img: 123,
        content: "<p>嘻嘻嘻</p>"
      }]
    };
  },
  methods: {
    change(val) {
      console.log(val);
    },
    send() {
      let tempobj = {};
      tempobj.name = "张三";
      tempobj.img = 123;
      tempobj.content = this.detail;
      this.conversation.push(tempobj);
      this.detail = "";
      console.log(this.detail);
    },
    removeTAG(str){
      return str.replace(/<[^>]+>/g, "");
    }
  }
};
</script>

<style lang="less">
.conversation {
  width: 1200px;
  position: relative;
  margin: 0 auto;
  border: 1px solid red;
}

.conversation-show{
  text-align: left;
  word-break: break-all;
  img{
    border-radius: 50%;
    border: 1px solid black;
  }
}

.wangeditor {
  background: white;
  text-align: left;
  // max-height: 200px;
}
</style>