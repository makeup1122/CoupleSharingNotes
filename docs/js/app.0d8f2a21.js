(function(e){function t(t){for(var o,r,c=t[0],l=t[1],u=t[2],s=0,d=[];s<c.length;s++)r=c[s],a[r]&&d.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7b5e6a53","chunk-5551080c":"1a437031"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1,"chunk-5551080c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"07874014","chunk-5551080c":"3fd8c3c0"}[e]+".css",a=l.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],s=u.getAttribute("data-href");if(s===o||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.request=o,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e),u=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}a[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:s})},12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=n("ce5b"),a=n.n(r),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("router-view")],1),n("v-flex",[n("v-bottom-nav",{attrs:{fixed:"",value:!0}},[n("v-btn",{on:{click:function(t){e.dialog=!0}}},[n("span",[e._v("添加")]),n("v-icon",[e._v("add")])],1)],1)],1)],1),n("add-dialog",{attrs:{propsDialog:e.dialog},on:{"update:propsDialog":function(t){e.dialog=t}}})],1)},c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("close")])],1),n("v-toolbar-title",[e._v("Settings")]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",flat:""},on:{click:function(t){e.dialog=!1}}},[e._v("Save")])],1)],1),n("v-layout",{attrs:{wrap:"","align-center":"","justify-center":"","text-xs-center":""}},e._l(e.typeArray,function(t){return n("v-flex",{key:t.type,attrs:{xs6:""}},[n("v-btn",{attrs:{large:"",fab:""},on:{click:function(n){e.onBtnClick(t.type)}}},[e._v(e._s(t.type))])],1)}),1)],1)],1)},u=[],s={name:"AddDialog",props:{propsDialog:{default:!1,type:Boolean}},data:function(){return{dialog:this.propsDialog,typeArray:[{type:"母乳"},{type:"奶粉"},{type:"睡觉"},{type:"排泄"}]}},watch:{propsDialog:function(e,t){this.dialog=e},dialog:function(e,t){this.$emit("update:propsDialog",e)}},created:function(){},components:{},computed:{},methods:{onBtnClick:function(e){const t=this.$_AV.Object.extend("record"),n=new t;n.set("type",e),n.save().then(e=>{this.dialog=!1})}}},d=s,p=(n("5fab"),n("2877")),f=Object(p["a"])(d,l,u,!1,null,"a089c3d0",null);f.options.__file="AddDialog.vue";var v=f.exports,g={name:"App",components:{AddDialog:v},data:function(){return{dialog:!1}},methods:{saveHandle:function(e){}}},h=g,b=Object(p["a"])(h,i,c,!1,null,null,null);b.options.__file="App.vue";var m=b.exports,y=n("8c4f");o["default"].use(y["a"]);var w=new y["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:()=>n.e("chunk-5551080c").then(n.bind(null,"bb51"))},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),k=n("2f62");o["default"].use(k["a"]);var _=new k["a"].Store({state:{},mutations:{},actions:{}}),j=n("9483");Object(j["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});n("bf40");var x=n("0631");const A="tU2XUpPz73WI89BXW7dMTiSo-gzGzoHsz",O="0cs07tm0jIzkDfPX0hRNjG57";x.init({appId:A,appKey:O}),o["default"].prototype.$_AV=x,o["default"].config.productionTip=!1,o["default"].use(a.a),new o["default"]({router:w,store:_,render:function(e){return e(m)}}).$mount("#app")},"5fab":function(e,t,n){"use strict";var o=n("b94c"),r=n.n(o);r.a},b94c:function(e,t,n){}});
//# sourceMappingURL=app.0d8f2a21.js.map