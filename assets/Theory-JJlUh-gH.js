import{r as l,j as e,d as i}from"./index-CpRkqCMb.js";import{B as f}from"./BreadcrumbsBar-Va6LaVQ1.js";const m=i.div`
  border: 1px solid hsl(0 0% 100% / 0.14);
  border-radius: 12px;
  background: hsl(0 0% 100% / 0.03);
  overflow: hidden;
`,g=i.button`
  width: 100%;
  text-align: left;
  display: flex; align-items: center; justify-content: space-between;
  gap: 10px; padding: 14px 16px;
  background: transparent; color: inherit; border: 0; cursor: pointer;
  font-size: 15px; letter-spacing: 0.2px;
  &:hover { background: hsl(0 0% 100% / 0.05); }
`,y=i.span`
  display: inline-block; transition: transform 180ms ease;
  transform: rotate(${r=>r.$open?180:0}deg);
`,b=i.div`
  padding: ${r=>r.$open?"12px 16px 16px":"0 16px"};
  border-top: 1px solid hsl(0 0% 100% / 0.08);
  display: ${r=>r.$open?"block":"none"};
`,n=({children:r})=>e.jsx("pre",{style:{margin:"8px 0 12px",padding:"10px 12px",borderRadius:10,border:"1px solid hsl(0 0% 100% / 0.12)",background:"hsl(0 0% 100% / 0.04)",overflowX:"auto",lineHeight:1.5,fontSize:13.5},children:r});function v({question:r,children:t,defaultOpen:d=!1}){const[a,o]=l.useState(d),s=l.useId();return e.jsxs(m,{children:[e.jsxs(g,{"aria-expanded":a,"aria-controls":`${s}-panel`,onClick:()=>o(c=>!c),children:[e.jsx("span",{children:r}),e.jsx(y,{$open:a,children:"⌄"})]}),e.jsx(b,{id:`${s}-panel`,role:"region",$open:a,children:typeof t=="string"?e.jsx("p",{children:t}):t})]})}const u={Wrapper:i.div`
        padding: 16px;
        display: grid;
        gap: 12px;
    `,TopBar:i.div`
        display: grid;
        grid-template-columns: 1fr 280px;
        gap: 12px;
        align-items: center;
        margin-bottom: 6px;

        @media (max-width: 720px) {
        grid-template-columns: 1fr;
        }
    `,SearchBox:i.div`
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
    `,Count:i.div`
        font-size: 12px; opacity: .75; margin: 2px 0 8px;
    `},p=[{id:"js-what-is-javascript",question:"What is JavaScript?",text:"JavaScript is a high-level, dynamic, prototype-based, multi-paradigm language standardized as ECMAScript. Runs in browsers and Node. Event loop, closures, modules, async/await.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," JavaScript is a high-level, dynamic,"," ",e.jsx("em",{children:"prototype-based"}),", multi-paradigm language standardized as"," ",e.jsx("strong",{children:"ECMAScript"}),". It runs in browsers and on servers (Node.js), uses a single-threaded event loop with non-blocking I/O, and supports first-class functions, lexical scope (closures), modules, and async/await."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Language vs Platform:"})," JS = language; host APIs vary - Browser (DOM, fetch) vs Node (fs, net, crypto)."]}),e.jsx(n,{children:`console.log("Hello, JavaScript!");
function makeAdder(x){ return y => x + y }
makeAdder(10)(3); // 13`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," float precision (",e.jsx("code",{children:"0.1 + 0.2 !== 0.3"}),"),"," ",e.jsx("code",{children:"this"})," rules, ",e.jsx("code",{children:"=="})," coercion,"," ",e.jsx("code",{children:'typeof null === "object"'}),"."]})]})},{id:"js-what-is-ecmascript",question:"What is ECMAScript?",text:"ECMAScript (ECMA-262) is the official language specification that defines JavaScript syntax, semantics, and built-ins (e.g., Promise, Map, Array methods).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"ECMAScript (ES)"})," is the official ",e.jsx("strong",{children:"ECMA-262"})," spec for the JavaScript language: grammar, types, operators, standard objects, and methods."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," ES defines what works uniformly across engines (V8/SpiderMonkey/JSC). Things like DOM or Node's ",e.jsx("code",{children:"fs"})," are ",e.jsx("em",{children:"not"})," ECMAScript-they're host APIs."]}),e.jsx(n,{children:`// ECMAScript feature (portable across runtimes):
const email = user?.profile?.email ?? "(not set)";

// NOT ECMAScript (host APIs):
// document.querySelector("h1")   // Browser DOM
// (await import("node:fs/promises")).readFile // Node`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotcha:"})," ES features are released yearly (ES2015+). Older environments may need transpile/polyfills."]})]})},{id:"js-what-is-js-engine",question:"What is a JavaScript engine?",text:"A JavaScript engine parses, compiles (often JIT), and executes JS code with garbage collection. Examples: V8 (Chrome/Node), SpiderMonkey (Firefox), JavaScriptCore (Safari).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"JavaScript engine"})," is the program that",e.jsx("em",{children:" parses → compiles (JIT) → executes"})," JavaScript and manages memory via garbage collection. It implements the ECMAScript spec."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Examples:"})," V8 (Chrome, Node, Deno, Bun uses a fork), SpiderMonkey (Firefox), JavaScriptCore / Nitro (Safari)."]}),e.jsx(n,{children:`// Engines run your JS (same code, different engines)
console.log("Hello from the engine!");
// Under the hood: parse -> optimize -> JIT -> run -> GC`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Performance and feature availability depend on the engine version. New ECMAScript features appear as engines ship support."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotcha:"})," An ",e.jsx("em",{children:"engine"})," is not a ",e.jsx("em",{children:"runtime"}),". DOM, fetch, fs, etc. come from the host runtime, not the engine itself."]})]})},{id:"js-what-is-runtime",question:"What is a JavaScript runtime?",text:"A runtime is the environment that hosts the JS engine and provides APIs (I/O, timers, modules) plus an event loop. Examples: Browser, Node.js, Deno, Bun.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"JavaScript runtime"})," = JS engine ",e.jsx("em",{children:"+"})," host APIs ",e.jsx("em",{children:"+"})," event loop. It's the environment where JS runs and where non-language features come from."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Browser:"})," DOM, ",e.jsx("code",{children:"fetch"}),", ",e.jsx("code",{children:"localStorage"}),", ",e.jsx("code",{children:"requestAnimationFrame"}),", Workers…"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Node.js:"})," ",e.jsx("code",{children:"fs"}),", ",e.jsx("code",{children:"net"}),", ",e.jsx("code",{children:"http"}),", ",e.jsx("code",{children:"process"}),", ",e.jsx("code",{children:"Buffer"}),", timers…"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Deno/Bun:"})," similar idea, different standard libs and tooling."]})]}),e.jsx(n,{children:`// ECMAScript (language) works everywhere:
[1,2,3].map(x => x * 2);

// Browser-only (host APIs):
// document.querySelector("h1");
// await fetch("/api");

// Node-only (host APIs):
// import { readFile } from "node:fs/promises";
// const txt = await readFile("notes.txt", "utf8");`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Tells you what's portable (language) vs what depends on the environment (host APIs)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotcha:"})," Don't assume browser APIs exist in Node (and vice-versa). Choose the right polyfills or runtime-specific code paths."]})]})},{id:"js-what-is-event-loop",question:"What is the event loop?",text:"The event loop lets single-threaded JS run non-blocking: it executes the call stack, then runs microtasks (Promises) before moving to the next macrotask (timers/I-O).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," The ",e.jsx("em",{children:"event loop"})," drives execution in JS runtimes. After synchronous code finishes, the runtime flushes all ",e.jsx("strong",{children:"microtasks"}),"(e.g., Promise callbacks, ",e.jsx("code",{children:"queueMicrotask"}),") ",e.jsx("em",{children:"before"})," handling the next",e.jsx("strong",{children:"macrotask"})," (e.g., ",e.jsx("code",{children:"setTimeout"}),", I/O, message events)."]}),e.jsx(n,{children:`setTimeout(() => console.log("task"), 0);      // macrotask
Promise.resolve().then(() => console.log("micro")); // microtask
console.log("sync");
// order: sync → micro → task`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Explains timing/order bugs, UI freezes (long sync blocks), and why ",e.jsx("em",{children:"Promises often run “before” timeouts"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," A tight microtask loop (e.g., recursively scheduling microtasks) can starve macrotasks/rendering; ",e.jsx("code",{children:"setTimeout(fn, 0)"})," never runs “immediately” (minimum clamping, scheduled after current microtasks)."]})]})},{id:"js-primitive-types",question:"What are the primitive types in JavaScript?",text:"Seven primitives: undefined, null, boolean, number, bigint, string, symbol. Primitives are immutable and compared by value; everything else is an object.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," JavaScript has ",e.jsx("strong",{children:"7 primitive types"}),":",e.jsx("code",{children:"undefined"}),", ",e.jsx("code",{children:"null"}),", ",e.jsx("code",{children:"boolean"}),", ",e.jsx("code",{children:"number"}),",",e.jsx("code",{children:"bigint"}),", ",e.jsx("code",{children:"string"}),", ",e.jsx("code",{children:"symbol"}),". Everything else is an ",e.jsx("em",{children:"object"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Traits:"})," Primitives are ",e.jsx("em",{children:"immutable"})," and are copied ",e.jsx("em",{children:"by value"}),". When you access a “method” on a primitive (e.g., ",e.jsx("code",{children:'"hi".toUpperCase()'}),"), engines use a temporary wrapper object behind the scenes."]}),e.jsx(n,{children:`typeof 42           // "number"
typeof 42n          // "bigint"
typeof "hi"         // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof Symbol("x")  // "symbol"
typeof null         // "object"   // historical quirk
typeof function(){} // "function" // special-case object`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:'typeof null === "object"'})," (legacy quirk);",e.jsx("code",{children:"NaN"})," is a ",e.jsx("em",{children:"number"}),"; use ",e.jsx("code",{children:"Number.isNaN"})," to test;",e.jsx("code",{children:"Object.is(0, -0)"})," distinguishes the two zeros."]})]})},{id:"js-what-is-object",question:"What is an object in JavaScript?",text:"An object is a mutable collection of key–value pairs with a prototype. Keys are strings or symbols. Objects are reference types and are compared by reference.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," An ",e.jsx("em",{children:"object"})," is a dynamic collection of properties (key → value) linked to a ",e.jsx("em",{children:"prototype"}),". Property keys are either",e.jsx("strong",{children:" strings"})," (including numeric-like strings) or ",e.jsx("strong",{children:"symbols"}),". Arrays and functions are also objects (specialized kinds)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Create:"})," object literal ",e.jsx("code",{children:"{}"}),", constructor",e.jsx("code",{children:"Object()"}),", or ",e.jsx("code",{children:"Object.create(proto)"})," (use",e.jsx("code",{children:"Object.create(null)"})," for a dictionary without a prototype)."]}),e.jsx(n,{children:`// 1) Create
const o1 = { name: "Ada" };         // literal
const o2 = Object();                 // empty with Object.prototype
const dict = Object.create(null);    // no prototype (safe for pure key->value)

// 2) Keys: strings or symbols
const S = Symbol("secret");
o1.age = 36;              // string key "age"
o1[S] = 123;              // symbol key (not enumerable by keys())`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Access:"})," dot for identifier-like keys; bracket for dynamic or non-identifier keys."]}),e.jsx(n,{children:`const key = "first-name";
const user = { "first-name": "Grace" };
user["first-name"]; // "Grace"
user[key];          // "Grace"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Own vs inherited:"})," “Own” properties live on the object; inherited ones come from the prototype chain. Check with ",e.jsx("code",{children:"Object.hasOwn(obj, k)"})," (own) vs ",e.jsx("code",{children:"k in obj"})," (own or inherited)."]}),e.jsx(n,{children:`const base = { role: "admin" };
const obj = Object.create(base);
obj.name = "Lin";
Object.hasOwn(obj, "name"); // true
Object.hasOwn(obj, "role"); // false
"role" in obj;              // true (inherited)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Descriptors (glimpse):"})," Every property has attributes",e.jsx("code",{children:"value"}),", ",e.jsx("code",{children:"writable"}),", ",e.jsx("code",{children:"enumerable"}),", ",e.jsx("code",{children:"configurable"}),"(or getter/setter). Define via ",e.jsx("code",{children:"Object.defineProperty"}),"."]}),e.jsx(n,{children:`Object.defineProperty(obj, "id", {
  value: 1, writable: false, enumerable: false, configurable: true
});`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Equality & copy:"})," Objects are ",e.jsx("em",{children:"reference"})," types: two distinct objects are never equal even if contents match. Spread/assign are",e.jsx("em",{children:"shallow"})," copies."]}),e.jsx(n,{children:`const a = { x: { y: 1 } };
const b = { x: { y: 1 } };
a === b;                // false (different references)
const c = { ...a };     // shallow copy
c.x.y = 9; a.x.y;       // 9 (inner object shared if reused)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Enumeration (quick):"})," ",e.jsx("code",{children:"Object.keys"})," → own enumerable string keys; ",e.jsx("code",{children:"Object.getOwnPropertyNames"})," → own string keys (incl. non-enum);",e.jsx("code",{children:"Reflect.ownKeys"})," → own strings + symbols."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," numeric keys are stored as strings; JSON drops",e.jsx("code",{children:"undefined"})," and symbol-keyed properties; avoid using ",e.jsx("code",{children:"__proto__"})," for writes (use ",e.jsx("code",{children:"Object.setPrototypeOf"})," or ",e.jsx("code",{children:"Object.create"}),")."]})]})},{id:"js-typeof-operator",question:"What does `typeof` do? (common results & quirks)",text:"`typeof` returns a string describing the operand's type. Special cases: functions → 'function', null → 'object', arrays → 'object'. For undeclared identifiers, `typeof` is safe and returns 'undefined'.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"typeof"})," is a unary operator that returns a",e.jsx("em",{children:" type tag string"})," for its operand. It never throws on ",e.jsx("em",{children:"undeclared identifiers"}),"."]}),e.jsx(n,{children:`typeof undefined     // "undefined"
typeof true          // "boolean"
typeof 42            // "number"
typeof 42n           // "bigint"
typeof "hi"          // "string"
typeof Symbol("x")   // "symbol"
typeof {}            // "object"
typeof function(){}  // "function"  // special-case
typeof []            // "object"    // arrays are objects
typeof null          // "object"    // historical quirk

// Undeclared identifier: safe (no ReferenceError)
typeof notDeclared   // "undefined"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Use correctly:"})," for primitives, ",e.jsx("code",{children:"typeof"})," is reliable. To detect arrays use ",e.jsx("code",{children:"Array.isArray(v)"}),". For objects by class, prefer",e.jsx("code",{children:"v instanceof Ctor"})," (same realm) or",e.jsx("code",{children:"Object.prototype.toString.call(v)"})," for a generic tag."]}),e.jsx(n,{children:`Array.isArray([1,2,3]);                  // true
({}) instanceof Object;                      // true (same realm)
Object.prototype.toString.call(/re/)         // "[object RegExp]"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:'typeof null === "object"'})," (legacy); arrays/regex/functions all report as ",e.jsx("code",{children:'"object"'})," or ",e.jsx("code",{children:'"function"'}),", so use the right helper as above."]})]})},{id:"js-truthy-vs-falsy",question:"What are truthy and falsy values?",text:'Falsy: false, 0, -0, 0n, "", null, undefined, NaN. Everything else is truthy (e.g., [], {}, "0", "false", " ").',answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," In boolean contexts (e.g., ",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"while"}),", logical ops), values are coerced to ",e.jsx("em",{children:"true"})," or ",e.jsx("em",{children:"false"}),". The only ",e.jsx("strong",{children:"falsy"})," values are:",e.jsx("code",{children:"false"}),", ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:"-0"}),", ",e.jsx("code",{children:"0n"}),", ",e.jsx("code",{children:'""'})," (empty string),",e.jsx("code",{children:"null"}),", ",e.jsx("code",{children:"undefined"}),", and ",e.jsx("code",{children:"NaN"}),". Everything else is ",e.jsx("strong",{children:"truthy"}),"."]}),e.jsx(n,{children:`// Falsy
Boolean(false); Boolean(0); Boolean(-0); Boolean(0n);
Boolean(""); Boolean(null); Boolean(undefined); Boolean(NaN); // all false

// Truthy (common surprises)
Boolean([]);          // true
Boolean({});          // true
Boolean("0");         // true
Boolean("false");     // true  (non-empty string)
Boolean(" ");         // true  (space)
Boolean(function(){});// true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Logical operators short-circuit based on truthiness. Use ",e.jsx("code",{children:"??"})," when you only want to treat ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"})," as “missing”."]}),e.jsx(n,{children:`// OR (||) returns first truthy; can skip valid falsy like 0 or ""
const port = userPort || 3000;  // if userPort = 0 -> mistakenly picks 3000

// Nullish (??) treats only null/undefined as missing
const portSafe = userPort ?? 3000; // 0 stays 0

// AND (&&) returns first falsy or last value
const name = user && user.profile && user.profile.name;
// with optional chaining:
const name2 = user?.profile?.name;`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Empty array/object are truthy; don't rely on ",e.jsx("code",{children:"||"})," for defaults when ",e.jsx("code",{children:"0"})," or ",e.jsx("code",{children:'""'})," are valid inputs-use ",e.jsx("code",{children:"??"}),". Avoid mixing ",e.jsx("code",{children:"=="})," with booleans; prefer explicit checks."]})]})},{id:"js-equality-operators",question:"== vs === vs Object.is - what's the difference?",text:"=== compares without coercion (preferred). == allows coercion with tricky rules; safe use is only x == null to match null or undefined. Object.is fixes NaN and -0 edge cases.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definitions:"})," ",e.jsx("code",{children:"==="})," (strict) compares values ",e.jsx("em",{children:"without"})," coercion.",e.jsx("code",{children:"=="})," (loose) coerces types first (many corner cases).",e.jsx("code",{children:"Object.is(a,b)"})," is like ",e.jsx("code",{children:"==="})," but treats ",e.jsx("code",{children:"NaN"})," as equal to itself and distinguishes ",e.jsx("code",{children:"-0"})," from ",e.jsx("code",{children:"0"}),"."]}),e.jsx(n,{children:`"5" == 5          // true   (coerces)
"5" === 5         // false  (no coercion)

0 == false        // true   (0 coerces to false)
0 === false       // false

null == undefined // true   (special loose rule)
null === undefined// false

NaN === NaN       // false
Object.is(NaN, NaN) // true

0 === -0          // true
Object.is(0, -0)  // false`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Guideline:"})," Use ",e.jsx("code",{children:"==="})," by default. The only common, safe loose check is",e.jsx("code",{children:" x == null"})," to match both ",e.jsx("code",{children:"null"})," and ",e.jsx("code",{children:"undefined"}),"."]}),e.jsx(n,{children:`if (user.email == null) {
  // runs when email is null OR undefined (but not "")
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Objects:"})," Equality is by ",e.jsx("em",{children:"reference"})," (same identity), not by structure."]}),e.jsx(n,{children:`{a:1} === {a:1}  // false (different objects)
const o = {}; o === o     // true`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Gotchas (why avoid ",e.jsx("code",{children:"=="}),"):"]})," coercion chains can surprise:"]}),e.jsx(n,{children:`[] == ""   // true   (toString -> "")
[] == 0    // true   ("" -> 0)
"" == 0    // true
false == "0" // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Takeaway:"})," Prefer ",e.jsx("code",{children:"==="}),". Use ",e.jsx("code",{children:"Object.is"})," when you specifically care about",e.jsx("code",{children:"NaN"})," or the sign of zero."]})]})},{id:"js-null-vs-undefined",question:"What's the difference between `null` and `undefined`?",text:"`undefined` = missing/uninitialized; `null` = intentional empty value set by the programmer. Use x == null to check for either; use ?? to default only when null/undefined.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definitions:"})," ",e.jsx("code",{children:"undefined"})," means “missing / not set / not provided”. It's the default for uninitialized variables, missing object properties, and functions with no return.",e.jsx("code",{children:"null"})," is an ",e.jsx("em",{children:"intentional"})," “no value” you assign to signal emptiness."]}),e.jsx(n,{children:`let a;            // a is undefined
const o = {};      // o.x is undefined
function f() {}    // f() returns undefined by default

let b = null;      // programmer explicitly sets empty value
`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Equality:"})," ",e.jsx("code",{children:"null == undefined"})," is ",e.jsx("code",{children:"true"})," (loose equality special-case), but they're not strictly equal."]}),e.jsx(n,{children:`null == undefined   // true
null === undefined  // false`}),e.jsx("p",{children:e.jsx("strong",{children:"Recommended checks:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"x == null"})," to match “either ",e.jsx("code",{children:"null"})," or ",e.jsx("code",{children:"undefined"}),"”."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"??"})," (nullish coalescing) to default only when value is ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"})," (not for ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:'""'}),", ",e.jsx("code",{children:"false"}),")."]}),e.jsxs("li",{children:["Use optional chaining ",e.jsx("code",{children:"?."})," to safely access nested properties."]})]}),e.jsx(n,{children:`// Treat null or undefined as missing:
if (user.email == null) {
  // runs when email is null OR undefined
}

// Safe defaults without clobbering valid falsy:
const port = userPort ?? 3000; // 0 stays 0

// Safe access:
const city = user?.profile?.address?.city ?? "(unknown)";`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:'typeof null === "object"'})," (legacy quirk); don't use ",e.jsx("code",{children:"||"})," for defaults if ",e.jsx("code",{children:"0"})," or ",e.jsx("code",{children:'""'})," are valid-use ",e.jsx("code",{children:"??"}),". Prefer reserving ",e.jsx("code",{children:"null"})," to mean “intentionally empty” in your own APIs."]})]})},{id:"js-what-is-scope",question:"What is scope in JavaScript?",text:"Scope is where a variable is visible. JS has lexical (static) scope: global, function, and block. Inner scopes can read outer bindings; not vice-versa.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"Scope"})," is the region of code where an identifier (variable/function/class) is accessible. JavaScript uses ",e.jsx("strong",{children:"lexical (static) scope"}),": visibility is determined by where code is written, not how it's called."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Global scope:"})," top-level bindings (module or script)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Function scope:"})," bindings declared inside a function."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Block scope:"})," bindings declared with ",e.jsx("code",{children:"let"}),"/",e.jsx("code",{children:"const"})," inside ",e.jsx("code",{children:"{ ... }"}),"."]})]}),e.jsx(n,{children:`const g = 1;           // global (module-level)
function outer(){
  const f = 2;        // function scope
  if (true) {
    let b = 3;        // block scope
    console.log(g, f, b); // 1 2 3 (inner sees outer)
  }
  // console.log(b);  // ReferenceError (b not visible here)
}
outer();`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Shadowing:"})," An inner binding can hide an outer one of the same name."]}),e.jsx(n,{children:`let x = "outer";
{
  let x = "inner";   // shadows outer x
  console.log(x);    // "inner"
}
console.log(x);      // "outer"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," In old non-module scripts, assigning to an undeclared name creates a global (sloppy mode). ES modules are strict by default-avoid ",e.jsx("code",{children:"var"}),", prefer ",e.jsx("code",{children:"let/const"}),"."]})]})},{id:"js-what-is-hoisting",question:"What is hoisting?",text:"Hoisting is the compile-time step where declarations are registered before code runs. var is hoisted (initialized to undefined), function declarations are hoisted (callable early), let/const/class are hoisted but uninitialized (TDZ).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"Hoisting"})," means declarations are processed before execution, so identifiers exist for the entire scope. Behavior differs by kind:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"var"}),": hoisted and ",e.jsx("em",{children:"initialized to"})," ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"function declaration"}),": hoisted as a full callable binding."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"let/const/class"}),": hoisted but ",e.jsx("em",{children:"not initialized"})," (in the ",e.jsx("strong",{children:"TDZ"}),") until their line executes."]})]}),e.jsx(n,{children:`// var: exists early, value is undefined
console.log(a); // undefined
var a = 1;

// function declaration: callable early
greet(); // "hi"
function greet(){ console.log("hi"); }

// let/const/class: TDZ until initialization line
try { console.log(b); } catch (e) { /* ReferenceError */ }
let b = 2;

try { new Person(); } catch (e) { /* ReferenceError (class in TDZ) */ }
class Person {}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Explains ",e.jsx("code",{children:"undefined"})," reads with ",e.jsx("code",{children:"var"}),", why functions can run before their definition line, and why ",e.jsx("code",{children:"let/const/class"}),"throw a ",e.jsx("em",{children:"ReferenceError"})," if accessed too early."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Don't rely on hoisting for readability; prefer declaring before use. Remember: ",e.jsx("code",{children:"function"})," ",e.jsx("em",{children:"declarations"})," hoist, but ",e.jsx("code",{children:"const f = () => "})," does ",e.jsx("em",{children:"not"})," (it's a ",e.jsx("code",{children:"const"})," binding, in TDZ)."]})]})},{id:"js-what-is-tdz",question:"What is the Temporal Dead Zone (TDZ)?",text:"TDZ is the period between scope entry and initialization where let/const/class bindings exist but are uninitialized; any access throws ReferenceError.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," The ",e.jsx("em",{children:"Temporal Dead Zone (TDZ)"})," is the time from when a scope starts to the moment a ",e.jsx("code",{children:"let"}),"/",e.jsx("code",{children:"const"}),"/",e.jsx("code",{children:"class"})," binding is initialized. During TDZ, reading or writing the binding throws ",e.jsx("code",{children:"ReferenceError"}),"."]}),e.jsx(n,{children:`// TDZ for 'x' begins at block start and ends at initialization line
{
  // console.log(x); // ReferenceError (x is in TDZ)
  let x = 10;        // TDZ ends here
  console.log(x);    // 10
}

// const behaves the same (must initialize at declaration)
{
  // y is in TDZ here
  const y = 5;
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Function & class notes:"})," Function ",e.jsx("em",{children:"declarations"})," are hoisted (callable early), but ",e.jsx("code",{children:"class"})," declarations are hoisted ",e.jsx("em",{children:"into TDZ"})," (not usable before their line)."]}),e.jsx(n,{children:`// class in TDZ
try { new Person(); } catch (e) { /* ReferenceError */ }
class Person {}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Parameters TDZ:"})," Inside parameter defaults, referencing a ",e.jsx("em",{children:"later"})," parameter is TDZ."]}),e.jsx(n,{children:`function bad(a = b, b = 2) {}
try { bad(); } catch (e) { console.log(e instanceof ReferenceError); } // true

function ok(a = 1, b = a + 1) { return [a, b]; }
ok(); // [1, 2]`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it exists:"})," TDZ prevents access to bindings before their intended initialization, avoiding confusing “hoisted but undefined” reads."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:"typeof"})," on a TDZ binding also throws (unlike undeclared names)."]}),e.jsx(n,{children:`// Undeclared is safe:
typeof notDeclared; // "undefined"

// TDZ binding is NOT safe:
{
  // typeof z; // ReferenceError (z exists in TDZ)
  let z = 1;
}`})]})},{id:"js-what-is-closure",question:"What is a closure?",text:"A closure is when a function remembers and can access its lexical scope even when the function is executed outside that scope.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"closure"})," is the combination of a function and the lexical environment it was created in. The function can still access those variables even after the outer function has returned."]}),e.jsx(n,{children:`function makeCounter(start = 0) {
  let n = start;            // captured by the inner function
  return function next() {  // <-- closure over 'n'
    return ++n;
  };
}
const c1 = makeCounter(5);
c1(); // 6
c1(); // 7  (still sees 'n')`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Enables data privacy, factories, once/memoize utilities, event handlers keeping state."]}),e.jsx(n,{children:`// Data privacy (module pattern)
function makeBankAccount() {
  let balance = 0;
  return {
    deposit(x){ balance += x; },
    getBalance(){ return balance; }
  };
}
const acct = makeBankAccount();
acct.deposit(100);
acct.getBalance(); // 100 (balance not directly accessible)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Common gotcha:"})," Loops with ",e.jsx("code",{children:"var"})," capture the same binding."]}),e.jsx(n,{children:`// Using var: all log '3'
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0);
}
// Fix 1: let creates a new binding each iteration
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 0);
}
// Fix 2: IIFE captures current value
for (var k = 0; k < 3; k++) {
  ((x) => setTimeout(() => console.log("iife:", x), 0))(k);
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Notes:"})," Closures capture ",e.jsx("em",{children:"bindings"})," (not copies), so if the captured variable changes, the closure sees the latest value. Avoid leaking large captured objects to prevent unintended memory retention."]})]})},{id:"js-what-is-this",question:"What is `this` in JavaScript?",text:"`this` is set at call-time by how a function is invoked: default (undefined in strict), implicit (receiver object), explicit (call/apply/bind), constructor (new). Arrow functions don't bind `this`; they capture the surrounding one.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"this"})," is a context value determined by the",e.jsx("em",{children:" call-site"}),". In modules/strict mode, plain calls set ",e.jsx("code",{children:"this"})," to",e.jsx("code",{children:" undefined"}),". Arrow functions don't have their own ",e.jsx("code",{children:"this"}),"; they lexically capture the surrounding ",e.jsx("code",{children:"this"}),"."]}),e.jsx(n,{children:`"use strict";
// 1) Default (plain call) → undefined
function f(){ return this; }
f(); // undefined`}),e.jsx(n,{children:`// 2) Implicit (receiver before dot)
const obj = { x: 10, m(){ return this.x; } };
obj.m(); // 10

// losing the receiver:
const m = obj.m;
m(); // undefined (strict)`}),e.jsx(n,{children:`// 3) Explicit (call/apply/bind)
function greet(g){ return g + " " + this.name; }
const ctx = { name: "Ada" };
greet.call(ctx, "Hi");      // "Hi Ada"
const hi = greet.bind(ctx, "Hello");
hi();                       // "Hello Ada"`}),e.jsx(n,{children:`// 4) Constructor (new) → new instance
function Person(n){ this.name = n; }
const p = new Person("Lin"); // this = p`}),e.jsx(n,{children:`// 5) Arrow → lexical 'this'
const obj2 = {
  x: 42,
  run(){
    setTimeout(() => console.log(this.x), 0); // 42
  }
};
obj2.run();`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Extracted methods lose ",e.jsx("code",{children:"this"})," unless bound; top-level ",e.jsx("code",{children:"this"})," is ",e.jsx("code",{children:"undefined"})," in modules; DOM listeners with arrows don't get the element as ",e.jsx("code",{children:"this"})," (use function if you need it)."]})]})},{id:"js-call-apply-bind",question:"What are `call`, `apply`, and `bind`?",text:"`call` and `apply` invoke a function immediately with an explicit `this` (`call(...args)`, `apply([...args])`). `bind` returns a new function with `this` (and optional args) pre-bound.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"call"})," and ",e.jsx("code",{children:"apply"})," run a function ",e.jsx("em",{children:"now"})," with an explicit",e.jsx("code",{children:" this"}),". ",e.jsx("code",{children:"call"})," takes args individually; ",e.jsx("code",{children:"apply"})," takes them as an array.",e.jsx("code",{children:"bind"})," returns a new function where ",e.jsx("code",{children:"this"})," (and optionally some arguments) are fixed."]}),e.jsx(n,{children:`function greet(g, p){ return g + " " + this.name + p; }
const ctx = { name: "Ada" };

// call(args as list)
greet.call(ctx, "Hello", "!"); // "Hello Ada!"

// apply(args as array)
greet.apply(ctx, ["Hi", "!!"]); // "Hi Ada!!"

// bind (does not invoke)
const hiAda = greet.bind(ctx, "Hi");
hiAda("?"); // "Hi Ada?"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Partial application with bind:"})," You can pre-fill leading arguments."]}),e.jsx(n,{children:`const add = (a,b,c) => a + b + c;
const add5 = add.bind(null, 5);
add5(2, 3); // 10`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["`new` beats `bind` for ",e.jsx("code",{children:"this"}),":"]})," If a bound function is used with ",e.jsx("code",{children:"new"}),", the new instance becomes ",e.jsx("code",{children:"this"})," (bound arguments remain)."]}),e.jsx(n,{children:`function Person(name){ this.name = name; }
const Bound = Person.bind({ fake:true }, "Ignored");
new Bound("AlsoIgnored") instanceof Person; // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Common uses:"})," method borrowing (",e.jsx("code",{children:"Array.prototype.slice.call"})," on array-like), event handlers in classes (",e.jsx("code",{children:"this.method = this.method.bind(this)"}),"), partials."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Don't overuse ",e.jsx("code",{children:"bind"})," inside render loops (React); prefer arrows for handlers needing lexical ",e.jsx("code",{children:"this"}),". ",e.jsx("code",{children:"apply"})," requires an array-when you already have an array, modern engines allow ",e.jsx("code",{children:"fn(...arr)"})," instead of ",e.jsx("code",{children:"apply"}),"."]})]})},{id:"js-arrow-functions",question:"What are arrow functions? How are they different from regular functions?",text:"Arrows are concise function syntax with lexical this (no own this/arguments/super/new.target). Not constructors, no prototype. Great for callbacks; avoid when you need a dynamic receiver.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," Arrow functions (",e.jsx("code",{children:"=> "}),") are a shorter way to write functions that ",e.jsx("em",{children:"don't"})," have their own ",e.jsx("code",{children:"this"}),", ",e.jsx("code",{children:"arguments"}),",",e.jsx("code",{children:"super"}),", or ",e.jsx("code",{children:"new.target"}),". They ",e.jsx("em",{children:"lexically capture"})," those from the surrounding scope."]}),e.jsx(n,{children:`// Concise syntax
const add = (a, b) => a + b;          // implicit return (expression body)
const double = n => { return n * 2 }; // block body requires 'return'`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Lexical ",e.jsx("code",{children:"this"}),":"]})," Arrows keep the outer ",e.jsx("code",{children:"this"})," - handy in callbacks."]}),e.jsx(n,{children:`const obj = {
  x: 42,
  normal() { setTimeout(function(){ console.log(this?.x) }, 0); }, // undefined
  arrow()  { setTimeout(() => console.log(this.x), 0); }           // 42
};
obj.normal(); obj.arrow();`}),e.jsxs("p",{children:[e.jsx("strong",{children:"No constructor / no prototype:"})," You can't use ",e.jsx("code",{children:"new"})," with an arrow; they don't have ",e.jsx("code",{children:"prototype"}),"."]}),e.jsx(n,{children:`const F = () => {};
typeof F.prototype;      // "undefined"
try { new F(); } catch (e) { /* TypeError */ }`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["No own ",e.jsx("code",{children:"arguments"}),":"]})," Use rest parameters instead."]}),e.jsx(n,{children:`const bad = () => arguments[0];     // arguments is from outer scope (usually not what you want)
const good = (...args) => args[0];`}),e.jsx("p",{children:e.jsx("strong",{children:"Common pitfalls:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Arrow as an object ",e.jsx("em",{children:"method"})," fixes ",e.jsx("code",{children:"this"})," lexically - not suitable when you need a dynamic receiver (e.g., mixins)."]}),e.jsx("li",{children:"Returning an object literal with implicit return needs parentheses."}),e.jsxs("li",{children:["Cannot use ",e.jsx("code",{children:"yield"})," (not generators)."]})]}),e.jsx(n,{children:`// Implicitly returning an object:
const makeUser = (name) => ({ name }); // parentheses wrap the object

// As a method (dynamic 'this' expected) - avoid arrows:
const user = {
  name: "Ada",
  say: () => console.log(this?.name) // likely undefined in modules
};`}),e.jsxs("p",{children:[e.jsx("strong",{children:"When to use:"})," Short callbacks, array methods, closures capturing outer ",e.jsx("code",{children:"this"}),".",e.jsx("strong",{children:"Avoid:"})," When you need your own ",e.jsx("code",{children:"this"}),"/",e.jsx("code",{children:"arguments"})," or a constructible function."]})]})},{id:"js-var-vs-let-vs-const",question:"var vs let vs const - what's the difference?",text:"var = function-scoped, hoisted to undefined, redeclarable; let/const = block-scoped with TDZ; const prevents rebinding (not mutation). Top-level var in non-module scripts creates a global property; let/const do not.",answer:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx("strong",{children:"Scope & hoisting:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"var"})," → ",e.jsx("em",{children:"function-scoped"}),", hoisted and initialized to ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"let/const"})," → ",e.jsx("em",{children:"block-scoped"}),", hoisted but uninitialized (in the ",e.jsx("strong",{children:"TDZ"})," until their line)."]})]}),e.jsx(n,{children:`console.log(a); // undefined (var hoisted)
var a = 1;

try { console.log(b); } catch {} // ReferenceError (TDZ)
let b = 2;

try { console.log(c); } catch {} // ReferenceError (TDZ)
const c = 3;`}),e.jsx("p",{children:e.jsx("strong",{children:"Reassignment & redeclaration:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"var"})," can be ",e.jsx("em",{children:"reassigned"})," and ",e.jsx("em",{children:"redeclared"})," in the same scope."]}),e.jsxs("li",{children:[e.jsx("code",{children:"let"})," can be ",e.jsx("em",{children:"reassigned"})," but ",e.jsx("em",{children:"not redeclared"})," in the same scope."]}),e.jsxs("li",{children:[e.jsx("code",{children:"const"})," can be ",e.jsx("em",{children:"neither redeclared nor reassigned"})," (but the ",e.jsx("em",{children:"object value"})," can mutate)."]})]}),e.jsx(n,{children:`var x = 1; var x = 2;  // OK
let y = 1; /* let y = 2; */ // SyntaxError (same scope)
const z = { n: 1 };
z.n = 9;  // OK (mutating object)
/* z = {} */ // TypeError (rebinding)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Top-level behavior:"})," In non-module scripts, top-level ",e.jsx("code",{children:"var"})," adds a property on ",e.jsx("code",{children:"globalThis"}),"; ",e.jsx("code",{children:"let/const"})," create lexical bindings only."]}),e.jsx(n,{children:`// In a browser non-module script:
var gv = 1;
let gl = 2;
globalThis.gv; // 1
globalThis.gl; // undefined`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Loops & closures:"})," ",e.jsx("code",{children:"let"})," creates a fresh binding each iteration (great for closures). ",e.jsx("code",{children:"var"})," reuses one binding."]}),e.jsx(n,{children:`for (var i = 0; i < 3; i++) setTimeout(()=>console.log("var", i), 0);
// var 3, var 3, var 3

for (let j = 0; j < 3; j++) setTimeout(()=>console.log("let", j), 0);
// let 0, let 1, let 2`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Recommendation:"})," Prefer ",e.jsx("code",{children:"const"})," by default, use ",e.jsx("code",{children:"let"})," when reassignment is needed, avoid ",e.jsx("code",{children:"var"})," in modern code."]})]})},{id:"js-default-parameters",question:"What are default parameters?",text:"A default parameter value is used only when the passed argument is undefined (not null/false/0). Defaults evaluate left→right, and each call re-evaluates the default expression.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"default parameter"})," provides a fallback value when the corresponding argument is ",e.jsx("code",{children:"undefined"}),". Passing ",e.jsx("code",{children:"null"}),",",e.jsx("code",{children:"false"}),", ",e.jsx("code",{children:"0"}),", or ",e.jsx("code",{children:'""'})," ",e.jsx("em",{children:"does not"})," trigger the default."]}),e.jsx(n,{children:`function greet(name = "Guest") { return "Hi " + name; }
greet();           // "Hi Guest"      (undefined -> default)
greet(undefined);  // "Hi Guest"
greet(null);       // "Hi null"       (null does NOT trigger default)
greet("");         // "Hi "           (empty string kept)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Left→right & TDZ:"})," Parameters are created left to right. Referencing a ",e.jsx("em",{children:"later"})," parameter inside an earlier default causes a TDZ error."]}),e.jsx(n,{children:`function bad(a = b, b = 2) {}
try { bad(); } catch (e) { console.log(e instanceof ReferenceError); } // true

function ok(a = 1, b = a + 1) { return [a, b]; }
ok(); // [1, 2]`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Re-evaluated per call:"})," Default expressions run at each invocation, so avoid heavy work there."]}),e.jsx(n,{children:`let n = 0;
function nextId(id = ++n) { return id; }
nextId(); // 1
nextId(); // 2
nextId(99); // 99 (explicit arg bypasses default)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Defaults apply only to ",e.jsx("code",{children:"undefined"}),"; avoid referencing later params; heavy defaults can hurt performance;",e.jsx("code",{children:"function.length"})," counts parameters ",e.jsx("em",{children:"before"})," the first with a default."]}),e.jsx(n,{children:`function f(a, b = 1, c) {}
f.length; // 1`})]})},{id:"js-rest-parameter",question:"What is the rest parameter (`...args`) in functions?",text:"Rest parameter collects remaining arguments into a real array. Must be last, only one allowed. Prefer over `arguments` (which is array-like).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," The ",e.jsx("em",{children:"rest parameter"})," ",e.jsx("code",{children:"...args"})," gathers all remaining arguments into a ",e.jsx("strong",{children:"real array"}),". It must appear ",e.jsx("em",{children:"last"})," in the parameter list, and there can be only one rest parameter."]}),e.jsx(n,{children:`// Collect all remaining arguments as an array:
function sum(label, ...nums) {
  return label + ": " + nums.reduce((a, b) => a + b, 0);
}
sum("total", 1, 2, 3); // "total: 6"
sum("none");           // "none: 0" (nums = [])`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Real array (vs ",e.jsx("code",{children:"arguments"}),"):"]})," Rest gives you a normal array with methods like ",e.jsx("code",{children:"map"}),"/",e.jsx("code",{children:"filter"}),". In strict mode,",e.jsx("code",{children:"arguments"})," is array-like and not synced with parameter reassignments."]}),e.jsx(n,{children:`"use strict";
function demo(x, ...rest) {
  console.log(Array.isArray(rest)); // true
  x = 42;
  console.log(arguments[0]);        // original value (not 42)
}
demo(10, 20, 30);`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Position & count:"})," Rest must be last; function ",e.jsx("code",{children:"length"})," doesn't count it."]}),e.jsx(n,{children:`function f(a, b, ...rest) {}
f.length; // 2 (rest not counted)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Common uses:"})," variable-arity functions (sum, max), collecting “options” after fixed params, forwarding arguments to another function."]}),e.jsx(n,{children:`const logAll = (...args) => console.log(...args);
const callWith = (fn, ...args) => fn(...args);
callWith(Math.max, 3, 7, 2); // 7`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Only one rest parameter and it must be last; don't confuse function rest with",e.jsx("em",{children:"object/array rest in destructuring"})," - those are patterns, not parameters (covered separately)."]})]})}];function S(){const[r,t]=l.useState(""),d=l.useRef(null);l.useEffect(()=>{const s=c=>{var x,j;const h=(x=document.activeElement)==null?void 0:x.tagName;c.key==="/"&&h!=="INPUT"&&h!=="TEXTAREA"&&(c.preventDefault(),(j=d.current)==null||j.focus())};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[]);const a=s=>{(s.key==="Escape"||s.key==="Esc")&&(r?t(""):s.currentTarget.blur(),s.preventDefault())},o=l.useMemo(()=>{const s=r.trim().toLowerCase();return s?p.filter(({question:c,text:h})=>c.toLowerCase().includes(s)||h.toLowerCase().includes(s)):p},[r]);return e.jsxs(u.Wrapper,{children:[e.jsxs(u.TopBar,{children:[e.jsx(f,{}),e.jsxs(u.SearchBox,{children:[e.jsx("input",{ref:d,value:r,onChange:s=>t(s.target.value),onKeyDown:a,placeholder:"Search questions…  (press /, Esc to clear)","aria-label":"Search questions","aria-keyshortcuts":"/ Escape"}),r&&e.jsxs(e.Fragment,{children:[e.jsx("small",{className:"hint",children:"esc"}),e.jsx("button",{className:"clear",onClick:()=>t(""),"aria-label":"Clear search",title:"Clear (Esc)",children:"✕"})]})]})]}),e.jsxs(u.Count,{children:[o.length," result",o.length!==1?"s":"",r?` for “${r}”`:""]}),o.length===0?e.jsx("p",{style:{opacity:.7},children:"No matches. Try a different keyword."}):o.map(s=>e.jsx(v,{question:s.question,children:s.answer},s.id))]})}export{S as default};
