import{g as k,r as S}from"./admin-5d330f3e.js";import{d as j,r as C,e as a,o as p,c as i,f as e,w as t,g as s,j as I,K as L,E as B,p as E,a as N,b as u,_ as R}from"./index-596b62d7.js";import"./index-c70bcbaa.js";const V=""+new URL("server1-85011012.png",import.meta.url).href,J=""+new URL("server2-80eaec06.png",import.meta.url).href,f=r=>(E("data-v-a05ea2bc"),r=r(),N(),r),T={class:"judgeserver"},U={key:0},z=f(()=>u("img",{src:V,alt:""},null,-1)),K={key:1},M=f(()=>u("img",{src:J,alt:""},null,-1)),$=j({__name:"index",setup(r){const _=C([]);async function b(){const{data:n}=await k();_.value=n}async function v(n){await S({sid:n});var c=_.value.findIndex(l=>l.sid===n);c!==-1&&_.value.splice(c,1),B.success("删除成功")}return b(),(n,c)=>{const l=a("el-breadcrumb-item"),g=a("el-breadcrumb"),m=a("el-button"),h=a("router-link"),o=a("el-table-column"),x=a("el-popconfirm"),w=a("el-table"),y=a("el-card");return p(),i("div",T,[e(g,{separator:"/"},{default:t(()=>[e(l,{to:{path:"/admin"}},{default:t(()=>[s("主页")]),_:1}),e(l,null,{default:t(()=>[s("测评服务器")]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(h,{class:"menuitem-a",to:"/admin/addjudgeserver"},{default:t(()=>[e(m,{type:"primary"},{default:t(()=>[s("添加服务器")]),_:1})]),_:1}),e(w,{data:_.value,stripe:""},{default:t(()=>[e(o,{type:"index"}),e(o,{label:"状态"},{default:t(d=>[d.row.connected?(p(),i("span",U,[z,s(" 在线")])):(p(),i("span",K,[M,s(" 断开")]))]),_:1}),e(o,{label:"名称",prop:"name"}),e(o,{label:"地址",prop:"host"}),e(o,{label:"端口",prop:"port"}),e(o,{label:"任务数",prop:"remain_tasks"}),e(o,{label:"已完成任务数",prop:"finished_tasks"}),e(o,{label:"操作",width:"180px"},{default:t(d=>[e(x,{title:"确定要删除该测评服务器?",onConfirm:q=>v(d.row.sid)},{reference:t(()=>[e(m,{type:"danger",icon:I(L),size:"mini"},null,8,["icon"])]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])]),_:1})])}}});const G=R($,[["__scopeId","data-v-a05ea2bc"]]);export{G as default};
