import{d as T,m as G,u as H,r as f,e as m,o as U,c as J,f as a,w as t,b as C,j as o,k as q,A as n,l as w,g as b,F as K,E as x}from"./index-596b62d7.js";import{g as L,s as O,d as P}from"./user-3b6bd59b.js";import"./index-c70bcbaa.js";const W={class:"left"},X={class:"dialog-footer"},Y={class:"dialog-footer"},le=T({__name:"profile",setup(Z){const R=G(),_=H(),z=f("first");let u=f(!1),d=f(!1),c=f(),r=f("");_.userInfo&&_.userInfo.avatar&&(r.value=_.userInfo.avatar);let g=f(""),k=f(""),i=f(""),p=f({sid:"",name:""});async function N(){const V=await L();k.value=V.real_name,i.value=V.sid,g.value=V.class_name}async function E(){await O(p.value),x.success("认证成功"),N(),u.value=!1}function F(V){V=="1"?_.configInfo.qq_number?r.value=`http://q1.qlogo.cn/g?b=qq&nk=${_.configInfo.qq_number}&s=100`:x.error("暂无绑定QQ"):V=="2"&&(r.value="")}async function S(){await P({avatar:r.value}),_.userInfo.avatar=r.value,R.go(0),x.success("修改成功")}return N(),(V,l)=>{const v=m("el-input"),s=m("el-form-item"),y=m("el-button"),I=m("el-form"),D=m("el-tab-pane"),Q=m("el-tabs"),A=m("el-dialog"),B=m("el-radio"),j=m("el-radio-group"),M=m("el-avatar");return U(),J(K,null,[a(Q,{modelValue:z.value,"onUpdate:modelValue":l[6]||(l[6]=e=>z.value=e),class:"profile"},{default:t(()=>[a(D,{label:"个人资料",name:"first",class:"first"},{default:t(()=>[C("div",W,[a(I,{"label-width":"100px"},{default:t(()=>[a(s,{label:"用户名"},{default:t(()=>[a(v,{modelValue:o(_).userInfo.username,"onUpdate:modelValue":l[0]||(l[0]=e=>o(_).userInfo.username=e),disabled:""},null,8,["modelValue"])]),_:1}),o(i)?w("",!0):(U(),q(s,{key:0,label:"学生信息认证"},{default:t(()=>[C("div",{class:"right",onClick:l[1]||(l[1]=e=>n(u)?u.value=!0:u=!0)},"认证")]),_:1})),o(i)?(U(),q(s,{key:1,label:"班级"},{default:t(()=>[a(v,{modelValue:o(g),"onUpdate:modelValue":l[2]||(l[2]=e=>n(g)?g.value=e:g=e),disabled:""},null,8,["modelValue"])]),_:1})):w("",!0),o(i)?(U(),q(s,{key:2,label:"学号"},{default:t(()=>[a(v,{modelValue:o(i),"onUpdate:modelValue":l[3]||(l[3]=e=>n(i)?i.value=e:i=e),disabled:""},null,8,["modelValue"])]),_:1})):w("",!0),o(i)?(U(),q(s,{key:3,label:"姓名"},{default:t(()=>[a(v,{modelValue:o(k),"onUpdate:modelValue":l[4]||(l[4]=e=>n(k)?k.value=e:k=e),disabled:""},null,8,["modelValue"])]),_:1})):w("",!0),a(s,{label:"头像"},{default:t(()=>[a(y,{onClick:l[5]||(l[5]=e=>n(d)?d.value=!0:d=!0)},{default:t(()=>[b("更换")]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),a(A,{modelValue:o(u),"onUpdate:modelValue":l[11]||(l[11]=e=>n(u)?u.value=e:u=e),title:"信息认证",width:"30%"},{footer:t(()=>[C("span",X,[a(y,{onClick:l[9]||(l[9]=e=>n(u)?u.value=!1:u=!1)},{default:t(()=>[b("取消")]),_:1}),a(y,{type:"primary",onClick:l[10]||(l[10]=e=>E())},{default:t(()=>[b(" 确定 ")]),_:1})])]),default:t(()=>[a(I,{model:o(p),"label-width":"40px"},{default:t(()=>[a(s,{label:"学号"},{default:t(()=>[a(v,{modelValue:o(p).sid,"onUpdate:modelValue":l[7]||(l[7]=e=>o(p).sid=e)},null,8,["modelValue"])]),_:1}),a(s,{label:"姓名"},{default:t(()=>[a(v,{modelValue:o(p).name,"onUpdate:modelValue":l[8]||(l[8]=e=>o(p).name=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),a(A,{modelValue:o(d),"onUpdate:modelValue":l[15]||(l[15]=e=>n(d)?d.value=e:d=e),title:"头像更换",width:"40%"},{footer:t(()=>[C("span",Y,[a(y,{onClick:l[14]||(l[14]=e=>n(d)?d.value=!1:d=!1)},{default:t(()=>[b("取消")]),_:1}),a(y,{type:"primary",onClick:S},{default:t(()=>[b(" 确定 ")]),_:1})])]),default:t(()=>[a(I,{model:o(p),"label-width":"100px"},{default:t(()=>[a(s,{label:"头像类型"},{default:t(()=>[a(j,{modelValue:o(c),"onUpdate:modelValue":l[12]||(l[12]=e=>n(c)?c.value=e:c=e),onChange:F},{default:t(()=>[a(B,{label:"1",size:"large"},{default:t(()=>[b("使用qq头像")]),_:1}),a(B,{label:"2",size:"large"},{default:t(()=>[b("自定义头像地址")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"头像地址"},{default:t(()=>[a(v,{modelValue:o(r),"onUpdate:modelValue":l[13]||(l[13]=e=>n(r)?r.value=e:r=e)},null,8,["modelValue"])]),_:1}),a(s,{label:"头像预览"},{default:t(()=>[a(M,{size:50,src:o(r)},null,8,["src"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});export{le as default};
