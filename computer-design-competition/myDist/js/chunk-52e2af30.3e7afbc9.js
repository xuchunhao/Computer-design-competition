(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52e2af30"],{"170d":function(n,s,l){"use strict";l.r(s);var d=function(){var n=this,s=n.$createElement,l=n._self._c||s;return l("div",{staticClass:"conversation"},[l("div",{staticClass:"conversation-show"},n._l(n.conversation,(function(s,d){return l("div",{key:d},[l("img",{attrs:{src:"",alt:s.img}}),l("span",[n._v(n._s(s.name))]),l("p",{domProps:{innerHTML:n._s(s.content)}})])})),0),l("div",{staticClass:"conversation-edit"},[l("wangeditor",{staticClass:"wangeditor",attrs:{isClear:n.isClear},on:{change:n.change},model:{value:n.detail,callback:function(s){n.detail=s},expression:"detail"}}),l("el-button",{on:{click:function(s){return n.send()}}},[n._v("发送消息")])],1)])},k=[],f=l("3019"),t={components:{wangeditor:f["a"]},data(){return{isClear:!1,detail:"",conversation:[{name:"张三",img:123,content:"<p>啦啦啦safkjkjfdjdlkfnsdklfnsdkvnsfjkngjsnfklsdngklsnfklsdnfklssfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdnsfjkngjsnfklsdngklsnfklsdnfklsdnfkldsnfkslndfksdnflnsdkfksdnkflsdndnfkldsnfkslndfksdnflnsdkfksdnkflsdnflskdnfkl</p>"},{name:"李四",img:987,content:"<p>哈哈哈</p>"},{name:"张三",img:123,content:"<p>嘻嘻嘻</p>"}]}},methods:{change(n){console.log(n)},send(){let n={name:"张三",img:123};n.content=this.detail,this.conversation.push(n),this.detail="",console.log(this.detail)},removeTAG(n){return n.replace(/<[^>]+>/g,"")}}},e=t,a=(l("f824"),l("2877")),i=Object(a["a"])(e,d,k,!1,null,null,null);s["default"]=i.exports},b6de:function(n,s,l){},f824:function(n,s,l){"use strict";var d=l("b6de"),k=l.n(d);k.a}}]);