import{r as a,j as e,d as n}from"./index-B8cb-YiW.js";import{B as g}from"./BreadcrumbsBar-DK44Fx2J.js";const j=n.div`
  border: 1px solid hsl(0 0% 100% / 0.14);
  border-radius: 12px;
  background: hsl(0 0% 100% / 0.03);
  overflow: hidden;
`,f=n.button`
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
`,v=n.div`
  padding: ${r=>r.$open?"12px 16px 16px":"0 16px"};
  border-top: 1px solid hsl(0 0% 100% / 0.08);
  display: ${r=>r.$open?"block":"none"};
`,l=({children:r})=>e.jsx("pre",{style:{margin:"8px 0 12px",padding:"10px 12px",borderRadius:10,border:"1px solid hsl(0 0% 100% / 0.12)",background:"hsl(0 0% 100% / 0.04)",overflowX:"auto",lineHeight:1.5,fontSize:13.5},children:r});function S({question:r,children:t,defaultOpen:d=!1}){const[c,i]=a.useState(d),s=a.useId();return e.jsxs(j,{children:[e.jsxs(f,{"aria-expanded":c,"aria-controls":`${s}-panel`,onClick:()=>i(o=>!o),children:[e.jsx("span",{children:r}),e.jsx(y,{$open:c,children:"⌄"})]}),e.jsx(v,{id:`${s}-panel`,role:"region",$open:c,children:typeof t=="string"?e.jsx("p",{children:t}):t})]})}const p={Wrapper:n.div`
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
    `},u=[{id:"js-what-is-javascript",question:"What is JavaScript?",text:"JavaScript is a high-level, dynamic, prototype-based, multi-paradigm language standardized as ECMAScript. Runs in browsers and Node. Event loop, closures, modules, async/await.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," JavaScript is a high-level, dynamic,"," ",e.jsx("em",{children:"prototype-based"}),", multi-paradigm language standardized as"," ",e.jsx("strong",{children:"ECMAScript"}),". It runs in browsers and on servers (Node.js), uses a single-threaded event loop with non-blocking I/O, and supports first-class functions, lexical scope (closures), modules, and async/await."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Language vs Platform:"})," JS = language; host APIs vary — Browser (DOM, fetch) vs Node (fs, net, crypto)."]}),e.jsx(l,{children:`console.log("Hello, JavaScript!");
function makeAdder(x){ return y => x + y }
makeAdder(10)(3); // 13`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," float precision (",e.jsx("code",{children:"0.1 + 0.2 !== 0.3"}),"),"," ",e.jsx("code",{children:"this"})," rules, ",e.jsx("code",{children:"=="})," coercion,"," ",e.jsx("code",{children:'typeof null === "object"'}),"."]})]})},{id:"js-what-is-ecmascript",question:"What is ECMAScript?",text:"ECMAScript (ECMA-262) is the official language specification that defines JavaScript syntax, semantics, and built-ins (e.g., Promise, Map, Array methods).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"ECMAScript (ES)"})," is the official ",e.jsx("strong",{children:"ECMA-262"})," spec for the JavaScript language: grammar, types, operators, standard objects, and methods."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," ES defines what works uniformly across engines (V8/SpiderMonkey/JSC). Things like DOM or Node’s ",e.jsx("code",{children:"fs"})," are ",e.jsx("em",{children:"not"})," ECMAScript—they’re host APIs."]}),e.jsx(l,{children:`// ECMAScript feature (portable across runtimes):
const email = user?.profile?.email ?? "(not set)";

// NOT ECMAScript (host APIs):
// document.querySelector("h1")   // Browser DOM
// (await import("node:fs/promises")).readFile // Node`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotcha:"})," ES features are released yearly (ES2015+). Older environments may need transpile/polyfills."]})]})},{id:"js-what-is-js-engine",question:"What is a JavaScript engine?",text:"A JavaScript engine parses, compiles (often JIT), and executes JS code with garbage collection. Examples: V8 (Chrome/Node), SpiderMonkey (Firefox), JavaScriptCore (Safari).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"JavaScript engine"})," is the program that",e.jsx("em",{children:" parses → compiles (JIT) → executes"})," JavaScript and manages memory via garbage collection. It implements the ECMAScript spec."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Examples:"})," V8 (Chrome, Node, Deno, Bun uses a fork), SpiderMonkey (Firefox), JavaScriptCore / Nitro (Safari)."]}),e.jsx(l,{children:`// Engines run your JS (same code, different engines)
console.log("Hello from the engine!");
// Under the hood: parse -> optimize -> JIT -> run -> GC`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Performance and feature availability depend on the engine version. New ECMAScript features appear as engines ship support."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotcha:"})," An ",e.jsx("em",{children:"engine"})," is not a ",e.jsx("em",{children:"runtime"}),". DOM, fetch, fs, etc. come from the host runtime, not the engine itself."]})]})},{id:"js-what-is-runtime",question:"What is a JavaScript runtime?",text:"A runtime is the environment that hosts the JS engine and provides APIs (I/O, timers, modules) plus an event loop. Examples: Browser, Node.js, Deno, Bun.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"JavaScript runtime"})," = JS engine ",e.jsx("em",{children:"+"})," host APIs ",e.jsx("em",{children:"+"})," event loop. It’s the environment where JS runs and where non-language features come from."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Browser:"})," DOM, ",e.jsx("code",{children:"fetch"}),", ",e.jsx("code",{children:"localStorage"}),", ",e.jsx("code",{children:"requestAnimationFrame"}),", Workers…"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Node.js:"})," ",e.jsx("code",{children:"fs"}),", ",e.jsx("code",{children:"net"}),", ",e.jsx("code",{children:"http"}),", ",e.jsx("code",{children:"process"}),", ",e.jsx("code",{children:"Buffer"}),", timers…"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Deno/Bun:"})," similar idea, different standard libs and tooling."]})]}),e.jsx(l,{children:`// ECMAScript (language) works everywhere:
[1,2,3].map(x => x * 2);

// Browser-only (host APIs):
// document.querySelector("h1");
// await fetch("/api");

// Node-only (host APIs):
// import { readFile } from "node:fs/promises";
// const txt = await readFile("notes.txt", "utf8");`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Tells you what’s portable (language) vs what depends on the environment (host APIs)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotcha:"})," Don’t assume browser APIs exist in Node (and vice-versa). Choose the right polyfills or runtime-specific code paths."]})]})},{id:"js-what-is-event-loop",question:"What is the event loop?",text:"The event loop lets single-threaded JS run non-blocking: it executes the call stack, then runs microtasks (Promises) before moving to the next macrotask (timers/I-O).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," The ",e.jsx("em",{children:"event loop"})," drives execution in JS runtimes. After synchronous code finishes, the runtime flushes all ",e.jsx("strong",{children:"microtasks"}),"(e.g., Promise callbacks, ",e.jsx("code",{children:"queueMicrotask"}),") ",e.jsx("em",{children:"before"})," handling the next",e.jsx("strong",{children:"macrotask"})," (e.g., ",e.jsx("code",{children:"setTimeout"}),", I/O, message events)."]}),e.jsx(l,{children:`setTimeout(() => console.log("task"), 0);      // macrotask
Promise.resolve().then(() => console.log("micro")); // microtask
console.log("sync");
// order: sync → micro → task`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Explains timing/order bugs, UI freezes (long sync blocks), and why ",e.jsx("em",{children:"Promises often run “before” timeouts"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," A tight microtask loop (e.g., recursively scheduling microtasks) can starve macrotasks/rendering; ",e.jsx("code",{children:"setTimeout(fn, 0)"})," never runs “immediately” (minimum clamping, scheduled after current microtasks)."]})]})}];function k(){const[r,t]=a.useState(""),d=a.useRef(null);a.useEffect(()=>{const s=o=>{var x,m;const h=(x=document.activeElement)==null?void 0:x.tagName;o.key==="/"&&h!=="INPUT"&&h!=="TEXTAREA"&&(o.preventDefault(),(m=d.current)==null||m.focus())};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[]);const c=s=>{(s.key==="Escape"||s.key==="Esc")&&(r?t(""):s.currentTarget.blur(),s.preventDefault())},i=a.useMemo(()=>{const s=r.trim().toLowerCase();return s?u.filter(({question:o,text:h})=>o.toLowerCase().includes(s)||h.toLowerCase().includes(s)):u},[r]);return e.jsxs(p.Wrapper,{children:[e.jsxs(p.TopBar,{children:[e.jsx(g,{}),e.jsxs(p.SearchBox,{children:[e.jsx("input",{ref:d,value:r,onChange:s=>t(s.target.value),onKeyDown:c,placeholder:"Search questions…  (press /, Esc to clear)","aria-label":"Search questions","aria-keyshortcuts":"/ Escape"}),r&&e.jsxs(e.Fragment,{children:[e.jsx("small",{className:"hint",children:"esc"}),e.jsx("button",{className:"clear",onClick:()=>t(""),"aria-label":"Clear search",title:"Clear (Esc)",children:"✕"})]})]})]}),e.jsxs(p.Count,{children:[i.length," result",i.length!==1?"s":"",r?` for “${r}”`:""]}),i.length===0?e.jsx("p",{style:{opacity:.7},children:"No matches. Try a different keyword."}):i.map(s=>e.jsx(S,{question:s.question,children:s.answer},s.id))]})}export{k as default};
