webpackJsonp([48],{tlvQ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("ivlf"),a={name:"SidebarItem",props:{routes:{type:Array},isNest:{type:Boolean,default:!1}},methods:{hasOneShowingChildren:function(e){return 1===e.filter(function(e){return!e.hidden}).length},generateTitle:i.a}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrapper"},[e._l(e.routes,function(t){return!t.hidden&&t.children?[!e.hasOneShowingChildren(t.children)||t.children[0].children||t.alwaysShow?n("el-submenu",{key:t.name,attrs:{index:t.name||t.path}},[n("template",{slot:"title"},[t.meta&&t.meta.icon?n("svg-icon",{attrs:{"icon-class":t.meta.icon}}):e._e(),e._v(" "),t.meta&&t.meta.title?n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.generateTitle(t.meta.title)))]):e._e()],1),e._v(" "),e._l(t.children,function(i){return i.hidden?e._e():[i.children&&i.children.length>0?n("sidebar-item",{key:i.path,staticClass:"nest-menu",attrs:{"is-nest":!0,routes:[i]}}):n("router-link",{key:i.name,attrs:{to:t.path+"/"+i.path}},[n("el-menu-item",{attrs:{index:t.path+"/"+i.path}},[i.meta&&i.meta.icon?n("svg-icon",{attrs:{"icon-class":i.meta.icon}}):e._e(),e._v(" "),i.meta&&i.meta.title?n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.generateTitle(i.meta.title)))]):e._e()],1)],1)]})],2):n("router-link",{key:t.children[0].name,attrs:{to:t.path+"/"+t.children[0].path}},[n("el-menu-item",{class:{"submenu-title-noDropdown":!e.isNest},attrs:{index:t.path+"/"+t.children[0].path}},[t.children[0].meta&&t.children[0].meta.icon?n("svg-icon",{attrs:{"icon-class":t.children[0].meta.icon}}):e._e(),e._v(" "),t.children[0].meta&&t.children[0].meta.title?n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.generateTitle(t.children[0].meta.title)))]):e._e()],1)],1)]:e._e()})],2)},staticRenderFns:[]},r=n("VU/8")(a,l,!1,null,null,null);t.default=r.exports}});