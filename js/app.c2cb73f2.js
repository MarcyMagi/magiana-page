(function(e){function t(t){for(var o,i,c=t[0],u=t[1],s=t[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/magiana-page/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},"2ba7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("830f"),r=n("5c40"),a={id:"body"};function i(e,t){var n=Object(r["u"])("router-view");return Object(r["q"])(),Object(r["e"])("div",a,[Object(r["h"])(n)])}var c={data:function(){return{}},mounted:function(){var e=n("2222"),t=document.getElementById("wave");e.setup(t),this.$nextTick((function(){}))}};n("9cdc");c.render=i;var u=c,s=n("8c4f"),f={class:"body-container"};function p(e,t){var n=Object(r["u"])("load-screen");return Object(r["q"])(),Object(r["e"])("div",f,[Object(r["h"])(n)])}var d=Object(r["B"])("data-v-1ff98504");Object(r["t"])("data-v-1ff98504");var l={resize:"",id:"load"};Object(r["r"])();var v=d((function(e,t){return Object(r["q"])(),Object(r["e"])("canvas",l)})),h={data:function(){return{}},props:[],mounted:function(){var e=n("2222"),t=n("8cc2"),o=n("64a5"),r=document.getElementById("load");e.setup(r);var a={mobile:{length:25,range:5,height:190,offset:15,speed:2,color:"#37B89A"}},i={mobile:{length:25,range:6,height:170,offset:8,speed:-5,color:"#389BA1"}},c={mobile:{length:15,range:10,height:140,offset:10,speed:6,color:"#378FB8"}},u={mobile:{length:15,range:7,height:110,offset:15,speed:-6,color:"#3467AD"}};t.setPaper(e);var s=t.createWave(a),f=t.createWave(i),p=t.createWave(c),d=t.createWave(u);o.setPaper(e),o.importMagiana(),e.view.onFrame=function(e){s.update(e),f.update(e),p.update(e),d.update(e)}}};n("c228");h.render=v,h.__scopeId="data-v-1ff98504";var b=h,g={components:{"load-screen":b}};g.render=p;var m=g,w=[{path:"/",name:"Home",component:m}],y=Object(s["a"])({history:Object(s["b"])(),routes:w}),O=y,j=n("5502"),P=Object(j["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["a"])(u).use(P).use(O).mount("#app")},"64a5":function(e,t,n){var o;e.exports={importMagiana:function(){var e=n("ef15");o.project.importSVG(e,{onLoad:function(e){console.log(e.children),e.scale(2,e.bounds.topLeft),e.translate(new o.Point(o.view.bounds.center.x-e.bounds.width/2,o.view.bounds.center.y-e.bounds.height/2))}})},setPaper:function(e){o=e}}},"8cc2":function(e,t){var n;e.exports={createWave:function(e){e=e.mobile;var t=new n.Path;t.fillColor=e.color;for(var o=new n.Point(0,n.view.size.height),r=new n.Point(n.view.size.width,n.view.size.height),a=[],i=n.view.size.width/e.length,c=0;c<=e.length;c++)a.push(new n.Point(i*c,n.view.size.height-e.height));t.moveTo(r),t.lineTo(o);for(var u=0,s=a;u<s.length;u++){var f=s[u];t.lineTo(f)}t.lineTo(r);var p=function(o){for(var r=(Math.sin(o.count/100)+1)*n.view.size.width,a=0;a<=e.length+2;a++){var i=t.segments[a];if(i.point.y!=n.view.size.height){var c=Math.sin(o.time*e.speed+.27*a);i.point.y=c*e.range+(n.view.size.height-e.height),i.point.y+=r/10+e.offset}t.smooth({from:2,to:length})}};return{path:t,update:p}},setPaper:function(e){n=e}}},"9cdc":function(e,t,n){"use strict";n("d673")},c228:function(e,t,n){"use strict";n("2ba7")},d673:function(e,t,n){e.exports={primary:"#333",secuondary:"#aaa"}},ef15:function(e,t,n){e.exports=n.p+"img/face.566ef660.svg"}});
//# sourceMappingURL=app.c2cb73f2.js.map