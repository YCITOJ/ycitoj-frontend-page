import{h as x,j as h}from"./admin-5d330f3e.js";import{d as w,r as y,e as n,o as k,c as C,f as e,w as t,g as _,j,K as B,E,_ as T}from"./index-596b62d7.js";import"./index-c70bcbaa.js";const I={class:"judgeserver"},L=w({__name:"index",setup(N){const r=y([]);async function d(){const{data:a}=await x();r.value=a,r.value.sort(function(o,l){return o.color>l.color?1:o.color<l.color?-1:0})}d();async function i(a){await h({tag_id:a});var o=r.value.findIndex(l=>l.id===a);o!==-1&&r.value.splice(o,1),E.success("删除成功")}function u({row:a,columnIndex:o}){if(o==2)return{backgroundColor:a.color,color:"#fff"}}return(a,o)=>{const l=n("el-breadcrumb-item"),p=n("el-breadcrumb"),s=n("el-button"),m=n("router-link"),c=n("el-table-column"),f=n("el-popconfirm"),b=n("el-table"),v=n("el-card");return k(),C("div",I,[e(p,{separator:"/"},{default:t(()=>[e(l,{to:{path:"/admin"}},{default:t(()=>[_("主页")]),_:1}),e(l,null,{default:t(()=>[_("标签列表")]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(m,{class:"menuitem-a",to:"/admin/addtag"},{default:t(()=>[e(s,{type:"primary"},{default:t(()=>[_("添加标签")]),_:1})]),_:1}),e(b,{data:r.value,stripe:"","cell-style":u},{default:t(()=>[e(c,{prop:"id",label:"编号",width:"180"}),e(c,{prop:"name",label:"名称"}),e(c,{prop:"color",label:"颜色",width:"180"}),e(c,{label:"操作",width:"180px"},{default:t(g=>[e(f,{title:"确定要删除该标签?",onConfirm:V=>i(g.row.id)},{reference:t(()=>[e(s,{type:"danger",icon:j(B),size:"mini"},null,8,["icon"])]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])]),_:1})])}}});const M=T(L,[["__scopeId","data-v-4d13e052"]]);export{M as default};
