(function(e){function n(n){for(var o,i,c=n[0],u=n[1],l=n[2],s=0,d=[];s<c.length;s++)i=c[s],r[i]&&d.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,i=1;i<t.length;i++){var u=t[i];0!==r[u]&&(o=!1)}o&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"-legacy."+{about:"392a1ebc","chunk-245e211b":"0c5110e9","chunk-282de271":"995e50fe","chunk-2d0b91f4":"e8ec6058","chunk-2d21003f":"fbd009a2","chunk-2d21e6fb":"a1003e20","chunk-55405bb0":"b57a7c02","chunk-afcf1560":"9e7c2d66"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e),a=function(n){u.onerror=u.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,t[1](i)}r[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var f=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("top-toolbar"),t("v-layout",{attrs:{column:""}},[t("v-flex",[t("transition",{attrs:{name:"slide-left"}},[t("router-view")],1)],1)],1)],1)},a=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("v-toolbar",{attrs:{color:"primary",dark:""}},[t("v-toolbar-side-icon",{on:{click:function(n){e.drawer=!e.drawer}}}),t("v-toolbar-title",[e._v("CS-Notes")]),t("v-spacer"),t("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t("v-btn",{attrs:{flat:""}})],1)],1),t("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(n){e.drawer=n},expression:"drawer"}},[t("v-list",{staticClass:"pt-0",attrs:{dense:""}},[t("v-list-tile",{attrs:{to:{name:"HomePage"}}},[t("v-list-tile-action",[t("v-icon",[e._v("home")])],1),t("v-list-tile-content",[t("v-list-tile-title",[e._v("Home")])],1)],1),t("v-list-tile",{on:{click:e.logout}},[t("v-list-tile-action",[t("v-icon",[e._v("logout")])],1),t("v-list-tile-content",[t("v-list-tile-title",[e._v("Logout")])],1)],1)],1)],1)],1)},c=[],u={name:"TopToolbar",components:{},data:function(){return{drawer:!1}},created:function(){},methods:{logout:function(){this.$_AV.User.logOut(),this.$router.push({name:"Login"}),this.drawer=!this.drawer}}},l=u,s=t("2877"),f=Object(s["a"])(l,i,c,!1,null,null,null);f.options.__file="TopToolbar.vue";var d=f.exports,p={name:"App",components:{TopToolbar:d},data:function(){return{dialog:!1}},mounted:function(){},methods:{}},b=p,h=Object(s["a"])(b,r,a,!1,null,null,null);h.options.__file="App.vue";var v=h.exports,m=t("8c4f"),g=t("0631"),w="tU2XUpPz73WI89BXW7dMTiSo-gzGzoHsz",y="0cs07tm0jIzkDfPX0hRNjG57";g.init({appId:w,appKey:y}),o["default"].prototype.$_AV=g;var k=g;o["default"].use(m["a"]);var _=["/login","/register"],j=new m["a"]({base:"",routes:[{path:"/",name:"HomePage",component:function(){return t.e("chunk-afcf1560").then(t.bind(null,"bb51"))}},{path:"/baby",name:"Baby",component:function(){return t.e("chunk-55405bb0").then(t.bind(null,"ac0d"))}},{path:"/car",name:"Car",component:function(){return t.e("chunk-282de271").then(t.bind(null,"08d3"))}},{path:"/giftmoney",name:"GiftMoney",component:function(){return t.e("chunk-245e211b").then(t.bind(null,"016b"))}},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return t.e("chunk-2d21e6fb").then(t.bind(null,"d60c"))}},{path:"/profile",name:"Profile",component:function(){return t.e("chunk-2d21003f").then(t.bind(null,"b5a7"))}},{path:"/register",name:"Register",component:function(){return t.e("chunk-2d0b91f4").then(t.bind(null,"3232"))}}]});j.beforeEach(function(e,n,t){if(-1!==_.indexOf(e.path))t();else{var o=k.User.current();null!==o?t():t({name:"Login"})}});var O=j,P=t("ce5b"),T=t.n(P),x={primary:"#00bcd4",secondary:"#8bc34a",accent:"#607d8b",error:"#ff5722",warning:"#ff9800",info:"#03a9f4",success:"#4caf50"};t("bf40");o["default"].use(T.a,{theme:x});var A=t("9483");Object(A["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["default"].config.productionTip=!1,new o["default"]({router:O,render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app-legacy.00e15264.js.map