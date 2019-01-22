(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02d9b9e4"],{"016b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"title pa-3 ma-0"},[t._v("总计：¥"+t._s(t.totalAmount))]),n("v-data-table",{staticClass:"pb-5 mb-5",attrs:{headers:t.headers,items:t.items,"must-sort":"","hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("tr",{on:{click:function(t){e.expanded=!e.expanded}}},[n("td",{},[t._v(t._s(e.item.createdAt.toLocaleDateString()))]),n("td",{},[t._v(t._s(e.item.name))]),n("td",{},[n("span",{class:t.typeColorClass(e.item.type)},[t._v(t._s(e.item.type))])]),n("td",{},[t._v("¥"+t._s(e.item.amount))])])]}},{key:"expand",fn:function(e){return[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("span"),t._v(t._s(e.item.createdAt.toLocaleDateString())+" "+t._s(e.item.createdAt.toLocaleTimeString("zh",{hour12:!1,hour:"numeric",minute:"numeric"}))+"\n        "),n("p",[t._v(t._s(e.item.remark))])]),n("v-card-actions",[n("v-btn",{attrs:{color:"info",disabled:""}},[n("v-icon",[t._v("edit")]),t._v(" 编辑")],1),n("v-btn",{attrs:{color:"warning"},on:{click:function(n){t.onBtnDeleteClick(e)}}},[n("v-icon",[t._v("close")]),t._v(" 删除")],1)],1)],1)]}}])}),n("bottom-nav",{on:{addClick:t.onBtnAddClick}}),n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("close")])],1),n("v-toolbar-title",[t._v("添加")]),n("v-spacer"),n("v-toolbar-items")],1),n("v-form",{staticClass:"pa-4"},[n("v-text-field",{attrs:{type:"text",outline:"","prepend-icon":"person",label:"姓名",autofocus:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),n("v-combobox",{attrs:{outline:"","prepend-icon":"category",items:["生子","结婚","其他"],label:"事项"},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}}),n("v-text-field",{attrs:{type:"number",outline:"","prepend-icon":"attach_money",label:"金额"},model:{value:t.formData.amount,callback:function(e){t.$set(t.formData,"amount",e)},expression:"formData.amount"}}),n("v-textarea",{attrs:{outline:"","prepend-icon":"bookmarks",label:"备注"},model:{value:t.formData.remark,callback:function(e){t.$set(t.formData,"remark",e)},expression:"formData.remark"}}),n("v-btn",{attrs:{block:"",color:"primary",large:""},on:{click:t.onBtnAddSubbmit}},[t._v("添加")])],1)],1)],1)],1)},o=[],i=(n("ac6a"),n("c549")),a={name:"GiftMoney",components:{BottomNav:i["a"]},data:function(){return{headers:[{text:"时间",value:"createdAt",class:"",sortable:!0},{text:"姓名",value:"name",class:"",sortable:!0},{text:"事项",value:"type",class:"",sortable:!0},{text:"金额",value:"amount",class:"",sortable:!0}],items:[],formData:{},dialog:!1}},created:function(){this.fetchData()},computed:{totalAmount:function(){let t=0;return this.items.forEach(e=>{t+=parseFloat(e.amount)}),t}},methods:{typeColorClass:function(t){switch(t){case"结婚":return"red--text";case"生子":return"blue--text";case"其他":return"green--text";default:break}},onBtnAddClick:function(){this.dialog=!this.dialog},fetchData:function(){const t=this.$_AV,e=new t.Query(this.$options.name);e.find().then(t=>{this.items=t.map(t=>{return{name:t.attributes.name,type:t.attributes.type,amount:t.attributes.amount,remark:t.attributes.remark,createdAt:t.createdAt,id:t.id}})})},onBtnDeleteClick:function(t){var e=this.$_AV.Object.createWithoutData(this.$options.name,t.item.id);e.destroy().then(e=>{this.items.splice(t.index,1)},function(t){console.log(t)})},onBtnAddSubbmit:function(){const t=this.$_AV.Object.extend(this.$options.name),e=new t;e.set("name",this.formData.name),e.set("type",this.formData.type),e.set("amount",this.formData.amount),e.set("remark",this.formData.remark),e.save().then(t=>{this.fetchData(),this.dialog=!1})}}},c=a,u=n("2877"),s=Object(u["a"])(c,r,o,!1,null,"16bb5066",null);s.options.__file="GiftMoney.vue";e["default"]=s.exports},"01f9":function(t,e,n){"use strict";var r=n("2d00"),o=n("5ca1"),i=n("2aba"),a=n("32e9"),c=n("84f2"),u=n("41a0"),s=n("7f20"),f=n("38fd"),l=n("2b4c")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",m="keys",v="values",b=function(){return this};t.exports=function(t,e,n,h,y,x,_){u(n,e,h);var g,k,S,w=function(t){if(!p&&t in A)return A[t];switch(t){case m:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",D=y==v,L=!1,A=t.prototype,j=A[l]||A[d]||y&&A[y],C=j||w(y),T=y?D?w("entries"):C:void 0,M="Array"==e&&A.entries||j;if(M&&(S=f(M.call(new t)),S!==Object.prototype&&S.next&&(s(S,O,!0),r||"function"==typeof S[l]||a(S,l,b))),D&&j&&j.name!==v&&(L=!0,C=function(){return j.call(this)}),r&&!_||!p&&!L&&A[l]||a(A,l,C),c[e]=C,c[O]=b,y)if(g={values:D?C:w(v),keys:x?C:w(m),entries:T},_)for(k in g)k in A||i(A,k,g[k]);else o(o.P+o.F*(p||L),e,g);return g}},"0d58":function(t,e,n){var r=n("ce10"),o=n("e11e");t.exports=Object.keys||function(t){return r(t,o)}},1495:function(t,e,n){var r=n("86cc"),o=n("cb7c"),i=n("0d58");t.exports=n("9e1e")?Object.defineProperties:function(t,e){o(t);var n,a=i(e),c=a.length,u=0;while(c>u)r.f(t,n=a[u++],e[n]);return t}},"230e":function(t,e,n){var r=n("d3f4"),o=n("7726").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"2aba":function(t,e,n){var r=n("7726"),o=n("32e9"),i=n("69a8"),a=n("ca5a")("src"),c="toString",u=Function[c],s=(""+u).split(c);n("8378").inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,c){var u="function"==typeof n;u&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(u&&(i(n,a)||o(n,a,t[e]?""+t[e]:s.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,c,function(){return"function"==typeof this&&this[a]||u.call(this)})},"2aeb":function(t,e,n){var r=n("cb7c"),o=n("1495"),i=n("e11e"),a=n("613b")("IE_PROTO"),c=function(){},u="prototype",s=function(){var t,e=n("230e")("iframe"),r=i.length,o="<",a=">";e.style.display="none",n("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+a+"document.F=Object"+o+"/script"+a),t.close(),s=t.F;while(r--)delete s[u][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[u]=r(t),n=new c,c[u]=null,n[a]=t):n=s(),void 0===e?n:o(n,e)}},"2b4c":function(t,e,n){var r=n("5537")("wks"),o=n("ca5a"),i=n("7726").Symbol,a="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))};c.store=r},"2d00":function(t,e){t.exports=!1},"2d95":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"32e9":function(t,e,n){var r=n("86cc"),o=n("4630");t.exports=n("9e1e")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"38fd":function(t,e,n){var r=n("69a8"),o=n("4bf8"),i=n("613b")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},"41a0":function(t,e,n){"use strict";var r=n("2aeb"),o=n("4630"),i=n("7f20"),a={};n("32e9")(a,n("2b4c")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},4588:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},4630:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"4bf8":function(t,e,n){var r=n("be13");t.exports=function(t){return Object(r(t))}},5537:function(t,e,n){var r=n("8378"),o=n("7726"),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("2d00")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"5ca1":function(t,e,n){var r=n("7726"),o=n("8378"),i=n("32e9"),a=n("2aba"),c=n("9b43"),u="prototype",s=function(t,e,n){var f,l,p,d,m=t&s.F,v=t&s.G,b=t&s.S,h=t&s.P,y=t&s.B,x=v?r:b?r[e]||(r[e]={}):(r[e]||{})[u],_=v?o:o[e]||(o[e]={}),g=_[u]||(_[u]={});for(f in v&&(n=e),n)l=!m&&x&&void 0!==x[f],p=(l?x:n)[f],d=y&&l?c(p,r):h&&"function"==typeof p?c(Function.call,p):p,x&&a(x,f,p,t&s.U),_[f]!=p&&i(_,f,d),h&&g[f]!=p&&(g[f]=p)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"613b":function(t,e,n){var r=n("5537")("keys"),o=n("ca5a");t.exports=function(t){return r[t]||(r[t]=o(t))}},"626a":function(t,e,n){var r=n("2d95");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},6821:function(t,e,n){var r=n("626a"),o=n("be13");t.exports=function(t){return r(o(t))}},"69a8":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"6a99":function(t,e,n){var r=n("d3f4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},7726:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"77f1":function(t,e,n){var r=n("4588"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},"79e5":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"7f20":function(t,e,n){var r=n("86cc").f,o=n("69a8"),i=n("2b4c")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},8378:function(t,e){var n=t.exports={version:"2.6.1"};"number"==typeof __e&&(__e=n)},"84f2":function(t,e){t.exports={}},"86cc":function(t,e,n){var r=n("cb7c"),o=n("c69a"),i=n("6a99"),a=Object.defineProperty;e.f=n("9e1e")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"9b43":function(t,e,n){var r=n("d8e8");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"9c6c":function(t,e,n){var r=n("2b4c")("unscopables"),o=Array.prototype;void 0==o[r]&&n("32e9")(o,r,{}),t.exports=function(t){o[r][t]=!0}},"9def":function(t,e,n){var r=n("4588"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"9e1e":function(t,e,n){t.exports=!n("79e5")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),i=n("2aba"),a=n("7726"),c=n("32e9"),u=n("84f2"),s=n("2b4c"),f=s("iterator"),l=s("toStringTag"),p=u.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=o(d),v=0;v<m.length;v++){var b,h=m[v],y=d[h],x=a[h],_=x&&x.prototype;if(_&&(_[f]||c(_,f,p),_[l]||c(_,l,h),u[h]=p,y))for(b in r)_[b]||i(_,b,r[b],!0)}},be13:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},c366:function(t,e,n){var r=n("6821"),o=n("9def"),i=n("77f1");t.exports=function(t){return function(e,n,a){var c,u=r(e),s=o(u.length),f=i(a,s);if(t&&n!=n){while(s>f)if(c=u[f++],c!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},c549:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-nav",{attrs:{fixed:"",value:!0,color:"primary",dark:""}},[n("v-btn",{attrs:{dark:"",value:"home"},on:{click:t.onBtnHome}},[n("span",[t._v("首页")]),n("v-icon",[t._v("home")])],1),n("v-btn",{attrs:{dark:"",value:"add"},on:{click:function(e){return e.preventDefault(),t.onBtnAdd(e)}}},[n("span",[t._v("添加")]),n("v-icon",[t._v("add")])],1)],1)},o=[],i={name:"BottomNav",data:function(){return{bottomNav:"home"}},created:function(){},components:{},computed:{},methods:{onBtnHome:function(){this.$router.push({name:"Home"})},onBtnAdd:function(){this.$emit("addClick")},onBtnSettings:function(){this.$emit("settingsClick")}}},a=i,c=n("2877"),u=Object(c["a"])(a,r,o,!1,null,"6f61a0ad",null);u.options.__file="BottomNav.vue";e["a"]=u.exports},c69a:function(t,e,n){t.exports=!n("9e1e")&&!n("79e5")(function(){return 7!=Object.defineProperty(n("230e")("div"),"a",{get:function(){return 7}}).a})},ca5a:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},cadf:function(t,e,n){"use strict";var r=n("9c6c"),o=n("d53b"),i=n("84f2"),a=n("6821");t.exports=n("01f9")(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},cb7c:function(t,e,n){var r=n("d3f4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},ce10:function(t,e,n){var r=n("69a8"),o=n("6821"),i=n("c366")(!1),a=n("613b")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),u=0,s=[];for(n in c)n!=a&&r(c,n)&&s.push(n);while(e.length>u)r(c,n=e[u++])&&(~i(s,n)||s.push(n));return s}},d3f4:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},d8e8:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},e11e:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},fab2:function(t,e,n){var r=n("7726").document;t.exports=r&&r.documentElement}}]);
//# sourceMappingURL=chunk-02d9b9e4.49f98721.js.map