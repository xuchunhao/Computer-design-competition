(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e0e84c8"],{"50b5":function(e,l,t){},d57f:function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"blog-write"},[t("div",{staticClass:"blog-write-box container"},[t("h2",[e._v("写博客")]),t("div",{staticClass:"blog-write-title"},[t("label",{attrs:{for:""}},[e._v("标题：")]),t("el-input",{staticClass:"blog-write-title-input",model:{value:e.title,callback:function(l){e.title=l},expression:"title"}})],1),t("div",{staticClass:"blog-write-tag"},[t("label",{attrs:{for:""}},[e._v("标签：")]),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.tag,callback:function(l){e.tag=l},expression:"tag"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("div",{staticClass:"blog-write-content"},[t("label",{attrs:{for:""}},[e._v("内容：")]),t("wangeditor",{staticClass:"wangeditor",attrs:{isClear:e.isClear},on:{change:e.change},model:{value:e.detail,callback:function(l){e.detail=l},expression:"detail"}})],1),t("el-button",{staticClass:"blog-write-btn",on:{click:e.blogWrite}},[e._v("发布")])],1)])},i=[],o=(t("50b5"),t("3019")),s={components:{wangeditor:o["a"]},data(){return{options:[{value:"recommand",label:"推荐"},{value:"computer",label:"计算机"},{value:"math",label:"数学"},{value:"bigdata",label:"大数据"},{value:"ai",label:"人工智能"},{value:"blockchain",label:"区块链"},{value:"fiveg",label:"5G"},{value:"game",label:"游戏开发"},{value:"other",label:"其他"}],title:"",tag:"",isClear:!1,detail:""}},methods:{change(e){console.log(e)},blogWrite(){this.$router.push({path:"/secondPage/blog"})}}},n=s,r=t("2877"),c=Object(r["a"])(n,a,i,!1,null,null,null);l["default"]=c.exports}}]);
//# sourceMappingURL=chunk-4e0e84c8.074ac4fc.js.map