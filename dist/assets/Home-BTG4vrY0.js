import{j as s,c as t,L as l}from"./index-BlMw5Gxn.js";import{I as d,f as i}from"./Img-KIURU2Es.js";const c=({src:a,title:e,children:r})=>s.jsxs("div",{className:"card glass w-full max-w-md hover:drop-shadow-[0_-5px_5px_#37cdbe] bg-neutral",children:[s.jsx("figure",{children:s.jsx(d,{src:a,alt:e})}),s.jsx("div",{className:"card-body",children:r})]}),n=()=>{const a=t();return s.jsx("div",{className:"grid gap-4 mx-auto justify-items-center md:grid-cols-3",children:a&&a.map(e=>s.jsx("div",{children:s.jsx(l,{to:`/products/${e._id}`,className:"block",children:s.jsx(c,{src:e.image,title:e.title,children:s.jsxs("div",{className:"flex flex-col m-auto text-center",children:[s.jsx("p",{className:"text-2xl font-redressed",children:i(e.price)}),s.jsx("p",{className:"text-2xl text-secondary font-redressed",children:e.title}),s.jsx("p",{children:e.summary})]})})})},e._id))})};export{n as default};
