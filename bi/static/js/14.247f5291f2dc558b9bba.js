webpackJsonp([14],{EJtI:function(e,t){THREE.TrackballControls=function(e,t){var n=this,i={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.target=new THREE.Vector3;var o=new THREE.Vector3,r=i.NONE,s=i.NONE,a=new THREE.Vector3,c=new THREE.Vector2,h=new THREE.Vector2,l=new THREE.Vector3,u=0,d=new THREE.Vector2,p=new THREE.Vector2,m=0,f=0,v=new THREE.Vector2,E=new THREE.Vector2;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone();var g={type:"change"},y={type:"start"},w={type:"end"};this.handleResize=function(){if(this.domElement===document)this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight;else{var e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}};var b,x,O,T,C,S,M,R,j,I,H,D=(b=new THREE.Vector2,function(e,t){return b.set((e-n.screen.left)/n.screen.width,(t-n.screen.top)/n.screen.height),b}),k=function(){var e=new THREE.Vector2;return function(t,i){return e.set((t-.5*n.screen.width-n.screen.left)/(.5*n.screen.width),(n.screen.height+2*(n.screen.top-i))/n.screen.width),e}}();function L(e){!1!==n.enabled&&(window.removeEventListener("keydown",L),s=r,r===i.NONE&&(e.keyCode!==n.keys[i.ROTATE]||n.noRotate?e.keyCode!==n.keys[i.ZOOM]||n.noZoom?e.keyCode!==n.keys[i.PAN]||n.noPan||(r=i.PAN):r=i.ZOOM:r=i.ROTATE))}function P(e){!1!==n.enabled&&(r=s,window.addEventListener("keydown",L,!1))}function V(e){!1!==n.enabled&&(e.preventDefault(),e.stopPropagation(),r===i.NONE&&(r=e.button),r!==i.ROTATE||n.noRotate?r!==i.ZOOM||n.noZoom?r!==i.PAN||n.noPan||(v.copy(D(e.pageX,e.pageY)),E.copy(v)):(d.copy(D(e.pageX,e.pageY)),p.copy(d)):(h.copy(k(e.pageX,e.pageY)),c.copy(h)),document.addEventListener("mousemove",N,!1),document.addEventListener("mouseup",z,!1),n.dispatchEvent(y))}function N(e){!1!==n.enabled&&(e.preventDefault(),e.stopPropagation(),r!==i.ROTATE||n.noRotate?r!==i.ZOOM||n.noZoom?r!==i.PAN||n.noPan||E.copy(D(e.pageX,e.pageY)):p.copy(D(e.pageX,e.pageY)):(c.copy(h),h.copy(k(e.pageX,e.pageY))))}function z(e){!1!==n.enabled&&(e.preventDefault(),e.stopPropagation(),r=i.NONE,document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",z),n.dispatchEvent(w))}function A(e){if(!1!==n.enabled&&!0!==n.noZoom){switch(e.preventDefault(),e.stopPropagation(),e.deltaMode){case 2:d.y-=.025*e.deltaY;break;case 1:d.y-=.01*e.deltaY;break;default:d.y-=25e-5*e.deltaY}n.dispatchEvent(y),n.dispatchEvent(w)}}function _(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:r=i.TOUCH_ROTATE,h.copy(k(e.touches[0].pageX,e.touches[0].pageY)),c.copy(h);break;default:r=i.TOUCH_ZOOM_PAN;var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY;f=m=Math.sqrt(t*t+o*o);var s=(e.touches[0].pageX+e.touches[1].pageX)/2,a=(e.touches[0].pageY+e.touches[1].pageY)/2;v.copy(D(s,a)),E.copy(v)}n.dispatchEvent(y)}}function F(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:c.copy(h),h.copy(k(e.touches[0].pageX,e.touches[0].pageY));break;default:var t=e.touches[0].pageX-e.touches[1].pageX,i=e.touches[0].pageY-e.touches[1].pageY;f=Math.sqrt(t*t+i*i);var o=(e.touches[0].pageX+e.touches[1].pageX)/2,r=(e.touches[0].pageY+e.touches[1].pageY)/2;E.copy(D(o,r))}}function Y(e){if(!1!==n.enabled){switch(e.touches.length){case 0:r=i.NONE;break;case 1:r=i.TOUCH_ROTATE,h.copy(k(e.touches[0].pageX,e.touches[0].pageY)),c.copy(h)}n.dispatchEvent(w)}}function X(e){!1!==n.enabled&&e.preventDefault()}this.rotateCamera=(O=new THREE.Vector3,T=new THREE.Quaternion,C=new THREE.Vector3,S=new THREE.Vector3,M=new THREE.Vector3,R=new THREE.Vector3,function(){R.set(h.x-c.x,h.y-c.y,0),(x=R.length())?(a.copy(n.object.position).sub(n.target),C.copy(a).normalize(),S.copy(n.object.up).normalize(),M.crossVectors(S,C).normalize(),S.setLength(h.y-c.y),M.setLength(h.x-c.x),R.copy(S.add(M)),O.crossVectors(R,a).normalize(),x*=n.rotateSpeed,T.setFromAxisAngle(O,x),a.applyQuaternion(T),n.object.up.applyQuaternion(T),l.copy(O),u=x):!n.staticMoving&&u&&(u*=Math.sqrt(1-n.dynamicDampingFactor),a.copy(n.object.position).sub(n.target),T.setFromAxisAngle(l,u),a.applyQuaternion(T),n.object.up.applyQuaternion(T)),c.copy(h)}),this.zoomCamera=function(){var e;r===i.TOUCH_ZOOM_PAN?(e=m/f,m=f,a.multiplyScalar(e)):(1!==(e=1+(p.y-d.y)*n.zoomSpeed)&&e>0&&a.multiplyScalar(e),n.staticMoving?d.copy(p):d.y+=(p.y-d.y)*this.dynamicDampingFactor)},this.panCamera=(j=new THREE.Vector2,I=new THREE.Vector3,H=new THREE.Vector3,function(){j.copy(E).sub(v),j.lengthSq()&&(j.multiplyScalar(a.length()*n.panSpeed),H.copy(a).cross(n.object.up).setLength(j.x),H.add(I.copy(n.object.up).setLength(j.y)),n.object.position.add(H),n.target.add(H),n.staticMoving?v.copy(E):v.add(j.subVectors(E,v).multiplyScalar(n.dynamicDampingFactor)))}),this.checkDistances=function(){n.noZoom&&n.noPan||(a.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,a.setLength(n.maxDistance)),d.copy(p)),a.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,a.setLength(n.minDistance)),d.copy(p)))},this.update=function(){a.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,a),n.checkDistances(),n.object.lookAt(n.target),o.distanceToSquared(n.object.position)>1e-6&&(n.dispatchEvent(g),o.copy(n.object.position))},this.reset=function(){r=i.NONE,s=i.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),a.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(g),o.copy(n.object.position)},this.dispose=function(){this.domElement.removeEventListener("contextmenu",X,!1),this.domElement.removeEventListener("mousedown",V,!1),this.domElement.removeEventListener("wheel",A,!1),this.domElement.removeEventListener("touchstart",_,!1),this.domElement.removeEventListener("touchend",Y,!1),this.domElement.removeEventListener("touchmove",F,!1),document.removeEventListener("mousemove",N,!1),document.removeEventListener("mouseup",z,!1),window.removeEventListener("keydown",L,!1),window.removeEventListener("keyup",P,!1)},this.domElement.addEventListener("contextmenu",X,!1),this.domElement.addEventListener("mousedown",V,!1),this.domElement.addEventListener("wheel",A,!1),this.domElement.addEventListener("touchstart",_,!1),this.domElement.addEventListener("touchend",Y,!1),this.domElement.addEventListener("touchmove",F,!1),window.addEventListener("keydown",L,!1),window.addEventListener("keyup",P,!1),this.handleResize(),this.update()},THREE.TrackballControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.TrackballControls.prototype.constructor=THREE.TrackballControls},Hcub:function(e,t){void 0===Date.now&&(Date.now=function(){return(new Date).valueOf()});var n,i,o=o||(n=[],{REVISION:"8",getAll:function(){return n},removeAll:function(){n=[]},add:function(e){n.push(e)},remove:function(e){var t=n.indexOf(e);-1!==t&&n.splice(t,1)},update:function(e){if(0===n.length)return!1;var t=0,i=n.length;for(e=void 0!==e?e:Date.now();t<i;)n[t].update(e)?t++:(n.splice(t,1),i--);return!0}});o.Tween=function(e){var t=e,n={},i={},r=1e3,s=0,a=null,c=o.Easing.Linear.None,h=o.Interpolation.Linear,l=[],u=null,d=!1,p=null,m=null;this.to=function(e,t){return void 0!==t&&(r=t),i=e,this},this.start=function(e){for(var r in o.add(this),d=!1,a=void 0!==e?e:Date.now(),a+=s,i)if(null!==t[r]&&r in t){if(i[r]instanceof Array){if(0===i[r].length)continue;i[r]=[t[r]].concat(i[r])}n[r]=t[r]}return this},this.stop=function(){return o.remove(this),this},this.delay=function(e){return s=e,this},this.easing=function(e){return c=e,this},this.interpolation=function(e){return h=e,this},this.chain=function(){return l=arguments,this},this.onStart=function(e){return u=e,this},this.onUpdate=function(e){return p=e,this},this.onComplete=function(e){return m=e,this},this.update=function(e){if(e<a)return!0;!1===d&&(null!==u&&u.call(t),d=!0);var o=(e-a)/r,s=c(o=o>1?1:o);for(var f in n){var v=n[f],E=i[f];E instanceof Array?t[f]=h(E,s):t[f]=v+(E-v)*s}if(null!==p&&p.call(t,s),1==o){null!==m&&m.call(t);for(var g=0,y=l.length;g<y;g++)l[g].start(e);return!1}return!0}},o.Easing={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return.5*(1-Math.cos(Math.PI*e))}},Exponential:{In:function(e){return 0===e?0:Math.pow(1024,e-1)},Out:function(e){return 1===e?1:1-Math.pow(2,-10*e)},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){var t,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/.4))},Out:function(e){var t,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*e)*Math.sin((e-t)*(2*Math.PI)/.4)+1)},InOut:function(e){var t,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),(e*=2)<1?n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/.4)*.5+1)}},Back:{In:function(e){var t=1.70158;return e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?e*e*((t+1)*e-t)*.5:.5*((e-=2)*e*((t+1)*e+t)+2)}},Bounce:{In:function(e){return 1-o.Easing.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?.5*o.Easing.Bounce.In(2*e):.5*o.Easing.Bounce.Out(2*e-1)+.5}}},o.Interpolation={Linear:function(e,t){var n=e.length-1,i=n*t,r=Math.floor(i),s=o.Interpolation.Utils.Linear;return t<0?s(e[0],e[1],i):t>1?s(e[n],e[n-1],n-i):s(e[r],e[r+1>n?n:r+1],i-r)},Bezier:function(e,t){var n,i=0,r=e.length-1,s=Math.pow,a=o.Interpolation.Utils.Bernstein;for(n=0;n<=r;n++)i+=s(1-t,r-n)*s(t,n)*e[n]*a(r,n);return i},CatmullRom:function(e,t){var n=e.length-1,i=n*t,r=Math.floor(i),s=o.Interpolation.Utils.CatmullRom;return e[0]===e[n]?(t<0&&(r=Math.floor(i=n*(1+t))),s(e[(r-1+n)%n],e[r],e[(r+1)%n],e[(r+2)%n],i-r)):t<0?e[0]-(s(e[0],e[0],e[1],e[1],-i)-e[0]):t>1?e[n]-(s(e[n],e[n],e[n-1],e[n-1],i-n)-e[n]):s(e[r?r-1:0],e[r],e[n<r+1?n:r+1],e[n<r+2?n:r+2],i-r)},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var n=o.Interpolation.Utils.Factorial;return n(e)/n(t)/n(e-t)},Factorial:(i=[1],function(e){var t,n=1;if(i[e])return i[e];for(t=e;t>1;t--)n*=t;return i[e]=n}),CatmullRom:function(e,t,n,i,o){var r=.5*(n-e),s=.5*(i-t),a=o*o;return(2*t-2*n+r+s)*(o*a)+(-3*t+3*n-2*r-s)*a+r*o+t}}},e.exports=o},LgQr:function(e,t,n){"use strict";var i=n("Ml+6"),o=n("Hcub"),r=n("VIyX"),s=n("wjaC"),a=n("E3Gb");window.THREE=i,n("EJtI"),n("gDL5");var c={name:"threeHeroic",mixins:[r.a,s.a],props:{id:{type:String,default:"threeHeroic"}},data:function(){return{table:[],shape:"helix",camera:null,camera2:null,scene:null,scene2:null,renderer:null,renderer2:null,controls:null,clock:null,group:null,objects:[],targets:{table:[],sphere:[],helix:[],grid:[]},radius:600,theta:0,rotation:0}},created:function(){},mounted:function(){var e=this;Object(a.e)().then(function(t){e.table=t.data,e.init(),e.animate(),setInterval(function(){e.transform(e.targets[["sphere","helix","grid"][Math.floor(2*Math.random())]],2e3)},15e3)})},methods:{init:function(){this.initCamera(),this.initScene(),this.initLight(),this.initModel(),this.initRender(),this.initControls()},initCamera:function(){var e=this.$el.clientWidth,t=this.$el.clientHeight;this.camera=new i.PerspectiveCamera(40,e/t,1,1e4),this.camera.position.z=3e3,this.camera2=new i.PerspectiveCamera(40,e/t,1,1e4),this.camera2.position.z=3e3},initScene:function(){this.scene=new i.Scene,this.scene2=new i.Scene,this.group=new i.Group},initRender:function(){var e=this.$el.clientWidth,t=this.$el.clientHeight;this.renderer=new i.CSS3DRenderer,this.renderer.setSize(e,t),document.getElementById(this.id).appendChild(this.renderer.domElement),this.renderer2=new i.CSS3DRenderer,this.renderer2.setSize(e,t),this.renderer2.domElement.style.position="absolute",this.renderer2.domElement.style.top=0,this.renderer2.domElement.style.zIndex=-1,document.getElementById(this.id).appendChild(this.renderer2.domElement)},initControls:function(){this.controls=new i.TrackballControls(this.camera,this.renderer.domElement),this.controls.rotateSpeed=.5,this.controls.minDistance=500,this.controls.maxDistance=6e3,this.controls.addEventListener("change",this.render),this.clock=new i.Clock,this.transform(this.targets[this.shape],2e3)},initLight:function(){},initModel:function(){for(var e=0;e<this.table.length;e++){var t=document.createElement("div");t.onclick=this.onMouseClick,t.name=this.table[e].姓名,t.className="element",t.style.backgroundColor="rgba(0,127,127,"+(.5*Math.random()+.25)+")";var n=document.createElement("div");n.className="number",n.textContent=e+1,t.appendChild(n);var o=document.createElement("div");o.className="name",o.textContent=this.table[e].姓名,t.appendChild(o);var r=document.createElement("div");r.className="sex",r.textContent=this.table[e].性别,t.appendChild(r);var s=document.createElement("div");s.className="job",s.textContent=this.table[e].职级,t.appendChild(s);var a=new i.CSS3DObject(t);a.position.x=4e3*Math.random()-2e3,a.position.y=4e3*Math.random()-2e3,a.position.z=4e3*Math.random()-2e3,this.scene.add(a),this.objects.push(a),(a=new i.Object3D).position.x=140*this.table[e+3]-1330,a.position.y=-180*this.table[e+4]+990,this.targets.table.push(a)}for(var c=new i.Vector3,h=0,l=this.objects.length;h<l;h++){var u=Math.acos(2*h/l-1),d=Math.sqrt(l*Math.PI)*u,p=new i.Object3D;p.position.setFromSphericalCoords(800,u,d),c.copy(p.position).multiplyScalar(2),p.lookAt(c),this.targets.sphere.push(p)}c=new i.Vector3;for(var m=0,f=this.objects.length;m<f;m++){var v=.25*m+Math.PI/4,E=-10*m+450,g=new i.Object3D;g.position.setFromCylindricalCoords(900,v,E),c.x=2*g.position.x,c.y=g.position.y,c.z=2*g.position.z,g.lookAt(c),this.targets.helix.push(g)}for(var y=0;y<this.objects.length;y++){var w=new i.Object3D;w.position.x=y%5*400-800,w.position.y=-Math.floor(y/5)%5*400+800,w.position.z=500*Math.floor(y/25),this.targets.grid.push(w)}},animate:function(){requestAnimationFrame(this.animate),o.update();var e=this.clock.getDelta();this.controls.update(e),this.render()},render:function(){this.scene.rotation.y-=.002,this.renderer.render(this.scene,this.camera),this.renderer2.render(this.scene2,this.camera2)},transform:function(e,t){for(var n=0;n<this.objects.length;n++){var i=this.objects[n],r=e[n];new o.Tween(i.position).to({x:r.position.x,y:r.position.y,z:r.position.z},Math.random()*t+t).easing(o.Easing.Exponential.InOut).start(),new o.Tween(i.rotation).to({x:r.rotation.x,y:r.rotation.y,z:r.rotation.z},Math.random()*t+t).easing(o.Easing.Exponential.InOut).start()}new o.Tween(this).to({},2*t).onUpdate(this.render).start()},onMouseClick:function(e){var t=this,n="element"===e.target.className?e.target.name:e.target.parentElement.name;console.log(e,n),this.scene.children.forEach(function(e){if(e.element.name===n){1===t.scene2.children.length&&t.scene2.remove(t.scene2.children[0]);var r=document.createElement("div");r.name=a,r.onclick=t.onMouseClick2,r.className="element-detail",r.style.backgroundColor="rgba(0,127,127,0.8)";var s=document.createElement("img");s.src="/src/assets/default-theme/img/mx.jpg",r.appendChild(s);var a=document.createElement("div");a.className="name",a.textContent=e.element.children[1].textContent,r.appendChild(a);var c=document.createElement("div");c.className="summary",c.textContent="昔人已乘黄鹤去，此地空余黄鹤楼。黄鹤一去不复返，白云千载空悠悠。晴川历历汉阳树，芳草萋萋鹦鹉洲。日暮乡关何处是？烟波江上使人愁。",r.appendChild(c);var h=new i.CSS3DObject(r);t.scene2.add(h),t.renderer2.domElement.style.zIndex=1,h.position.x=0,h.position.y=0,h.position.z=0,new o.Tween(h.position).to({x:0,y:0,z:1e3},2e3).easing(o.Easing.Sinusoidal.InOut).start(),new o.Tween(h.scale).to({x:6,y:6,z:6},2e3).easing(o.Easing.Sinusoidal.InOut).start(),new o.Tween(t).to({},4e3).onUpdate(t.render).start()}})},onMouseClick2:function(e){if(1===this.scene2.children.length){var t=this.scene2.children[0];new o.Tween(t.position).to({x:0,y:0,z:0},2e3).easing(o.Easing.Sinusoidal.InOut).start(),new o.Tween(t.scale).to({x:0,y:0,z:0},2e3).easing(o.Easing.Sinusoidal.InOut).start(),new o.Tween(this).to({},4e3).onUpdate(this.render).start(),this.renderer2.domElement.style.zIndex=-1}}}},h={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticStyle:{width:"100%",height:"100%",position:"relative"},attrs:{id:this.id}})},staticRenderFns:[]},l=n("VU/8")(c,h,!1,null,null,null);t.a=l.exports},b9OK:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"",""])},gDL5:function(e,t){THREE.CSS3DObject=function(e){THREE.Object3D.call(this),this.element=e,this.element.style.position="absolute",this.addEventListener("removed",function(){null!==this.element.parentNode&&this.element.parentNode.removeChild(this.element)})},THREE.CSS3DObject.prototype=Object.create(THREE.Object3D.prototype),THREE.CSS3DObject.prototype.constructor=THREE.CSS3DObject,THREE.CSS3DSprite=function(e){THREE.CSS3DObject.call(this,e)},THREE.CSS3DSprite.prototype=Object.create(THREE.CSS3DObject.prototype),THREE.CSS3DSprite.prototype.constructor=THREE.CSS3DSprite,THREE.CSS3DRenderer=function(){var e,t,n,i;console.log("THREE.CSS3DRenderer",THREE.REVISION);var o=new THREE.Matrix4,r={camera:{fov:0,style:""},objects:new WeakMap},s=document.createElement("div");s.style.overflow="hidden",this.domElement=s;var a=document.createElement("div");a.style.WebkitTransformStyle="preserve-3d",a.style.transformStyle="preserve-3d",s.appendChild(a);var c=/Trident/i.test(navigator.userAgent);function h(e){return Math.abs(e)<1e-10?0:e}function l(e){var t=e.elements;return"matrix3d("+h(t[0])+","+h(-t[1])+","+h(t[2])+","+h(t[3])+","+h(t[4])+","+h(-t[5])+","+h(t[6])+","+h(t[7])+","+h(t[8])+","+h(-t[9])+","+h(t[10])+","+h(t[11])+","+h(t[12])+","+h(-t[13])+","+h(t[14])+","+h(t[15])+")"}function u(e,t){var o=e.elements,r="matrix3d("+h(o[0])+","+h(o[1])+","+h(o[2])+","+h(o[3])+","+h(-o[4])+","+h(-o[5])+","+h(-o[6])+","+h(-o[7])+","+h(o[8])+","+h(o[9])+","+h(o[10])+","+h(o[11])+","+h(o[12])+","+h(o[13])+","+h(o[14])+","+h(o[15])+")";return c?"translate(-50%,-50%)translate("+n+"px,"+i+"px)"+t+r:"translate(-50%,-50%)"+r}this.getSize=function(){return{width:e,height:t}},this.setSize=function(o,r){n=(e=o)/2,i=(t=r)/2,s.style.width=o+"px",s.style.height=r+"px",a.style.width=o+"px",a.style.height=r+"px"};var d,p,m=(d=new THREE.Vector3,p=new THREE.Vector3,function(e,t){return d.setFromMatrixPosition(e.matrixWorld),p.setFromMatrixPosition(t.matrixWorld),d.distanceToSquared(p)});function f(e){for(var t=function(e){var t=[];return e.traverse(function(e){e instanceof THREE.CSS3DObject&&t.push(e)}),t}(e).sort(function(e,t){return r.objects.get(e).distanceToCameraSquared-r.objects.get(t).distanceToCameraSquared}),n=t.length,i=0,o=t.length;i<o;i++)t[i].element.style.zIndex=n-i}this.render=function(e,t){var h=t.projectionMatrix.elements[5]*i;r.camera.fov!==h&&(t.isPerspectiveCamera&&(s.style.WebkitPerspective=h+"px",s.style.perspective=h+"px"),r.camera.fov=h),e.updateMatrixWorld(),null===t.parent&&t.updateMatrixWorld();var d=t.isOrthographicCamera?"scale("+h+")"+l(t.matrixWorldInverse):"translateZ("+h+"px)"+l(t.matrixWorldInverse),p=d+"translate("+n+"px,"+i+"px)";r.camera.style===p||c||(a.style.WebkitTransform=p,a.style.transform=p,r.camera.style=p),function e(t,n,i){if(t instanceof THREE.CSS3DObject){var s;t instanceof THREE.CSS3DSprite?(o.copy(n.matrixWorldInverse),o.transpose(),o.copyPosition(t.matrixWorld),o.scale(t.scale),o.elements[3]=0,o.elements[7]=0,o.elements[11]=0,o.elements[15]=1,s=u(o,i)):s=u(t.matrixWorld,i);var h=t.element,l=r.objects.get(t);if(void 0===l||l!==s){h.style.WebkitTransform=s,h.style.transform=s;var d={style:s};c&&(d.distanceToCameraSquared=m(n,t)),r.objects.set(t,d)}h.parentNode!==a&&a.appendChild(h)}for(var p=0,f=t.children.length;p<f;p++)e(t.children[p],n,i)}(e,t,d),c&&f(e)}}},qjTf:function(e,t,n){var i=n("b9OK");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("5526cebd",i,!0)},"sU/c":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Ml+6"),o=n("VIyX"),r=n("wjaC"),s={name:"threeVideo2",mixins:[o.a,r.a],props:{id:{type:String,default:"threeVideo2"}},data:function(){return{camera:null,scene:null,renderer:null,geometry:null,material:null,mouseX:0,mouseY:0,cube_count:0,meshes:[],materials:[],xgrid:20,ygrid:10,h:null,counter:1,isOut:!0,radius:600,theta:0}},created:function(){},mounted:function(){this.init(),this.animate()},methods:{init:function(){this.initRender(),this.initCamera(),this.initScene(),this.initModel()},initCamera:function(){var e=this.$el.clientWidth,t=this.$el.clientHeight;this.camera=new i.PerspectiveCamera(40,e/t,1,1e4),this.camera.position.z=500},initScene:function(){this.scene=new i.Scene},initRender:function(){var e=this.$el.clientWidth,t=this.$el.clientHeight;this.renderer=new i.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t),this.renderer.setClearColor(new i.Color(0),0),this.renderer.shadowMap.enabled=!0,document.getElementById(this.id).appendChild(this.renderer.domElement)},initLight:function(){this.scene.add(new i.AmbientLight(4473924));var e=new i.DirectionalLight(16777215);e.position.set(0,20,20),e.castShadow=!0,e.shadow.camera.top=10,e.shadow.camera.bottom=-10,e.shadow.camera.left=-10,e.shadow.camera.right=10,e.castShadow=!0,this.scene.add(e)},initModel:function(){var e,t,n,o,r,s,a,c,h,l=document.getElementById("video"),u=new i.VideoTexture(l);for(u.minFilter=i.LinearFilter,u.magFilter=i.LinearFilter,u.format=i.RGBFormat,n=1/this.xgrid,o=1/this.ygrid,c=480/this.xgrid,h=204/this.ygrid,this.cube_count=0,e=0;e<this.xgrid;e++)for(t=0;t<this.ygrid;t++){r=e,s=t,a=new i.BoxBufferGeometry(c,h,c),this.change_uvs(a,n,o,r,s),this.materials[this.cube_count]=new i.MeshBasicMaterial({color:16777215,map:u}),this.material=this.materials[this.cube_count];var d=new i.Mesh(a,this.material);d.position.x=(e-this.xgrid/2)*c,d.position.y=(t-this.ygrid/2)*h,d.position.z=0,d.scale.x=d.scale.y=d.scale.z=1,this.scene.add(d),d.dx=.001*(.5-Math.random()),d.dy=.001*(.5-Math.random()),this.meshes[this.cube_count]=d,this.cube_count+=1}},animate:function(){requestAnimationFrame(this.animate),this.render()},render:function(){if(this.theta+=.2,this.camera.position.x=this.radius*Math.sin(i.Math.degToRad(this.theta)),this.camera.position.z=this.radius*Math.cos(i.Math.degToRad(this.theta)),this.camera.lookAt(this.scene.position),this.counter%1e3>800)for(var e=0;e<this.cube_count;e++)this.mesh=this.meshes[e],this.mesh.rotation.x+=30*this.mesh.dx,this.mesh.rotation.y+=30*this.mesh.dy,this.mesh.position.x+=1e3*this.mesh.dx,this.mesh.position.y+=1e3*this.mesh.dy,this.mesh.position.z+=2e3*this.mesh.dx;if(this.counter%1e3==0){for(var t=0;t<this.cube_count;t++)this.mesh=this.meshes[t],this.mesh.dx*=-1,this.mesh.dy*=-1;this.isOut?this.counter=750:this.counter=1,this.isOut=!this.isOut}this.counter+=.5,this.renderer.render(this.scene,this.camera)},change_uvs:function(e,t,n,i,o){for(var r=e.attributes.uv.array,s=0;s<=48;s+=2)r[s]=(r[s]+i)*t,r[s+1]=(r[s+1]+o)*n;var a=r[40],c=r[41],h=r[42],l=r[43],u=r[44],d=r[45],p=r[46],m=r[47];r[40]=h,r[41]=l,r[42]=a,r[43]=c,r[44]=p,r[45]=m,r[46]=u,r[47]=d}}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{width:"100%",height:"100%",position:"relative"},attrs:{id:this.id}},[t("video",{staticStyle:{display:"none",position:"absolute"},attrs:{id:"video",autoplay:"",loop:"",muted:"",crossOrigin:"anonymous","webkit-playsinline":""},domProps:{muted:!0}},[t("source",{attrs:{src:"http://localhost/bi/movies/Big_Buck_Bunny_small.ogv",type:'video/ogg; codecs="theora, vorbis"'}}),this._v(" "),t("source",{attrs:{src:"https://threejs.org/examples/textures/sintel.mp4",type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'}})])])},staticRenderFns:[]},c={name:"dpthree",components:{ThreeVideo2:n("VU/8")(s,a,!1,null,null,null).exports,ThreeHeroic:n("LgQr").a},data:function(){return{showOne:!1}},computed:{},created:function(){},mounted:function(){this.showOne=!0}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dp-container"},[t("el-row",{staticStyle:{height:"100%"},attrs:{gutter:10}},[t("el-col",{staticStyle:{height:"100%"},attrs:{xs:24,sm:24,lg:24}},[t("transition",{attrs:{name:"om-one"}},[this.showOne?t("div",{staticStyle:{height:"100%"}},[t("three-heroic")],1):this._e()])],1)],1)],1)},staticRenderFns:[]};var l=n("VU/8")(c,h,!1,function(e){n("qjTf")},"data-v-68a55982",null);t.default=l.exports}});