import{u as l,j as r,N as i,d as n}from"./index-CxC_fzcL.js";const d=n.nav`
  display: flex; align-items: center; flex-wrap: wrap; gap: 6px;
  font-size: 13px; opacity: .9;
  a { color: inherit; text-decoration: none; border-bottom: 1px dotted transparent; }
  a:hover { border-bottom-color: currentColor; }
  [aria-current="page"] { opacity: .7; }
`,h=n.span`opacity: .5; margin: 0 2px;`,m={"":"Home",javascript:"JavaScript",reactjs:"React",node:"Node",theory:"Theory",programs:"Programs",about:"About"};function u(){const{pathname:c}=l(),p=c.replace(/^\/+|\/+$/g,"").split("/").filter(Boolean),t=[{href:"/",label:"Home"}];let s="";for(const e of p){s+=`/${e}`;const o=m[e]??e.replace(/-/g," ").replace(/\b\w/g,a=>a.toUpperCase());t.push({href:s,label:o})}return r.jsx(d,{"aria-label":"Breadcrumb",children:t.map((e,o)=>{const a=o===t.length-1;return r.jsxs("span",{children:[a?r.jsx("span",{"aria-current":"page",children:e.label}):r.jsx(i,{to:e.href,children:e.label}),!a&&r.jsx(h,{children:"›"})]},e.href)})})}export{u as B};
