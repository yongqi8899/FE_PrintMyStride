import{e as j,a as N,r,u as v,j as e,N as b,L as w,s as y,B as c}from"./index-BlMw5Gxn.js";import{F as S,a as L}from"./appwrite-C3eDlNXD.js";import{M as k,F as C}from"./index-CADQ_5bj.js";import"./iconBase-Cu8tUrCX.js";function z(){var i;const d=j(),{isAuthenticated:m,setCheckSession:x,setIsAuthenticated:u}=N(),[{email:t,password:l},h]=r.useState({email:"",password:""});r.useState(""),v();const[p,n]=r.useState(!1),o=a=>h(s=>({...s,[a.target.name]:a.target.value})),f=async a=>{try{if(a.preventDefault(),!t||!l)throw new Error("All fields are required");n(!0);const s=await y({email:t,password:l});c.success(s.success),u(!0),x(!0)}catch(s){c.error(s.message)}finally{n(!1)}};async function g(){await L.createOAuth2Session("google","http://localhost:5173/","http://localhost:5173/fail")}return m?e.jsx(b,{to:((i=d.state)==null?void 0:i.next)||"/"}):e.jsxs("div",{className:"flex flex-wrap items-center min-h-[calc(100vh-3rem)] justify-around z-10",children:[e.jsx("div",{className:"flex flex-col m-auto",children:e.jsx("p",{className:"text-6xl font-redressed md:text-8xl",children:"Welcome Back!"})}),e.jsx("div",{className:"w-4/5 p-10 m-auto border rounded-2xl md:w-2/5 bg-neutral",children:e.jsxs("form",{className:"flex flex-col gap-3 ",onSubmit:f,children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Login"}),e.jsx("p",{children:"Glad you’re back.!"}),e.jsxs("label",{className:"flex items-center gap-2 input input-bordered",children:[e.jsx(k,{}),e.jsx("input",{name:"email",value:t,onChange:o,type:"email",className:"grow ",placeholder:"Email",autoComplete:"email"})]}),e.jsxs("label",{className:"flex items-center gap-2 input input-bordered",children:[e.jsx(C,{}),e.jsx("input",{name:"password",value:l,onChange:o,type:"password",className:"grow",placeholder:"Password",autocomplete:"current-password"})]}),e.jsx("button",{className:"btn btn-gradient-blue",disabled:p,children:"Login"}),e.jsxs("div",{className:"relative flex items-center my-1",children:[e.jsx("div",{className:"flex-grow border-t"}),e.jsx("span",{className:"flex-shrink mx-4 text-xs",children:"OR"}),e.jsx("div",{className:"flex-grow border-t "})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{onClick:g,children:e.jsx(S,{fontSize:"1.5em"})})}),e.jsxs("small",{children:["Don't have an account?"," ",e.jsx(w,{to:"/register",className:"text-primary hover:underline",children:"Signup!"})]})]})})]})}export{z as default};