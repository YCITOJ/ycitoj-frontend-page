import{i as V}from"./admin-5d330f3e.js";import{d as C,r as p,e as l,o as k,c as B,f as e,w as a,g as _,b as E,j as f,A as N,F as T,E as A}from"./index-596b62d7.js";import"./index-c70bcbaa.js";const F={class:"insertauth"},$=C({__name:"insertauth",setup(j){let s=p(""),i=p([]);function b(d){let t=d.split(`
`);t=t.filter(r=>r!="");let n=[];for(let r of t){let o=r.split(",");if(o.length!=3)return null;n.push({sid:o[0],name:o[1],class_name:o[2]})}return n}function h(){i.value=b(s.value)}async function w(){await V({data:i.value}),A.success("新增用户认证成功成功")}return(d,t)=>{const n=l("el-breadcrumb-item"),r=l("el-breadcrumb"),o=l("el-input"),m=l("el-button"),v=l("el-aside"),c=l("el-table-column"),x=l("el-table"),y=l("el-main"),g=l("el-container");return k(),B(T,null,[e(r,{separator:"/"},{default:a(()=>[e(n,{to:{path:"/admin"}},{default:a(()=>[_("主页")]),_:1}),e(n,{to:{path:"/admin/authtab"}},{default:a(()=>[_("用户认证信息")]),_:1}),e(n,null,{default:a(()=>[_("添加用户认证信息")]),_:1})]),_:1}),E("div",F,[e(g,null,{default:a(()=>[e(v,{width:"50%"},{default:a(()=>[e(o,{modelValue:f(s),"onUpdate:modelValue":t[0]||(t[0]=u=>N(s)?s.value=u:s=u),rows:20,type:"textarea",placeholder:"请输入内容（190207***,张三,B计算机191）",maxlength:"20000","show-word-limit":""},null,8,["modelValue"]),e(m,{type:"primary",onClick:t[1]||(t[1]=u=>h())},{default:a(()=>[_("预览")]),_:1}),e(m,{type:"success",onClick:t[2]||(t[2]=u=>w())},{default:a(()=>[_("提交")]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(x,{data:f(i),style:{width:"80%"}},{default:a(()=>[e(c,{prop:"sid",label:"学号",width:"180"}),e(c,{prop:"name",label:"姓名",width:"180"}),e(c,{prop:"class_name",label:"班级"})]),_:1},8,["data"])]),_:1})]),_:1})])],64)}}});export{$ as default};
