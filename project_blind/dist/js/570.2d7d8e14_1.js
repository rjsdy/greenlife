"use strict";(self["webpackChunkproject_blind"]=self["webpackChunkproject_blind"]||[]).push([[570],{8570:function(e,s,r){r.r(s),r.d(s,{default:function(){return c}});var t=function(){var e=this,s=e._self._c;return s("div",{staticClass:"login"},[s("div",{staticClass:"login-box"},[s("div",{staticStyle:{flex:"1"}},[s("el-form",{attrs:{model:e.user,rules:e.rules}},[s("div",{staticStyle:{"font-size":"20px","font-weight":"bold","text-align":"center","margin-bottom":"18px"}},[e._v("欢迎注册hln-后台系统账号")]),s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{attrs:{"prefix-icon":"el-icon-user",size:"medium",placeholder:"请输入账号"},model:{value:e.user.username,callback:function(s){e.$set(e.user,"username",s)},expression:"user.username"}})],1),s("el-form-item",{attrs:{prop:"password1"}},[s("el-input",{attrs:{"prefix-icon":"el-icon-lock","show-password":"",size:"medium",placeholder:"请输入密码"},model:{value:e.user.password1,callback:function(s){e.$set(e.user,"password1",s)},expression:"user.password1"}})],1),s("el-form-item",{attrs:{prop:"password2"}},[s("el-input",{attrs:{"prefix-icon":"el-icon-lock","show-password":"",size:"medium",placeholder:"再次输入密码"},model:{value:e.user.password2,callback:function(s){e.$set(e.user,"password2",s)},expression:"user.password2"}})],1),s("el-form-item",{staticStyle:{color:"#222222"},attrs:{label:"性别"}},[s("el-radio-group",{model:{value:e.user.sex,callback:function(s){e.$set(e.user,"sex",s)},expression:"user.sex"}},[s("el-radio",{attrs:{label:0}},[e._v("男")]),s("el-radio",{attrs:{label:1}},[e._v("女")])],1)],1),s("el-form-item",{attrs:{prop:"birthData"}},[s("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择日期"},model:{value:e.user.birthData,callback:function(s){e.$set(e.user,"birthData",s)},expression:"user.birthData"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"success"},on:{click:e.register}},[e._v("注册")])],1),s("div",{staticStyle:{display:"flex"}},[s("div",{staticStyle:{flex:"1"}},[s("h3",[e._v("前往"),s("span",{staticStyle:{color:"blue",cursor:"pointer"},on:{click:e.toLogin}},[e._v("登录")]),e._v("页面")])])])],1)],1)])])},a=[],i=(r(4114),r(1933)),o={name:"Login_In",data(){var e=(e,s,r)=>{""===s?r(new Error("请再次输入密码")):s!==this.user.password1?r(new Error("两次输入密码不一致!")):r()};return{user:{username:"",password1:"",password2:"",sex:"",birthData:""},UserRegBo:{username:"",password:"",sex:"",birthData:""},rules:{username:[{min:2,max:11,message:"长度在 2 到 11 个字符",trigger:"blur"}],password2:[{min:3,max:11,message:"长度在 3 到 11 个字符",trigger:"blur"},{validator:e,trigger:"blur"}],password1:[{min:3,max:11,message:"长度在 3 到 11 个字符",trigger:"blur"}]}}},methods:{async register(){let e=new Date(this.user.birthData),s=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();this.UserRegBo.username=this.user.username,this.UserRegBo.password=this.user.password1,this.UserRegBo.sex=this.user.sex,this.UserRegBo.birthData=s;var r=await(0,i.gv)("/user/userReg",this.UserRegBo);alert(r.message)},toLogin(){this.$router.push("/")}},mounted(){}},l=o,u=r(1656),n=(0,u.A)(l,t,a,!1,null,null,null),c=n.exports}}]);
//# sourceMappingURL=570.2d7d8e14.js.map