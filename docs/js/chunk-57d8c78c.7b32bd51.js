(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57d8c78c"],{"08d3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-data-table",{attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.createdAt.toLocaleDateString()))]),a("td",{staticClass:"pa-1"},[t._v(t._s(e.item.attributes.mileage))]),a("td",{staticClass:"pa-1"},[t._v(t._s(e.item.attributes.unitPrice))]),a("td",{staticClass:"pa-1"},[t._v(t._s(e.item.attributes.totalPrice))]),a("td",{staticClass:"pa-1"},[t._v(t._s(e.item.attributes.liter))])]}}])}),a("bottom-nav",{on:{addClick:t.onBtnAddClick}}),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("close")])],1),a("v-toolbar-title",[t._v("添加")]),a("v-spacer"),a("v-toolbar-items")],1),a("v-form",{staticClass:"pa-4"},[a("v-text-field",{attrs:{type:"number",outline:"",label:"单价",autofocus:""},model:{value:t.formData.unitPrice,callback:function(e){t.$set(t.formData,"unitPrice",e)},expression:"formData.unitPrice"}}),a("v-text-field",{attrs:{type:"number",outline:"",label:"油量"},model:{value:t.formData.liter,callback:function(e){t.$set(t.formData,"liter",e)},expression:"formData.liter"}}),a("v-text-field",{attrs:{type:"number",outline:"",label:"总价"},model:{value:t.formData.totalPrice,callback:function(e){t.$set(t.formData,"totalPrice",e)},expression:"formData.totalPrice"}}),a("v-text-field",{attrs:{type:"number",outline:"",label:"公里数"},model:{value:t.formData.mileage,callback:function(e){t.$set(t.formData,"mileage",e)},expression:"formData.mileage"}}),a("v-btn",{attrs:{block:"",color:"primary",large:""},on:{click:t.onBtnAddSubbmit}},[t._v("添加")])],1)],1)],1)],1)},n=[],o=a("c549"),s={name:"GasStation",components:{BottomNav:o["a"]},data:function(){return{headers:[{text:"时间",value:"createdAt",class:""},{text:"公里数",value:"mileage",class:"pa-1"},{text:"单价",value:"unitPrice",class:"pa-1"},{text:"总价",value:"totalPrice",class:"pa-1"},{text:"油量(升)",value:"liter",class:"pa-1"}],items:[],formData:{},dialog:!1}},created:function(){this.fetchData()},computed:{},methods:{onBtnAddClick:function(){this.dialog=!this.dialog},fetchData:function(){const t=this.$_AV,e=new t.Query(this.$options.name);e.find().then(t=>{this.items=t})},onBtnAddSubbmit:function(){const t=this.$_AV.Object.extend(this.$options.name),e=new t;e.set("mileage",this.formData.mileage),e.set("unitPrice",this.formData.unitPrice),e.set("totalPrice",this.formData.totalPrice),e.set("liter",this.formData.liter),e.save().then(t=>{this.fetchData(),this.dialog=!1})}}},r=s,l=(a("3a62"),a("2877")),c=Object(l["a"])(r,i,n,!1,null,"9802825a",null);c.options.__file="Car.vue";e["default"]=c.exports},"3a62":function(t,e,a){"use strict";var i=a("8070"),n=a.n(i);n.a},8070:function(t,e,a){},"825a":function(t,e,a){"use strict";var i=a("9f27"),n=a.n(i);n.a},"9f27":function(t,e,a){},c549:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-nav",{attrs:{fixed:"",value:!0,color:"primary"}},[a("v-btn",{attrs:{dark:"",value:"home"},on:{click:t.onBtnHome}},[a("span",[t._v("首页")]),a("v-icon",[t._v("home")])],1),a("v-btn",{attrs:{dark:"",value:"add"},on:{click:function(e){return e.preventDefault(),t.onBtnAdd(e)}}},[a("span",[t._v("添加")]),a("v-icon",[t._v("add")])],1),a("v-btn",{attrs:{dark:"",value:"settings"},on:{click:t.onBtnSettings}},[a("span",[t._v("管理")]),a("v-icon",[t._v("settings")])],1)],1)},n=[],o={name:"BottomNav",data:function(){return{bottomNav:"home"}},created:function(){},components:{},computed:{},methods:{onBtnHome:function(){this.$router.push({name:"Home"})},onBtnAdd:function(){this.$emit("addClick")},onBtnSettings:function(){this.$emit("settingsClick")}}},s=o,r=(a("825a"),a("2877")),l=Object(r["a"])(s,i,n,!1,null,"11c9e41a",null);l.options.__file="BottomNav.vue";e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-57d8c78c.7b32bd51.js.map