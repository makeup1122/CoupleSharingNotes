(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddc79"],{"839a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-btn",{attrs:{color:"secondary",small:"",fab:"",fixed:"",bottom:"",right:""},on:{click:function(e){return t.showSheet(!0,{})}}},[a("v-icon",[t._v("mdi-plus")])],1),a("v-row",[a("v-col",[a("v-combobox",{attrs:{placeholder:"姓名","hide-details":"",clearable:"",solo:"",items:t.relativeOrigin,"item-value":"name","item-text":"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),a("v-row",t._l(t.relative,(function(e){return a("v-col",{key:e,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-card",[a("v-card-title",{staticClass:"subheading font-weight-bold"},[t._v(t._s(e)+" "),a("v-spacer"),a("v-btn",{attrs:{color:"secondary",icon:"",small:""},on:{click:function(a){return t.showSheet(!0,{name:e})}}},[a("v-icon",[t._v("mdi-plus")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:""}},t._l(t.items.filter((function(t){return t.name===e})),(function(e,i){return a("v-list-item",{key:i,on:{click:function(a){return t.showSheet(!0,e)}}},[a("v-list-item-content",[t._v(t._s(e.type)+"：")]),a("v-list-item-content",{staticClass:"align-end"},[t._v("¥"+t._s(e.amount))])],1)})),1)],1)],1)})),1),a("MoneyGiftForm",{attrs:{"form-data":t.formData},on:{refresh:t.fetchData},model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}})],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-sheet",{attrs:{value:t.value},on:{input:t.updateSheet}},[a("v-card",[a("v-toolbar",{staticClass:"primary"},[a("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){return t.updateSheet(!1)}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-spacer"),a("v-btn",{attrs:{dark:"",icon:""},on:{click:t.onSubmit}},[a("v-icon",[t._v("mdi-check")])],1)],1),a("v-card-text",{staticClass:"mt-5 pt-5"},[a("v-form",[t.item.createdAt?a("v-text-field",{attrs:{"prepend-icon":"mdi-clock",value:t.item.createdAt.toLocaleString(),label:"时间",disabled:""}}):t._e(),a("v-text-field",{attrs:{label:"名字","prepend-icon":"mdi-account"},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name",e)},expression:"item.name"}}),a("v-combobox",{attrs:{outline:"","prepend-icon":"mdi-shape",items:["生子","结婚","其他"],"small-chips":"",hint:"事项可以自定义输入","persistent-hint":"",label:"事项"},model:{value:t.item.type,callback:function(e){t.$set(t.item,"type",e)},expression:"item.type"}}),a("v-text-field",{attrs:{type:"number",outline:"","prepend-icon":"mdi-cash",label:"金额"},model:{value:t.item.amount,callback:function(e){t.$set(t.item,"amount",e)},expression:"item.amount"}}),a("v-textarea",{attrs:{outline:"","prepend-icon":"mdi-bookmark",rows:"2",label:"备注"},model:{value:t.item.remark,callback:function(e){t.$set(t.item,"remark",e)},expression:"item.remark"}})],1)],1)],1)],1)},o=[];const r="GiftMoney";var l={name:"MoneyGiftForm",components:{},props:{formData:{type:Object},value:{type:Boolean,default:!1}},data:function(){return{item:{}}},watch:{formData:function(t,e){this.item=t}},computed:{},created:function(){},methods:{updateSheet(t){this.$emit("input",t)},onDelete:function(){var t=this.$_AV.Object.createWithoutData(r,this.item.id);t.destroy().then(t=>{this.$emit("refresh"),this.updateSheet(!1)},(function(t){console.log(t)}))},onSubmit:function(){let t=null;if(this.item.id)t=this.$_AV.Object.createWithoutData(r,this.item.id);else{const e=this.$_AV.Object.extend(r);t=new e}t.set("name",this.item.name),t.set("type",this.item.type),t.set("amount",this.item.amount),t.set("remark",this.item.remark),t.save().then(t=>{this.$emit("refresh"),this.updateSheet(!1)})}}},c=l,m=a("2877"),u=Object(m["a"])(c,s,o,!1,null,"00f91a24",null),d=u.exports,h={name:"GiftMoney",components:{MoneyGiftForm:d},data:function(){return{headers:[{text:"时间",value:"createdAt",class:"",sortable:!0},{text:"姓名",value:"name",class:"",sortable:!0},{text:"事项",value:"type",class:"",sortable:!0},{text:"金额",value:"amount",class:"",sortable:!0}],items:[],loading:!0,relativeOrigin:[],name:null,sheet:!1,formData:{}}},computed:{relative(){return this.name?this.relativeOrigin.filter(t=>t.includes(this.name)):this.relativeOrigin}},created:function(){this.fetchData()},methods:{showSheet(t,e){this.sheet=t,this.formData=e},fetchData(){this.loading=!0;const t=this.$_AV,e=new t.Query("GiftMoney");e.find().then(t=>{this.items=t.map(t=>({name:t.attributes.name,type:t.attributes.type,amount:t.attributes.amount,remark:t.attributes.remark,createdAt:t.createdAt,id:t.id})),this.relativeOrigin=Array.from(new Set(t.map(t=>t.attributes.name))),this.loading=!1})}}},v=h,p=Object(m["a"])(v,i,n,!1,null,"1514c09e",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0ddc79.19bfce63.js.map