webpackJsonp([53],{optw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("PKkI"),i=a("LRLZ");function l(e,t,a){this.$store.dispatch("setDialogTitle","重点项目"),this.$store.dispatch("setSelectXmName",e.项目名称),this.$store.dispatch("setDialogVisible",!0)}var r={name:"gzwkhTable",components:{RollTable:s.a},props:{},data:function(){return{years:[],gzwkhColumns:[{text:"项目名称",value:"项目名称",showOverflowTooltip:!0},{text:"年度目标",value:"年度目标",align:"center",showOverflowTooltip:!0,width:130},{text:"季度推进进度",value:"季度推进进度",showOverflowTooltip:!0,align:"center",width:120}],zdxmData:[],Loading:!1,tableRowClickFunc:l}},computed:{selectZdxmYear:{get:function(){return this.$store.getters.selectZdxmYear},set:function(e){this.$store.dispatch("setSelectZdxmYear",e)}}},created:function(){this.refreshZdxmYear()},mounted:function(){},beforeDestroy:function(){},methods:{refreshZdxmYear:function(){var e=this;Object(i.D)({}).then(function(t){e.years=t.data,""!==e.selectZdxmYear&&e.refreshZdxm(),t.data.length>0&&(e.selectZdxmYear=""===e.selectZdxmYear?t.data[0].项目类别:e.selectZdxmYear)})},refreshZdxm:function(){var e=this;this.Loading=!0;var t={dfParas:"XMLB:"+this.selectZdxmYear};Object(i.B)(t).then(function(t){e.zdxmData=t.data,e.Loading=!1})}},watch:{selectZdxmYear:function(e,t){this.refreshZdxm()}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"100%"}},[a("div",{staticStyle:{"text-align":"right","margin-right":"50px","margin-bottom":"5px"}},[a("el-select",{staticStyle:{width:"120px"},attrs:{size:"mini",placeholder:"请选择"},model:{value:e.selectZdxmYear,callback:function(t){e.selectZdxmYear=t},expression:"selectZdxmYear"}},e._l(e.years,function(e){return a("el-option",{key:e.项目类别,attrs:{label:e.项目类别,value:e.项目类别}})}))],1),e._v(" "),a("div",{staticStyle:{height:"80%",padding:"0 35px 10px 10px"}},[a("roll-table",{attrs:{data:e.zdxmData,columns:e.gzwkhColumns,tableRowClickFunc:e.tableRowClickFunc,listLoading:e.Loading}})],1)])},staticRenderFns:[]},o=a("VU/8")(r,n,!1,null,null,null);t.default=o.exports}});