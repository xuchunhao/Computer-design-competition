<template>
  <div class="manage">
    <div class="container manage-box">
      <!-- <div class="input-content">
        <div class="input-box">
          个人技能：
          <el-input v-model="specialty"></el-input>
        </div>
        <div class="input-box">
          用户名：
          <el-input v-model="msgAuthorName"></el-input>
        </div>
        <el-button icon="el-icon-search" @click="search">搜索</el-button>
      </div>-->
      <div class="input-content">
        <div class="input-box">
          输入队伍id：
          <el-input v-model="teamid"></el-input>
          <router-link class="fl-r" to="/secondPage/teamInt" tag="el-button">发布意向</router-link>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>用户名</th>
            <th>头像</th>
            <th>个人介绍</th>
            <th>组队意向</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in endArray" :key="index">
            <td>{{ person.msgAuthorName }}</td>
            <td class="img">
              <img :src="person.img" alt />
            </td>
            <td>{{ person.introduct }}</td>
            <td>{{ person.intention }}</td>
            <td>
              <el-button type="danger" @click="invite(person.user_id)">邀请</el-button>
              <el-button type="success" @click="message(person.user_id)">私信</el-button>
            </td>
          </tr>
        </tbody>
        <el-pagination @current-change="paging" layout="prev, pager, next" :total="total*10"></el-pagination>
      </table>
    </div>
  </div>
</template>

<script>
import "@/assets/css/secondPage/manage.less";
import api from "@/api/index.js";

export default {
  data() {
    return {
      // total:1,
      specialty: "",
      teamid: "",
      msgAuthorName: "",
      personArray: [
        // {
        //   id: 123456,
        //   img: require("@/assets/image/head/head1.jpg"),
        //   nickname: "取个名字真难",
        //   personalSkill: "擅长前端,vue"
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/head/head9.jpg"),
        //   nickname: "路飞",
        //   personalSkill: "擅长前端"
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/head/head2.jpg"),
        //   nickname: "沙雕程序员",
        //   personalSkill: "精于java"
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/head/head3.jpg"),
        //   nickname: "头秃少年",
        //   personalSkill: "擅长python"
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/head/head4.jpg"),
        //   nickname: "菜鸡码农",
        //   personalSkill: "有一定C语言基础"
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/head/head5.jpg"),
        //   nickname: "有志青年",
        //   personalSkill: "php是世界上最好的语言"
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/head/head6.jpg"),
        //   nickname: "不知道叫啥",
        //   personalSkill: "精通vue"
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/head/head7.jpg"),
        //   nickname: "没有对象的野指针",
        //   personalSkill: "对网络安全有兴趣"
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/head/head8.jpg"),
        //   nickname: "不知道说啥",
        //   personalSkill: "会用php做后端"
        // }
      ],
      tempArray: [
        // {
        //   id: 123456,
        //   img: require("@/assets/image/head/head1.jpg"),
        //   nickname: "取个名字真难",
        //   personalSkill: "擅长前端,vue"
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/head/head9.jpg"),
        //   nickname: "路飞",
        //   personalSkill: "擅长前端"
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/head/head2.jpg"),
        //   nickname: "沙雕程序员",
        //   personalSkill: "精于java"
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/head/head3.jpg"),
        //   nickname: "头秃少年",
        //   personalSkill: "擅长python"
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/head/head4.jpg"),
        //   nickname: "菜鸡码农",
        //   personalSkill: "有一定C语言基础"
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/head/head5.jpg"),
        //   nickname: "有志青年",
        //   personalSkill: "php是世界上最好的语言"
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/head/head6.jpg"),
        //   nickname: "不知道叫啥",
        //   personalSkill: "精通vue"
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/head/head7.jpg"),
        //   nickname: "没有对象的野指针",
        //   personalSkill: "对网络安全有兴趣"
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/head/head8.jpg"),
        //   nickname: "不知道说啥",
        //   personalSkill: "会用php做后端"
        // }
      ],
      endArray: [
        // {
        //   id: 123456,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "lalala",
        //   personalSkill: ""
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "lalala",
        //   personalSkill: ""
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "lalala",
        //   personalSkill: ""
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "lalala",
        //   personalSkill: ""
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "sdfghj",
        //   personalSkill: ""
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "sdfghj",
        //   personalSkill: ""
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "sdfghj",
        //   personalSkill: ""
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "sdfghj",
        //   personalSkill: ""
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "lalala",
        //   personalSkill: ""
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "lalala",
        //   personalSkill: ""
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "lalala",
        //   personalSkill: ""
        // },
        // {
        //   id: 123456,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "lalala",
        //   personalSkill: ""
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "sdfghj",
        //   personalSkill: ""
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "sdfghj",
        //   personalSkill: ""
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "sdfghj",
        //   personalSkill: ""
        // },
        // {
        //   id: 654321,
        //   img: require("@/assets/image/test.jpg"),
        //   nickname: "sdfghj",
        //   personalSkill: ""
        // }
      ]
    };
  },
  computed: {
    total() {
      return this.tempArray.length / 8;
    }
  },
  methods: {
    paging(e) {
      let chunk = 8;
      this.endArray = this.tempArray.slice((e - 1) * chunk, e * chunk);
    },
    // search() {
    //   var that = this;
    //   this.tempArray = this.personArray.filter(function(person) {
    //     return person.specialty != undefined && person.specialty.indexOf(that.specialty) > -1 && person.msgAuthorName.indexOf(that.msgAuthorName) > -1
    //   });
    //   this.paging(1);
    // },
    invite(invited_id) {
      let token = localStorage.getItem("token");
      api
        .invite({
          type: "invite",
          data: {
            team_id: this.teamid,
            inviter_id: invited_id,
            invited_id: token
          }
        })
        .then(res => {
          if (res.data.status == 0) {
            this.$router.push({
              name: "Message",
              params: { messageKind: "snotice" }
            });
          }
        });
      // this.$router.push({name: 'Message', params: {messageKind:'snotice'}})
    },
    message(recever_id) {
      let token = localStorage.getItem("token");
      api
        .sendmsg({
          type: "msg",
          data: {
            sender_id: token,
            recever_id: recever_id,
            content: "",
            title: ""
          }
        })
        .then(res => {
          if (res.data.status == 0) {
            this.$router.push({
              name: "Message",
              params: { messageKind: "privateMessage" }
            });
          }
        });
    }
  },
  created() {
    api.searchdem({
      type: "teamser",
      data: {
        content: ""
      }
    }).then(res => {
      let newArr = res.data.data.map(function(team, index, arr) {
          api
            .infoSearch({
              type: "user_info",
              data: {
                user_id: team.user_id
              }
            })
            .then(res => {
              team.msgAuthorName = res.data.data.nick_name;
            });
          api
            .loadimg({
              type: "img",
              data: {
                user_id: team.user_id
              }
            })
            .then(res => {
              team.img = res.data.data.base64;
            });
          return team;
        });

        var that = this;
        setTimeout(function() {
          that.personArray = newArr;
          that.tempArray = that.personArray;
          that.paging(1);
        }, 800);
      });
    this.paging(1);
    // api
    //   .usersearch({
    //     type: "user",
    //     data: {
    //       content: ""
    //     }
    //   })
    //   .then(res => {
    //     let arr = res.data.filter(function(msg, index, arr) {
    //       return msg != "88888888";
    //     });
    //     let newArr = arr.map(function(msg, index, arr) {
    //       let newMsg = {};
    //       newMsg.msgid = msg;
    //       api
    //         .infoSearch({
    //           type: "user_info",
    //           data: {
    //             user_id: msg
    //           }
    //         })
    //         .then(res => {
    //           newMsg.msgAuthorName = res.data.data.nick_name;
    //         });
    //       api
    //         .loadimg({
    //           type: "img",
    //           data: {
    //             user_id: msg
    //           }
    //         })
    //         .then(res => {
    //           newMsg.img = res.data.data.base64;
    //         });
    //       api
    //         .getaddinfo({
    //           type: "info",
    //           data: {
    //             user_id: msg
    //           }
    //         })
    //         .then(res => {
    //           let infoList = res.data.data.info_list;
    //           newMsg.specialty = infoList.specialty;
    //         });
    //       return newMsg;
    //     });

    //     var that = this;
    //     setTimeout(function() {
    //       that.personArray = newArr;
    //       that.tempArray = that.personArray;
    //       that.paging(1);
    //     }, 800);
    //   });
    // this.paging(1);
  }
};
</script>