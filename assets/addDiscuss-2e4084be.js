import{d as b,m as v,r as g,e as s,o as V,c as x,f as t,w as a,j as o,g as y,E as d,_ as h}from"./index-596b62d7.js";import{c as w}from"./discuss-26b3cf8a.js";import{t as k}from"./discuss-0cfec904.js";import"./index-c70bcbaa.js";const C={class:"addDiscuss Box"},D=b({__name:"addDiscuss",setup(B){const i=v();let e=g({title:"",content:"",type:k.common,type_id:0,introduce:""});const c={bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!1,imagelink:!1,code:!1,table:!1,fullscreen:!0,readmodel:!0,htmlcode:!1,help:!1,undo:!0,redo:!0,trash:!0,save:!1,navigation:!1,alignleft:!1,aligncenter:!1,alignright:!1,subfield:!0,preview:!0};async function m(){if(!e.value.introduce||!e.value.title||!e.value.content){d.error("请填写完整");return}await w(e.value),d.success("提交成功"),i.go(-1)}return(E,l)=>{const u=s("el-input"),r=s("el-form-item"),_=s("mavon-editor"),f=s("el-button"),p=s("el-form");return V(),x("div",C,[t(p,{model:o(e),"label-width":"40px"},{default:a(()=>[t(r,{label:"标题"},{default:a(()=>[t(u,{modelValue:o(e).title,"onUpdate:modelValue":l[0]||(l[0]=n=>o(e).title=n)},null,8,["modelValue"])]),_:1}),t(r,{label:"主题"},{default:a(()=>[t(u,{modelValue:o(e).introduce,"onUpdate:modelValue":l[1]||(l[1]=n=>o(e).introduce=n),placeholder:"一段话描述帖子",type:"textarea",maxlength:"250","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(r,{label:"内容"},{default:a(()=>[t(_,{modelValue:o(e).content,"onUpdate:modelValue":l[2]||(l[2]=n=>o(e).content=n),toolbars:c,style:{width:"100%"}},null,8,["modelValue"])]),_:1}),t(r,null,{default:a(()=>[t(f,{type:"primary",onClick:m},{default:a(()=>[y("发表")]),_:1})]),_:1})]),_:1},8,["model"])])}}});const F=h(D,[["__scopeId","data-v-bc3fefce"]]);export{F as default};
