(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e81b544"],{"106a":function(e,t,s){"use strict";var a=s("2a7e"),i=s.n(a);i.a},"2a7e":function(e,t,s){},"51b5":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"message"},[s("div",{staticClass:"container clearfix"},[s("aside",{staticClass:"message-kind"},[s("ul",[e._m(0),s("li",{class:{active:"snotice"==e.messageKind},on:{click:function(t){return e.chooseMessageKind("snotice")}}},[e._v("系统通知")]),s("li",{class:{active:"privateMessage"==e.messageKind},on:{click:function(t){return e.chooseMessageKind("privateMessage")}}},[e._v("私信")]),s("li",{class:{active:"notice"==e.messageKind},on:{click:function(t){return e.chooseMessageKind("notice")}}},[e._v("公告")])])]),s("div",{staticClass:"message-box"},["snotice"==e.messageKind?s("s-notice"):e._e(),"privateMessage"==e.messageKind?s("private-message"):e._e(),"notice"==e.messageKind?s("notice"):e._e()],1)])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"message-center"},[s("i",{staticClass:"el-icon-s-promotion"}),e._v("消息中心")])}],n=(s("6af5"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"notice"},[s("div",{staticClass:"inner"},[s("div",{staticClass:"innerbox"},[s("h1",[e._v("系统通知")]),e._l(e.noticeArray,(function(t,a){return s("div",{key:a,staticClass:"notice-tpl"},[e._v(" "+e._s(t.msg_content)+" ")])}))],2)])])}),c=[],r=s("365c"),o={data(){return{noticeArray:[]}},created(){let e=localStorage.getItem("token");r["a"].getmsg({type:"msg",data:{sender_id:"88888888",recever_id:e}}).then(e=>{console.log(e),this.noticeArray=e.data.data})}},d=o,l=(s("85c6"),s("2877")),m=Object(l["a"])(d,n,c,!1,null,"a6fe5a16",null),g=m.exports,u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"private-message clearfix"},[s("div",{staticClass:"msg-list inner"},[s("div",{staticClass:"msg-near"},[e._v("近期消息")]),s("div",{staticClass:"innerbox"},[s("div",{staticClass:"msg-tpl-box"},e._l(e.msgList,(function(t,a){return s("div",{key:a,staticClass:"msg-list-tpl",class:{active:e.thisIndex==t.msgid},on:{click:function(s){return e.changeIndex(t.msgid)}}},[s("img",{attrs:{src:t.img,alt:""}}),s("div",{staticClass:"talker"},[s("h3",[e._v(e._s(t.msgAuthorName))]),s("p",{domProps:{innerHTML:e._s(t.content)}})])])})),0)])]),s("div",{staticClass:"msg-content clearfix"},[s("div",{staticClass:"msg-content-head"},[e._v(e._s(e.otheruser))]),s("div",{staticClass:"msg-content-content"},[s("div",{staticClass:"inner"},[s("div",{staticClass:"innerbox"},e._l(e.conversation,(function(t,a){return s("div",{key:a},[""!=t.msg_content?[t.sender_id==e.token?s("img",{attrs:{src:e.mybase64,alt:""}}):t.sender_id==e.thisIndex?s("img",{attrs:{src:e.otherbase64,alt:""}}):e._e(),t.sender_id==e.token?s("span",[e._v(e._s(e.user))]):e._e(),t.sender_id==e.thisIndex?s("span",[e._v(e._s(e.otheruser))]):e._e(),s("div",{staticClass:"msg-content-box",domProps:{innerHTML:e._s(t.msg_content)}})]:e._e()],2)})),0)])]),s("div",{staticClass:"msg-write"},[s("wangeditor",{staticClass:"wangeditor",attrs:{isClear:e.isClear},model:{value:e.detail,callback:function(t){e.detail=t},expression:"detail"}})],1),s("el-button",{staticClass:"msg-btn",on:{click:e.send}},[e._v("发送")])],1)])},_=[],h=(s("9608"),s("3019")),v={components:{wangeditor:h["a"]},data(){return{user:"",otheruser:"",img:"",detail:"",isClear:!1,thisIndex:"",token:"",mybase64:"",otherbase64:"",conversation:[],msgList:[]}},methods:{send(e){let t=localStorage.getItem("token");r["a"].sendmsg({type:"msg",data:{sender_id:t,recever_id:this.thisIndex,content:this.detail,title:""}}).then(e=>{if(0==e.data.status){let e={img:this.base64,msg_content:this.detail,sender_id:t};this.conversation.push(e)}})},changeIndex(e){let t=localStorage.getItem("token");this.thisIndex=e,r["a"].getmsg({type:"msg",data:{sender_id:e,recever_id:t}}).then(e=>{this.conversation=e.data.data}),r["a"].infoSearch({type:"user_info",data:{user_id:e}}).then(e=>{this.otheruser=e.data.data.nick_name}),r["a"].loadimg({type:"img",data:{user_id:e}}).then(e=>{this.otherbase64=e.data.data.base64})}},created(){let e=localStorage.getItem("token");this.token=e,r["a"].loadimg({type:"img",data:{user_id:e}}).then(e=>{this.mybase64=e.data.data.base64}),r["a"].getmsgList({type:"msg",data:{user_id:e}}).then(e=>{let t=localStorage.getItem("token"),s=e.data.data.id_list.filter((function(e,t,s){return"88888888"!=e})),a=s.map((function(e,s,a){let i={};return i.msgid=e,r["a"].infoSearch({type:"user_info",data:{user_id:e}}).then(e=>{i.msgAuthorName=e.data.data.nick_name}),r["a"].loadimg({type:"img",data:{user_id:e}}).then(e=>{i.img=e.data.data.base64}),r["a"].lastestmsg({type:"msg",data:{sender_id:t,recever_id:e}}).then(e=>{i.content=e.data.content}),i}));this.thisIndex=a[0].msgid,r["a"].infoSearch({type:"user_info",data:{user_id:t}}).then(e=>{this.user=e.data.data.nick_name});var i=this;setTimeout((function(){i.msgList=a,i.changeIndex(i.thisIndex)}),500)})}},f=v,p=Object(l["a"])(f,u,_,!1,null,null,null),C=p.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"notice"},[s("div",{staticClass:"inner"},[s("div",{staticClass:"innerbox"},[s("h1",[e._v("公告")]),e._l(e.noticeArray,(function(t,a){return s("div",{key:a,staticClass:"notice-tpl"},[e._v(" "+e._s(t.notice)+" ")])}))],2)])])},k=[],x={data(){return{noticeArray:[{notice:"欢迎来到智能化组队系统，您可以在这里寻找志同道合的人组成团队"},{notice:"计算机设计大赛即将举行，有兴趣的同学可以组队参加"}]}}},y=x,I=(s("106a"),Object(l["a"])(y,b,k,!1,null,"14794480",null)),K=I.exports,M={components:{privateMessage:C,sNotice:g,notice:K},data(){return{messageKind:"privateMessage"}},methods:{chooseMessageKind(e){this.messageKind=e}},created(){this.messageKind=this.$route.params.messageKind}},w=M,S=Object(l["a"])(w,a,i,!1,null,null,null);t["default"]=S.exports},"6af5":function(e,t,s){},"85c6":function(e,t,s){"use strict";var a=s("8f34"),i=s.n(a);i.a},"8f34":function(e,t,s){},9608:function(e,t,s){}}]);