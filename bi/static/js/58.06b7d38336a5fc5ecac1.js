webpackJsonp([58],{np85:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("86zM"),n=a("r1bD"),r={name:"jzcsydbCharts",components:{MixLineBar:i.a},props:{chartId:{type:String,required:!0},tabName:{type:String,default:""},height:{type:String,default:"95%"},width:{type:String,default:"95%"}},data:function(){return{myTabName:"净资产",jzcsyDbOpt:{}}},computed:{},created:function(){this.refreshJzcsydb()},mounted:function(){},methods:{refreshJzcsydb:function(){var t=this;Object(n.L)({}).then(function(e){t.jzcsyDbOpt={legend:{data:["去年","今年","收益率"]},xAxis:{data:["第一季度","第二季度","第三季度","第四季度"]},yAxis:[{name:"(亿)",nameTextStyle:{color:"#fff"},type:"value",min:0,interval:300,axisLabel:{formatter:"{value}",color:"#fff"},axisLine:{lineStyle:{color:"#1f578a"}},splitLine:{show:!1}},{type:"value",min:0,max:1,interval:.2,axisLabel:{formatter:"{value} %",color:"#fff"},axisLine:{lineStyle:{color:"#1f578a"}},splitLine:{show:!1}}],series:[{name:"去年",type:"bar",barWidth:"25%",data:e.data[0].value,itemStyle:{normal:{color:"#378fd9"}}},{name:"今年",type:"bar",barWidth:"25%",data:e.data[1].value,itemStyle:{normal:{color:"#ce9e38"}}},{name:"收益率",type:"line",yAxisIndex:1,data:e.data[2].value,label:{normal:{show:!1,position:"top",color:"#d16da3"}},lineStyle:{normal:{width:2,color:"#d16da3"}},itemStyle:{normal:{color:"#d16da3"}}}]}})},clickItem:function(t){}},watch:{tabName:function(t,e){t===this.myTabName&&this.$refs.chart.resize()}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"100%"}},[e("mix-line-bar",{ref:"chart",attrs:{height:this.height,width:this.width,id:this.chartId,opt:this.jzcsyDbOpt},on:{up:this.clickItem}})],1)},staticRenderFns:[]},o=a("VU/8")(r,l,!1,null,null,null);e.default=o.exports}});