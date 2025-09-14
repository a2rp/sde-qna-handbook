import{r as l,j as e,d as i}from"./index-CLuJOH5i.js";import{B as f}from"./BreadcrumbsBar-Drz60kSt.js";const m=i.div`
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
`,b=i.span`
  display: inline-block; transition: transform 180ms ease;
  transform: rotate(${r=>r.$open?180:0}deg);
`,y=i.div`
  padding: ${r=>r.$open?"12px 16px 16px":"0 16px"};
  border-top: 1px solid hsl(0 0% 100% / 0.08);
  display: ${r=>r.$open?"block":"none"};
`,s=({children:r})=>e.jsx("pre",{style:{margin:"8px 0 12px",padding:"10px 12px",borderRadius:10,border:"1px solid hsl(0 0% 100% / 0.12)",background:"hsl(0 0% 100% / 0.04)",overflowX:"auto",lineHeight:1.5,fontSize:13.5},children:r});function w({question:r,children:t,defaultOpen:d=!1}){const[a,o]=l.useState(d),n=l.useId();return e.jsxs(m,{children:[e.jsxs(g,{"aria-expanded":a,"aria-controls":`${n}-panel`,onClick:()=>o(c=>!c),children:[e.jsx("span",{children:r}),e.jsx(b,{$open:a,children:"⌄"})]}),e.jsx(y,{id:`${n}-panel`,role:"region",$open:a,children:typeof t=="string"?e.jsx("p",{children:t}):t})]})}const x={Wrapper:i.div`
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
    `},p=[{id:"js-what-is-javascript",question:"What is JavaScript?",text:"JavaScript is a high-level, dynamic, prototype-based, multi-paradigm language standardized as ECMAScript. Runs in browsers and Node. Event loop, closures, modules, async/await.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," JavaScript is a high-level, dynamic,"," ",e.jsx("em",{children:"prototype-based"}),", multi-paradigm language standardized as"," ",e.jsx("strong",{children:"ECMAScript"}),". It runs in browsers and on servers (Node.js), uses a single-threaded event loop with non-blocking I/O, and supports first-class functions, lexical scope (closures), modules, and async/await."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Language vs Platform:"})," JS = language; host APIs vary - Browser (DOM, fetch) vs Node (fs, net, crypto)."]}),e.jsx(s,{children:`console.log("Hello, JavaScript!");
function makeAdder(x){ return y => x + y }
makeAdder(10)(3); // 13`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," float precision (",e.jsx("code",{children:"0.1 + 0.2 !== 0.3"}),"),"," ",e.jsx("code",{children:"this"})," rules, ",e.jsx("code",{children:"=="})," coercion,"," ",e.jsx("code",{children:'typeof null === "object"'}),"."]})]})},{id:"js-what-is-ecmascript",question:"What is ECMAScript?",text:"ECMAScript (ECMA-262) is the official language specification that defines JavaScript syntax, semantics, and built-ins (e.g., Promise, Map, Array methods).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"ECMAScript (ES)"})," is the official ",e.jsx("strong",{children:"ECMA-262"})," spec for the JavaScript language: grammar, types, operators, standard objects, and methods."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," ES defines what works uniformly across engines (V8/SpiderMonkey/JSC). Things like DOM or Node's ",e.jsx("code",{children:"fs"})," are ",e.jsx("em",{children:"not"})," ECMAScript-they're host APIs."]}),e.jsx(s,{children:`// ECMAScript feature (portable across runtimes):
const email = user?.profile?.email ?? "(not set)";

// NOT ECMAScript (host APIs):
// document.querySelector("h1")   // Browser DOM
// (await import("node:fs/promises")).readFile // Node`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotcha:"})," ES features are released yearly (ES2015+). Older environments may need transpile/polyfills."]})]})},{id:"js-what-is-js-engine",question:"What is a JavaScript engine?",text:"A JavaScript engine parses, compiles (often JIT), and executes JS code with garbage collection. Examples: V8 (Chrome/Node), SpiderMonkey (Firefox), JavaScriptCore (Safari).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"JavaScript engine"})," is the program that",e.jsx("em",{children:" parses → compiles (JIT) → executes"})," JavaScript and manages memory via garbage collection. It implements the ECMAScript spec."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Examples:"})," V8 (Chrome, Node, Deno, Bun uses a fork), SpiderMonkey (Firefox), JavaScriptCore / Nitro (Safari)."]}),e.jsx(s,{children:`// Engines run your JS (same code, different engines)
console.log("Hello from the engine!");
// Under the hood: parse -> optimize -> JIT -> run -> GC`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Performance and feature availability depend on the engine version. New ECMAScript features appear as engines ship support."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotcha:"})," An ",e.jsx("em",{children:"engine"})," is not a ",e.jsx("em",{children:"runtime"}),". DOM, fetch, fs, etc. come from the host runtime, not the engine itself."]})]})},{id:"js-what-is-runtime",question:"What is a JavaScript runtime?",text:"A runtime is the environment that hosts the JS engine and provides APIs (I/O, timers, modules) plus an event loop. Examples: Browser, Node.js, Deno, Bun.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"JavaScript runtime"})," = JS engine ",e.jsx("em",{children:"+"})," host APIs ",e.jsx("em",{children:"+"})," event loop. It's the environment where JS runs and where non-language features come from."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Browser:"})," DOM, ",e.jsx("code",{children:"fetch"}),", ",e.jsx("code",{children:"localStorage"}),", ",e.jsx("code",{children:"requestAnimationFrame"}),", Workers..."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Node.js:"})," ",e.jsx("code",{children:"fs"}),", ",e.jsx("code",{children:"net"}),", ",e.jsx("code",{children:"http"}),", ",e.jsx("code",{children:"process"}),", ",e.jsx("code",{children:"Buffer"}),", timers..."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Deno/Bun:"})," similar idea, different standard libs and tooling."]})]}),e.jsx(s,{children:`// ECMAScript (language) works everywhere:
[1,2,3].map(x => x * 2);

// Browser-only (host APIs):
// document.querySelector("h1");
// await fetch("/api");

// Node-only (host APIs):
// import { readFile } from "node:fs/promises";
// const txt = await readFile("notes.txt", "utf8");`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Tells you what's portable (language) vs what depends on the environment (host APIs)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotcha:"})," Don't assume browser APIs exist in Node (and vice-versa). Choose the right polyfills or runtime-specific code paths."]})]})},{id:"js-what-is-event-loop",question:"What is the event loop?",text:"The event loop lets single-threaded JS run non-blocking: it executes the call stack, then runs microtasks (Promises) before moving to the next macrotask (timers/I-O).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," The ",e.jsx("em",{children:"event loop"})," drives execution in JS runtimes. After synchronous code finishes, the runtime flushes all ",e.jsx("strong",{children:"microtasks"}),"(e.g., Promise callbacks, ",e.jsx("code",{children:"queueMicrotask"}),") ",e.jsx("em",{children:"before"})," handling the next",e.jsx("strong",{children:"macrotask"})," (e.g., ",e.jsx("code",{children:"setTimeout"}),", I/O, message events)."]}),e.jsx(s,{children:`setTimeout(() => console.log("task"), 0);      // macrotask
Promise.resolve().then(() => console.log("micro")); // microtask
console.log("sync");
// order: sync → micro → task`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Explains timing/order bugs, UI freezes (long sync blocks), and why ",e.jsx("em",{children:'Promises often run "before" timeouts'}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," A tight microtask loop (e.g., recursively scheduling microtasks) can starve macrotasks/rendering; ",e.jsx("code",{children:"setTimeout(fn, 0)"}),' never runs "immediately" (minimum clamping, scheduled after current microtasks).']})]})},{id:"js-primitive-types",question:"What are the primitive types in JavaScript?",text:"Seven primitives: undefined, null, boolean, number, bigint, string, symbol. Primitives are immutable and compared by value; everything else is an object.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," JavaScript has ",e.jsx("strong",{children:"7 primitive types"}),":",e.jsx("code",{children:"undefined"}),", ",e.jsx("code",{children:"null"}),", ",e.jsx("code",{children:"boolean"}),", ",e.jsx("code",{children:"number"}),",",e.jsx("code",{children:"bigint"}),", ",e.jsx("code",{children:"string"}),", ",e.jsx("code",{children:"symbol"}),". Everything else is an ",e.jsx("em",{children:"object"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Traits:"})," Primitives are ",e.jsx("em",{children:"immutable"})," and are copied ",e.jsx("em",{children:"by value"}),'. When you access a "method" on a primitive (e.g., ',e.jsx("code",{children:'"hi".toUpperCase()'}),"), engines use a temporary wrapper object behind the scenes."]}),e.jsx(s,{children:`typeof 42           // "number"
typeof 42n          // "bigint"
typeof "hi"         // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof Symbol("x")  // "symbol"
typeof null         // "object"   // historical quirk
typeof function(){} // "function" // special-case object`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:'typeof null === "object"'})," (legacy quirk);",e.jsx("code",{children:"NaN"})," is a ",e.jsx("em",{children:"number"}),"; use ",e.jsx("code",{children:"Number.isNaN"})," to test;",e.jsx("code",{children:"Object.is(0, -0)"})," distinguishes the two zeros."]})]})},{id:"js-what-is-object",question:"What is an object in JavaScript?",text:"An object is a mutable collection of key–value pairs with a prototype. Keys are strings or symbols. Objects are reference types and are compared by reference.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," An ",e.jsx("em",{children:"object"})," is a dynamic collection of properties (key → value) linked to a ",e.jsx("em",{children:"prototype"}),". Property keys are either",e.jsx("strong",{children:" strings"})," (including numeric-like strings) or ",e.jsx("strong",{children:"symbols"}),". Arrays and functions are also objects (specialized kinds)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Create:"})," object literal ",e.jsx("code",{children:"{}"}),", constructor",e.jsx("code",{children:"Object()"}),", or ",e.jsx("code",{children:"Object.create(proto)"})," (use",e.jsx("code",{children:"Object.create(null)"})," for a dictionary without a prototype)."]}),e.jsx(s,{children:`// 1) Create
const o1 = { name: "Ada" };         // literal
const o2 = Object();                 // empty with Object.prototype
const dict = Object.create(null);    // no prototype (safe for pure key->value)

// 2) Keys: strings or symbols
const S = Symbol("secret");
o1.age = 36;              // string key "age"
o1[S] = 123;              // symbol key (not enumerable by keys())`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Access:"})," dot for identifier-like keys; bracket for dynamic or non-identifier keys."]}),e.jsx(s,{children:`const key = "first-name";
const user = { "first-name": "Grace" };
user["first-name"]; // "Grace"
user[key];          // "Grace"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Own vs inherited:"}),' "Own" properties live on the object; inherited ones come from the prototype chain. Check with ',e.jsx("code",{children:"Object.hasOwn(obj, k)"})," (own) vs ",e.jsx("code",{children:"k in obj"})," (own or inherited)."]}),e.jsx(s,{children:`const base = { role: "admin" };
const obj = Object.create(base);
obj.name = "Lin";
Object.hasOwn(obj, "name"); // true
Object.hasOwn(obj, "role"); // false
"role" in obj;              // true (inherited)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Descriptors (glimpse):"})," Every property has attributes",e.jsx("code",{children:"value"}),", ",e.jsx("code",{children:"writable"}),", ",e.jsx("code",{children:"enumerable"}),", ",e.jsx("code",{children:"configurable"}),"(or getter/setter). Define via ",e.jsx("code",{children:"Object.defineProperty"}),"."]}),e.jsx(s,{children:`Object.defineProperty(obj, "id", {
  value: 1, writable: false, enumerable: false, configurable: true
});`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Equality & copy:"})," Objects are ",e.jsx("em",{children:"reference"})," types: two distinct objects are never equal even if contents match. Spread/assign are",e.jsx("em",{children:"shallow"})," copies."]}),e.jsx(s,{children:`const a = { x: { y: 1 } };
const b = { x: { y: 1 } };
a === b;                // false (different references)
const c = { ...a };     // shallow copy
c.x.y = 9; a.x.y;       // 9 (inner object shared if reused)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Enumeration (quick):"})," ",e.jsx("code",{children:"Object.keys"})," → own enumerable string keys; ",e.jsx("code",{children:"Object.getOwnPropertyNames"})," → own string keys (incl. non-enum);",e.jsx("code",{children:"Reflect.ownKeys"})," → own strings + symbols."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," numeric keys are stored as strings; JSON drops",e.jsx("code",{children:"undefined"})," and symbol-keyed properties; avoid using ",e.jsx("code",{children:"__proto__"})," for writes (use ",e.jsx("code",{children:"Object.setPrototypeOf"})," or ",e.jsx("code",{children:"Object.create"}),")."]})]})},{id:"js-typeof-operator",question:"What does `typeof` do? (common results & quirks)",text:"`typeof` returns a string describing the operand's type. Special cases: functions → 'function', null → 'object', arrays → 'object'. For undeclared identifiers, `typeof` is safe and returns 'undefined'.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"typeof"})," is a unary operator that returns a",e.jsx("em",{children:" type tag string"})," for its operand. It never throws on ",e.jsx("em",{children:"undeclared identifiers"}),"."]}),e.jsx(s,{children:`typeof undefined     // "undefined"
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
typeof notDeclared   // "undefined"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Use correctly:"})," for primitives, ",e.jsx("code",{children:"typeof"})," is reliable. To detect arrays use ",e.jsx("code",{children:"Array.isArray(v)"}),". For objects by class, prefer",e.jsx("code",{children:"v instanceof Ctor"})," (same realm) or",e.jsx("code",{children:"Object.prototype.toString.call(v)"})," for a generic tag."]}),e.jsx(s,{children:`Array.isArray([1,2,3]);                  // true
({}) instanceof Object;                      // true (same realm)
Object.prototype.toString.call(/re/)         // "[object RegExp]"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:'typeof null === "object"'})," (legacy); arrays/regex/functions all report as ",e.jsx("code",{children:'"object"'})," or ",e.jsx("code",{children:'"function"'}),", so use the right helper as above."]})]})},{id:"js-truthy-vs-falsy",question:"What are truthy and falsy values?",text:'Falsy: false, 0, -0, 0n, "", null, undefined, NaN. Everything else is truthy (e.g., [], {}, "0", "false", " ").',answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," In boolean contexts (e.g., ",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"while"}),", logical ops), values are coerced to ",e.jsx("em",{children:"true"})," or ",e.jsx("em",{children:"false"}),". The only ",e.jsx("strong",{children:"falsy"})," values are:",e.jsx("code",{children:"false"}),", ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:"-0"}),", ",e.jsx("code",{children:"0n"}),", ",e.jsx("code",{children:'""'})," (empty string),",e.jsx("code",{children:"null"}),", ",e.jsx("code",{children:"undefined"}),", and ",e.jsx("code",{children:"NaN"}),". Everything else is ",e.jsx("strong",{children:"truthy"}),"."]}),e.jsx(s,{children:`// Falsy
Boolean(false); Boolean(0); Boolean(-0); Boolean(0n);
Boolean(""); Boolean(null); Boolean(undefined); Boolean(NaN); // all false

// Truthy (common surprises)
Boolean([]);          // true
Boolean({});          // true
Boolean("0");         // true
Boolean("false");     // true  (non-empty string)
Boolean(" ");         // true  (space)
Boolean(function(){});// true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Logical operators short-circuit based on truthiness. Use ",e.jsx("code",{children:"??"})," when you only want to treat ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"}),' as "missing".']}),e.jsx(s,{children:`// OR (||) returns first truthy; can skip valid falsy like 0 or ""
const port = userPort || 3000;  // if userPort = 0 -> mistakenly picks 3000

// Nullish (??) treats only null/undefined as missing
const portSafe = userPort ?? 3000; // 0 stays 0

// AND (&&) returns first falsy or last value
const name = user && user.profile && user.profile.name;
// with optional chaining:
const name2 = user?.profile?.name;`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Empty array/object are truthy; don't rely on ",e.jsx("code",{children:"||"})," for defaults when ",e.jsx("code",{children:"0"})," or ",e.jsx("code",{children:'""'})," are valid inputs-use ",e.jsx("code",{children:"??"}),". Avoid mixing ",e.jsx("code",{children:"=="})," with booleans; prefer explicit checks."]})]})},{id:"js-equality-operators",question:"== vs === vs Object.is - what's the difference?",text:"=== compares without coercion (preferred). == allows coercion with tricky rules; safe use is only x == null to match null or undefined. Object.is fixes NaN and -0 edge cases.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definitions:"})," ",e.jsx("code",{children:"==="})," (strict) compares values ",e.jsx("em",{children:"without"})," coercion.",e.jsx("code",{children:"=="})," (loose) coerces types first (many corner cases).",e.jsx("code",{children:"Object.is(a,b)"})," is like ",e.jsx("code",{children:"==="})," but treats ",e.jsx("code",{children:"NaN"})," as equal to itself and distinguishes ",e.jsx("code",{children:"-0"})," from ",e.jsx("code",{children:"0"}),"."]}),e.jsx(s,{children:`"5" == 5          // true   (coerces)
"5" === 5         // false  (no coercion)

0 == false        // true   (0 coerces to false)
0 === false       // false

null == undefined // true   (special loose rule)
null === undefined// false

NaN === NaN       // false
Object.is(NaN, NaN) // true

0 === -0          // true
Object.is(0, -0)  // false`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Guideline:"})," Use ",e.jsx("code",{children:"==="})," by default. The only common, safe loose check is",e.jsx("code",{children:" x == null"})," to match both ",e.jsx("code",{children:"null"})," and ",e.jsx("code",{children:"undefined"}),"."]}),e.jsx(s,{children:`if (user.email == null) {
  // runs when email is null OR undefined (but not "")
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Objects:"})," Equality is by ",e.jsx("em",{children:"reference"})," (same identity), not by structure."]}),e.jsx(s,{children:`{a:1} === {a:1}  // false (different objects)
const o = {}; o === o     // true`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Gotchas (why avoid ",e.jsx("code",{children:"=="}),"):"]})," coercion chains can surprise:"]}),e.jsx(s,{children:`[] == ""   // true   (toString -> "")
[] == 0    // true   ("" -> 0)
"" == 0    // true
false == "0" // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Takeaway:"})," Prefer ",e.jsx("code",{children:"==="}),". Use ",e.jsx("code",{children:"Object.is"})," when you specifically care about",e.jsx("code",{children:"NaN"})," or the sign of zero."]})]})},{id:"js-null-vs-undefined",question:"What's the difference between `null` and `undefined`?",text:"`undefined` = missing/uninitialized; `null` = intentional empty value set by the programmer. Use x == null to check for either; use ?? to default only when null/undefined.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definitions:"})," ",e.jsx("code",{children:"undefined"}),` means "missing / not set / not provided". It's the default for uninitialized variables, missing object properties, and functions with no return.`,e.jsx("code",{children:"null"})," is an ",e.jsx("em",{children:"intentional"}),' "no value" you assign to signal emptiness.']}),e.jsx(s,{children:`let a;            // a is undefined
const o = {};      // o.x is undefined
function f() {}    // f() returns undefined by default

let b = null;      // programmer explicitly sets empty value
`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Equality:"})," ",e.jsx("code",{children:"null == undefined"})," is ",e.jsx("code",{children:"true"})," (loose equality special-case), but they're not strictly equal."]}),e.jsx(s,{children:`null == undefined   // true
null === undefined  // false`}),e.jsx("p",{children:e.jsx("strong",{children:"Recommended checks:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"x == null"}),' to match "either ',e.jsx("code",{children:"null"})," or ",e.jsx("code",{children:"undefined"}),'".']}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"??"})," (nullish coalescing) to default only when value is ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"})," (not for ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:'""'}),", ",e.jsx("code",{children:"false"}),")."]}),e.jsxs("li",{children:["Use optional chaining ",e.jsx("code",{children:"?."})," to safely access nested properties."]})]}),e.jsx(s,{children:`// Treat null or undefined as missing:
if (user.email == null) {
  // runs when email is null OR undefined
}

// Safe defaults without clobbering valid falsy:
const port = userPort ?? 3000; // 0 stays 0

// Safe access:
const city = user?.profile?.address?.city ?? "(unknown)";`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:'typeof null === "object"'})," (legacy quirk); don't use ",e.jsx("code",{children:"||"})," for defaults if ",e.jsx("code",{children:"0"})," or ",e.jsx("code",{children:'""'})," are valid-use ",e.jsx("code",{children:"??"}),". Prefer reserving ",e.jsx("code",{children:"null"}),' to mean "intentionally empty" in your own APIs.']})]})},{id:"js-what-is-scope",question:"What is scope in JavaScript?",text:"Scope is where a variable is visible. JS has lexical (static) scope: global, function, and block. Inner scopes can read outer bindings; not vice-versa.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"Scope"})," is the region of code where an identifier (variable/function/class) is accessible. JavaScript uses ",e.jsx("strong",{children:"lexical (static) scope"}),": visibility is determined by where code is written, not how it's called."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Global scope:"})," top-level bindings (module or script)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Function scope:"})," bindings declared inside a function."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Block scope:"})," bindings declared with ",e.jsx("code",{children:"let"}),"/",e.jsx("code",{children:"const"})," inside ",e.jsx("code",{children:"{ ... }"}),"."]})]}),e.jsx(s,{children:`const g = 1;           // global (module-level)
function outer(){
  const f = 2;        // function scope
  if (true) {
    let b = 3;        // block scope
    console.log(g, f, b); // 1 2 3 (inner sees outer)
  }
  // console.log(b);  // ReferenceError (b not visible here)
}
outer();`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Shadowing:"})," An inner binding can hide an outer one of the same name."]}),e.jsx(s,{children:`let x = "outer";
{
  let x = "inner";   // shadows outer x
  console.log(x);    // "inner"
}
console.log(x);      // "outer"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," In old non-module scripts, assigning to an undeclared name creates a global (sloppy mode). ES modules are strict by default-avoid ",e.jsx("code",{children:"var"}),", prefer ",e.jsx("code",{children:"let/const"}),"."]})]})},{id:"js-what-is-hoisting",question:"What is hoisting?",text:"Hoisting is the compile-time step where declarations are registered before code runs. var is hoisted (initialized to undefined), function declarations are hoisted (callable early), let/const/class are hoisted but uninitialized (TDZ).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"Hoisting"})," means declarations are processed before execution, so identifiers exist for the entire scope. Behavior differs by kind:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"var"}),": hoisted and ",e.jsx("em",{children:"initialized to"})," ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"function declaration"}),": hoisted as a full callable binding."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"let/const/class"}),": hoisted but ",e.jsx("em",{children:"not initialized"})," (in the ",e.jsx("strong",{children:"TDZ"}),") until their line executes."]})]}),e.jsx(s,{children:`// var: exists early, value is undefined
console.log(a); // undefined
var a = 1;

// function declaration: callable early
greet(); // "hi"
function greet(){ console.log("hi"); }

// let/const/class: TDZ until initialization line
try { console.log(b); } catch (e) { /* ReferenceError */ }
let b = 2;

try { new Person(); } catch (e) { /* ReferenceError (class in TDZ) */ }
class Person {}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Explains ",e.jsx("code",{children:"undefined"})," reads with ",e.jsx("code",{children:"var"}),", why functions can run before their definition line, and why ",e.jsx("code",{children:"let/const/class"}),"throw a ",e.jsx("em",{children:"ReferenceError"})," if accessed too early."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Don't rely on hoisting for readability; prefer declaring before use. Remember: ",e.jsx("code",{children:"function"})," ",e.jsx("em",{children:"declarations"})," hoist, but ",e.jsx("code",{children:"const f = () => "})," does ",e.jsx("em",{children:"not"})," (it's a ",e.jsx("code",{children:"const"})," binding, in TDZ)."]})]})},{id:"js-what-is-tdz",question:"What is the Temporal Dead Zone (TDZ)?",text:"TDZ is the period between scope entry and initialization where let/const/class bindings exist but are uninitialized; any access throws ReferenceError.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," The ",e.jsx("em",{children:"Temporal Dead Zone (TDZ)"})," is the time from when a scope starts to the moment a ",e.jsx("code",{children:"let"}),"/",e.jsx("code",{children:"const"}),"/",e.jsx("code",{children:"class"})," binding is initialized. During TDZ, reading or writing the binding throws ",e.jsx("code",{children:"ReferenceError"}),"."]}),e.jsx(s,{children:`// TDZ for 'x' begins at block start and ends at initialization line
{
  // console.log(x); // ReferenceError (x is in TDZ)
  let x = 10;        // TDZ ends here
  console.log(x);    // 10
}

// const behaves the same (must initialize at declaration)
{
  // y is in TDZ here
  const y = 5;
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Function & class notes:"})," Function ",e.jsx("em",{children:"declarations"})," are hoisted (callable early), but ",e.jsx("code",{children:"class"})," declarations are hoisted ",e.jsx("em",{children:"into TDZ"})," (not usable before their line)."]}),e.jsx(s,{children:`// class in TDZ
try { new Person(); } catch (e) { /* ReferenceError */ }
class Person {}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Parameters TDZ:"})," Inside parameter defaults, referencing a ",e.jsx("em",{children:"later"})," parameter is TDZ."]}),e.jsx(s,{children:`function bad(a = b, b = 2) {}
try { bad(); } catch (e) { console.log(e instanceof ReferenceError); } // true

function ok(a = 1, b = a + 1) { return [a, b]; }
ok(); // [1, 2]`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it exists:"}),' TDZ prevents access to bindings before their intended initialization, avoiding confusing "hoisted but undefined" reads.']}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:"typeof"})," on a TDZ binding also throws (unlike undeclared names)."]}),e.jsx(s,{children:`// Undeclared is safe:
typeof notDeclared; // "undefined"

// TDZ binding is NOT safe:
{
  // typeof z; // ReferenceError (z exists in TDZ)
  let z = 1;
}`})]})},{id:"js-what-is-closure",question:"What is a closure?",text:"A closure is when a function remembers and can access its lexical scope even when the function is executed outside that scope.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"closure"})," is the combination of a function and the lexical environment it was created in. The function can still access those variables even after the outer function has returned."]}),e.jsx(s,{children:`function makeCounter(start = 0) {
  let n = start;            // captured by the inner function
  return function next() {  // <-- closure over 'n'
    return ++n;
  };
}
const c1 = makeCounter(5);
c1(); // 6
c1(); // 7  (still sees 'n')`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why it matters:"})," Enables data privacy, factories, once/memoize utilities, event handlers keeping state."]}),e.jsx(s,{children:`// Data privacy (module pattern)
function makeBankAccount() {
  let balance = 0;
  return {
    deposit(x){ balance += x; },
    getBalance(){ return balance; }
  };
}
const acct = makeBankAccount();
acct.deposit(100);
acct.getBalance(); // 100 (balance not directly accessible)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Common gotcha:"})," Loops with ",e.jsx("code",{children:"var"})," capture the same binding."]}),e.jsx(s,{children:`// Using var: all log '3'
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
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Notes:"})," Closures capture ",e.jsx("em",{children:"bindings"})," (not copies), so if the captured variable changes, the closure sees the latest value. Avoid leaking large captured objects to prevent unintended memory retention."]})]})},{id:"js-what-is-this",question:"What is `this` in JavaScript?",text:"`this` is set at call-time by how a function is invoked: default (undefined in strict), implicit (receiver object), explicit (call/apply/bind), constructor (new). Arrow functions don't bind `this`; they capture the surrounding one.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"this"})," is a context value determined by the",e.jsx("em",{children:" call-site"}),". In modules/strict mode, plain calls set ",e.jsx("code",{children:"this"})," to",e.jsx("code",{children:" undefined"}),". Arrow functions don't have their own ",e.jsx("code",{children:"this"}),"; they lexically capture the surrounding ",e.jsx("code",{children:"this"}),"."]}),e.jsx(s,{children:`"use strict";
// 1) Default (plain call) → undefined
function f(){ return this; }
f(); // undefined`}),e.jsx(s,{children:`// 2) Implicit (receiver before dot)
const obj = { x: 10, m(){ return this.x; } };
obj.m(); // 10

// losing the receiver:
const m = obj.m;
m(); // undefined (strict)`}),e.jsx(s,{children:`// 3) Explicit (call/apply/bind)
function greet(g){ return g + " " + this.name; }
const ctx = { name: "Ada" };
greet.call(ctx, "Hi");      // "Hi Ada"
const hi = greet.bind(ctx, "Hello");
hi();                       // "Hello Ada"`}),e.jsx(s,{children:`// 4) Constructor (new) → new instance
function Person(n){ this.name = n; }
const p = new Person("Lin"); // this = p`}),e.jsx(s,{children:`// 5) Arrow → lexical 'this'
const obj2 = {
  x: 42,
  run(){
    setTimeout(() => console.log(this.x), 0); // 42
  }
};
obj2.run();`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Extracted methods lose ",e.jsx("code",{children:"this"})," unless bound; top-level ",e.jsx("code",{children:"this"})," is ",e.jsx("code",{children:"undefined"})," in modules; DOM listeners with arrows don't get the element as ",e.jsx("code",{children:"this"})," (use function if you need it)."]})]})},{id:"js-call-apply-bind",question:"What are `call`, `apply`, and `bind`?",text:"`call` and `apply` invoke a function immediately with an explicit `this` (`call(...args)`, `apply([...args])`). `bind` returns a new function with `this` (and optional args) pre-bound.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"call"})," and ",e.jsx("code",{children:"apply"})," run a function ",e.jsx("em",{children:"now"})," with an explicit",e.jsx("code",{children:" this"}),". ",e.jsx("code",{children:"call"})," takes args individually; ",e.jsx("code",{children:"apply"})," takes them as an array.",e.jsx("code",{children:"bind"})," returns a new function where ",e.jsx("code",{children:"this"})," (and optionally some arguments) are fixed."]}),e.jsx(s,{children:`function greet(g, p){ return g + " " + this.name + p; }
const ctx = { name: "Ada" };

// call(args as list)
greet.call(ctx, "Hello", "!"); // "Hello Ada!"

// apply(args as array)
greet.apply(ctx, ["Hi", "!!"]); // "Hi Ada!!"

// bind (does not invoke)
const hiAda = greet.bind(ctx, "Hi");
hiAda("?"); // "Hi Ada?"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Partial application with bind:"})," You can pre-fill leading arguments."]}),e.jsx(s,{children:`const add = (a,b,c) => a + b + c;
const add5 = add.bind(null, 5);
add5(2, 3); // 10`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["`new` beats `bind` for ",e.jsx("code",{children:"this"}),":"]})," If a bound function is used with ",e.jsx("code",{children:"new"}),", the new instance becomes ",e.jsx("code",{children:"this"})," (bound arguments remain)."]}),e.jsx(s,{children:`function Person(name){ this.name = name; }
const Bound = Person.bind({ fake:true }, "Ignored");
new Bound("AlsoIgnored") instanceof Person; // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Common uses:"})," method borrowing (",e.jsx("code",{children:"Array.prototype.slice.call"})," on array-like), event handlers in classes (",e.jsx("code",{children:"this.method = this.method.bind(this)"}),"), partials."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Don't overuse ",e.jsx("code",{children:"bind"})," inside render loops (React); prefer arrows for handlers needing lexical ",e.jsx("code",{children:"this"}),". ",e.jsx("code",{children:"apply"})," requires an array-when you already have an array, modern engines allow ",e.jsx("code",{children:"fn(...arr)"})," instead of ",e.jsx("code",{children:"apply"}),"."]})]})},{id:"js-arrow-functions",question:"What are arrow functions? How are they different from regular functions?",text:"Arrows are concise function syntax with lexical this (no own this/arguments/super/new.target). Not constructors, no prototype. Great for callbacks; avoid when you need a dynamic receiver.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," Arrow functions (",e.jsx("code",{children:"=> "}),") are a shorter way to write functions that ",e.jsx("em",{children:"don't"})," have their own ",e.jsx("code",{children:"this"}),", ",e.jsx("code",{children:"arguments"}),",",e.jsx("code",{children:"super"}),", or ",e.jsx("code",{children:"new.target"}),". They ",e.jsx("em",{children:"lexically capture"})," those from the surrounding scope."]}),e.jsx(s,{children:`// Concise syntax
const add = (a, b) => a + b;          // implicit return (expression body)
const double = n => { return n * 2 }; // block body requires 'return'`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Lexical ",e.jsx("code",{children:"this"}),":"]})," Arrows keep the outer ",e.jsx("code",{children:"this"})," - handy in callbacks."]}),e.jsx(s,{children:`const obj = {
  x: 42,
  normal() { setTimeout(function(){ console.log(this?.x) }, 0); }, // undefined
  arrow()  { setTimeout(() => console.log(this.x), 0); }           // 42
};
obj.normal(); obj.arrow();`}),e.jsxs("p",{children:[e.jsx("strong",{children:"No constructor / no prototype:"})," You can't use ",e.jsx("code",{children:"new"})," with an arrow; they don't have ",e.jsx("code",{children:"prototype"}),"."]}),e.jsx(s,{children:`const F = () => {};
typeof F.prototype;      // "undefined"
try { new F(); } catch (e) { /* TypeError */ }`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["No own ",e.jsx("code",{children:"arguments"}),":"]})," Use rest parameters instead."]}),e.jsx(s,{children:`const bad = () => arguments[0];     // arguments is from outer scope (usually not what you want)
const good = (...args) => args[0];`}),e.jsx("p",{children:e.jsx("strong",{children:"Common pitfalls:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Arrow as an object ",e.jsx("em",{children:"method"})," fixes ",e.jsx("code",{children:"this"})," lexically - not suitable when you need a dynamic receiver (e.g., mixins)."]}),e.jsx("li",{children:"Returning an object literal with implicit return needs parentheses."}),e.jsxs("li",{children:["Cannot use ",e.jsx("code",{children:"yield"})," (not generators)."]})]}),e.jsx(s,{children:`// Implicitly returning an object:
const makeUser = (name) => ({ name }); // parentheses wrap the object

// As a method (dynamic 'this' expected) - avoid arrows:
const user = {
  name: "Ada",
  say: () => console.log(this?.name) // likely undefined in modules
};`}),e.jsxs("p",{children:[e.jsx("strong",{children:"When to use:"})," Short callbacks, array methods, closures capturing outer ",e.jsx("code",{children:"this"}),".",e.jsx("strong",{children:"Avoid:"})," When you need your own ",e.jsx("code",{children:"this"}),"/",e.jsx("code",{children:"arguments"})," or a constructible function."]})]})},{id:"js-var-vs-let-vs-const",question:"var vs let vs const - what's the difference?",text:"var = function-scoped, hoisted to undefined, redeclarable; let/const = block-scoped with TDZ; const prevents rebinding (not mutation). Top-level var in non-module scripts creates a global property; let/const do not.",answer:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx("strong",{children:"Scope & hoisting:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"var"})," → ",e.jsx("em",{children:"function-scoped"}),", hoisted and initialized to ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"let/const"})," → ",e.jsx("em",{children:"block-scoped"}),", hoisted but uninitialized (in the ",e.jsx("strong",{children:"TDZ"})," until their line)."]})]}),e.jsx(s,{children:`console.log(a); // undefined (var hoisted)
var a = 1;

try { console.log(b); } catch {} // ReferenceError (TDZ)
let b = 2;

try { console.log(c); } catch {} // ReferenceError (TDZ)
const c = 3;`}),e.jsx("p",{children:e.jsx("strong",{children:"Reassignment & redeclaration:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"var"})," can be ",e.jsx("em",{children:"reassigned"})," and ",e.jsx("em",{children:"redeclared"})," in the same scope."]}),e.jsxs("li",{children:[e.jsx("code",{children:"let"})," can be ",e.jsx("em",{children:"reassigned"})," but ",e.jsx("em",{children:"not redeclared"})," in the same scope."]}),e.jsxs("li",{children:[e.jsx("code",{children:"const"})," can be ",e.jsx("em",{children:"neither redeclared nor reassigned"})," (but the ",e.jsx("em",{children:"object value"})," can mutate)."]})]}),e.jsx(s,{children:`var x = 1; var x = 2;  // OK
let y = 1; /* let y = 2; */ // SyntaxError (same scope)
const z = { n: 1 };
z.n = 9;  // OK (mutating object)
/* z = {} */ // TypeError (rebinding)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Top-level behavior:"})," In non-module scripts, top-level ",e.jsx("code",{children:"var"})," adds a property on ",e.jsx("code",{children:"globalThis"}),"; ",e.jsx("code",{children:"let/const"})," create lexical bindings only."]}),e.jsx(s,{children:`// In a browser non-module script:
var gv = 1;
let gl = 2;
globalThis.gv; // 1
globalThis.gl; // undefined`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Loops & closures:"})," ",e.jsx("code",{children:"let"})," creates a fresh binding each iteration (great for closures). ",e.jsx("code",{children:"var"})," reuses one binding."]}),e.jsx(s,{children:`for (var i = 0; i < 3; i++) setTimeout(()=>console.log("var", i), 0);
// var 3, var 3, var 3

for (let j = 0; j < 3; j++) setTimeout(()=>console.log("let", j), 0);
// let 0, let 1, let 2`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Recommendation:"})," Prefer ",e.jsx("code",{children:"const"})," by default, use ",e.jsx("code",{children:"let"})," when reassignment is needed, avoid ",e.jsx("code",{children:"var"})," in modern code."]})]})},{id:"js-default-parameters",question:"What are default parameters?",text:"A default parameter value is used only when the passed argument is undefined (not null/false/0). Defaults evaluate left→right, and each call re-evaluates the default expression.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"default parameter"})," provides a fallback value when the corresponding argument is ",e.jsx("code",{children:"undefined"}),". Passing ",e.jsx("code",{children:"null"}),",",e.jsx("code",{children:"false"}),", ",e.jsx("code",{children:"0"}),", or ",e.jsx("code",{children:'""'})," ",e.jsx("em",{children:"does not"})," trigger the default."]}),e.jsx(s,{children:`function greet(name = "Guest") { return "Hi " + name; }
greet();           // "Hi Guest"      (undefined -> default)
greet(undefined);  // "Hi Guest"
greet(null);       // "Hi null"       (null does NOT trigger default)
greet("");         // "Hi "           (empty string kept)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Left→right & TDZ:"})," Parameters are created left to right. Referencing a ",e.jsx("em",{children:"later"})," parameter inside an earlier default causes a TDZ error."]}),e.jsx(s,{children:`function bad(a = b, b = 2) {}
try { bad(); } catch (e) { console.log(e instanceof ReferenceError); } // true

function ok(a = 1, b = a + 1) { return [a, b]; }
ok(); // [1, 2]`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Re-evaluated per call:"})," Default expressions run at each invocation, so avoid heavy work there."]}),e.jsx(s,{children:`let n = 0;
function nextId(id = ++n) { return id; }
nextId(); // 1
nextId(); // 2
nextId(99); // 99 (explicit arg bypasses default)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Defaults apply only to ",e.jsx("code",{children:"undefined"}),"; avoid referencing later params; heavy defaults can hurt performance;",e.jsx("code",{children:"function.length"})," counts parameters ",e.jsx("em",{children:"before"})," the first with a default."]}),e.jsx(s,{children:`function f(a, b = 1, c) {}
f.length; // 1`})]})},{id:"js-rest-parameter",question:"What is the rest parameter (`...args`) in functions?",text:"Rest parameter collects remaining arguments into a real array. Must be last, only one allowed. Prefer over `arguments` (which is array-like).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," The ",e.jsx("em",{children:"rest parameter"})," ",e.jsx("code",{children:"...args"})," gathers all remaining arguments into a ",e.jsx("strong",{children:"real array"}),". It must appear ",e.jsx("em",{children:"last"})," in the parameter list, and there can be only one rest parameter."]}),e.jsx(s,{children:`// Collect all remaining arguments as an array:
function sum(label, ...nums) {
  return label + ": " + nums.reduce((a, b) => a + b, 0);
}
sum("total", 1, 2, 3); // "total: 6"
sum("none");           // "none: 0" (nums = [])`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Real array (vs ",e.jsx("code",{children:"arguments"}),"):"]})," Rest gives you a normal array with methods like ",e.jsx("code",{children:"map"}),"/",e.jsx("code",{children:"filter"}),". In strict mode,",e.jsx("code",{children:"arguments"})," is array-like and not synced with parameter reassignments."]}),e.jsx(s,{children:`"use strict";
function demo(x, ...rest) {
  console.log(Array.isArray(rest)); // true
  x = 42;
  console.log(arguments[0]);        // original value (not 42)
}
demo(10, 20, 30);`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Position & count:"})," Rest must be last; function ",e.jsx("code",{children:"length"})," doesn't count it."]}),e.jsx(s,{children:`function f(a, b, ...rest) {}
f.length; // 2 (rest not counted)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Common uses:"}),' variable-arity functions (sum, max), collecting "options" after fixed params, forwarding arguments to another function.']}),e.jsx(s,{children:`const logAll = (...args) => console.log(...args);
const callWith = (fn, ...args) => fn(...args);
callWith(Math.max, 3, 7, 2); // 7`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Only one rest parameter and it must be last; don't confuse function rest with",e.jsx("em",{children:"object/array rest in destructuring"})," - those are patterns, not parameters (covered separately)."]})]})},{id:"js-spread-syntax",question:"What is the spread syntax (`...`) in JavaScript?",text:"Spread expands an iterable (like an array or string) into individual elements, or expands an object's own enumerable properties into a new object. It's used in calls, array literals, and object literals; it makes shallow copies.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"Spread"})," (",e.jsx("code",{children:"..."}),") ",e.jsx("em",{children:"expands"})," values. In ",e.jsx("strong",{children:"calls"})," and ",e.jsx("strong",{children:"array literals"}),", it requires an ",e.jsx("em",{children:"iterable"})," (Array, String, Set, etc.). In ",e.jsx("strong",{children:"object literals"}),", it copies an object's ",e.jsx("em",{children:"own enumerable"})," string & symbol properties."]}),e.jsx(s,{children:`// 1) Calls - expand iterable into arguments
function sum(a, b, c){ return a + b + c; }
const nums = [1, 2, 3];
sum(...nums); // 6

// 2) Arrays - copy / concatenate
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b]; // [1,2,3,4] (shallow copy)
const copy = [...a];    // [1,2] (shallow)`}),e.jsx(s,{children:`// 3) Objects - copy / merge (last write wins)
const base = { x: 1, shared: "a" };
const extra = { y: 2, shared: "b" };
const merged = { ...base, ...extra }; // { x:1, shared:"b", y:2 }
const clone  = { ...base };           // shallow copy

// Property descriptors are not preserved (values are copied)
const withGetter = {
  get v(){ return Math.random() }
};
const copyGetter = { ...withGetter };
typeof Object.getOwnPropertyDescriptor(copyGetter, "v").get; // "undefined"`}),e.jsx("p",{children:e.jsx("strong",{children:"Key points:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Shallow copy:"})," nested objects/arrays are shared references."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Order matters:"})," later spreads/props overwrite earlier ones."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arrays need iterables:"})," spreading a non-iterable in an array/call throws."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objects:"})," spreads copy own ",e.jsx("em",{children:"enumerable"})," properties (string & symbol)."]})]}),e.jsx(s,{children:`// Shallow copy example
const orig = { deep: { n: 1 } };
const copy2 = { ...orig };
copy2.deep.n = 9;
orig.deep.n; // 9 (same inner object)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Don't confuse with rest:"})," Spread ",e.jsx("em",{children:"expands"})," values at usage sites, while ",e.jsx("em",{children:"rest"})," ",e.jsx("code",{children:"...args"})," ",e.jsx("em",{children:"collects"})," values in parameter/destructuring positions."]})]})},{id:"js-array-destructuring",question:"What is array destructuring?",text:"Array destructuring unpacks values from arrays/iterables into variables by position. Supports skipping, defaults, rest, nesting, and even quick swaps.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"Array destructuring"})," assigns elements of an array (or any iterable) to variables by position using a pattern on the left-hand side."]}),e.jsx(s,{children:`// Basic
const [a, b] = [1, 2];           // a=1, b=2

// Skip items with empty slots
const [, , third] = [10, 20, 30]; // third=30

// Defaults apply only when the source is 'undefined'
const [x = 1, y = 2] = [];        // x=1, y=2
const [m = 1] = [null];           // m=null (default NOT used)

// Rest element (collect remaining items) - must be last
const [head, ...tail] = [1, 2, 3, 4]; // head=1, tail=[2,3,4]

// Nested patterns
const [p, [q, r]] = [1, [2, 3]];  // p=1, q=2, r=3

// Works with any iterable (e.g., Set, string)
const [first] = new Set([7, 8, 9]); // first=7
const [c1, c2] = "hi";              // c1="h", c2="i"

// Swap variables without a temp
let a1 = 5, a2 = 9;
[a1, a2] = [a2, a1];               // a1=9, a2=5`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Rest element must be last; extra source items are ignored; defaults only kick in for",e.jsx("code",{children:"undefined"})," (not ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"0"}),"/",e.jsx("code",{children:'""'}),"); the right-hand side must be iterable."]})]})},{id:"js-object-destructuring",question:"What is object destructuring?",text:"Object destructuring binds variables from object properties by name. Supports renaming, defaults, nested patterns, and rest properties; use = {} as a whole-arg default to avoid TypeError on null/undefined.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"Object destructuring"})," extracts properties by ",e.jsx("em",{children:"name"})," into variables. You can rename variables, set per-property defaults (used only when the value is ",e.jsx("code",{children:"undefined"}),"), nest patterns, and collect the rest."]}),e.jsx(s,{children:`// Basic by-name binding
const user = { name: "Ada", role: "admin" };
const { name, role } = user;   // name="Ada", role="admin"

// Rename local variables
const { name: fullName } = user; // fullName="Ada"

// Defaults only when the property value is undefined (not null/0/"")
const cfg = { retries: undefined, delay: null };
const { retries = 3, delay = 1000 } = cfg;
// retries=3 (undefined -> default), delay=null (default NOT used)

// Rename + default together
const { port: p = 8080 } = {}; // p=8080

// Rest properties (own enumerable props not picked above)
const obj = { a:1, b:2, c:3 };
const { a, ...rest } = obj; // a=1, rest={ b:2, c:3 }

// Nested patterns
const payload = { meta:{ id: 7 }, data:{ x: 10 } };
const { meta: { id }, data: { x } } = payload; // id=7, x=10

// Destructure into existing variables: wrap in parentheses
let x1, y1;
({ x: x1 = 0, y: y1 = 0 } = { x: 5 }); // x1=5, y1=0

// Safe function parameter with whole-arg default
function connect({ host = "localhost", port = 5432 } = {}) {
  return host + ":" + port;
}
connect(); // "localhost:5432"
`}),e.jsx("p",{children:e.jsx("strong",{children:"Key points:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Order doesn't matter (it's by ",e.jsx("em",{children:"property name"}),")."]}),e.jsxs("li",{children:["Per-property default applies only when the value is ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"...rest"})," collects ",e.jsx("em",{children:"own enumerable"})," props not already picked."]}),e.jsxs("li",{children:["Destructuring from ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"})," throws - use a whole-argument default like ",e.jsx("code",{children:"= {}"}),"."]}),e.jsxs("li",{children:["Inherited properties can be read (normal property access); but ",e.jsx("code",{children:"...rest"})," doesn't include inherited ones."]})]})]})},{id:"js-optional-chaining",question:"What is optional chaining (`?.`)?",text:"Optional chaining safely accesses a property/call/index and returns undefined if the base is null or undefined. Forms: obj?.prop, obj?.[expr], obj?.method?.(args).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"Optional chaining"})," ",e.jsx("code",{children:"?."})," lets you read properties, call methods, or index into objects that might be ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"}),". If the left side is ",e.jsx("code",{children:"null"})," or ",e.jsx("code",{children:"undefined"}),", the whole expression evaluates to",e.jsx("code",{children:"undefined"})," without throwing."]}),e.jsx(s,{children:`const user = { profile: { contact: { email: "a@b.com" } } };

user?.profile?.contact?.email     // "a@b.com"
user?.settings?.theme             // undefined (safe)

// Bracket form
const key = "email";
user?.profile?.contact?.[key];    // "a@b.com"

// Optional call (method may be missing)
user.service?.getToken?.();       // runs if both exist, otherwise undefined`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why:"})," Avoids verbose checks and prevents ",e.jsx("code",{children:"TypeError: Cannot read properties of undefined"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Pair with nullish coalescing:"})," Provide a default only when result is ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"}),"."]}),e.jsx(s,{children:'const city = user?.profile?.address?.city ?? "(unknown)";'}),e.jsxs("p",{children:[e.jsx("strong",{children:"Forms:"})," ",e.jsx("code",{children:"obj?.prop"})," • ",e.jsx("code",{children:"obj?.[expr]"})," • ",e.jsx("code",{children:"obj.method?.(args)"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Gotchas:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["It's ",e.jsx("em",{children:"read-only short-circuit"}),"; you can't assign through it (",e.jsx("code",{children:"obj?.prop = 1"})," is invalid)."]}),e.jsxs("li",{children:["Only stops on ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"})," - not on other falsy values (",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:'""'}),", ",e.jsx("code",{children:"false"}),")."]}),e.jsx("li",{children:"Don't overuse; frequent optional chains can hide bugs where data should always exist."})]})]})},{id:"js-nullish-coalescing",question:"What is nullish coalescing (`??`)?",text:'`??` returns the right side only when the left side is null or undefined (not for 0, "", or false). Use it for safe defaults; combine with optional chaining; don\'t mix with &&/|| without parentheses.',answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," The ",e.jsx("em",{children:"nullish coalescing"})," operator ",e.jsx("code",{children:"??"})," returns its left operand if it's ",e.jsx("code",{children:"not"})," ",e.jsx("code",{children:"null"})," or ",e.jsx("code",{children:"undefined"}),"; otherwise it returns the right operand. Unlike ",e.jsx("code",{children:"||"}),", it ",e.jsx("em",{children:"does not"})," treat ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:'""'}),", or ",e.jsx("code",{children:"false"}),' as "missing".']}),e.jsx(s,{children:`// Defaults only for null/undefined
const port = userPort ?? 3000;  // userPort = 0 -> keeps 0, not 3000
const name = inputName ?? "(anonymous)"; // null/undefined -> "(anonymous)"

// Compare with OR (||): OR treats many values as missing (bad for 0/"")
const portOr = userPort || 3000; // 0 -> 3000 (surprising)
`}),e.jsx("p",{children:e.jsx("strong",{children:"Combine with optional chaining:"})}),e.jsx(s,{children:`const city = user?.profile?.address?.city ?? "(unknown)";
const email = config?.contact?.email ?? "(not set)";`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Short-circuit behavior:"})," If the left side is not null/undefined, the right side is not evaluated."]}),e.jsx(s,{children:`let calls = 0;
function inc(){ calls++; return "X"; }
const v = "ok" ?? inc(); // "ok" ; inc() not called (calls stays 0)`}),e.jsx("p",{children:e.jsx("strong",{children:"Gotchas:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"??"})," only checks for ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"})," - it preserves valid falsy values (",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:'""'}),", ",e.jsx("code",{children:"false"}),")."]}),e.jsxs("li",{children:["Don't mix ",e.jsx("code",{children:"??"})," with ",e.jsx("code",{children:"&&"})," or ",e.jsx("code",{children:"||"})," in the same expression ",e.jsx("em",{children:"without parentheses"})," (SyntaxError). Use grouping:"]})]}),e.jsx(s,{children:`// ❌ SyntaxError:
// a ?? b || c

// ✅ Group explicitly:
(a ?? b) || c
a ?? (b || c)`})]})},{id:"js-logical-assignment",question:"What are logical assignment operators (||=, &&=, ??=)?",text:"They combine short-circuiting with assignment: x ||= v assigns when x is falsy; x &&= v assigns when x is truthy; x ??= v assigns when x is null/undefined.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," Logical assignment operators merge a logical check with an assignment:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"x ||= v"})," → assign ",e.jsx("code",{children:"v"})," ",e.jsx("em",{children:"only if"})," ",e.jsx("code",{children:"x"})," is ",e.jsx("strong",{children:"falsy"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"x &&= v"})," → assign ",e.jsx("code",{children:"v"})," ",e.jsx("em",{children:"only if"})," ",e.jsx("code",{children:"x"})," is ",e.jsx("strong",{children:"truthy"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"x ??= v"})," → assign ",e.jsx("code",{children:"v"})," ",e.jsx("em",{children:"only if"})," ",e.jsx("code",{children:"x"})," is ",e.jsx("strong",{children:"null or undefined"}),"."]})]}),e.jsx(s,{children:`let a = 0;
a ||= 10;   // 0 is falsy -> a = 10

let b = "user";
b &&= b.toUpperCase(); // "USER" (b was truthy)

let c;       // undefined
c ??= 5;     // undefined -> c = 5
let d = 0;
d ??= 9;     // 0 is not null/undefined -> stays 0`}),e.jsx("p",{children:e.jsx("strong",{children:"Typical uses:"})}),e.jsx(s,{children:`// Defaults
settings.timeout ??= 3000;  // only when null/undefined

// Fill only when truly missing (keeps 0 / "" / false)
user.age ??= 0;
user.nickname ||= "guest";  // BUT: "" is falsy -> becomes "guest"

// Guarded update
isLoggedIn &&= hasValidSession();`}),e.jsx("p",{children:e.jsx("strong",{children:"Choosing the right one:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"??="})," for safe defaults that should ",e.jsx("em",{children:"not"})," overwrite valid falsy values like ",e.jsx("code",{children:"0"})," or ",e.jsx("code",{children:'""'}),"."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"||="})," when any falsy should trigger the default (e.g., empty string should become a placeholder)."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"&&="})," to keep or replace a value only when it's already truthy."]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Gotchas:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"No optional chaining on the left-hand side:"})," you cannot write ",e.jsx("code",{children:"obj?.prop ??= v"})," (invalid left-hand side). Check the object first or use a guard."]}),e.jsxs("li",{children:[e.jsx("code",{children:"||="})," treats ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:'""'}),", and ",e.jsx("code",{children:"false"})," as missing; prefer ",e.jsx("code",{children:"??="})," if you want to preserve them."]})]}),e.jsx(s,{children:`// Guard before assigning nested props
if (obj && obj.config != null) {
  obj.config.port ??= 8080;
}`})]})},{id:"js-in-operator",question:"What does the `in` operator do?",text:"`k in obj` checks whether a property key exists on an object or anywhere on its prototype chain. For own-only checks, use Object.hasOwn(obj, k).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," The ",e.jsx("code",{children:"in"})," operator returns ",e.jsx("code",{children:"true"})," if the property key (string or symbol) exists on the object ",e.jsx("em",{children:"or its prototype chain"}),"."]}),e.jsx(s,{children:`const base = { a: 1 };
const obj = Object.create(base);
obj.b = 2;

"a" in obj;                  // true  (inherited from base)
"b" in obj;                  // true  (own)
"c" in obj;                  // false`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Own-only check:"})," Use ",e.jsx("code",{children:"Object.hasOwn(obj, key)"})," (ES2022). Older style: ",e.jsx("code",{children:"Object.prototype.hasOwnProperty.call(obj, key)"}),"."]}),e.jsx(s,{children:`Object.hasOwn(obj, "b"); // true
Object.hasOwn(obj, "a"); // false (since it's inherited)

// Older, safe form:
Object.prototype.hasOwnProperty.call(obj, "b"); // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Arrays:"})," With arrays, ",e.jsx("code",{children:"in"})," checks for the ",e.jsx("em",{children:"index"})," key, not the value. It also reports ",e.jsx("em",{children:"holes"})," as missing."]}),e.jsx(s,{children:`const arr = [10, 20];
0 in arr;        // true  (index exists)
2 in arr;        // false (no element at index 2)
20 in arr;       // false (checks keys, not values)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Symbols:"})," Works with symbol keys too."]}),e.jsx(s,{children:`const S = Symbol("secret");
const o = { [S]: 123 };
S in o; // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:"in"})," includes inherited properties; prefer",e.jsx("code",{children:"Object.hasOwn"}),` when you specifically want "own-only". On arrays, don't use `,e.jsx("code",{children:"in"})," to test membership by value-use ",e.jsx("code",{children:"includes"}),"."]}),e.jsx(s,{children:"[1,2,3].includes(2); // true (by value)"})]})},{id:"js-instanceof-operator",question:"What does the `instanceof` operator do?",text:"`v instanceof Ctor` checks whether Ctor.prototype is in v's prototype chain. Fails across realms (iframes) and with primitives. Prefer Array.isArray for arrays; you can customize via Symbol.hasInstance.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"v instanceof Ctor"})," returns ",e.jsx("code",{children:"true"})," if",e.jsx("code",{children:" Ctor.prototype"})," appears anywhere in ",e.jsx("code",{children:"v"}),"'s prototype chain."]}),e.jsx(s,{children:`function Person() {}
const p = new Person();
p instanceof Person;            // true
Object.getPrototypeOf(p) === Person.prototype; // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Primitives:"})," Work only with ",e.jsx("em",{children:"objects"}),". Primitives aren't instances (unless boxed)."]}),e.jsx(s,{children:`42 instanceof Number;     // false (primitive)
new Number(42) instanceof Number; // true (boxed object)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Arrays & built-ins:"})," Use dedicated checks; ",e.jsx("code",{children:"instanceof"})," can fail across realms (e.g., iframes)."]}),e.jsx(s,{children:`Array.isArray([]);        // ✅ reliable
([]) instanceof Array;        // ❌ can be false across realms

Object.prototype.toString.call(/re/) === "[object RegExp]"; // generic tag`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cross-realm gotcha:"})," Each realm (iframe/worker) has its own constructors; an array from another realm fails ",e.jsx("code",{children:"instanceof Array"})," in this realm."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Customizing:"})," Classes/functions can override the check using ",e.jsx("code",{children:"Symbol.hasInstance"}),"."]}),e.jsx(s,{children:`class Marked {
  static [Symbol.hasInstance](obj) { return obj && obj.mark === true; }
}
({ mark:true }) instanceof Marked; // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Takeaways:"})," Use ",e.jsx("code",{children:"instanceof"})," when you control the constructor and realm. For arrays use ",e.jsx("code",{children:"Array.isArray"}),"; for broad type tags use ",e.jsx("code",{children:"Object.prototype.toString.call(v)"}),"."]})]})},{id:"js-prototype-and-chain",question:"What is a prototype and the prototype chain?",text:"Every object has an internal [[Prototype]] link to another object (or null). Property lookups walk this chain. Create with Object.create, read via Object.getPrototypeOf, avoid writing __proto__.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"prototype"})," is another object that a given object delegates to for missing properties. The linked objects form the ",e.jsx("strong",{children:"prototype chain"}),". Lookup goes: ",e.jsx("code",{children:"obj → obj.[[Prototype]] → ... → null"}),"."]}),e.jsx(s,{children:`// Property lookup walks the chain
const base = { greet(){ return "hi"; } };
const obj  = Object.create(base); // set [[Prototype]] to base
obj.name = "Ada";

obj.greet();            // "hi" (found on prototype)
Object.getPrototypeOf(obj) === base; // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Create / read / set:"})," Prefer ",e.jsx("code",{children:"Object.create"})," to create with a prototype,",e.jsx("code",{children:"Object.getPrototypeOf"})," to read it, and ",e.jsx("code",{children:"Object.setPrototypeOf"})," to change (slow; avoid in hot paths)."]}),e.jsx(s,{children:`const dict = Object.create(null); // no prototype (pure map)
Object.getPrototypeOf(obj);      // -> base
Object.setPrototypeOf(obj, null); // now no delegation (use sparingly)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Functions & classes:"})," A function used as a constructor has a",e.jsx("code",{children:".prototype"})," object. Instances created with ",e.jsx("code",{children:"new"})," link to it.",e.jsx("code",{children:"class"})," syntax configures the same prototype chain."]}),e.jsx(s,{children:`function Person(name){ this.name = name; }
Person.prototype.say = function(){ return "I am " + this.name; };

const p = new Person("Lin");
Object.getPrototypeOf(p) === Person.prototype; // true
p.say(); // "I am Lin"

// Classes (sugar over prototypes)
class A { talk(){ return "yo"; } }
new A().talk(); // "yo"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Own vs inherited:"})," Check own properties with ",e.jsx("code",{children:"Object.hasOwn(obj, k)"}),";",e.jsx("code",{children:"k in obj"})," includes inherited ones."]}),e.jsx(s,{children:`const o = Object.create({ a: 1 });
o.b = 2;
Object.hasOwn(o, "a"); // false
"a" in o;              // true (inherited)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Writing ",e.jsx("code",{children:"obj.x = ..."})," creates/overrides an ",e.jsx("em",{children:"own"})," prop (doesn't modify the prototype). Avoid using ",e.jsx("code",{children:"__proto__"})," (legacy accessor); changing prototypes at runtime is slow. Methods on built-in prototypes (e.g., ",e.jsx("code",{children:"Array.prototype.map"}),") are shared by all instances."]})]})},{id:"js-property-descriptors",question:"What is a property descriptor?",text:"A property descriptor defines a property's attributes: data (value, writable) or accessor (get, set), plus enumerable and configurable. Read with getOwnPropertyDescriptor; create/change with defineProperty.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," Every own property has a ",e.jsx("em",{children:"descriptor"})," with attributes. Two kinds exist:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Data descriptor:"})," ",e.jsx("code",{children:"value"}),", ",e.jsx("code",{children:"writable"}),", ",e.jsx("code",{children:"enumerable"}),", ",e.jsx("code",{children:"configurable"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accessor descriptor:"})," ",e.jsx("code",{children:"get"}),", ",e.jsx("code",{children:"set"}),", ",e.jsx("code",{children:"enumerable"}),", ",e.jsx("code",{children:"configurable"})]})]}),e.jsxs("p",{children:["A descriptor is either data ",e.jsx("em",{children:"or"})," accessor (you can't mix ",e.jsx("code",{children:"value/writable"})," with ",e.jsx("code",{children:"get/set"}),")."]}),e.jsx(s,{children:`const obj = { x: 1 };
Object.getOwnPropertyDescriptor(obj, "x");
// { value: 1, writable: true, enumerable: true, configurable: true } (defaults for literals)

// Define a non-writable, non-enumerable id
Object.defineProperty(obj, "id", {
  value: 100,
  writable: false,
  enumerable: false,
  configurable: true
});

Object.getOwnPropertyDescriptor(obj, "id");
// { value: 100, writable: false, enumerable: false, configurable: true }`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Accessor properties:"})," use ",e.jsx("code",{children:"get"}),"/",e.jsx("code",{children:"set"})," instead of ",e.jsx("code",{children:"value"}),"/",e.jsx("code",{children:"writable"}),"."]}),e.jsx(s,{children:`const user = {};
let _name = "Ada";
Object.defineProperty(user, "name", {
  get(){ return _name; },
  set(v){ _name = String(v).trim(); },
  enumerable: true,
  configurable: true
});
user.name;      // "Ada"
user.name = "  Lin  ";
user.name;      // "Lin"`}),e.jsx("p",{children:e.jsx("strong",{children:"Key attributes:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"enumerable"}),": shows up in ",e.jsx("code",{children:"for...in"})," / ",e.jsx("code",{children:"Object.keys()"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"writable"})," (data only): controls assignment to ",e.jsx("code",{children:"value"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"configurable"}),": allows ",e.jsx("code",{children:"delete"})," and further descriptor changes."]})]}),e.jsx(s,{children:`const o = {};
Object.defineProperty(o, "locked", {
  value: 1, writable: false, enumerable: true, configurable: false
});

// Non-writable: assignment fails silently in sloppy mode; throws in strict mode
"use strict";
try { o.locked = 2; } catch (e) { /* TypeError */ }

// Non-configurable: cannot delete or change enumerable/writable back to true
delete o.locked;   // false
Object.defineProperty(o, "locked", { writable: true }); // TypeError`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Defaults matter:"})," If you omit flags in ",e.jsx("code",{children:"defineProperty"}),", they are ",e.jsx("em",{children:"false"})," by default. When creating via literals, all three flags default to ",e.jsx("em",{children:"true"}),"."]}),e.jsx(s,{children:`// All flags true for literal 'a'
const a = { k: 1 };
Object.getOwnPropertyDescriptor(a, "k").enumerable;   // true

// defineProperty defaults: enumerable=false, writable=false, configurable=false unless set
const b = {};
Object.defineProperty(b, "k", { value: 1 });
Object.getOwnPropertyDescriptor(b, "k");
// { value:1, writable:false, enumerable:false, configurable:false }`}),e.jsxs("p",{children:[e.jsx("strong",{children:"When to use:"})," hide metadata (non-enumerable), make constants (non-writable), define computed properties (get/set), or lock API surface (non-configurable)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Once ",e.jsx("code",{children:"configurable:false"}),", you can't flip it back; you may only change ",e.jsx("code",{children:"writable:true → false"})," (one-way). Mixing ",e.jsx("code",{children:"value"})," with ",e.jsx("code",{children:"get"}),"/",e.jsx("code",{children:"set"})," throws."]})]})},{id:"js-freeze-seal-preventExtensions",question:"What's the difference between Object.freeze, Object.seal, and Object.preventExtensions?",text:"preventExtensions: no new props. seal: no new props + cannot delete/configure existing (but writable values may change). freeze: seal + make all data properties non-writable (fully read-only, shallow).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Summary:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Object.preventExtensions(obj)"}),": disallow ",e.jsx("em",{children:"adding"})," properties. Existing ones behave as-is."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.seal(obj)"}),": preventExtensions ",e.jsx("em",{children:"and"})," make all existing props ",e.jsx("code",{children:"configurable:false"})," (can't delete or reconfigure). ",e.jsx("em",{children:"Values may still change"})," if writable."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.freeze(obj)"}),": seal ",e.jsx("em",{children:"and"})," set all ",e.jsx("em",{children:"data"})," props to ",e.jsx("code",{children:"writable:false"}),". Object becomes ",e.jsx("em",{children:"read-only"})," (but only ",e.jsx("strong",{children:"shallowly"}),")."]})]})]}),e.jsx(s,{children:`const o = { a: 1, nested: { x: 1 } };

// 1) preventExtensions - can't add, can modify existing (if writable)
Object.preventExtensions(o);
o.b = 2;             // ignored (or throws in strict mode)
o.a = 9;             // OK (still writable)
delete o.a;          // OK (because still configurable)
Object.isExtensible(o); // false

// 2) seal - can't add/delete/reconfigure; can modify values if writable
const s = { x: 1 };
Object.seal(s);
s.y = 2;           // no (or throws in strict)
delete s.x;        // no
s.x = 5;           // OK (writable by default)
Object.isSealed(s); // true

// 3) freeze - read-only (data props become writable:false)
const f = { k: 1, nested: { y: 1 } };
Object.freeze(f);
f.k = 9;           // no
delete f.k;        // no
// BUT: shallow freeze - inner objects are still mutable unless also frozen:
f.nested.y = 99;   // OK
Object.isFrozen(f);      // true
Object.isFrozen(f.nested); // false`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Accessors:"})," Freezing doesn't change the behavior of existing getters/setters themselves; it only makes the property ",e.jsx("code",{children:"configurable:false"})," and (for data props) ",e.jsx("code",{children:"writable:false"}),". A setter will still run if the accessor remains."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Strict mode behavior:"})," Adding/deleting/assigning when disallowed ",e.jsx("em",{children:"throws"})," in strict mode; otherwise it fails silently."]}),e.jsx(s,{children:`"use strict";
const a = {};
Object.freeze(a);
try { a.newProp = 1; } catch (e) { /* TypeError */ }`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Deep freeze:"})," To make the whole graph immutable, recursively freeze nested objects."]}),e.jsx(s,{children:`function deepFreeze(obj) {
  if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    for (const key of Reflect.ownKeys(obj)) {
      deepFreeze(obj[key]);
    }
  }
  return obj;
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Notes:"})," ",e.jsx("code",{children:"const"})," stops ",e.jsx("em",{children:"rebinding"})," the variable, not mutating the object. Use ",e.jsx("code",{children:"freeze"})," for object immutability; ",e.jsx("code",{children:"seal"})," to lock shape but keep writable values; ",e.jsx("code",{children:"preventExtensions"})," to disallow growth only."]})]})},{id:"js-what-is-symbol",question:"What is a Symbol in JavaScript?",text:"Symbol is a unique, immutable primitive often used as a non-colliding object property key. Even symbols with the same description are different. Symbol.for provides a global registry.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"Symbol"})," is a primitive for creating",e.jsx("em",{children:"unique"})," identifiers. Useful as object keys that won't clash with other keys. Symbols are immutable and not auto-converted to strings."]}),e.jsx(s,{children:`// Create symbols (descriptions are just labels for debugging)
const s1 = Symbol("id");
const s2 = Symbol("id");
s1 === s2; // false (unique)

const obj = {};
obj[s1] = 123;         // use brackets for symbol keys
// obj.s1 would be a string key "s1" - not the symbol`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Global registry:"})," ",e.jsx("code",{children:"Symbol.for(key)"})," returns the same symbol for a given key across the app (and realms sharing the registry)."]}),e.jsx(s,{children:`const a = Symbol.for("channel");
const b = Symbol.for("channel");
a === b; // true
Symbol.keyFor(a); // "channel"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Enumeration & JSON:"})," Symbol-keyed properties are skipped by",e.jsx("code",{children:"Object.keys"}),", ",e.jsx("code",{children:"for...in"}),", and ",e.jsx("code",{children:"JSON.stringify"}),". Retrieve them via ",e.jsx("code",{children:"Object.getOwnPropertySymbols"})," or ",e.jsx("code",{children:"Reflect.ownKeys"}),"."]}),e.jsx(s,{children:`const S = Symbol("hidden");
const o = { x: 1, [S]: 2 };
Object.keys(o);                 // ["x"]
Object.getOwnPropertySymbols(o);// [Symbol(hidden)]
Reflect.ownKeys(o);             // ["x", Symbol(hidden)]
JSON.stringify(o);              // "{"x":1}" (symbol key omitted)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Well-known symbols (glimpse):"})," Protocol hooks like",e.jsx("code",{children:"Symbol.iterator"}),", ",e.jsx("code",{children:"Symbol.toPrimitive"}),",",e.jsx("code",{children:"Symbol.toStringTag"}),", ",e.jsx("code",{children:"Symbol.hasInstance"})," let objects integrate with language features. (Covered in separate questions.)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:"new Symbol()"})," is a TypeError (not a constructor); string concatenation with a symbol throws (",e.jsx("code",{children:'"" + Symbol()'}),") - use ",e.jsx("code",{children:"String(sym)"})," if needed."]})]})}];function O(){const[r,t]=l.useState(""),d=l.useRef(null);l.useEffect(()=>{const n=c=>{var j,u;const h=(j=document.activeElement)==null?void 0:j.tagName;c.key==="/"&&h!=="INPUT"&&h!=="TEXTAREA"&&(c.preventDefault(),(u=d.current)==null||u.focus())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[]);const a=n=>{(n.key==="Escape"||n.key==="Esc")&&(r?t(""):n.currentTarget.blur(),n.preventDefault())},o=l.useMemo(()=>{const n=r.trim().toLowerCase();return n?p.filter(({question:c,text:h})=>c.toLowerCase().includes(n)||h.toLowerCase().includes(n)):p},[r]);return e.jsxs(x.Wrapper,{children:[e.jsxs(x.TopBar,{children:[e.jsx(f,{}),e.jsxs(x.SearchBox,{children:[e.jsx("input",{ref:d,value:r,onChange:n=>t(n.target.value),onKeyDown:a,placeholder:"Search questions...  (press /, Esc to clear)","aria-label":"Search questions","aria-keyshortcuts":"/ Escape"}),r&&e.jsxs(e.Fragment,{children:[e.jsx("small",{className:"hint",children:"esc"}),e.jsx("button",{className:"clear",onClick:()=>t(""),"aria-label":"Clear search",title:"Clear (Esc)",children:"✕"})]})]})]}),e.jsx("p",{children:"Last updated: Sep 14, 2025"}),e.jsxs(x.Count,{children:[o.length," result",o.length!==1?"s":"",r?` for "${r}"`:""]}),o.length===0?e.jsx("p",{style:{opacity:.7},children:"No matches. Try a different keyword."}):o.map(n=>e.jsx(w,{question:n.question,children:n.answer},n.id))]})}export{O as default};
