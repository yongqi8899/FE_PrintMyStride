import{u as y,a as C,r as x,j as e,N as F,L as S,f as A,B as p}from"./index-BlMw5Gxn.js";import{F as P,a as E}from"./appwrite-C3eDlNXD.js";import{a as k,M as L,F as h}from"./index-CADQ_5bj.js";import"./iconBase-Cu8tUrCX.js";function O(){var u;const c=y(),{isAuthenticated:f,setCheckSession:g,setIsAuthenticated:j}=C(),[{userName:o,email:n,password:s,confirmPassword:i},d]=x.useState({userName:"",email:"",password:"",confirmPassword:""}),[w,m]=x.useState(!1),N=()=>{d({userName:"",email:"",password:"",confirmPassword:""})},a=t=>d(r=>({...r,[t.target.name]:t.target.value})),v=async t=>{var r;try{if(t.preventDefault(),!o||!n||!s||!i)throw new Error("All fields are required");if(s!==i)throw new Error("Passwords do not match");m(!0);const l=await A({userName:o,email:n,password:s});p.success(l.success),j(!0),g(!0),c(((r=location.state)==null?void 0:r.next)||"/")}catch(l){p.error(l.message),l.message==="User already exists"&&(N(),c("/login"))}finally{m(!1)}};async function b(){await E.createOAuth2Session("google","http://localhost:5173/","http://localhost:5173/fail")}return f?e.jsx(F,{to:((u=location.state)==null?void 0:u.next)||"/"}):e.jsxs("div",{className:"flex flex-wrap items-center min-h-[calc(100vh-4rem)] justify-around",children:[e.jsx("div",{className:"flex flex-col m-auto",children:e.jsxs("p",{className:"text-6xl font-redressed md:text-8xl",children:[" ","Get Your Perfect Fit!"]})}),e.jsx("div",{className:"w-4/5 p-10 m-auto border rounded-2xl md:w-2/5 bg-neutral",children:e.jsxs("form",{className:"flex flex-col gap-3 ",onSubmit:v,children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Signup"}),e.jsx("p",{children:"Just some details to get you in.!"}),e.jsxs("label",{className:"flex items-center gap-2 grow input input-bordered",children:[e.jsx(k,{}),e.jsx("input",{name:"userName",value:o,onChange:a,className:"grow",placeholder:"User name"})]}),e.jsxs("label",{className:"flex items-center gap-2 input input-bordered",children:[e.jsx(L,{}),e.jsx("input",{name:"email",value:n,onChange:a,type:"email",className:"grow",placeholder:"Email",autocomplete:"email"})]}),e.jsxs("label",{className:"flex items-center gap-2 grow input input-bordered",children:[e.jsx(h,{}),e.jsx("input",{name:"password",value:s,onChange:a,type:"password",className:"grow",placeholder:"Password",autocomplete:"current-password"})]}),e.jsxs("label",{className:"flex items-center gap-2 grow input input-bordered",children:[e.jsx(h,{}),e.jsx("input",{name:"confirmPassword",value:i,onChange:a,type:"password",className:"grow",placeholder:"Confirm your password...",autocomplete:"current-password"})]}),e.jsx("button",{className:"btn btn-gradient-blue",disabled:w,children:"Create Account"}),e.jsxs("div",{className:"relative flex items-center my-1",children:[e.jsx("div",{className:"flex-grow border-t"}),e.jsx("span",{className:"flex-shrink mx-4 text-xs",children:"OR"}),e.jsx("div",{className:"flex-grow border-t "})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{onClick:b,children:e.jsx(P,{fontSize:"1.5em"})})}),e.jsxs("small",{children:["Already have an account?"," ",e.jsx(S,{to:"/login",className:"text-primary hover:underline",children:"Log in!"})]})]})})]})}export{O as default};