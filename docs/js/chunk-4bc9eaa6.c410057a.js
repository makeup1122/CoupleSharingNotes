(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bc9eaa6"],{"016b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-data-table",{attrs:{headers:t.headers,items:t.items,"must-sort":"","hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("tr",{on:{click:function(t){e.expanded=!e.expanded}}},[a("td",{},[t._v(t._s(e.item.createdAt.toLocaleDateString())+" "+t._s(e.item.createdAt.toLocaleTimeString("zh",{hour12:!1,hour:"numeric",minute:"numeric"})))]),a("td",{},[t._v(t._s(e.item.name))]),a("td",{},[a("span",{class:t.typeColorClass(e.item.type)},[t._v(t._s(e.item.type))])]),a("td",{},[t._v("¥"+t._s(e.item.amount))]),a("td",{},[t._v(t._s(e.item.remark))])])]}},{key:"expand",fn:function(e){return[a("v-card",{attrs:{flat:""}},[a("v-card-actions",[a("v-btn",{attrs:{color:"info",disabled:""}},[a("v-icon",[t._v("edit")]),t._v(" 编辑")],1),a("v-btn",{attrs:{color:"warning"},on:{click:function(a){t.onBtnDeleteClick(e)}}},[a("v-icon",[t._v("close")]),t._v(" 删除")],1)],1)],1)]}}])}),a("bottom-nav",{on:{addClick:t.onBtnAddClick}}),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("close")])],1),a("v-toolbar-title",[t._v("添加")]),a("v-spacer"),a("v-toolbar-items")],1),a("v-form",{staticClass:"pa-4"},[a("v-text-field",{attrs:{type:"text",outline:"","prepend-icon":"person",label:"姓名",autofocus:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),a("v-combobox",{attrs:{outline:"","prepend-icon":"category",items:["生子","结婚","其他"],label:"事项"},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}}),a("v-text-field",{attrs:{type:"number",outline:"","prepend-icon":"attach_money",label:"金额"},model:{value:t.formData.amount,callback:function(e){t.$set(t.formData,"amount",e)},expression:"formData.amount"}}),a("v-textarea",{attrs:{outline:"","prepend-icon":"bookmarks",label:"备注"},model:{value:t.formData.remark,callback:function(e){t.$set(t.formData,"remark",e)},expression:"formData.remark"}}),a("v-btn",{attrs:{block:"",color:"primary",large:""},on:{click:t.onBtnAddSubbmit}},[t._v("添加")])],1)],1)],1)],1)},o=[],i=a("c549"),r={name:"GiftMoney",components:{BottomNav:i["a"]},data:function(){return{headers:[{text:"时间",value:"createdAt",class:"",sortable:!0},{text:"姓名",value:"name",class:"",sortable:!0},{text:"事项",value:"type",class:"",sortable:!0},{text:"金额",value:"amount",class:"",sortable:!0},{text:"备注",value:"remark",class:"",sortable:!1}],items:[],formData:{},dialog:!1}},created:function(){this.fetchData()},computed:{},methods:{typeColorClass:function(t){switch(t){case"结婚":return"red--text";case"生子":return"blue--text";case"其他":return"green--text";default:break}},onBtnAddClick:function(){this.dialog=!this.dialog},fetchData:function(){const t=this.$_AV,e=new t.Query(this.$options.name);e.find().then(t=>{this.items=t.map(t=>{return{name:t.attributes.name,type:t.attributes.type,amount:t.attributes.amount,remark:t.attributes.remark,createdAt:t.createdAt,id:t.id}})})},onBtnDeleteClick:function(t){var e=this.$_AV.Object.createWithoutData(this.$options.name,t.item.id);e.destroy().then(e=>{this.items.splice(t.index,1)},function(t){console.log(t)})},onBtnAddSubbmit:function(){const t=this.$_AV.Object.extend(this.$options.name),e=new t;e.set("name",this.formData.name),e.set("type",this.formData.type),e.set("amount",this.formData.amount),e.set("remark",this.formData.remark),e.save().then(t=>{this.fetchData(),this.dialog=!1})}}},s=r,c=(a("7d1a"),a("2877")),l=Object(c["a"])(s,n,o,!1,null,"b3354624",null);l.options.__file="GiftMoney.vue";e["default"]=l.exports},"051c":function(t,e,a){},"27af":function(t,e,a){"use strict";var n=a("de35"),o=a.n(n);o.a},"7d1a":function(t,e,a){"use strict";var n=a("051c"),o=a.n(n);o.a},c549:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-nav",{attrs:{fixed:"",value:!0,color:"primary"}},[a("v-btn",{attrs:{dark:"",value:"home"},on:{click:t.onBtnHome}},[a("span",[t._v("首页")]),a("v-icon",[t._v("home")])],1),a("v-btn",{attrs:{dark:"",value:"add"},on:{click:function(e){return e.preventDefault(),t.onBtnAdd(e)}}},[a("span",[t._v("添加")]),a("v-icon",[t._v("add")])],1)],1)},o=[],i={name:"BottomNav",data:function(){return{bottomNav:"home"}},created:function(){},components:{},computed:{},methods:{onBtnHome:function(){this.$router.push({name:"Home"})},onBtnAdd:function(){this.$emit("addClick")},onBtnSettings:function(){this.$emit("settingsClick")}}},r=i,s=(a("27af"),a("2877")),c=Object(s["a"])(r,n,o,!1,null,"6639f8bd",null);c.options.__file="BottomNav.vue";e["a"]=c.exports},de35:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4bc9eaa6.c410057a.js.map