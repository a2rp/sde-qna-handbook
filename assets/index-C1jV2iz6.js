import{j as e,N as a,d as r}from"./index-DUBKA-0G.js";import{B as i}from"./BreadcrumbsBar-DTcWuLy9.js";const s={Wrapper:r.div`
    padding: 20px 16px 40px;
    display: grid;
    gap: 16px;
  `,Header:r.header`
    display: grid;
    gap: 6px;
    h1 { margin: 0; letter-spacing: .3px; }
    p.lead { opacity: .85; margin: 0; }
    small.muted { opacity: .6; }
  `,Fieldset:r.fieldset`
    max-width: 960px;
    padding: 18px 18px 16px;
    border: 1px solid hsl(0 0% 100% / 0.14);
    border-radius: 12px;
    background: hsl(0 0% 100% / 0.03);

    legend { padding: 0 10px; font-size: 12.5px; opacity: .75; }
    p { margin: 0 0 12px; }
    ul { margin: 10px 0 0 18px; }
    li { margin: 4px 0; }
    pre {
      margin: 10px 0 0;
      padding: 10px 12px;
      border-radius: 10px;
      border: 1px solid hsl(0 0% 100% / 0.12);
      background: hsl(0 0% 100% / 0.04);
      overflow-x: auto;
      line-height: 1.5;
      font-size: 13.5px;
    }
  `,Cards:r.div`
    margin-top: 18px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;

    a.card {
      display: block;
      padding: 14px 16px;
      border-radius: 12px;
      border: 1px solid hsl(0 0% 100% / 0.14);
      background: hsl(0 0% 100% / 0.02);
      color: inherit;
      text-decoration: none;
      transition: transform .12s ease, background .12s ease, border-color .12s ease;
    }
    a.card:hover {
      transform: translateY(-1px);
      background: hsl(0 0% 100% / 0.04);
      border-color: hsl(0 0% 100% / 0.22);
    }
    a.card h3 { margin: 0 0 6px; font-size: 16px; }
    a.card p { margin: 0; opacity: .8; font-size: 13.5px; }
  `,Links:r.div`
    margin-top: 10px;
    font-size: 13px;
    a { color: inherit; }
  `},d=()=>e.jsxs(s.Wrapper,{children:[e.jsx(i,{}),e.jsxs(s.Header,{children:[e.jsx("h1",{children:"JavaScript"}),e.jsx("p",{className:"lead",children:"The programming language of the Web — used with HTML & CSS for interactive UI, and with runtimes like Node.js for servers/tools."}),e.jsx("small",{className:"muted",children:"Last updated: Sep 14, 2025"})]}),e.jsxs(s.Fieldset,{children:[e.jsx("legend",{children:"About"}),e.jsxs("div",{children:[e.jsx("p",{children:"JavaScript (JS) is a programming language and a core web technology alongside HTML and CSS. Most websites use JS on the client for behavior. Browsers run JS via an engine; the same language also runs outside the browser in runtimes such as Node.js, Deno, and Bun."}),e.jsxs("p",{children:["JS conforms to the ",e.jsx("strong",{children:"ECMAScript"})," standard. It’s dynamically typed, prototype-based, multi-paradigm (event-driven, functional, imperative) with first-class functions and modules. The ECMAScript spec leaves I/O to the host — so browser/Node provide APIs like DOM, fetch, fs, etc."]}),e.jsxs("p",{children:["Although the names sound similar, ",e.jsx("strong",{children:"Java"})," and ",e.jsx("strong",{children:"JavaScript"})," are different languages."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Engines:"})," V8 (Chrome/Node), SpiderMonkey (Firefox), JavaScriptCore (Safari)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Key features:"})," lexical scope & closures, promises & async/await, modules (ESM), event loop."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Language vs platform:"})," JS is the language; host APIs differ between Browser and Node."]})]}),e.jsx("pre",{children:`// Tiny taste
console.log("Hello, JavaScript!");
export const add = (a, b) => a + b; // ESM named export`}),e.jsxs(s.Cards,{children:[e.jsxs(a,{to:"/javascript/theory",className:"card",children:[e.jsx("h3",{children:"Theory QnA"}),e.jsx("p",{children:"Core language, concepts, gotchas, tiny examples."})]}),e.jsxs(a,{to:"/javascript/programs",className:"card",children:[e.jsx("h3",{children:"Programs QnA"}),e.jsx("p",{children:"Problem → approach → code → complexity → tests."})]})]}),e.jsx(s.Links,{children:e.jsxs("span",{children:["Reference:"," ",e.jsx("a",{href:"https://en.wikipedia.org/wiki/JavaScript",target:"_blank",rel:"noreferrer",children:"Wikipedia — JavaScript"})]})})]})]})]});export{d as default};
