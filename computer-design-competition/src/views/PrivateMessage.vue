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
      <div class="msg-content-head">路飞</div>
      <div class="msg-content-content">
        <div class="inner">
          <div class="innerbox">
            <div v-for="(item, index) in conversation" :key="index">
              <img :src="item.img" alt />
              <span>{{item.name}}</span>
              <div class="msg-content-box" v-html="item.content"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="msg-write">
        <wangeditor class="wangeditor" v-model="detail" :isClear="isClear"></wangeditor>
      </div>
      <el-button class="msg-btn" @click="send">发送</el-button>
    </div>
  </div>
</template>

<script>
import "@/assets/css/secondPage/privateMessage.less";
import wangeditor from "@/components/wangeditor.vue";
import api from "@/api/index.js";

export default {
  components: {
    wangeditor
  },
  data() {
    return {
      user: "取个名字真难",
      img: require("@/assets/image/head/head1.jpg"),
      detail: "",
      isClear: false,
      thisIndex: 0,
      conversation: [
        {
          name: "路飞",
          img: require("@/assets/image/head/head9.jpg"),
          content:
            "<p>这次国赛组队吗</p>"
        },
        {
          name: "取个名字真难",
          img: require("@/assets/image/head/head1.jpg"),
          content: "<p>可以</p>"
        },
        {
          name: "路飞",
          img: require("@/assets/image/head/head9.jpg"),
          content: "<p>那前端你来做</p>"
        },
        {
          name: "取个名字真难",
          img: require("@/assets/image/head/head1.jpg"),
          content: "<p>好的</p>"
        },
      ],
      // {
      //     id: 123456,
      //     img: require('@/assets/image/head/head1.jpg'),
      //     nickname: "取个名字真难",
      //     personalSkill: "擅长前端,vue"
      //   },
      //   {
      //     id: 123456,
      //     img: require('@/assets/image/head/head2.jpg'),
      //     nickname: "沙雕程序员",
      //     personalSkill: "精于java"
      //   },
      //   {
      //     id: 123456,
      //     img: require('@/assets/image/head/head3.jpg'),
      //     nickname: "头秃少年",
      //     personalSkill: "擅长python"
      //   },
      //   {
      //     id: 123456,
      //     img: require('@/assets/image/head/head4.jpg'),
      //     nickname: "菜鸡码农",
      //     personalSkill: "有一定C语言基础"
      //   },
      msgList: [
        {
          talker: "路飞",
          img: require('@/assets/image/head/head9.jpg'),
          content: "好的"
        },
        {
          talker: "沙雕程序员",
          img: require('@/assets/image/head/head2.jpg'),
          content: "可以"
        },
        {
          talker: "头秃少年",
          img: require("@/assets/image/head/head3.jpg"),
          content: "有道理"
        },
      ]
    };
  },
  methods: {
    send(e) {
      // let obj = {
      //   name: this.user,
      //   img: this.img,
      //   content: this.detail
      // };
      // this.conversation.push(obj);
      // this.content = "";

      let token = localStorage.getItem('token');
      api.sendmsg({
        type: "msg",
        data: {
          sender_id: token,
          recever_id: '482508834',
          content: this.detail,
          title: ''
        }
      }).then(res => {
        console.log(res)
      })
    },
    changeIndex(index) {
      this.thisIndex = index;
    }
  },
  created() {
    // 482508834
    let token = localStorage.getItem("token");
    api
      .getmsgList({
        type: "msg",
        data: {
          user_id: token
        }
      })
      .then(res => {
        console.log(res);
        this.msgList = res.data.data.id_list;
      });
  }
};
</script>