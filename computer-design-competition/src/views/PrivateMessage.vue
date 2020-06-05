<template>
  <div class="private-message clearfix">
    <div class="msg-list inner">
      <div class="msg-near">近期消息</div>
      <div class="innerbox">
        <div class="msg-tpl-box">
          <div
            class="msg-list-tpl"
            @click="changeIndex(msg.msgid)"
            v-for="(msg, index) in msgList"
            :key="index"
            :class="{ active: thisIndex == msg.msgid }"
          >
            <img :src="msg.img" alt />
            <div class="talker">
              <h3>{{msg.msgAuthorName }}</h3>
              <p v-html="msg.content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="msg-content clearfix">
      <div class="msg-content-head">{{ otheruser }}</div>
      <div class="msg-content-content">
        <div class="inner">
          <div class="innerbox">
            <div v-for="(item, index) in conversation" :key="index">
              <template v-if="item.msg_content != ''">
                <img v-if="item.sender_id == token" :src="mybase64" alt />
                <img v-else-if="item.sender_id == thisIndex" :src="otherbase64" alt />
                <span v-if="item.sender_id == token">{{user}}</span>
                <span v-if="item.sender_id == thisIndex">{{otheruser}}</span>
                <div class="msg-content-box" v-html="item.msg_content"></div>
              </template>
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
      user: "",
      otheruser: "",
      img: "",
      detail: "",
      isClear: false,
      thisIndex: "",
      token: "",
      mybase64: "",
      otherbase64: "",
      conversation: [
        // {
        //   name: "路飞",
        //   img: require("@/assets/image/head/head9.jpg"),
        //   content:
        //     "<p>这次国赛组队吗</p>"
        // },
        // {
        //   name: "取个名字真难",
        //   img: require("@/assets/image/head/head1.jpg"),
        //   content: "<p>可以</p>"
        // },
        // {
        //   name: "路飞",
        //   img: require("@/assets/image/head/head9.jpg"),
        //   content: "<p>那前端你来做</p>"
        // },
        // {
        //   name: "取个名字真难",
        //   img: require("@/assets/image/head/head1.jpg"),
        //   content: "<p>好的</p>"
        // },
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
        // {
        //   talker: "路飞",
        //   img: require('@/assets/image/head/head9.jpg'),
        //   content: "好的"
        // },
        // {
        //   talker: "沙雕程序员",
        //   img: require('@/assets/image/head/head2.jpg'),
        //   content: "可以"
        // },
        // {
        //   talker: "头秃少年",
        //   img: require("@/assets/image/head/head3.jpg"),
        //   content: "有道理"
        // },
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

      let token = localStorage.getItem("token");
      api
        .sendmsg({
          type: "msg",
          data: {
            sender_id: token,
            recever_id: this.thisIndex,
            content: this.detail,
            title: ""
          }
        })
        .then(res => {
          if (res.data.status == 0) {
            let obj = {
              img: this.base64,
              msg_content: this.detail,
              sender_id: token
            };
            this.conversation.push(obj);
            this.detail = "";
          }
        });
    },
    changeIndex(index) {
      let token = localStorage.getItem("token");
      this.thisIndex = index;
      api
        .getmsg({
          type: "msg",
          data: {
            sender_id: index,
            recever_id: token
          }
        })
        .then(res => {
          this.conversation = res.data.data;
        });
      api
        .infoSearch({
          type: "user_info",
          data: {
            user_id: index
          }
        })
        .then(res => {
          this.otheruser = res.data.data.nick_name;
        });
      api
        .loadimg({
          type: "img",
          data: {
            user_id: index
          }
        })
        .then(res => {
          this.otherbase64 = res.data.data.base64;
        });
    }
  },
  created() {
    // 482508834
    let token = localStorage.getItem("token");
    this.token = token;
    api
      .loadimg({
        type: "img",
        data: {
          user_id: token
        }
      })
      .then(res => {
        this.mybase64 = res.data.data.base64;
      });
    api
      .getmsgList({
        type: "msg",
        data: {
          user_id: token
        }
      })
      .then(res => {
        // console.log(res);
        let token = localStorage.getItem("token");
        let arr = res.data.data.id_list.filter(function(msg, index, arr) {
          return msg != "88888888";
        });
        let newArr = arr.map(function(msg, index, arr) {
          let newMsg = {};
          newMsg.msgid = msg;
          api
            .infoSearch({
              type: "user_info",
              data: {
                user_id: msg
              }
            })
            .then(res => {
              newMsg.msgAuthorName = res.data.data.nick_name;
            });
          api
            .loadimg({
              type: "img",
              data: {
                user_id: msg
              }
            })
            .then(res => {
              newMsg.img = res.data.data.base64;
            });
          api
            .lastestmsg({
              type: "msg",
              data: {
                sender_id: token,
                recever_id: msg
              }
            })
            .then(res => {
              newMsg.content = res.data.content;
            });
          return newMsg;
        });

        this.thisIndex = newArr[0].msgid;

        api
          .infoSearch({
            type: "user_info",
            data: {
              user_id: token
            }
          })
          .then(res => {
            this.user = res.data.data.nick_name;
          });

        var that = this;
        setTimeout(function() {
          that.msgList = newArr;
          that.changeIndex(that.thisIndex);
        }, 500);
      });
  }
};
</script>