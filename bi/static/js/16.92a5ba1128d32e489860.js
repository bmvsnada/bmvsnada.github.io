webpackJsonp([16],{"/fpj":function(e,t,i){var s=i("q/aR");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i("rjj0")("df21d2ba",s,!0)},bm58:function(e,t,i){"use strict";var s=i("Ml+6"),n=i("VIyX"),r=i("wjaC");window.THREE=s,i("FtpA"),i("Ja3O"),i("ZPCp"),i("RoYz"),i("uCu7"),i("72aK"),i("Goja"),i("bUd7"),i("iz3A");var a={name:"threeVideo2",mixins:[n.a,r.a],props:{id:{type:String,default:"threeVideo2"}},data:function(){return{camera:null,scene:null,renderer:null,geometry:null,material:null,composer:null,mouseX:0,mouseY:0,cube_count:0,meshes:[],materials:[],xgrid:20,ygrid:10,h:null,counter:1,isOut:!0,radius:600,theta:0}},created:function(){},mounted:function(){this.init(),this.animate()},methods:{init:function(){this.initRender(),this.initCamera(),this.initScene(),this.initModel()},initCamera:function(){var e=this.$el.clientWidth,t=this.$el.clientHeight;this.camera=new s.PerspectiveCamera(40,e/t,1,1e4),this.camera.position.z=500},initScene:function(){this.scene=new s.Scene},initRender:function(){var e=this.$el.clientWidth,t=this.$el.clientHeight;this.renderer=new s.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t),this.renderer.setClearColor(new s.Color(0),0),this.renderer.shadowMap.enabled=!0,document.getElementById(this.id).appendChild(this.renderer.domElement)},initLight:function(){this.scene.add(new s.AmbientLight(4473924));var e=new s.DirectionalLight(16777215);e.position.set(0,20,20),e.castShadow=!0,e.shadow.camera.top=10,e.shadow.camera.bottom=-10,e.shadow.camera.left=-10,e.shadow.camera.right=10,e.castShadow=!0,this.scene.add(e)},initModel:function(){var e,t,i,n,r,a,o,h,c,d=document.getElementById("video"),u=new s.VideoTexture(d);for(u.minFilter=s.LinearFilter,u.magFilter=s.LinearFilter,u.format=s.RGBFormat,i=1/this.xgrid,n=1/this.ygrid,h=480/this.xgrid,c=204/this.ygrid,this.cube_count=0,e=0;e<this.xgrid;e++)for(t=0;t<this.ygrid;t++){r=e,a=t,o=new s.BoxBufferGeometry(h,c,h),this.change_uvs(o,i,n,r,a),this.materials[this.cube_count]=new s.MeshBasicMaterial({color:16777215,map:u}),this.material=this.materials[this.cube_count];var l=new s.Mesh(o,this.material);l.position.x=(e-this.xgrid/2)*h,l.position.y=(t-this.ygrid/2)*c,l.position.z=0,l.scale.x=l.scale.y=l.scale.z=1,this.scene.add(l),l.dx=.001*(.5-Math.random()),l.dy=.001*(.5-Math.random()),this.meshes[this.cube_count]=l,this.cube_count+=1}this.renderer.autoClear=!1;var m=new s.RenderPass(this.scene,this.camera),p=new s.FilmPass(.8,.125,256,!1);p.renderToScreen=!0,this.composer=new s.EffectComposer(this.renderer),this.composer.addPass(m),this.composer.addPass(p)},animate:function(){requestAnimationFrame(this.animate),this.render()},render:function(){if(this.theta+=.2,this.camera.position.x=this.radius*Math.sin(s.Math.degToRad(this.theta)),this.camera.position.z=this.radius*Math.cos(s.Math.degToRad(this.theta)),this.camera.lookAt(this.scene.position),this.counter%1e3>800)for(var e=0;e<this.cube_count;e++)this.mesh=this.meshes[e],this.mesh.rotation.x+=30*this.mesh.dx,this.mesh.rotation.y+=30*this.mesh.dy,this.mesh.position.x+=1e3*this.mesh.dx,this.mesh.position.y+=1e3*this.mesh.dy,this.mesh.position.z+=2e3*this.mesh.dx;if(this.counter%1e3==0){for(var t=0;t<this.cube_count;t++)this.mesh=this.meshes[t],this.mesh.dx*=-1,this.mesh.dy*=-1;this.isOut?this.counter=750:this.counter=1,this.isOut=!this.isOut}this.counter+=.5,this.renderer.clear(),this.composer.render()},change_uvs:function(e,t,i,s,n){for(var r=e.attributes.uv.array,a=0;a<=48;a+=2)r[a]=(r[a]+s)*t,r[a+1]=(r[a+1]+n)*i;var o=r[40],h=r[41],c=r[42],d=r[43],u=r[44],l=r[45],m=r[46],p=r[47];r[40]=c,r[41]=d,r[42]=o,r[43]=h,r[44]=m,r[45]=p,r[46]=u,r[47]=l}}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{width:"100%",height:"100%",position:"relative"},attrs:{id:this.id}},[t("video",{staticStyle:{display:"none",position:"absolute"},attrs:{id:"video",autoplay:"",loop:"",muted:"",crossOrigin:"anonymous","webkit-playsinline":""},domProps:{muted:!0}},[t("source",{attrs:{src:"https://threejs.org/examples/textures/sintel.ogv",type:'video/ogg; codecs="theora, vorbis"'}}),this._v(" "),t("source",{attrs:{src:"https://threejs.org/examples/textures/sintel.mp4",type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'}})])])},staticRenderFns:[]},h=i("VU/8")(a,o,!1,null,null,null);t.a=h.exports},"q/aR":function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"",""])},wCcQ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("A5yn"),n=i("bm58"),r={name:"dptwo",components:{ThreeVideo:s.a,ThreeVideo2:n.a},data:function(){return{showOne:!1}},computed:{},created:function(){},mounted:function(){this.showOne=!0}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dp-container"},[t("el-row",{staticStyle:{height:"100%"},attrs:{gutter:10}},[t("el-col",{staticStyle:{height:"100%"},attrs:{xs:24,sm:24,lg:24}},[t("transition",{attrs:{name:"om-one"}},[this.showOne?t("div",{staticStyle:{height:"100%"}},[t("three-video2")],1):this._e()])],1)],1)],1)},staticRenderFns:[]};var o=i("VU/8")(r,a,!1,function(e){i("/fpj")},"data-v-6f46ed30",null);t.default=o.exports}});