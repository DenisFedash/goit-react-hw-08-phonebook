"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[589],{660:function(e,n,t){t.d(n,{$:function(){return s}});var a,r=t(168),i=t(9958).Z.div(a||(a=(0,r.Z)(["\n  display: flex;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid orange;\n  border-radius: 50%;\n  width: 1em;\n  height: 1em;\n  animation: spin 2s linear infinite;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),o=t(184),s=function(){return(0,o.jsx)(i,{})}},9589:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var a=t(885),r=t(2791),i=t(5048),o=t(5154),s=t(4554),d=t(1331),l=t(4289),u=t(6151),m=t(660),p=t(6140),c=t(6871),x=t(184);function f(){var e=(0,c.s0)(),n=(0,i.I0)(),t=(0,r.useState)(""),f=(0,a.Z)(t,2),g=f[0],h=f[1],v=(0,r.useState)(""),b=(0,a.Z)(v,2),w=b[0],Z=b[1],y=(0,r.useState)(""),j=(0,a.Z)(y,2),k=j[0],C=j[1],S=(0,i.v9)(l.Z.getLoading),P=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":return h(a);case"email":return Z(a);case"password":return C(a);default:return}};return(0,x.jsx)(s.Z,{sx:{position:"relative",backgroundColor:"yellow",paddingTop:"40px",paddingBottom:"40px",margin:"auto",textAlign:"center",maxWidth:"600px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"4px"},children:(0,x.jsx)(s.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,MaxWidth:"35ch"}},noValidate:!0,autoComplete:"off",onSubmit:function(e){return e.preventDefault(),""===g.trim()||""===w.trim()||""===k.trim()?p.ZP.error("\ud83d\udca9 Please fill in all fields!"):k.length<7?p.ZP.info("Passwords must be at least 7 characters long!"):void n(o.Z.register({name:g,email:w,password:k}))},children:(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",paddingLeft:"50px",paddingRight:"50px"},children:[(0,x.jsx)(d.Z,{id:"standard-name",label:"Name",variant:"standard",type:"text",name:"name",value:g,onChange:P}),(0,x.jsx)(d.Z,{id:"standard-email",label:"E-mail",variant:"standard",type:"email",name:"email",value:w,onChange:P}),(0,x.jsx)(d.Z,{style:{paddingBottom:"30px"},id:"standard-password",label:"Password",variant:"standard",type:"password",name:"password",value:k,onChange:P}),(0,x.jsx)(u.Z,{variant:"contained",type:"submit",disabled:S,onSubmit:function(){return e("login")},children:S?(0,x.jsx)(m.$,{}):"Sign Up"})]})})})}}}]);
//# sourceMappingURL=589.cea0c293.chunk.js.map