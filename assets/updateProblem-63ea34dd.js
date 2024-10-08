import{r as Z,d as D,u as G,e as H}from"./topic-d11f504d.js";import{d as K,n as Q,m as W,r as p,i as X,e as n,o as f,c as w,f as e,w as t,F as J,h as O,g as i,k as j,b as q,j as U,A,l as Y,E as C}from"./index-596b62d7.js";import"./index-c70bcbaa.js";const h={class:"addproblem Box"},ee=q("template",{slot:"append"},[i("ms")],-1),le=q("template",{slot:"append"},[i("MB")],-1),ie=K({__name:"updateProblem",setup(te){const b=Q(),x=W(),g=p(),c=p(),l=p({id:null,ac:!1,is_public:null,judge_type:"",memory_limit:null,num:null,subm_cnt:null,time_limit:null,title:null,uploader:null,user_tests:null,version:null,ac_cnt:null,difficulty:null,create_time:null}),$=[{value:"1",label:"入门"},{value:"2",label:"简单"},{value:"3",label:"中等"},{value:"4",label:"较难"},{value:"5",label:"困难"}],N=X({num:[{required:!0,message:"请输入题目编号",trigger:"blur"},{pattern:/^[0-9A-Za-z]{2,10}$/,message:"编号只包含(2~10)数字和字母",trigger:"blur"}],title:[{required:!0,message:"请输入题目名称",trigger:"blur"}],memory_limit:[{required:!0,message:"请输入空间限制",trigger:"blur"},{pattern:/^[0-9]{1,10}$/,message:"输入空间格式不正确",trigger:"blur"}],time_limit:[{required:!0,message:"请输入时间限制",trigger:"blur"},{pattern:/^[0-9]{1,10}$/,message:"输入时间格式不正确",trigger:"blur"}]});let m=p(""),v=p([]),_=p("");async function z(){const{data:s,info:u}=await Z({num:b.query.num});if(c.value=s,l.value=u,l.value.is_public=l.value.is_public.toString(),l.value.difficulty=l.value.difficulty.toString(),b.query.judgeType=="mchoice"){const{data:r}=await D({id:b.query.id});v.value=JSON.parse(r.options),_.value=JSON.parse(r.answer)}}z();function E(){m.value||C.error("选项不能为空"),v.value.push(m.value)}function L(s){v.value.splice(s,1)}async function M(s){s&&await s.validate(async(u,r)=>{if(u){if(l.value.judge_type=="mchoice"){let y={id:b.query.id,title:l.value.title,difficulty:l.value.difficulty,content:c.value,is_public:l.value.is_public,is_multi:!1,options:JSON.stringify(v.value),answer:JSON.stringify([_.value])};return await G(y),C.success("修改成功"),x.go(-1)}let o={num:l.value.num,title:l.value.title,difficulty:l.value.difficulty,memory_limit:l.value.memory_limit,time_limit:l.value.time_limit,content:c.value,is_public:l.value.is_public,judge_type:l.value.judge_type};await H(o),x.go(-1),C.success("题目修改成功")}else console.log("error submit!",r)})}return(s,u)=>{const r=n("el-input"),o=n("el-form-item"),y=n("el-option"),T=n("el-select"),S=n("el-form"),d=n("el-radio"),F=n("el-radio-group"),B=n("el-col"),V=n("el-button"),R=n("el-row"),I=n("mavon-editor");return f(),w("div",h,[e(S,{ref_key:"ruleFormRef",ref:g,rules:N,model:l.value,"label-width":"80px"},{default:t(()=>[e(o,{label:"题目编号",prop:"num"},{default:t(()=>[e(r,{modelValue:l.value.num,"onUpdate:modelValue":u[0]||(u[0]=a=>l.value.num=a),disabled:""},null,8,["modelValue"])]),_:1}),e(o,{label:"题目名称",prop:"title"},{default:t(()=>[e(r,{modelValue:l.value.title,"onUpdate:modelValue":u[1]||(u[1]=a=>l.value.title=a)},null,8,["modelValue"])]),_:1}),e(S,{ref_key:"ruleFormRef",ref:g,rules:N,inline:!0,model:l.value,"label-width":"80px"},{default:t(()=>[e(o,{label:"题目难度",prop:"difficulty"},{default:t(()=>[e(T,{modelValue:l.value.difficulty,"onUpdate:modelValue":u[2]||(u[2]=a=>l.value.difficulty=a),clearable:"",placeholder:"请选择"},{default:t(()=>[(f(),w(J,null,O($,a=>e(y,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(o,{label:"时间限制",prop:"time_limit"},{default:t(()=>[e(r,{modelValue:l.value.time_limit,"onUpdate:modelValue":u[3]||(u[3]=a=>l.value.time_limit=a)},{default:t(()=>[ee]),_:1},8,["modelValue"])]),_:1}),e(o,{label:"空间限制",prop:"memory_limit"},{default:t(()=>[e(r,{modelValue:l.value.memory_limit,"onUpdate:modelValue":u[4]||(u[4]=a=>l.value.memory_limit=a)},{default:t(()=>[le]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["rules","model"]),e(o,{label:"题目类型",prop:"judge_type"},{default:t(()=>[e(F,{modelValue:l.value.judge_type,"onUpdate:modelValue":u[5]||(u[5]=a=>l.value.judge_type=a)},{default:t(()=>[e(d,{label:"common"},{default:t(()=>[i("传统")]),_:1}),e(d,{label:"spj"},{default:t(()=>[i("特判")]),_:1}),e(d,{label:"cf_remote"},{default:t(()=>[i("CF")]),_:1}),e(d,{label:"lab"},{default:t(()=>[i("lab")]),_:1}),e(d,{label:"mchoice"},{default:t(()=>[i("选择题")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l.value.judge_type=="mchoice"?(f(),j(o,{key:0},{default:t(()=>[q("div",null,[e(R,null,{default:t(()=>[e(B,{span:12},{default:t(()=>[e(r,{modelValue:U(m),"onUpdate:modelValue":u[6]||(u[6]=a=>A(m)?m.value=a:m=a),placeholder:"输入选项"},null,8,["modelValue"])]),_:1}),e(B,{span:12},{default:t(()=>[e(V,{onClick:E},{default:t(()=>[i("添加")]),_:1})]),_:1})]),_:1}),(f(!0),w(J,null,O(U(v),(a,P)=>(f(),j(R,{key:a},{default:t(()=>[(f(),j(d,{class:"sel-radio",modelValue:U(_),"onUpdate:modelValue":u[7]||(u[7]=k=>A(_)?_.value=k:_=k),label:a,key:a},null,8,["modelValue","label"])),e(V,{onClick:k=>L(P),type:"danger",size:"small"},{default:t(()=>[i("删除")]),_:2},1032,["onClick"])]),_:2},1024))),128))])]),_:1})):Y("",!0),e(o,{label:"是否公开",prop:"is_public"},{default:t(()=>[e(F,{modelValue:l.value.is_public,"onUpdate:modelValue":u[8]||(u[8]=a=>l.value.is_public=a)},{default:t(()=>[e(d,{label:"1"},{default:t(()=>[i("公开")]),_:1}),e(d,{label:"0"},{default:t(()=>[i("不公开")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(o,{label:"编辑题目"},{default:t(()=>[e(I,{modelValue:c.value,"onUpdate:modelValue":u[9]||(u[9]=a=>c.value=a)},null,8,["modelValue"])]),_:1}),e(o,null,{default:t(()=>[e(V,{type:"primary",onClick:u[10]||(u[10]=a=>M(g.value))},{default:t(()=>[i("提交")]),_:1})]),_:1})]),_:1},8,["rules","model"])])}}});export{ie as default};
