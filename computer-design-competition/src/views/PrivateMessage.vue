<template>
  <div class="private-message clearfix">
    <div class="msg-list inner">
      <div class="msg-near">近期消息</div>
      <div class="innerbox">
        <div class="msg-tpl-box">
          <div
            class="msg-list-tpl"
            @click="changeIndex(index)"
            v-for="(msg, index) in msgList"
            :key="index"
            :class="{ active: thisIndex == index }"
          >
            <img :src="msg.img" alt />
            <div class="talker">
              <h3>{{msg.talker}}</h3>
              <p v-html="msg.content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="msg-content clearfix">
      <div class="msg-content-head">sadkja</div>
      <div class="msg-content-content">
        <div class="inner">
          <div class="innerbox">
          <div v-for="(item, index) in conversation" :key="index">
          <img :src="item.img" alt="" />
          <span>{{item.name}}</span>
          <p v-html="item.content"></p>
        </div>
        </div>
        </div>
      </div>
      <div class="msg-write">
        <wangeditor class="wangeditor" v-model="detail" :isClear="isClear" @change="change"></wangeditor>
      </div>
      <el-button class="msg-btn">发送</el-button>
    </div>
  </div>
</template>

<script>
import "@/assets/css/secondPage/privateMessage.less";
import wangeditor from "@/components/wangeditor.vue";

export default {
  components: {
    wangeditor
  },
  data() {
    return {
      detail: "",
      isClear: false,
      thisIndex: 0,
      conversation: [
        {
          name: "张三",
          img: require("@/assets/image/test.jpg"),
          content:
            "<p>啦啦啦safkjkjfdjdlkfnsdklfnsdkvnsfjkngjsnfklsdngklsnfklsdnfklssfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdndnfkldsnfkslndfksdnflnsdkfksdnkflsdnflskdnfkl</p>"
        },
        {
          name: "李四",
          img: require("@/assets/image/test.jpg"),
          content: "<p>哈哈哈</p>"
        },
        {
          name: "张三",
          img: require("@/assets/image/test.jpg"),
          content: "<p>嘻嘻嘻</p>"
        },
        {
          name: "张三",
          img: require("@/assets/image/test.jpg"),
          content: "<p>嘻嘻嘻</p>"
        },
        {
          name: "张三",
          img: require("@/assets/image/test.jpg"),
          content: "<p>嘻嘻嘻</p>"
        },
        {
          name: "张三",
          img: require("@/assets/image/test.jpg"),
          content: "<p>嘻嘻嘻</p>"
        },
        {
          name: "张三",
          img: require("@/assets/image/test.jpg"),
          content: "<p>嘻嘻嘻</p>"
        },
        {
          name: "张三",
          img: require("@/assets/image/test.jpg"),
          content: "<p>嘻嘻嘻</p>"
        },
        {
          name: "张三",
          img: require("@/assets/image/test.jpg"),
          content: "<p>嘻嘻嘻</p>"
        }
      ],
      msgList: [
        {
          talker: "nishishui",
          img: require("@/assets/image/test.jpg"),
          content: "shuoshazio"
        },
        {
          talker: "nishishui",
          img: require("@/assets/image/test.jpg"),
          content: "shuoshazio"
        },
        {
          talker: "nishishui",
          img: require("@/assets/image/test.jpg"),
          content: "shuoshazio"
        },
        {
          talker: "nishishui",
          img: require("@/assets/image/test.jpg"),
          content: "shuoshazio"
        },
        {
          talker: "nishishui",
          img: require("@/assets/image/test.jpg"),
          content: "shuoshazio"
        },
        {
          talker: "nishishui",
          img: require("@/assets/image/test.jpg"),
          content: "shuoshazio"
        },
        {
          talker: "nishishui",
          img: require("@/assets/image/test.jpg"),
          content: "shuoshazio"
        },
        {
          talker: "nishishui",
          img: require("@/assets/image/test.jpg"),
          content: "shuoshazio"
        },
        {
          talker: "nishishui",
          img: require("@/assets/image/test.jpg"),
          content: "shuoshazio"
        },
        {
          talker: "nishishui",
          img: require("@/assets/image/test.jpg"),
          content: "shuoshazio"
        },
        {
          talker: "nishishui",
          img: require("@/assets/image/test.jpg"),
          content: "shuoshazio"
        }
      ]
    };
  },
  methods: {
    changeIndex(index) {
      this.thisIndex = index;
    }
  }
};
</script>