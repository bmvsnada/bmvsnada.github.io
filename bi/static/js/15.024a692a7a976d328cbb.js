webpackJsonp([15],{blAP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("+9en"),i=a("LBFZ"),l=a("r1bD");function n(t,e,a){this.$store.dispatch("setDialog2Title","项目详情"),this.$store.dispatch("setDialog2Visible",!0)}var c={name:"tzjedbDetail",components:{BasicTable:i.a,TzjefbCharts:s.default},data:function(){return{columns:[{text:"项目名称",value:"项目名称"},{text:"项目联系人",value:"项目联系人",width:150},{text:"年度目标",value:"年度目标",width:100},{text:"当前阶段",value:"当前阶段",width:150}],tableData:[],tableRowClickFunc:n,listLoading:!1}},computed:{selectTzjefb:function(){return this.$store.getters.selectTzjefb}},watch:{selectTzjefb:function(t,e){this.refreshTzxmList()}},created:function(){this.refreshTzxmList()},methods:{refreshTzxmList:function(){var t=this;this.listLoading=!0;Object(l.o)({dfParas:""}).then(function(e){t.tableData=e.data,t.listLoading=!1})}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dialog-container"},[e("div",{staticClass:"left"},[e("tzjefb-charts",{attrs:{chartId:"tzjefbChart2",height:"500px"}})],1),this._v(" "),e("div",{staticClass:"right"},[e("basic-table",{attrs:{tableData:this.tableData,columns:this.columns,height:560,tableRowClickFunc:this.tableRowClickFunc}})],1)])},staticRenderFns:[]},o=a("VU/8")(c,r,!1,null,null,null);e.default=o.exports}});