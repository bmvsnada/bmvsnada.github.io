webpackJsonp([10],{"7Zj+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("mvHQ"),s=a.n(n),l=a("r1bD"),r={name:"test",data:function(){return{ashx:"/ChartPart.ashx",query:{functionName:"GetDataByCodeOrID",code:"TOP5FHL",dfParas:""},result:"",loading:!1}},computed:{},created:function(){},methods:{callTest:function(){var e=this;this.loading=!0,Object(l.j)(this.ashx,this.query).then(function(t){e.loading=!1,e.result=s()(t.data),console.log(t.data)}).catch(function(t){console.log(t),e.loading=!1})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"test-container"},[a("div",{staticClass:"test"},[a("p",[e._v("ashx")]),e._v(" "),a("el-input",{attrs:{name:"url",type:"text"},model:{value:e.ashx,callback:function(t){e.ashx=t},expression:"ashx"}}),e._v(" "),a("p",[e._v("functionname")]),e._v(" "),a("el-input",{attrs:{name:"functionName",type:"text"},model:{value:e.query.functionName,callback:function(t){e.$set(e.query,"functionName",t)},expression:"query.functionName"}}),e._v(" "),a("p",[e._v("code")]),e._v(" "),a("el-input",{attrs:{name:"code",type:"text"},model:{value:e.query.code,callback:function(t){e.$set(e.query,"code",t)},expression:"query.code"}}),e._v(" "),a("p",[e._v("dfParas")]),e._v(" "),a("el-input",{attrs:{name:"dfParas",type:"text"},model:{value:e.query.dfParas,callback:function(t){e.$set(e.query,"dfParas",t)},expression:"query.dfParas"}}),e._v(" "),a("el-button",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{type:"warning",loading:e.loading},on:{click:e.callTest}},[e._v("调用")]),e._v(" "),a("p",[e._v("结果")]),e._v(" "),a("el-input",{attrs:{name:"result",type:"textarea",rows:6},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}})],1)])},staticRenderFns:[]},u=a("VU/8")(r,o,!1,null,null,null);t.default=u.exports}});