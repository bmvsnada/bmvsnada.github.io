webpackJsonp([28],{mIoP:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("WBHA"),n=a.n(e),l=a("r1bD"),r={name:"tzxmDetailInfo",components:{CountTo:n.a},data:function(){return{activeName:"基本信息",tabIndex:{"基本信息":1,"详细信息":2,"其他信息":3},tabTransitionName:"tab-right",tzxmInfo:{}}},computed:{selectGqxmName:function(){return this.$store.getters.selectGqxmName}},created:function(){this.refreshTzxmInfo()},methods:{refreshTzxmInfo:function(){var t=this;Object(l._0)({dfParas:""}).then(function(s){t.tzxmInfo=s.data[0],t.$refs.ctTzgm.start(),t.$refs.ctLjsy.start(),t.$refs.ctLjfh.start()})}},watch:{activeName:function(t,s){this.tabIndex[t]>this.tabIndex[s]?this.tabTransitionName="tab-right":this.tabTransitionName="tab-left"}}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticStyle:{height:"100%"}},[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(s){t.activeName=s},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"基本信息",name:"基本信息"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("基本信息")]),t._v(" "),a("transition",{attrs:{name:t.tabTransitionName}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"基本信息"===t.activeName,expression:"activeName === '基本信息'"}],staticClass:"info"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,lg:8}},[t._v("\n              项目名称："),a("span",[t._v(t._s(t.selectGqxmName))])])],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("\n              项目联系人："),a("span",[t._v(t._s(t.tzxmInfo.项目联系人))])]),t._v(" "),a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("    \n              联系人信息："),a("span",[t._v(t._s(t.tzxmInfo.联系人信息))])])],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,lg:8}},[t._v("\n              投资规模：\n              "),a("count-to",{ref:"ctTzgm",staticClass:"money",attrs:{startVal:0,endVal:t.tzxmInfo.投资规模,duration:2600,decimals:2,autoplay:!1}}),t._v(" 亿元\n            ")],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[t._v("\n              投资回报率：\n              "),a("el-progress",{attrs:{"stroke-width":18,percentage:t.tzxmInfo.投资回报率}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("\n              是否重点项目："),a("span",[t._v(t._s(t.tzxmInfo.是否重点项目))])]),t._v(" "),a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("    \n              是否属于负面清单："),a("span",[t._v(t._s(t.tzxmInfo.是否属于负面清单))])])],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,lg:8}},[t._v("\n              累计收益：\n              "),a("count-to",{ref:"ctLjsy",staticClass:"money",attrs:{startVal:0,endVal:t.tzxmInfo.累计收益,duration:2600,decimals:2,autoplay:!1}}),t._v(" 亿元                \n            ")],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[t._v("\n              收益率：\n              "),a("el-progress",{attrs:{"stroke-width":18,percentage:t.tzxmInfo.收益率}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,lg:8}},[t._v("\n              累计分红：\n              "),a("count-to",{ref:"ctLjfh",staticClass:"money",attrs:{startVal:0,endVal:t.tzxmInfo.累计分红,duration:2600,decimals:2,autoplay:!1}}),t._v(" 亿元                                \n            ")],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[t._v("\n              分红率：\n              "),a("el-progress",{attrs:{"stroke-width":18,percentage:t.tzxmInfo.分红率}})],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[t._v("    \n              是否对合并范围外企业投资："),a("span",[t._v(t._s(t.tzxmInfo.是否对合并范围外企业投资))])])],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,lg:8}},[t._v("                \n              净资产收益率：\n              "),a("el-progress",{attrs:{"stroke-width":18,percentage:t.tzxmInfo.净资产收益率}})],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,lg:8}}),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,lg:8}})],1)],1)])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"详细信息",name:"详细信息"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("详细信息")]),t._v(" "),a("transition",{attrs:{name:t.tabTransitionName}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"详细信息"===t.activeName,expression:"activeName === '详细信息'"}],staticClass:"info"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("\n              领导人："),a("span",[t._v(t._s(t.tzxmInfo.领导人))])]),t._v(" "),a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("\n              所处行业："),a("span",[t._v(t._s(t.tzxmInfo.所处行业))])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("  \n              投资主体："),a("span",[t._v(t._s(t.tzxmInfo.投资主体))])]),t._v(" "),a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("\n              投资方式："),a("span",[t._v(t._s(t.tzxmInfo.投资方式))])])],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("\n              大阶段："),a("span",[t._v(t._s(t.tzxmInfo.大阶段))])]),t._v(" "),a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("   \n              项目性质："),a("span",[t._v(t._s(t.tzxmInfo.项目性质))])])],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("\n              金融或产业："),a("span",[t._v(t._s(t.tzxmInfo.金融或产业))])]),t._v(" "),a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("\n              企业编号："),a("span",[t._v(t._s(t.tzxmInfo.企业编号))])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("    \n              项目决定来源："),a("span",[t._v(t._s(t.tzxmInfo.项目决定来源))])]),t._v(" "),a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("\n              立项时间："),a("span",[t._v(t._s(t.tzxmInfo.立项时间))])])],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("\n              当年计划："),a("span",{staticClass:"money"},[t._v(t._s(t.tzxmInfo.当年计划))]),t._v(" 亿元\n            ")]),t._v(" "),a("el-col",{attrs:{xs:12,sm:12,lg:8}},[t._v("    \n              当年已投资："),a("span",{staticClass:"money"},[t._v(t._s(t.tzxmInfo.当年已投资))]),t._v(" 亿元         \n            ")])],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,lg:8}},[t._v("    \n              当前阶段："),a("span",[t._v(t._s(t.tzxmInfo.当前阶段))])]),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,lg:8}}),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,lg:8}})],1)],1)])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"其他信息",name:"其他信息"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("其他信息")]),t._v(" "),a("transition",{attrs:{name:t.tabTransitionName}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"其他信息"===t.activeName,expression:"activeName === '其他信息'"}],staticClass:"info",staticStyle:{"font-size":"1.5em"}},[t._v(" \n          其他信息，建设中...\n        ")])])],1)],1)],1)},staticRenderFns:[]},v=a("VU/8")(r,o,!1,null,null,null);s.default=v.exports}});