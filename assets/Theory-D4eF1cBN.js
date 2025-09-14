import{r as a,j as e,d as n}from"./index-CntajkP1.js";import{B as m}from"./BreadcrumbsBar-B4a_EfV3.js";const f=n.div`
  border: 1px solid hsl(0 0% 100% / 0.14);
  border-radius: 12px;
  background: hsl(0 0% 100% / 0.03);
  overflow: hidden;
`,j=n.button`
  width: 100%;
  text-align: left;
  display: flex; align-items: center; justify-content: space-between;
  gap: 10px; padding: 14px 16px;
  background: transparent; color: inherit; border: 0; cursor: pointer;
  font-size: 15px; letter-spacing: 0.2px;
  &:hover { background: hsl(0 0% 100% / 0.05); }
`,y=n.span`
  display: inline-block; transition: transform 180ms ease;
  transform: rotate(${r=>r.$open?180:0}deg);
`,b=n.div`
  padding: ${r=>r.$open?"12px 16px 16px":"0 16px"};
  border-top: 1px solid hsl(0 0% 100% / 0.08);
  display: ${r=>r.$open?"block":"none"};
`,h=({children:r})=>e.jsx("pre",{style:{margin:"8px 0 12px",padding:"10px 12px",borderRadius:10,border:"1px solid hsl(0 0% 100% / 0.12)",background:"hsl(0 0% 100% / 0.04)",overflowX:"auto",lineHeight:1.5,fontSize:13.5},children:r});function v({question:r,children:t,defaultOpen:c=!1}){const[l,i]=a.useState(c),s=a.useId();return e.jsxs(f,{children:[e.jsxs(j,{"aria-expanded":l,"aria-controls":`${s}-panel`,onClick:()=>i(o=>!o),children:[e.jsx("span",{children:r}),e.jsx(y,{$open:l,children:"⌄"})]}),e.jsx(b,{id:`${s}-panel`,role:"region",$open:l,children:typeof t=="string"?e.jsx("p",{children:t}):t})]})}const p={Wrapper:n.div`
        padding: 16px;
        display: grid;
        gap: 12px;
    `,TopBar:n.div`
        display: grid;
        grid-template-columns: 1fr 280px;
        gap: 12px;
        align-items: center;
        margin-bottom: 6px;

        @media (max-width: 720px) {
        grid-template-columns: 1fr;
        }
    `,SearchBox:n.div`
        position: relative;
        input {
        width: 100%;
        padding: 10px 34px 10px 12px;
        border-radius: 10px;
        border: 1px solid hsl(0 0% 100% / 0.14);
        background: hsl(0 0% 100% / 0.03);
        color: inherit;
        outline: none;
        }
        button.clear {
        position: absolute; right: 6px; top: 50%; transform: translateY(-50%);
        background: transparent; border: 0; color: inherit; opacity: .7; cursor: pointer;
        padding: 4px 6px; border-radius: 8px;
        }
        small.hint {
        position: absolute; right: 40px; top: 50%; transform: translateY(-50%);
        opacity: .5;
        }
    `,Count:n.div`
        font-size: 12px; opacity: .75; margin: 2px 0 8px;
    `},g=[{id:"js-what-is-javascript",question:"What is JavaScript?",text:"JavaScript is a high-level, dynamic, prototype-based, multi-paradigm language standardized as ECMAScript. Runs in browsers and Node. Event loop, closures, modules, async/await.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," JavaScript is a high-level, dynamic,"," ",e.jsx("em",{children:"prototype-based"}),", multi-paradigm language standardized as"," ",e.jsx("strong",{children:"ECMAScript"}),". It runs in browsers and on servers (Node.js), uses a single-threaded event loop with non-blocking I/O, and supports first-class functions, lexical scope (closures), modules, and async/await."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Language vs Platform:"})," JS = language; host APIs vary — Browser (DOM, fetch) vs Node (fs, net, crypto)."]}),e.jsx(h,{children:`console.log("Hello, JavaScript!");
function makeAdder(x){ return y => x + y }
makeAdder(10)(3); // 13`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," float precision (",e.jsx("code",{children:"0.1 + 0.2 !== 0.3"}),"),"," ",e.jsx("code",{children:"this"})," rules, ",e.jsx("code",{children:"=="})," coercion,"," ",e.jsx("code",{children:'typeof null === "object"'}),"."]})]})},{id:"js-ecmascript-vs-javascript",question:"What is ECMAScript? How is it different from JavaScript?",text:"ECMAScript is the official specification (ECMA-262) that defines the JavaScript language. JavaScript is the common name for implementations of that spec in browsers/Node, plus host APIs (DOM, fs, fetch) that are outside ECMAScript.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"ECMAScript (ES)"})," is the official language specification published as ",e.jsx("strong",{children:"ECMA-262"}),". It defines syntax, types, operators, objects, and built-ins (e.g., ",e.jsx("code",{children:"Promise"}),", ",e.jsx("code",{children:"Map"}),", ",e.jsx("code",{children:"Array"})," methods).",e.jsx("strong",{children:"JavaScript"})," is what engines (V8, SpiderMonkey, JSC) implement and what developers use in",e.jsx("em",{children:"runtimes"})," (Browser, Node, Deno, Bun)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Difference (mental model):"})," ES = language rules & standard library. JavaScript (in a runtime) = ES ",e.jsx("em",{children:"plus"})," host APIs:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Browser host APIs:"})," DOM, ",e.jsx("code",{children:"fetch"}),", ",e.jsx("code",{children:"localStorage"}),", ",e.jsx("code",{children:"requestAnimationFrame"}),", etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Node host APIs:"})," ",e.jsx("code",{children:"fs"}),", ",e.jsx("code",{children:"net"}),", ",e.jsx("code",{children:"process"}),", ",e.jsx("code",{children:"Buffer"}),", etc."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Versions & naming:"})," Since 2015, the spec ships yearly (ES2015 ≈ ES6, then ES2016, ES2017 …). Proposals move through TC39 stages (0→4). ",e.jsx("em",{children:"Stage 4"})," features land in the next ES edition."]}),e.jsx(h,{children:`// ECMAScript features (language-level) — portable across runtimes:

// 1) Optional chaining & nullish coalescing
const email = user.profile?.contact?.email ?? "(not set)";

// 2) Non-mutating array helpers (ES2023)
[3,1,2].toSorted();         // [1,2,3]
[1,2,3].with(1, 99);        // [1,99,3]

// 3) BigInt (arbitrary-size integers)
const big = 9007199254740993n; // > Number.MAX_SAFE_INTEGER

// 4) Modules (ESM)
export const add = (a,b) => a + b;
`}),e.jsx(h,{children:`// Host API examples — NOT part of ECMAScript:

// Browser-only (DOM, fetch)
document.querySelector("h1"); // DOM API (browser)
await fetch("/api");          // WHATWG Fetch (browser/Node >=18)

// Node-only (fs)
import { readFile } from "node:fs/promises";
const txt = await readFile("notes.txt", "utf8");`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Specs vs runtime separation tells you ",e.jsx("em",{children:"what"})," is guaranteed everywhere (language), and ",e.jsx("em",{children:"what"})," is environment-specific (host). It guides portability, polyfills, and debugging."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," A feature can be in ES but missing on an older engine. Use transpilers/polyfills when targeting older environments; also don’t assume browser-only APIs exist in Node (and vice-versa)."]})]})}];function E(){const[r,t]=a.useState(""),c=a.useRef(null);a.useEffect(()=>{const s=o=>{var x,u;const d=(x=document.activeElement)==null?void 0:x.tagName;o.key==="/"&&d!=="INPUT"&&d!=="TEXTAREA"&&(o.preventDefault(),(u=c.current)==null||u.focus())};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[]);const l=s=>{(s.key==="Escape"||s.key==="Esc")&&(r?t(""):s.currentTarget.blur(),s.preventDefault())},i=a.useMemo(()=>{const s=r.trim().toLowerCase();return s?g.filter(({question:o,text:d})=>o.toLowerCase().includes(s)||d.toLowerCase().includes(s)):g},[r]);return e.jsxs(p.Wrapper,{children:[e.jsxs(p.TopBar,{children:[e.jsx(m,{}),e.jsxs(p.SearchBox,{children:[e.jsx("input",{ref:c,value:r,onChange:s=>t(s.target.value),onKeyDown:l,placeholder:"Search questions…  (press /, Esc to clear)","aria-label":"Search questions","aria-keyshortcuts":"/ Escape"}),r&&e.jsxs(e.Fragment,{children:[e.jsx("small",{className:"hint",children:"esc"}),e.jsx("button",{className:"clear",onClick:()=>t(""),"aria-label":"Clear search",title:"Clear (Esc)",children:"✕"})]})]})]}),e.jsxs(p.Count,{children:[i.length," result",i.length!==1?"s":"",r?` for “${r}”`:""]}),i.length===0?e.jsx("p",{style:{opacity:.7},children:"No matches. Try a different keyword."}):i.map(s=>e.jsx(v,{question:s.question,children:s.answer},s.id))]})}export{E as default};
