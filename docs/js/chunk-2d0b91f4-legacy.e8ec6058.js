(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b91f4"],{3232:function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-form",[t("v-text-field",{attrs:{label:"Username"},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),t("v-text-field",{attrs:{label:"Password"},model:{value:e.password,callback:function(n){e.password=n},expression:"password"}}),t("v-text-field",{attrs:{type:"email",label:"Email"},model:{value:e.email,callback:function(n){e.email=n},expression:"email"}}),t("v-btn",{on:{click:e.onBtnRegister}},[e._v("Register")]),t("v-btn",{attrs:{to:{name:"Login"}}},[e._v("Login")])],1)},a=[],o={name:"Register",data:function(){return{username:"",password:"",email:""}},created:function(){},components:{},computed:{},methods:{onBtnRegister:function(){var e=this.$_AV,n=new e.User;n.setUsername(this.username),n.setPassword(this.password),n.setEmail(this.email),n.signUp().then(function(e){console.log(e)},function(e){console.log(e)})}}},i=o,l=t("2877"),r=Object(l["a"])(i,s,a,!1,null,"1dd8885e",null);r.options.__file="Register.vue";n["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0b91f4-legacy.e8ec6058.js.map