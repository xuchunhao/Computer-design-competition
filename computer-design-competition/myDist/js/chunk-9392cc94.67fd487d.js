(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9392cc94"],{"51b5":function(s,n,t){"use strict";t.r(n);var i=function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"message"},[t("div",{staticClass:"container clearfix"},[t("aside",{staticClass:"message-kind"},[t("ul",[s._m(0),t("li",{class:{active:"snotice"==s.messageKind},on:{click:function(n){return s.chooseMessageKind("snotice")}}},[s._v("系统通知")]),t("li",{class:{active:"privateMessage"==s.messageKind},on:{click:function(n){return s.chooseMessageKind("privateMessage")}}},[s._v("私信")]),t("li",{class:{active:"notice"==s.messageKind},on:{click:function(n){return s.chooseMessageKind("notice")}}},[s._v("公告")])])]),t("div",{staticClass:"message-box"},[t("private-message")],1)])])},e=[function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("li",{staticClass:"message-center"},[t("i",{staticClass:"el-icon-s-promotion"}),s._v("消息中心")])}],a=(t("6af5"),function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"private-message clearfix"},[t("div",{staticClass:"msg-list inner"},[t("div",{staticClass:"msg-near"},[s._v("近期消息")]),t("div",{staticClass:"innerbox"},[t("div",{staticClass:"msg-tpl-box"},s._l(s.msgList,(function(n,i){return t("div",{key:i,staticClass:"msg-list-tpl",class:{active:s.thisIndex==i},on:{click:function(n){return s.changeIndex(i)}}},[t("img",{attrs:{src:n.img,alt:""}}),t("div",{staticClass:"talker"},[t("h3",[s._v(s._s(n.talker))]),t("p",{domProps:{innerHTML:s._s(n.content)}})])])})),0)])]),t("div",{staticClass:"msg-content clearfix"},[t("div",{staticClass:"msg-content-head"},[s._v("sadkja")]),t("div",{staticClass:"msg-content-content"},[t("div",{staticClass:"inner"},[t("div",{staticClass:"innerbox"},s._l(s.conversation,(function(n,i){return t("div",{key:i},[t("img",{attrs:{src:n.img,alt:""}}),t("span",[s._v(s._s(n.name))]),t("p",{domProps:{innerHTML:s._s(n.content)}})])})),0)])]),t("div",{staticClass:"msg-write"},[t("wangeditor",{staticClass:"wangeditor",attrs:{isClear:s.isClear},model:{value:s.detail,callback:function(n){s.detail=n},expression:"detail"}})],1),t("el-button",{staticClass:"msg-btn",on:{click:s.send}},[s._v("发送")])],1)])}),d=[],l=(t("9608"),t("3019")),c={components:{wangeditor:l["a"]},data(){return{user:"lalala",img:t("d8d7"),detail:"",isClear:!1,thisIndex:0,conversation:[{name:"张三",img:t("d8d7"),content:"<p>啦啦啦safkjkjfdjdlkfnsdklfnsdkvnsfjkngjsnfklsdngklsnfklsdnfklssfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdndnfkldsnfkslndfksdnflnsdkfksdnkflsdnflskdnfkl</p>"},{name:"李四",img:t("d8d7"),content:"<p>哈哈哈</p>"},{name:"张三",img:t("d8d7"),content:"<p>嘻嘻嘻</p>"},{name:"张三",img:t("d8d7"),content:"<p>嘻嘻嘻</p>"},{name:"张三",img:t("d8d7"),content:"<p>嘻嘻嘻</p>"},{name:"张三",img:t("d8d7"),content:"<p>嘻嘻嘻</p>"},{name:"张三",img:t("d8d7"),content:"<p>嘻嘻嘻</p>"},{name:"张三",img:t("d8d7"),content:"<p>嘻嘻嘻</p>"},{name:"张三",img:t("d8d7"),content:"<p>嘻嘻嘻</p>"}],msgList:[{talker:"nishishui",img:t("d8d7"),content:"shuoshazio"},{talker:"nishishui",img:t("d8d7"),content:"shuoshazio"},{talker:"nishishui",img:t("d8d7"),content:"shuoshazio"},{talker:"nishishui",img:t("d8d7"),content:"shuoshazio"},{talker:"nishishui",img:t("d8d7"),content:"shuoshazio"},{talker:"nishishui",img:t("d8d7"),content:"shuoshazio"},{talker:"nishishui",img:t("d8d7"),content:"shuoshazio"},{talker:"nishishui",img:t("d8d7"),content:"shuoshazio"},{talker:"nishishui",img:t("d8d7"),content:"shuoshazio"},{talker:"nishishui",img:t("d8d7"),content:"shuoshazio"},{talker:"nishishui",img:t("d8d7"),content:"shuoshazio"}]}},methods:{send(s){let n={name:this.user,img:this.img,content:this.detail};this.conversation.push(n)},changeIndex(s){this.thisIndex=s}}},o=c,k=t("2877"),f=Object(k["a"])(o,a,d,!1,null,null,null),r=f.exports,g={components:{privateMessage:r},data(){return{messageKind:"privateMessage"}},methods:{chooseMessageKind(s){this.messageKind=s}},created(){this.messageKind=this.$route.params.messageKind}},m=g,h=Object(k["a"])(m,i,e,!1,null,null,null);n["default"]=h.exports},"6af5":function(s,n,t){},9608:function(s,n,t){},d8d7:function(s,n,t){s.exports=t.p+"img/test.ecdbc70c.jpg"}}]);