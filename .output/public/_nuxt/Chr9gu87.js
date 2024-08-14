import{_ as o,j as n,t as c,v as i,Q as u,R as d,z as m,A as f,B as g,S as _,T as b,U as h,V as v}from"./BrfhgYp9.js";const S=["aria-label","title"],y={__name:"LcarsButton",props:{variant:{type:String,default:"primary"},customClass:{type:String,default:""},ariaLabel:{type:String,default:"Button"},title:{type:String,default:""}},emits:["click"],setup(t,{emit:s}){const e=t,a=s,r=n(()=>`lcars-button lcars-bg-${e.variant} lcars-rounded lcars-padding`),l=()=>{a("click")};return(p,k)=>(c(),i("button",{class:d([r.value,t.customClass]),onClick:l,"aria-label":t.ariaLabel,title:t.title},[u(p.$slots,"default",{},void 0)],10,S))}},C=o(y,[["__scopeId","data-v-271e5b7f"]]),L={__name:"LcarsForm",props:{variant:{type:String,default:"primary"}},setup(t){const s=t,e=n(()=>`lcars-form lcars-bg-${s.variant} lcars-rounded lcars-padding`),a=()=>{console.log("Form submitted")};return(r,l)=>(c(),i("form",{onSubmit:_(a,["prevent"]),class:d(e.value)},[u(r.$slots,"default",{},void 0),m(C,{type:"submit",variant:"primary"},{default:f(()=>[g("Submit")]),_:1})],34))}},I=o(L,[["__scopeId","data-v-1dfb9d99"]]),A={__name:"LcarsInput",props:{variant:{type:String,default:"primary"}},setup(t){const s=t,e=n(()=>`lcars-input lcars-bg-${s.variant} lcars-rounded lcars-padding`);return(a,r)=>(c(),i("input",b({class:e.value},a.$attrs,h(a.listeners)),null,16))}},x=o(A,[["__scopeId","data-v-6b289c29"]]),$=v("auth",{state:()=>({isAuthenticated:!1}),actions:{login(){this.isAuthenticated=!0},logout(){this.isAuthenticated=!1}}});function F(){const t=$(),s=async r=>t.login(r),e=()=>t.logout(),a=n(()=>t.isAuthenticated);return{login:s,logout:e,isAuthenticated:a}}export{I as L,x as a,F as u};
