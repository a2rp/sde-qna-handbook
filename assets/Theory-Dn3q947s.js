import{r as l,j as e,d as t}from"./index-DUBKA-0G.js";import{B as g}from"./BreadcrumbsBar-DTcWuLy9.js";const m=t.div`
  border: 1px solid hsl(0 0% 100% / 0.14);
  border-radius: 12px;
  background: hsl(0 0% 100% / 0.03);
  overflow: hidden;
`,f=t.button`
  width: 100%;
  text-align: left;
  display: flex; align-items: center; justify-content: space-between;
  gap: 10px; padding: 14px 16px;
  background: transparent; color: inherit; border: 0; cursor: pointer;
  font-size: 15px; letter-spacing: 0.2px;
  &:hover { background: hsl(0 0% 100% / 0.05); }
`,b=t.span`
  display: inline-block; transition: transform 180ms ease;
  transform: rotate(${n=>n.$open?180:0}deg);
`,y=t.div`
  padding: ${n=>n.$open?"12px 16px 16px":"0 16px"};
  border-top: 1px solid hsl(0 0% 100% / 0.08);
  display: ${n=>n.$open?"block":"none"};
`,s=({children:n})=>e.jsx("pre",{style:{margin:"8px 0 12px",padding:"10px 12px",borderRadius:10,border:"1px solid hsl(0 0% 100% / 0.12)",background:"hsl(0 0% 100% / 0.04)",overflowX:"auto",lineHeight:1.5,fontSize:13.5},children:n});function w({question:n,children:i,defaultOpen:d=!1}){const[a,o]=l.useState(d),r=l.useId();return e.jsxs(m,{children:[e.jsxs(f,{"aria-expanded":a,"aria-controls":`${r}-panel`,onClick:()=>o(c=>!c),children:[e.jsx("span",{children:n}),e.jsx(b,{$open:a,children:"⌄"})]}),e.jsx(y,{id:`${r}-panel`,role:"region",$open:a,children:typeof i=="string"?e.jsx("p",{children:i}):i})]})}const j={Wrapper:t.div`
        padding: 16px;
        display: grid;
        gap: 12px;
    `,TopBar:t.div`
        display: grid;
        grid-template-columns: 1fr 280px;
        gap: 12px;
        align-items: center;
        margin-bottom: 6px;

        @media (max-width: 720px) {
        grid-template-columns: 1fr;
        }
    `,SearchBox:t.div`
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
    `,Count:t.div`
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
typeof function(){} // "function" // special-case object`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:'typeof null === "object"'})," (legacy quirk);",e.jsx("code",{children:"NaN"})," is a ",e.jsx("em",{children:"number"}),"; use ",e.jsx("code",{children:"Number.isNaN"})," to test;",e.jsx("code",{children:"Object.is(0, -0)"})," distinguishes the two zeros."]})]})},{id:"js-what-is-object",question:"What is an object in JavaScript?",text:"An object is a mutable collection of key-value pairs with a prototype. Keys are strings or symbols. Objects are reference types and are compared by reference.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," An ",e.jsx("em",{children:"object"})," is a dynamic collection of properties (key → value) linked to a ",e.jsx("em",{children:"prototype"}),". Property keys are either",e.jsx("strong",{children:" strings"})," (including numeric-like strings) or ",e.jsx("strong",{children:"symbols"}),". Arrays and functions are also objects (specialized kinds)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Create:"})," object literal ",e.jsx("code",{children:"{}"}),", constructor",e.jsx("code",{children:"Object()"}),", or ",e.jsx("code",{children:"Object.create(proto)"})," (use",e.jsx("code",{children:"Object.create(null)"})," for a dictionary without a prototype)."]}),e.jsx(s,{children:`// 1) Create
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
JSON.stringify(o);              // "{"x":1}" (symbol key omitted)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Well-known symbols (glimpse):"})," Protocol hooks like",e.jsx("code",{children:"Symbol.iterator"}),", ",e.jsx("code",{children:"Symbol.toPrimitive"}),",",e.jsx("code",{children:"Symbol.toStringTag"}),", ",e.jsx("code",{children:"Symbol.hasInstance"})," let objects integrate with language features. (Covered in separate questions.)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:"new Symbol()"})," is a TypeError (not a constructor); string concatenation with a symbol throws (",e.jsx("code",{children:'"" + Symbol()'}),") - use ",e.jsx("code",{children:"String(sym)"})," if needed."]})]})},{id:"js-iterables-and-iterators",question:"What are iterables and iterators in JavaScript?",text:"An iterable has [Symbol.iterator]() that returns an iterator. An iterator has next() → { value, done }. for...of, spread, and array-from use this protocol.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," An ",e.jsx("em",{children:"iterable"})," is any object with a",e.jsx("code",{children:"[Symbol.iterator]()"})," method that returns an ",e.jsx("em",{children:"iterator"}),". An iterator is an object with ",e.jsx("code",{children:"next()"})," that returns",e.jsx("code",{children:"{ value, done }"}),". ",e.jsx("code",{children:"for...of"}),", spread (",e.jsx("code",{children:"..."}),"), destructuring, and ",e.jsx("code",{children:"Array.from"})," consume iterables."]}),e.jsx(s,{children:`// Built-in iterables: Array, String, Map, Set, TypedArrays, arguments, NodeList (most)
// for...of uses the iterator under the hood
for (const ch of "hi") console.log(ch); // h, i

// Spread & destructuring consume iterables
const set = new Set([1,2,3]);
const arr = [...set];        // [1,2,3]
const [a, b] = new Map([["x",1],["y",2]]); // a=["x",1], b=["y",2]`}),e.jsx("p",{children:e.jsx("strong",{children:"Custom iterable (manual iterator):"})}),e.jsx(s,{children:`const countdown = {
  from: 3,
  [Symbol.iterator]() {
    let n = this.from;
    return {
      next() {
        return n >= 0 ? { value: n--, done: false } : { done: true };
      }
    };
  }
};

[...countdown]; // [3, 2, 1, 0]
for (const n of countdown) console.log(n);`}),e.jsx("p",{children:e.jsx("strong",{children:"Custom iterable (generator shortcut):"})}),e.jsx(s,{children:`const range = {
  *[Symbol.iterator]() { // generator makes an iterator easily
    for (let i = 1; i <= 3; i++) yield i;
  }
};
Array.from(range); // [1,2,3]`}),e.jsxs("p",{children:[e.jsx("strong",{children:"for...of vs for...in:"})," ",e.jsx("code",{children:"for...of"})," iterates ",e.jsx("em",{children:"values from the iterator"}),";",e.jsx("code",{children:"for...in"})," iterates ",e.jsx("em",{children:"enumerable property keys"})," (including inherited) of plain objects. Plain objects are ",e.jsx("em",{children:"not"})," iterable by default."]}),e.jsx(s,{children:`const obj = { a:1, b:2 };
for (const k in obj) console.log(k); // "a", "b"
// for (const v of obj) ... // TypeError: obj is not iterable
Object.values(obj); // [1,2]  (use this for values)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Map/Set iteration:"})," ",e.jsx("code",{children:"for...of new Map([[k,v]])"})," yields ",e.jsx("code",{children:"[key, value]"})," pairs;",e.jsx("code",{children:"for...of new Set([v])"})," yields values."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Don't confuse array-like (has length, numeric keys) with iterable (needs ",e.jsx("code",{children:"[Symbol.iterator]"}),"). For async data streams see ",e.jsx("em",{children:"async iterables"})," (",e.jsx("code",{children:"[Symbol.asyncIterator]"}),") and ",e.jsx("code",{children:"for await...of"})," (covered separately)."]})]})},{id:"js-generators",question:"What are generators (`function*`) and `yield`?",text:"Generators are functions that can pause/resume via yield. Calling a generator returns an iterator that's also iterable. You can send values in with next(v), delegate with yield*, and end early with return()/throw().",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("code",{children:"generator"})," is a function declared with",e.jsx("code",{children:" function*"})," that can ",e.jsx("em",{children:"pause"})," at ",e.jsx("code",{children:"yield"})," and ",e.jsx("em",{children:"resume"})," later. Invoking it returns a ",e.jsx("em",{children:"generator object"})," (an iterator ",e.jsx("em",{children:"and"})," iterable) with",e.jsx("code",{children:"next()"}),", ",e.jsx("code",{children:"return()"}),", and ",e.jsx("code",{children:"throw()"}),"."]}),e.jsx(s,{children:`// Basic generator: infinite ID sequence
function* idGen(start = 1) {
  let id = start;
  while (true) yield id++;
}
const g = idGen(100);
g.next(); // { value: 100, done: false }
g.next(); // { value: 101, done: false }`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Sending values into a generator:"})," the value passed to ",e.jsx("code",{children:"next(v)"})," becomes the result of the last ",e.jsx("code",{children:"yield"})," expression."]}),e.jsx(s,{children:`function* dialog() {
  const name = yield "What's your name?";
  return "Hi " + name;
}
const d = dialog();
d.next();           // { value: "What's your name?", done: false }
d.next("Ada");      // { value: "Hi Ada", done: true }`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Iterating & delegation:"})," Generators are iterable; use ",e.jsx("code",{children:"for...of"}),", spread, or ",e.jsx("code",{children:"yield*"})," to delegate to another iterable/generator."]}),e.jsx(s,{children:`function* letters() { yield* "abc"; } // delegate to string (iterable)
[...letters()]; // ["a","b","c"]

function* combo() {
  yield 1;
  yield* [2,3];      // delegate to array
  yield* letters();  // delegate to generator/iterable
}
[...combo()]; // [1,2,3,"a","b","c"]`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Early finish & errors:"})," ",e.jsx("code",{children:"return(v)"})," ends the generator (runs ",e.jsx("code",{children:"finally"})," blocks). ",e.jsx("code",{children:"throw(err)"})," throws inside the generator at the current pause point."]}),e.jsx(s,{children:`function* g1() {
  try {
    yield 1;
    yield 2;
  } finally {
    console.log("cleanup");
  }
}
const it = g1();
it.next();         // {value:1, done:false}
it.return(99);     // logs "cleanup", returns {value:99, done:true}
it.next();         // {value:undefined, done:true}`}),e.jsx("p",{children:e.jsx("strong",{children:"Key points:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Calling a generator ",e.jsx("em",{children:"does not run it"})," immediately; it returns an iterator. Execution starts on ",e.jsx("code",{children:"next()"}),"."]}),e.jsxs("li",{children:["The generator object is both ",e.jsx("em",{children:"iterator"})," and ",e.jsx("em",{children:"iterable"}),": ",e.jsx("code",{children:"it[Symbol.iterator]() === it"}),"."]}),e.jsx("li",{children:"Use generators to create lazy sequences, control flows, or implement custom iterables concisely."})]}),e.jsx("p",{children:e.jsx("strong",{children:"Gotchas:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Arrow functions can't be generators; use ",e.jsx("code",{children:"function*"})," or ",e.jsx("code",{children:"class A { * method() { } }"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"yield"})," is only valid inside generator bodies."]}),e.jsxs("li",{children:["This topic is ",e.jsx("em",{children:"sync generators"}),"; ",e.jsx("em",{children:"async generators"})," (",e.jsx("code",{children:"async function*"})," + ",e.jsx("code",{children:"for await...of"}),") are separate."]})]})]})},{id:"js-async-iterables-and-for-await-of",question:"What are async iterables and `for await...of`?",text:"An async iterable has [Symbol.asyncIterator]() returning an async iterator whose next() returns a Promise of {value, done}. Consume with for await...of or Array.fromAsync; create via async function*.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," An ",e.jsx("em",{children:"async iterable"})," exposes"," ",e.jsx("code",{children:"[Symbol.asyncIterator]()"})," which returns an ",e.jsx("em",{children:"async iterator"}),". Its ",e.jsx("code",{children:"next()"})," method returns a ",e.jsx("strong",{children:"Promise"})," resolving to"," ",e.jsx("code",{children:"{ value, done }"}),". Consume it with"," ",e.jsx("code",{children:"for await...of"})," or ",e.jsx("code",{children:"Array.fromAsync"}),"."]}),e.jsx(s,{children:`// Manual async iterable: yields 1,2,3 with delays
const delayed = {
  async *[Symbol.asyncIterator]() {
    for (const v of [1,2,3]) {
      await new Promise(r => setTimeout(r, 200));
      yield v;
    }
  }
};

(async () => {
  for await (const n of delayed) {
    console.log(n); // 1, then 2, then 3 (with delays)
  }
})();`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Async generator shortcut:"})," ",e.jsx("code",{children:"async function*"})," creates async iterables easily."]}),e.jsx(s,{children:`async function* fetchPages(pages) {
  for (const url of pages) {
    const res = await fetch(url);        // awaits between yields
    yield await res.text();
  }
}

// Collect all chunks:
const texts = await Array.fromAsync(fetchPages(["/a","/b"]));`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["for...of vs for ",e.jsx("em",{children:"await"}),"...of:"]}),e.jsx("code",{children:"for...of"})," consumes ",e.jsx("em",{children:"sync"})," iterables (",e.jsx("code",{children:"[Symbol.iterator]"}),");",e.jsx("code",{children:"for await...of"})," consumes ",e.jsx("em",{children:"async"})," iterables and also awaits values if they are Promises."]}),e.jsx(s,{children:`// Array of promises: for-await awaits each element
const arr = [Promise.resolve(1), 2, Promise.resolve(3)];
for await (const v of arr) console.log(v); // 1, 2, 3`}),e.jsx("p",{children:e.jsx("strong",{children:"Key points:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use inside an ",e.jsx("code",{children:"async"})," function (or at module top level with TLA)."]}),e.jsxs("li",{children:["No async spread: ",e.jsx("code",{children:"[...asyncIterable]"})," is invalid-use ",e.jsx("code",{children:"Array.fromAsync"})," or a loop."]}),e.jsxs("li",{children:["Plain objects aren't async iterable unless you add ",e.jsx("code",{children:"[Symbol.asyncIterator]"}),"."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Don't mix ",e.jsx("code",{children:"for...of"})," with async iterables (TypeError). Be mindful of backpressure-awaiting each item processes them sequentially."]})]})},{id:"js-what-is-promise",question:"What is a Promise in JavaScript?",text:"A Promise is an object representing the eventual result of an async operation. It's pending → fulfilled or rejected once, and then immutable. Use .then/.catch/.finally; handlers run as microtasks.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"Promise"})," wraps an asynchronous result. It starts ",e.jsx("strong",{children:"pending"})," and settles exactly once to ",e.jsx("strong",{children:"fulfilled"})," (value) or ",e.jsx("strong",{children:"rejected"})," (reason). Handlers attached via ",e.jsx("code",{children:".then"}),", ",e.jsx("code",{children:".catch"}),", and ",e.jsx("code",{children:".finally"})," run in the microtask queue."]}),e.jsx(s,{children:`// Basic creation and consumption
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 100);   // succeed later
  // reject(new Error("oops"));          // or fail
});

p.then(value => value * 2)              // returns a NEW promise
 .then(x => console.log(x))             // 84
 .catch(err => console.error("error:", err))
 .finally(() => console.log("done"));`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Chaining & errors:"})," Returning a value in ",e.jsx("code",{children:".then"})," passes it down. Throwing (or returning a rejected promise) jumps to the nearest ",e.jsx("code",{children:".catch"}),".",e.jsx("code",{children:".finally"})," runs after settle and passes through the original outcome."]}),e.jsx(s,{children:`Promise.resolve("A")
  .then(v => v + "B")             // "AB"
  .then(() => { throw new Error("X"); })
  .catch(e => "recover")          // handles the error -> "recover"
  .finally(() => console.log("cleanup"));`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Microtask timing:"})," Promise callbacks run before timers of the same tick."]}),e.jsx(s,{children:`setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("microtask"));
// order: microtask -> timeout`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," The executor runs ",e.jsx("em",{children:"synchronously"})," at construction time; a promise settles only once; missing a ",e.jsx("code",{children:".catch"})," can cause an",e.jsx("code",{children:"unhandledrejection"})," event in browsers/Node. Prefer using ",e.jsx("code",{children:"async/await"})," for readability (separate topics cover that and combinators)."]})]})},{id:"js-promise-combinators",question:"What are Promise combinators (all, allSettled, race, any)?",text:"all waits for all to fulfill (fails fast on first reject). allSettled waits for all (never throws). race settles with the first settled promise. any fulfills on the first fulfillment (AggregateError if all reject).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Overview:"})," Combinators coordinate multiple promises:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Promise.all(iterable)"})," → fulfills with ",e.jsx("em",{children:"array of values"})," when ",e.jsx("em",{children:"all"})," fulfill; ",e.jsx("strong",{children:"rejects fast"})," on the first rejection."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Promise.allSettled(iterable)"})," → always fulfills with ",e.jsx("em",{children:"array of result objects"})," (",e.jsx("code",{children:"{ status, value | reason }"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Promise.race(iterable)"})," → settles with the ",e.jsx("em",{children:"first settled"})," promise (fulfill or reject)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Promise.any(iterable)"})," → fulfills with the ",e.jsx("em",{children:"first fulfillment"}),"; rejects with ",e.jsx("strong",{children:"AggregateError"})," if all reject."]})]}),e.jsx(s,{children:`// 1) Promise.all - parallel & fail-fast
const a = fetch("/a").then(r => r.text());
const b = fetch("/b").then(r => r.text());
const [ta, tb] = await Promise.all([a, b]); // throws if a or b rejects`}),e.jsx(s,{children:`// 2) Promise.allSettled - never throws; inspect per-item status
const results = await Promise.allSettled([
  fetch("/ok"),
  fetch("/missing")
]);
/*
results = [
  { status: "fulfilled", value: Response(...) },
  { status: "rejected",  reason: ... }
]
*/`}),e.jsx(s,{children:`// 3) Promise.race - first to settle wins (success or failure)
await Promise.race([
  fetch("/slow"),
  new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 1000))
]);`}),e.jsx(s,{children:`// 4) Promise.any - first fulfillment wins; all reject -> AggregateError
try {
  const v = await Promise.any([
    Promise.reject("x"),
    Promise.resolve("ok"),
    Promise.resolve("later")
  ]);
  // v === "ok"
} catch (e) {
  // e is AggregateError if all reject
}`}),e.jsx("p",{children:e.jsx("strong",{children:"Patterns:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"Parallel mapping:"})," ",e.jsx("code",{children:"await Promise.all(arr.map(doAsync))"})," (start all first, then await)."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Timeout wrapper:"})," ",e.jsx("code",{children:"await Promise.race([task, timeoutPromise])"}),"."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Best-effort batch:"})," use ",e.jsx("code",{children:"allSettled"})," to collect successes + errors."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:"all"})," rejects fast (others may still be running); ",e.jsx("code",{children:"any"})," needs a polyfill in very old environments; always handle rejections to avoid ",e.jsx("code",{children:"unhandledrejection"}),"."]})]})},{id:"js-async-await",question:"What is async/await and how does it relate to Promises?",text:"async functions return Promises; await pauses within them until a Promise settles. Use try/catch/finally; prefer Promise.all for parallel work; avoid forEach with async.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"async"})," marks a function that ",e.jsx("em",{children:"always returns a Promise"}),". Inside it, ",e.jsx("code",{children:"await"})," pauses the function until the awaited Promise ",e.jsx("em",{children:"fulfills or rejects"}),", resuming with the value or throwing the reason."]}),e.jsx(s,{children:`async function getText(url) {
  const res = await fetch(url);           // await a Promise
  if (!res.ok) throw new Error(res.status); // turn HTTP errors into rejections
  return res.text();                      // returned value -> resolved Promise
}

getText("/a").then(console.log).catch(console.error);`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Error handling:"})," Use ",e.jsx("code",{children:"try/catch/finally"}),". A thrown error rejects the returned Promise."]}),e.jsx(s,{children:`async function load() {
  try {
    const data = await getText("/data");
    return JSON.parse(data);
  } catch (e) {
    // handle/log/convert
    return { error: String(e) };
  } finally {
    console.log("cleanup");
  }
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Sequential vs parallel:"})," Awaiting one-by-one is sequential; start tasks first and ",e.jsx("code",{children:"await Promise.all"})," for parallelism."]}),e.jsx(s,{children:`// ❌ Sequential (slow)
const a = await getText("/a");
const b = await getText("/b");

// ✅ Parallel (start both, then await)
const [a2, b2] = await Promise.all([getText("/a"), getText("/b")]);`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Loop patterns:"})," ",e.jsx("code",{children:"for...of"})," works with ",e.jsx("code",{children:"await"}),". Avoid ",e.jsx("code",{children:"forEach"})," (it ignores async)."]}),e.jsx(s,{children:`// ✅ sequential per item
for (const url of urls) {
  const t = await getText(url);
  console.log(t);
}

// ✅ parallel per item
const texts = await Promise.all(urls.map(getText));

// ❌ forEach doesn't await
urls.forEach(async u => { await getText(u) }); // fires and forgets`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Top-level ",e.jsx("code",{children:"await"}),":"]})," In ES modules you can use ",e.jsx("em",{children:"top-level await"})," (TLA). It pauses module evaluation until resolved."]}),e.jsx(s,{children:`// module.mjs
const config = await (await fetch("/config.json")).json();`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cancellation:"})," Promises aren't cancelable by default; use ",e.jsx("code",{children:"AbortController"})," with APIs that support it (e.g., ",e.jsx("code",{children:"fetch"}),")."]}),e.jsx(s,{children:`const c = new AbortController();
const p = fetch("/slow", { signal: c.signal });
// later
c.abort(); // rejects fetch with AbortError`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," forgetting ",e.jsx("code",{children:"await"})," returns a pending Promise; mixing ",e.jsx("code",{children:"??"}),"/",e.jsx("code",{children:"||"})," with awaited values can hide errors; don't block the event loop with heavy sync work-offload to Workers."]})]})},{id:"js-strict-mode",question:"What is strict mode ('use strict')?",text:"Strict mode opts into safer semantics: no implicit globals, this is undefined in plain calls, duplicate params forbidden, some silent errors become throw, 'with' disallowed.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"Strict mode"})," is an opt-in subset of JS with tighter rules that catch mistakes. Enable it with ",e.jsx("code",{children:'"use strict"'})," at the top of a file/function. ES modules are ",e.jsx("em",{children:"strict by default"}),"."]}),e.jsx(s,{children:`"use strict";        // file-level strict
function f(){ "use strict"; } // or function-level`}),e.jsx("p",{children:e.jsx("strong",{children:"Key effects:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"No implicit globals:"})," assigning to an undeclared name throws."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"this in plain calls:"})," ",e.jsx("code",{children:"this === undefined"})," (not ",e.jsx("code",{children:"globalThis"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No duplicate parameter names"}),"; ",e.jsx("strong",{children:"octal literals"})," like ",e.jsx("code",{children:"012"})," banned (use ",e.jsx("code",{children:"0o12"}),")."]}),e.jsxs("li",{children:["Some silent failures become ",e.jsx("strong",{children:"errors"})," (e.g., writing to read-only props)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"with"})," statement disallowed; ",e.jsx("code",{children:"eval"}),"/",e.jsx("code",{children:"arguments"})," are more restricted."]})]}),e.jsx(s,{children:`"use strict";

// 1) No implicit globals
function g(){
  x = 10; // ReferenceError (x not declared)
}

// 2) this on plain call
function who(){ return this; }
who(); // undefined

// 3) Duplicate params -> SyntaxError
// function bad(a, a) {} // ❌

// 4) Octal literal old style -> SyntaxError
// const n = 012; // ❌
const ok = 0o12;  // 10 ✅

// 5) Writing to read-only -> TypeError (instead of silent no-op)
const o = {};
Object.defineProperty(o, "id", { value:1, writable:false });
try { o.id = 2; } catch(e){ /* TypeError */ }

// 6) with is banned
// with (o) { /* ❌ */ }`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Notes:"})," In strict (and modules), ",e.jsx("code",{children:"arguments"})," is not linked to parameter variables; ",e.jsx("code",{children:"callee"}),"/",e.jsx("code",{children:"caller"})," on functions are restricted."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why use it:"})," catches bugs early, prevents accidental globals, enables better optimizations. Since ES modules are strict by default, most modern code already benefits."]})]})},{id:"js-number-type",question:"What is the Number type in JavaScript?",text:"Number is IEEE-754 double-precision floating point. Safe integer range is ±(2^53−1). Special values: NaN, Infinity, -Infinity, and -0. Use Number.isNaN/Number.isFinite.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," JavaScript ",e.jsx("code",{children:"Number"})," is a 64-bit IEEE-754 floating-point type (double). Integers are represented exactly only up to",e.jsx("strong",{children:" ±(2^53 − 1)"}),"."]}),e.jsx(s,{children:`Number.MAX_SAFE_INTEGER; // 9007199254740991  (2^53 - 1)
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.EPSILON; // ~2.220446049250313e-16 (smallest diff between 1 and next)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Special values:"})," ",e.jsx("code",{children:"NaN"}),", ",e.jsx("code",{children:"Infinity"}),", ",e.jsx("code",{children:"-Infinity"}),", and signed zero ",e.jsx("code",{children:"-0"}),"."]}),e.jsx(s,{children:`0 === -0;             // true
Object.is(0, -0);      // false (distinguishes sign of zero)
Number.isNaN(NaN);     // true
Number.isFinite(42);   // true
isNaN("foo");          // true (coerces!) - avoid; prefer Number.isNaN`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Floating point pitfalls:"})," fractions like 0.1 are approximations."]}),e.jsx(s,{children:`0.1 + 0.2 === 0.3;          // false
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON; // true (tolerant compare)`}),e.jsx("p",{children:e.jsx("strong",{children:"Parsing & conversion:"})}),e.jsx(s,{children:`Number("42");        // 42
parseInt("42px", 10); // 42   (stops at non-digit)
parseFloat("3.14ms"); // 3.14
Number("  ");         // 0
Number("");           // 0
Number("0x10");       // 16
Number("1_000");      // NaN (underscores only in literals, not strings)

// Safer checks
Number.isInteger(3.0);        // true
Number.isSafeInteger(2**53);  // false`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Common Math helpers:"})," ",e.jsx("code",{children:"Math.floor"}),", ",e.jsx("code",{children:"ceil"}),", ",e.jsx("code",{children:"round"}),", ",e.jsx("code",{children:"trunc"}),", ",e.jsx("code",{children:"abs"}),", ",e.jsx("code",{children:"max/min"}),", ",e.jsx("code",{children:"pow"}),", ",e.jsx("code",{children:"random"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"When you need big integers:"})," use ",e.jsx("code",{children:"BigInt"})," (separate topic) for integers beyond the safe range or exact integer math."]})]})},{id:"js-bigint-type",question:"What is BigInt in JavaScript?",text:"BigInt is an arbitrary-size integer primitive. Write with an n suffix (123n) or BigInt('123'). You can't mix BigInt and Number in arithmetic; division truncates toward zero.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"BigInt"})," is a primitive for integers of arbitrary size. Use it when you need integers beyond ",e.jsx("code",{children:"Number.MAX_SAFE_INTEGER"})," or exact integer math."]}),e.jsx(s,{children:`// Creating BigInts
const a = 123n;                 // literal (n suffix)
const b = BigInt("9007199254740993"); // from string
const c = BigInt(42);           // from number (safe only if integer within range)

// Basic arithmetic (integers only)
1n + 2n;        // 3n
5n * 10n;       // 50n
5n / 2n;        // 2n  (truncates toward 0)
-5n / 2n;       // -2n`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Mixing with Number:"})," Not allowed in operators (throws). Convert explicitly."]}),e.jsx(s,{children:`1n + 2;             // TypeError (can't mix)
Number(1n) + 2;      // 3
BigInt(2) * 3n;      // 6n`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Comparisons & truthiness:"})," Relational compare works across types; strict equality does not."]}),e.jsx(s,{children:`1n < 2;           // true
1n === 1;          // false (different types)
1n == 1;           // true  (loose equality, avoid in general)`}),e.jsx("p",{children:e.jsx("strong",{children:"Utilities & limits:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["No ",e.jsx("code",{children:"Math.*"})," support; use your own integer helpers."]}),e.jsxs("li",{children:["Bitwise ops (",e.jsx("code",{children:"&"}),", ",e.jsx("code",{children:"|"}),", ",e.jsx("code",{children:"^"}),", ",e.jsx("code",{children:"~"}),", ",e.jsx("code",{children:"<<"}),", ",e.jsx("code",{children:">>"}),") work on BigInt."]}),e.jsxs("li",{children:["Convert/base formatting with ",e.jsx("code",{children:"toString(radix)"}),"."]}),e.jsxs("li",{children:["Clamp to N bits with ",e.jsx("code",{children:"BigInt.asUintN"})," / ",e.jsx("code",{children:"BigInt.asIntN"}),"."]}),e.jsxs("li",{children:["Typed arrays: ",e.jsx("code",{children:"BigInt64Array"}),", ",e.jsx("code",{children:"BigUint64Array"}),"."]})]}),e.jsx(s,{children:`(255n).toString(16);          // "ff"
BigInt.asUintN(8, 300n);       // 44n  (300 mod 2^8)
BigInt.asIntN(8, 0xffn);       // -1n`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Interoperability:"})," JSON doesn't support BigInt natively."]}),e.jsx(s,{children:`JSON.stringify({ n: 1n }); // TypeError
// Workaround: stringify as string
const payload = { n: 1n.toString() };`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," No decimals (only integers); division truncates; avoid mixing with Number without explicit conversion; performance differs by engine-measure for large-int workloads."]})]})},{id:"js-string-type",question:"What is the String type in JavaScript?",text:"String is an immutable primitive sequence of UTF-16 code units. length counts code units (not characters). Use codePointAt/fromCodePoint for full Unicode; strings are compared lexicographically.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"String"})," is an ",e.jsx("em",{children:"immutable"})," primitive of UTF-16 ",e.jsx("em",{children:"code units"}),". Indexing uses zero-based positions into code units. Reassign to change; methods return new strings."]}),e.jsx(s,{children:`const s = "hello";
s[0];           // "h"
s.length;       // 5
// s[0] = "H";  // ❌ no effect (immutable)
const t = s.toUpperCase(); // "HELLO" (original unchanged)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Unicode & length:"})," Some characters use ",e.jsx("em",{children:"two"})," code units (surrogate pair), so ",e.jsx("code",{children:"length"})," may not equal the number of visible characters."]}),e.jsx(s,{children:`const g = "👋";           // U+1F44B
g.length;                 // 2 (two code units)
g.codePointAt(0).toString(16); // "1f44b"
String.fromCodePoint(0x1f44b); // "👋"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Safe iteration:"})," ",e.jsx("code",{children:"for...of"})," iterates by Unicode code points (handles surrogate pairs correctly)."]}),e.jsx(s,{children:'for (const ch of "A👋B") console.log(ch); // "A", "👋", "B"'}),e.jsx("p",{children:e.jsx("strong",{children:"Common operations:"})}),e.jsx(s,{children:`"  hi  ".trim();           // "hi"
"hello".includes("ell"); // true
"hello".startsWith("he"); // true
"hello".endsWith("lo");   // true
"ab,cd".split(",");       // ["ab","cd"]
"ab".repeat(3);           // "ababab"
"pad".padStart(5, "0");   // "00pad"
"Hello".replace("l", "L");         // "HeLlo" (first only)
"Hello".replaceAll("l", "L");      // "HeLLo"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Case & locale:"})," Basic ",e.jsx("code",{children:"toLowerCase/toUpperCase"})," don't handle all locales. Use ",e.jsx("code",{children:"Intl.Collator"})," for locale-aware comparisons/sorts."]}),e.jsx(s,{children:'new Intl.Collator("en").compare("a", "B"); // -1 (a < B by locale rules)'}),e.jsxs("p",{children:[e.jsx("strong",{children:"Normalization:"})," Visually identical strings can differ by combining marks. Normalize before comparison."]}),e.jsx(s,{children:'"é".normalize("NFC") === "é".normalize("NFC"); // true'}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:"length"})," counts code units; slicing in the middle of a surrogate pair breaks the character; prefer ",e.jsx("code",{children:"[...str]"})," or ",e.jsx("code",{children:"Array.from(str)"})," to split by code points when needed."]})]})},{id:"js-template-literals",question:"What are template literals and tagged templates?",text:"Template literals use backticks for multi-line strings and ${expr} interpolation. Tagged templates preprocess parts; String.raw gives backslash escapes verbatim.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"Template literals"})," use backticks (",e.jsx("code",{children:"`...`"}),") and support multi-line text plus expression interpolation with ",e.jsxs("code",{children:["$","{expr}"]}),". A",e.jsx("em",{children:"tagged template"})," calls a function with the literal parts and evaluated expressions to customize output."]}),e.jsx(s,{children:`// Basic interpolation & multi-line
const name = "Ada";
const n = 3;
const s = \`Hello \${name}!\\nYou have \${n} messages.\`;
/*
Hello Ada!
You have 3 messages.
*/

// Expressions inside \${...}
\`2 + 2 = \${2 + 2}\`; // "2 + 2 = 4"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tagged templates:"})," A tag function receives an array of string chunks and the interpolated values."]}),e.jsx(s,{children:`function tag(strings, ...values) {
  // strings: ["Hello ", "! Price: $", ""]
  // values:  ["Ada", 9.99]
  return strings[0] + values[0].toUpperCase() + strings[1] + values[1].toFixed(2) + strings[2];
}
const out = tag\`Hello \${"Ada"}! Price: $\${9.99}\`; 
// "Hello ADA! Price: $9.99"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"String.raw:"})," Returns backslashes ",e.jsx("em",{children:"unprocessed"})," (useful for regexes/paths)."]}),e.jsx(s,{children:'String.raw`C:\\\\Users\\\\me\\n`; // "C:\\\\Users\\\\me\\n" (contains backslash+n, not newline)'}),e.jsx("p",{children:e.jsx("strong",{children:"Common patterns:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"HTML templating (safe):"})," build strings, but escape untrusted data to prevent XSS."]}),e.jsxs("li",{children:[e.jsx("em",{children:"SQL templating:"})," use a tag that parameterizes values (avoid raw concatenation to prevent injection)."]}),e.jsxs("li",{children:[e.jsx("em",{children:"i18n formatting:"})," tags can reorder/format placeholders."]})]}),e.jsx(s,{children:`// Example: naive escape (demo only)
const esc = (s) => String(s).replace(/[&<>"']/g, m => ({
  "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
}[m]));
const html = (strings, ...vals) =>
  strings.map((chunk, i) => chunk + (i < vals.length ? esc(vals[i]) : "")).join("");

const user = "<script>alert(1)<\/script>";
html\`<p>Hello \${user}</p>\`; // "<p>Hello &lt;script&gt;alert(1)&lt;/script&gt;</p>"`}),e.jsx("p",{children:e.jsx("strong",{children:"Gotchas:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Indentation inside backticks is preserved (mind leading spaces in multi-line literals)."}),e.jsxs("li",{children:["Tagged templates do ",e.jsx("em",{children:"not"})," use parentheses: ",e.jsx("code",{children:"tag\\`...\\`"})," (not ",e.jsx("code",{children:"tag(\\`...\\`)"}),")."]}),e.jsxs("li",{children:["Escapes like ",e.jsx("code",{children:"\\n"})," are processed normally-use ",e.jsx("code",{children:"String.raw"})," for literal backslashes."]})]})]})},{id:"js-what-is-regexp",question:"What is a regular expression (RegExp) in JavaScript?",text:"RegExp is a pattern used to match/scan/replace text. Use /pattern/flags or new RegExp(). Common methods: test, exec, String.match/matchAll/replace/replaceAll/search/split.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"RegExp"})," is a pattern for matching text. Create with literal syntax ",e.jsx("code",{children:"/pattern/flags"})," or ",e.jsx("code",{children:'new RegExp("pattern", "flags")'}),"."]}),e.jsx(s,{children:`/ab+c/.test("xxabbbcxx");  // true
const re = /ab+(c)?/i;          // i = ignore case
re.exec("ABBC");                 // ["ABBc", "c", index:0, input:"ABBC", ...]`}),e.jsx("p",{children:e.jsx("strong",{children:"Using with strings:"})}),e.jsx(s,{children:`"a1 b22 c333".match(/\\d+/g);     // ["1","22","333"]
"Hello".search(/l+/);             // 2
"12-34-56".split(/-/);            // ["12","34","56"]
"color".replace(/or/, "our");     // "colour"
"lollol".replaceAll(/lo/g, "LO"); // "LOLLOL"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Capturing groups:"})," unnamed ",e.jsx("code",{children:"(...)"}),", named ",e.jsx("code",{children:"(?<name>...)"}),"; backrefs via ",e.jsx("code",{children:"\\\\1"})," or ",e.jsx("code",{children:"\\\\k<name>"}),"."]}),e.jsx(s,{children:`const m = /(?<word>\\w+)\\s+\\1/.exec("hey hey");
m.groups.word; // "hey"

"2025-09-14".replace(/(?<y>\\d{4})-(?<m>\\d{2})-(?<d>\\d{2})/,
                     "$<d>/$<m>/$<y>"); // "14/09/2025"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Lookarounds:"})," ",e.jsx("code",{children:"(?=...)"})," positive lookahead, ",e.jsx("code",{children:"(?!...)"})," negative; ",e.jsx("code",{children:"(?<=...)"}),"/",e.jsx("code",{children:"(?<!...)"})," lookbehind."]}),e.jsx(s,{children:`"abc123".match(/\\d+(?=\\b)/);     // ["123"]
"price: $9".match(/(?<=\\$)\\d+/); // ["9"]`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Flags (quick tour):"})," ",e.jsx("code",{children:"g"})," global, ",e.jsx("code",{children:"i"})," ignoreCase, ",e.jsx("code",{children:"m"})," multiline (^/$ across lines),",e.jsx("code",{children:"s"})," dotAll (",e.jsx("code",{children:"."})," matches newline), ",e.jsx("code",{children:"u"})," Unicode, ",e.jsx("code",{children:"y"})," sticky (match at ",e.jsx("code",{children:"lastIndex"}),"), ",e.jsx("code",{children:"d"})," indices."]}),e.jsx(s,{children:`// Global vs sticky & lastIndex
const r1 = /\\w+/g;
r1.lastIndex = 3;
r1.exec("abc def"); // matches from 3 onwards ("def")
const r2 = /\\w+/y;
r2.lastIndex = 3;
r2.exec("abc def"); // null unless pattern starts exactly at index 3`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Indices flag (d):"})," get start/end indices of captures."]}),e.jsx(s,{children:`const r = /(\\w+)-(\\w+)/d;
const m2 = r.exec("foo-bar");
m2.indices; // e.g., [[0,7],[0,3],[4,7]]`}),e.jsx("p",{children:e.jsx("strong",{children:"Gotchas:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"/g"})," and ",e.jsx("code",{children:"/y"})," are ",e.jsx("em",{children:"stateful"})," (they mutate ",e.jsx("code",{children:"lastIndex"}),"); don't reuse across unrelated inputs."]}),e.jsxs("li",{children:[e.jsx("code",{children:"String.match(re)"})," behaves differently with and without ",e.jsx("code",{children:"g"}),"; for all matches + groups, prefer ",e.jsx("code",{children:"matchAll"}),"."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"u"})," for correct Unicode handling (e.g., ",e.jsx("code",{children:"."})," vs surrogate pairs)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"m"}),": ",e.jsx("code",{children:"^"}),"/",e.jsx("code",{children:"$"})," align to line starts/ends; ",e.jsx("code",{children:"s"}),": ",e.jsx("code",{children:"."})," matches ",e.jsx("code",{children:"\\\\n"}),"."]})]}),e.jsx(s,{children:`// Match all with groups
const iter = "a1 b22".matchAll(/(\\w)(\\d+)/g);
[...iter].map(m => m.slice(1)); // [["a","1"], ["b","22"]]`})]})},{id:"js-what-is-array",question:"What is an Array in JavaScript?",text:"Array is an ordered, zero-indexed, growable object specialized for indexed data. length is 1 + highest index; supports holes; common methods include push/pop, map/filter/reduce, sort with comparator.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," An ",e.jsx("em",{children:"Array"})," is an ordered, zero-indexed, dynamically sized object optimized for indexed elements. The ",e.jsx("code",{children:"length"})," is one more than the highest numeric index (not the count of defined elements)."]}),e.jsx(s,{children:`// Create
const a = [1, 2, 3];
const b = new Array(3);   // [ <3 empty items> ] (a HOLEY array)
const c = Array.of(1, 2); // [1, 2]

// Length & holes
const arr = [];
arr[3] = "x";
arr.length;      // 4
arr;             // [ <3 empty items>, "x" ]`}),e.jsx("p",{children:e.jsx("strong",{children:"Adding/removing:"})}),e.jsx(s,{children:`const xs = [1,2];
xs.push(3);      // [1,2,3]      (add at end)
xs.pop();        // [1,2]        (remove end)
xs.unshift(0);   // [0,1,2]      (add at start)
xs.shift();      // [1,2]        (remove start)
xs.splice(1, 0, 99); // [1,99,2] (insert/delete at index)`}),e.jsx("p",{children:e.jsx("strong",{children:"Iteration & transform:"})}),e.jsx(s,{children:`[1,2,3].forEach(x => console.log(x));
[1,2,3].map(x => x * 2);           // [2,4,6]
[1,2,3].filter(x => x % 2);        // [1,3]
[1,2,3].reduce((a,b) => a + b, 0); // 6
[1,2,3].some(x => x > 2);          // true
[1,2,3].every(x => x > 0);         // true`}),e.jsx("p",{children:e.jsx("strong",{children:"Search & copy:"})}),e.jsx(s,{children:`["a","b","c"].includes("b"); // true
["a","b","c"].indexOf("b");    // 1
["x","y","z"].slice(1);        // ["y","z"] (non-mutating)
["x","y","z"].concat(["w"]);   // ["x","y","z","w"]`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Sort:"})," Default is ",e.jsx("em",{children:"lexicographic"})," on strings; use a comparator for numbers."]}),e.jsx(s,{children:`[10,2,5].sort();              // [10,2,5] -> ["10","2","5"] => ["10","2","5"] => [10,2,5]
[10,2,5].sort((a,b) => a - b); // [2,5,10]`}),e.jsx("p",{children:e.jsx("strong",{children:"Array-like ↔ Array:"})}),e.jsx(s,{children:`function f(){
  // arguments is array-like (has length, numeric keys) but not an Array
  return Array.from(arguments);     // make a real array
}
const nodes = document.querySelectorAll("div"); // NodeList (iterable)
const arrNodes = [...nodes]; // via spread (uses the iterator)`}),e.jsx("p",{children:e.jsx("strong",{children:"Gotchas:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Holes vs ",e.jsx("code",{children:"undefined"}),":"]})," ",e.jsx("code",{children:"delete a[i]"})," makes a hole; prefer ",e.jsx("code",{children:"splice"})," to remove items."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"length truncates:"})," setting ",e.jsx("code",{children:"arr.length = 0"})," clears the array."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance:"})," frequent ",e.jsx("code",{children:"shift/unshift"})," are costlier than ",e.jsx("code",{children:"push/pop"})," (reindexing)."]}),e.jsxs("li",{children:["Plain objects aren't arrays; use ",e.jsx("code",{children:"Array.isArray(v)"})," to check."]})]}),e.jsx(s,{children:`const a2 = [1,2,3];
delete a2[1];     // [1, <1 empty item>, 3]
a2.length;        // 3
a2.splice(1,1);   // removes properly -> [1,3]

Array.isArray([]);        // true
Array.isArray({ length:1 }); // false`})]})},{id:"js-what-are-map-and-set",question:"What are Map and Set in JavaScript?",text:"Set stores unique values (insertion-ordered). Map stores key-value pairs where keys can be any value (objects included). Use fromEntries/entries to convert.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Set:"})," a collection of ",e.jsx("em",{children:"unique"})," values (no duplicates), preserving insertion order. Common ops: ",e.jsx("code",{children:"add"}),", ",e.jsx("code",{children:"has"}),", ",e.jsx("code",{children:"delete"}),", ",e.jsx("code",{children:"size"}),". Iterates values."]}),e.jsx(s,{children:`const s = new Set([1, 2, 2, 3]);
s.size;           // 3
s.has(2);         // true
s.add(4).delete(1);
[...s];           // [2,3,4] (spread to array)

// Dedupe an array:
const deduped = [...new Set([3,3,2,1,2])]; // [3,2,1]`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Map:"})," a dictionary of ",e.jsx("em",{children:"key → value"})," pairs. Keys can be ",e.jsx("em",{children:"any"})," values, including objects and functions. Common ops: ",e.jsx("code",{children:"set"}),", ",e.jsx("code",{children:"get"}),", ",e.jsx("code",{children:"has"}),", ",e.jsx("code",{children:"delete"}),", ",e.jsx("code",{children:"size"}),". Iterates entries (",e.jsx("code",{children:"[key, value]"}),") in insertion order."]}),e.jsx(s,{children:`const m = new Map();
const k = { id: 1 };
m.set(k, "user-1").set("mode", "dark");
m.get(k);          // "user-1"
m.has("mode");     // true
for (const [key, val] of m) console.log(key, val);`}),e.jsx("p",{children:e.jsx("strong",{children:"Conversion helpers:"})}),e.jsx(s,{children:`// Object <-> Map
const obj = { a: 1, b: 2 };
const mapFromObj = new Map(Object.entries(obj));
const objFromMap = Object.fromEntries(mapFromObj);

// Array of pairs <-> Map
const pairs = [["x", 10], ["y", 20]];
const mapFromPairs = new Map(pairs);
const backToPairs = [...mapFromPairs];`}),e.jsx("p",{children:e.jsx("strong",{children:"When to use which:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Set"}),": uniqueness (dedupe lists, track seen items)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Map"}),": keys aren't limited to strings/symbols; predictable iteration order; easy size checks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Object"}),": good for simple JSON-like structures, but keys are strings/symbols only and need manual size counting."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:"Set"})," uniqueness uses ",e.jsx("code",{children:"SameValueZero"})," (",e.jsx("code",{children:"NaN"})," equals ",e.jsx("code",{children:"NaN"}),", ",e.jsx("code",{children:"0"})," equals ",e.jsx("code",{children:"-0"}),"). For ",e.jsx("code",{children:"Map"}),", object keys are by ",e.jsx("em",{children:"reference"}),"-two identical-looking objects are different keys."]}),e.jsx(s,{children:`new Set([NaN, NaN]).size; // 1
const a = { x: 1 }, b = { x: 1 };
const mm = new Map([[a, "A"]]);
mm.get(b); // undefined (different reference)`})]})},{id:"js-weakmap-weakset",question:"What are WeakMap and WeakSet?",text:"WeakMap maps from object keys to values with weak references; WeakSet stores objects weakly. Entries disappear when the object is garbage-collected; not iterable, no size, keys/members must be objects.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"WeakMap"})," holds ",e.jsx("em",{children:"weak"})," references from",e.jsx("strong",{children:"object keys"})," → values. ",e.jsx("code",{children:"WeakSet"})," holds ",e.jsx("strong",{children:"objects"})," as members with weak references. If the only remaining reference to a key/object is inside the WeakMap/WeakSet, the GC can remove that entry automatically."]}),e.jsx(s,{children:`// WeakMap: keys must be objects; values can be anything
const meta = new WeakMap();

let node = { id: 1 };
meta.set(node, { selected: true });

meta.get(node); // { selected: true }
meta.has(node); // true

// Drop the last strong ref to 'node'
node = null;
// At some later time, GC may remove the entry automatically.
// (You cannot observe the exact moment.)`}),e.jsx(s,{children:`// WeakSet: stores objects, weakly
const seen = new WeakSet();

let obj = {};
seen.add(obj);
seen.has(obj); // true
obj = null;    // entry can be GC'd later`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why use them:"})," associate metadata/caches with objects (DOM nodes, AST nodes, model instances)",e.jsx("em",{children:"without"})," creating memory leaks-entries vanish when the objects go out of scope."]}),e.jsx(s,{children:`// Cache per-object computation without leaks
const cache = new WeakMap();
function computeFor(obj) {
  if (cache.has(obj)) return cache.get(obj);
  const result = heavyCompute(obj);
  cache.set(obj, result); // no need to delete; GC handles it
  return result;
}`}),e.jsx("p",{children:e.jsx("strong",{children:"Key properties:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Not enumerable:"})," No iteration (",e.jsx("code",{children:"for...of"}),"), no ",e.jsx("code",{children:"keys()"}),", no ",e.jsx("code",{children:"size"}),", no ",e.jsx("code",{children:"clear()"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keys/members must be objects:"})," primitives are not allowed as WeakMap keys or WeakSet entries."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"APIs:"})," WeakMap → ",e.jsx("code",{children:"set"}),", ",e.jsx("code",{children:"get"}),", ",e.jsx("code",{children:"has"}),", ",e.jsx("code",{children:"delete"}),". WeakSet → ",e.jsx("code",{children:"add"}),", ",e.jsx("code",{children:"has"}),", ",e.jsx("code",{children:"delete"}),"."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," You can't iterate or observe when GC removes entries; use normal ",e.jsx("code",{children:"Map/Set"})," if you need enumeration or counts. For advanced scenarios (carefully!), JS also has ",e.jsx("code",{children:"WeakRef"})," and ",e.jsx("code",{children:"FinalizationRegistry"}),", but they should be used sparingly."]})]})},{id:"js-classes",question:"What is a class in JavaScript?",text:"Class syntax is sugar over prototypes: constructor, instance methods, fields (public/private #), getters/setters, static members, extends/super. Class declarations are hoisted into TDZ and must be called with new.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"class"})," provides a cleaner syntax over the prototype system. It supports a ",e.jsx("code",{children:"constructor"}),", instance methods, ",e.jsx("strong",{children:"public"})," and ",e.jsx("strong",{children:"private"})," fields (",e.jsx("code",{children:"#"}),"), getters/setters,",e.jsx("strong",{children:"static"})," members, and inheritance with ",e.jsx("code",{children:"extends"}),"/",e.jsx("code",{children:"super"}),"."]}),e.jsx(s,{children:`// Basic class
class Person {
  // public field
  role = "user";

  // private field (true privacy)
  #id = 0;

  constructor(name) {
    this.name = name;        // instance property
    this.#id = Math.random();
  }

  // instance method
  greet() { return \`Hi, I'm \${this.name}\`; }

  // getter/setter
  get id() { return this.#id; }
  set nickname(n) { this.name = String(n).trim(); }

  // static method (on the constructor)
  static species() { return "H. sapiens"; }

  // static field
  static counter = 0;

  // static initialization block (one-time setup)
  static {
    Person.counter = 100;
  }
}

const p = new Person("Ada");
p.greet();          // "Hi, I'm Ada"
Person.species();   // "H. sapiens"
p.id;               // private field exposed via getter`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Inheritance:"})," Use ",e.jsx("code",{children:"extends"}),". In a subclass constructor, call ",e.jsx("code",{children:"super(...)"})," before using ",e.jsx("code",{children:"this"}),"."]}),e.jsx(s,{children:`class Employee extends Person {
  // public field as class property
  company = "ACME";

  constructor(name, title) {
    super(name);           // must call super() first
    this.title = title;
  }

  // override + use super.method()
  greet() { return super.greet() + \` - \${this.title}\`; }

  // private field in subclass is separate (#)
  #salary = 0;
}
new Employee("Lin", "Engineer").greet(); // "Hi, I'm Lin - Engineer"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Class fields & arrows:"})," Fields are initialized per-instance. Arrow methods defined as fields capture lexical ",e.jsx("code",{children:"this"})," (useful for callbacks)."]}),e.jsx(s,{children:`class Button {
  label = "Save";
  onClick = () => console.log(this.label); // lexical this
}`}),e.jsx("p",{children:e.jsx("strong",{children:"Key facts:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Classes are ",e.jsx("em",{children:"sugar"})," over prototypes; methods live on ",e.jsx("code",{children:"Class.prototype"})," and are ",e.jsx("em",{children:"non-enumerable"}),"."]}),e.jsxs("li",{children:["Class bodies are ",e.jsx("em",{children:"strict mode"})," by default."]}),e.jsxs("li",{children:["Class ",e.jsx("em",{children:"declarations"})," are hoisted into the ",e.jsx("strong",{children:"TDZ"})," (can't use before their line)."]}),e.jsxs("li",{children:["You ",e.jsx("strong",{children:"must"})," call classes with ",e.jsx("code",{children:"new"}),"; calling as a function throws."]}),e.jsxs("li",{children:["Private fields (",e.jsx("code",{children:"#x"}),") are not accessible via brackets or ",e.jsx("code",{children:'this["#x"]'}),"; access only within the class."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Don't forget ",e.jsx("code",{children:"super()"})," in subclass constructors. Arrow methods as fields are per-instance (more memory) but avoid manual binding for callbacks."]})]})},{id:"js-es-modules",question:"What are ES Modules (import/export)?",text:"ESM is the standard module system with static imports/exports, live bindings, and tree-shakeable syntax. Supports named/default exports, dynamic import(), and top-level await in modules.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"ES Modules (ESM)"})," provide a native, static module system. Imports/exports are analyzed at compile time (good for tree-shaking). Imported names are ",e.jsx("em",{children:"live bindings"}),"(they reflect updates in the exporter)."]}),e.jsx(s,{children:`// math.js (exporter)
export const PI = 3.14159;
export function area(r){ return PI * r * r; }
let counter = 0;
export function inc(){ counter++; }
export { counter };             // live binding
export default function add(a,b){ return a + b; }`}),e.jsx(s,{children:`// app.js (importer)
import add, { PI, area, counter, inc } from "./math.js";
console.log(add(2,3)); // 5
inc();
console.log(counter);  // 1  (live view, not a copy)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Named vs default:"})," A file can have many ",e.jsx("code",{children:"named"})," exports, but at most one ",e.jsx("code",{children:"default"})," export. You can alias on import."]}),e.jsx(s,{children:'import theAdd, { area as circleArea } from "./math.js";'}),e.jsxs("p",{children:[e.jsx("strong",{children:"Dynamic import:"})," Load modules on demand; returns a Promise."]}),e.jsx(s,{children:`const mod = await import("./heavy.js");
mod.run();`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Top-level await (TLA):"})," In modules, you may ",e.jsx("code",{children:"await"})," at the top level; it pauses module evaluation."]}),e.jsx(s,{children:`// config.mjs
export const cfg = await (await fetch("/config.json")).json();`}),e.jsx("p",{children:e.jsx("strong",{children:"Browser vs Node notes:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Browser:"})," use ",e.jsx("code",{children:'<script type="module">'}),"; imports must use URLs (usually include file extensions)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Node:"})," use ",e.jsx("code",{children:".mjs"})," or ",e.jsxs("code",{children:["package.json",'{ type:"module" }']}),"; imports usually need ",e.jsx("em",{children:"file extensions"})," (or package ",e.jsx("code",{children:"exports"}),")."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"CommonJS interop (separate topic):"})," ",e.jsx("code",{children:"require"}),"/",e.jsx("code",{children:"module.exports"})," is different; mixing systems has edge cases."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," imports are read-only views (can't reassign); circular deps load with ",e.jsx("em",{children:"temporal dead"})," partially-initialized bindings; bare specifiers need a resolver (bundler/Node pkg resolution) or import maps in the browser."]})]})},{id:"js-commonjs-vs-esm",question:"What is CommonJS and how is it different from ES Modules?",text:"CommonJS (CJS) uses require/module.exports and loads at runtime; ES Modules (ESM) use import/export with static analysis, live bindings, and top-level await. Node supports both with interop caveats.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definitions:"})," ",e.jsx("em",{children:"CommonJS (CJS)"})," is the older Node module system using",e.jsx("code",{children:"require"})," / ",e.jsx("code",{children:"module.exports"}),". ",e.jsx("em",{children:"ES Modules (ESM)"})," are the standard JS module system using ",e.jsx("code",{children:"import"})," / ",e.jsx("code",{children:"export"})," with ",e.jsx("em",{children:"static"})," structure and ",e.jsx("em",{children:"live bindings"}),"."]}),e.jsx(s,{children:`// ----- CommonJS (cjs.cjs) -----
const fs = require("node:fs");
const add = (a,b) => a + b;
module.exports = { add };

// Re-export pattern
exports.mul = (a,b) => a * b;`}),e.jsx(s,{children:`// ----- ES Module (esm.mjs) -----
export const sub = (a,b) => a - b;
export default function div(a,b){ return a / b; }`}),e.jsx("p",{children:e.jsx("strong",{children:"Key differences:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Syntax & timing:"})," CJS ",e.jsx("em",{children:"evaluates"})," ",e.jsx("code",{children:"require()"})," at runtime (can be conditional). ESM imports are ",e.jsx("em",{children:"static"})," (hoisted and analyzed before running)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bindings:"})," ESM exports are ",e.jsx("em",{children:"live"})," (reflect updates in the exporter). CJS exports are values on an object snapshot."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Top-level await:"})," Supported in ESM; not in CJS."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Scope:"})," CJS files have a wrapper (with ",e.jsx("code",{children:"__filename"}),", ",e.jsx("code",{children:"__dirname"}),"); ESM uses ",e.jsx("code",{children:"import.meta"})," instead."]})]}),e.jsx(s,{children:`// ESM live binding example
// counter.js (ESM)
export let n = 0;
export function inc(){ n++; }

// main.mjs
import { n, inc } from "./counter.js";
console.log(n); // 0
inc();
console.log(n); // 1  (live view)`}),e.jsx("p",{children:e.jsx("strong",{children:"Node usage tips:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Pick one per package: set ",e.jsx("code",{children:'"type":"module"'})," for ESM (use ",e.jsx("code",{children:".cjs"})," for CJS files), or omit it for CJS (use ",e.jsx("code",{children:".mjs"})," for ESM files)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Importing CJS in ESM:"})," default import gets the ",e.jsx("code",{children:"module.exports"})," object."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Importing ESM in CJS:"})," cannot ",e.jsx("code",{children:"require()"})," it; use ",e.jsx("code",{children:"await import(...)"})," or Node's ",e.jsx("code",{children:"createRequire"})," the other way around."]})]}),e.jsx(s,{children:`// ESM -> import a CJS module (Node):
import pkg from "./cjs.cjs";
pkg.add(2,3); // 5  (pkg is the CJS exports object)

// CJS -> import an ESM module (Node):
(async () => {
  const mod = await import("./esm.mjs");
  mod.default(6,2); // 3
  mod.sub(6,2);     // 4
})();`}),e.jsx("p",{children:e.jsx("strong",{children:"Interoperability gotchas:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Don't mix ",e.jsx("code",{children:"module.exports = ..."})," and ",e.jsx("code",{children:"exports.foo = ..."})," in the same CJS file (reassigning ",e.jsx("code",{children:"module.exports"})," breaks ",e.jsx("code",{children:"exports"})," alias)."]}),e.jsxs("li",{children:["Named imports from a CJS module (",e.jsx("code",{children:'import { x } from "cjs"'}),") won't work unless the runtime provides synthetic named exports-prefer default import then read ",e.jsx("code",{children:"pkg.x"}),"."]}),e.jsxs("li",{children:["In ESM on Node, file extensions (or package ",e.jsx("code",{children:"exports"})," field) are usually required."]})]})]})},{id:"js-toprimitive-coercion",question:"How do objects convert to primitives? (ToPrimitive, valueOf/toString, Symbol.toPrimitive)",text:"When an object is used where a primitive is needed, JS calls ToPrimitive: try obj[Symbol.toPrimitive]? then valueOf()/toString() (order depends on hint). Dates prefer string; others prefer number.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," When an object must become a primitive (for ",e.jsx("code",{children:"+"}),", comparisons,",e.jsx("code",{children:"Number()"}),", ",e.jsx("code",{children:"String()"}),"…), the engine runs ",e.jsx("em",{children:"ToPrimitive"})," with a ",e.jsx("em",{children:"hint"}),":",e.jsx("code",{children:'"number"'}),", ",e.jsx("code",{children:'"string"'}),", or ",e.jsx("code",{children:'"default"'}),"."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Priority:"})," If ",e.jsx("code",{children:"obj[Symbol.toPrimitive]"})," exists → call it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Otherwise (ordinary objects):"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Hint ",e.jsx("code",{children:"number"})," / ",e.jsx("code",{children:"default"}),": try ",e.jsx("code",{children:"valueOf()"})," → then ",e.jsx("code",{children:"toString()"}),"."]}),e.jsxs("li",{children:["Hint ",e.jsx("code",{children:"string"})," (e.g., ",e.jsx("code",{children:"String(obj)"})," or ",e.jsx("code",{children:"Date"}),"'s default): ",e.jsx("code",{children:"toString()"})," → then ",e.jsx("code",{children:"valueOf()"}),"."]})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dates:"})," prefer ",e.jsx("code",{children:"string"})," by default (so they stringify nicely)."]})]}),e.jsx(s,{children:`const obj = {
  x: 10,
  valueOf() { return this.x; }        // numeric-first path
};
Number(obj);      // 10 (hint 'number' -> valueOf)
String(obj);      // "[object Object]" (hint 'string' -> toString)

const date = new Date("2025-09-14");
+date;            // number (ms since epoch)
String(date);     // "Sun Sep 14 2025 ..." (Dates prefer 'string')`}),e.jsxs("p",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"Symbol.toPrimitive"})," override:"]})," Provide your own conversion logic."]}),e.jsx(s,{children:`const price = {
  amount: 9.99,
  [Symbol.toPrimitive](hint) {
    if (hint === "string") return "$" + this.amount.toFixed(2);
    return this.amount; // number or default
  }
};
String(price); // "$9.99"
+price;        // 9.99
price + 1;     // 10.99 (numeric) `}),e.jsxs("p",{children:[e.jsx("strong",{children:'"+" operator:'})," If either operand becomes a string after ToPrimitive, ",e.jsx("em",{children:"concatenation"}),"; else numeric addition."]}),e.jsx(s,{children:`1 + 2;             // 3
"1" + 2;           // "12" (string concat)
({ toString(){ return "X"; } }) + 1; // "X1" (left -> string)
({ valueOf(){ return 7; } }) + 1;    // 8   (both numeric)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Custom ",e.jsx("code",{children:"valueOf/toString"})," must return a primitive, not an object. Ambiguous coercions can hide bugs-prefer explicit ",e.jsx("code",{children:"Number()"}),"/",e.jsx("code",{children:"String()"})," when clarity matters."]})]})},{id:"js-errors-and-exceptions",question:"How do errors and exception handling work in JavaScript?",text:"You can throw any value, but use Error objects. Handle with try/catch/finally. Built-in errors (TypeError, ReferenceError, etc.), custom errors via class extends Error, and Error ‘cause'. Async errors reject Promises.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Throwing & catching:"})," Use ",e.jsx("code",{children:"throw"})," to signal an error and",e.jsx("code",{children:"try / catch / finally"})," to handle/cleanup. You can throw any value, but prefer",e.jsx("code",{children:"Error"})," subclasses for stack/metadata."]}),e.jsx(s,{children:`try {
  if (!user) throw new Error("Missing user");
} catch (e) {
  console.error("Oops:", e.message);
} finally {
  console.log("always runs");
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Built-in error types:"})," ",e.jsx("code",{children:"Error"}),", ",e.jsx("code",{children:"TypeError"}),", ",e.jsx("code",{children:"ReferenceError"}),",",e.jsx("code",{children:"SyntaxError"}),", ",e.jsx("code",{children:"RangeError"}),", ",e.jsx("code",{children:"URIError"}),", ",e.jsx("code",{children:"EvalError"})," (rare). Pick the most specific."]}),e.jsx(s,{children:`function takePositive(n){
  if (typeof n !== "number") throw new TypeError("number required");
  if (n <= 0) throw new RangeError("must be > 0");
  return n;
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Custom errors:"})," Extend ",e.jsx("code",{children:"Error"}),"; set ",e.jsx("code",{children:"name"}),"; use ",e.jsx("code",{children:"cause"})," to chain."]}),e.jsx(s,{children:`class HttpError extends Error {
  constructor(status, msg, cause) {
    super(msg, { cause });          // ES2022 cause chain
    this.name = "HttpError";
    this.status = status;
  }
}

try {
  try {
    JSON.parse("{ bad json }");
  } catch (e) {
    throw new HttpError(400, "Invalid JSON", e);
  }
} catch (e) {
  console.log(e.name, e.status); // HttpError 400
  console.log(e.cause?.message); // Unexpected token ...
  console.log(e.stack);          // stack trace (engine-specific)
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Catch without a binding:"})," when you don't need the error object."]}),e.jsx(s,{children:`try {
  risky();
} catch {           // no (e) needed
  recover();
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Async & Promises:"})," In ",e.jsx("em",{children:"async functions"}),", a thrown error becomes a ",e.jsx("em",{children:"rejected Promise"}),". Use ",e.jsx("code",{children:"try/catch"})," inside the async function or ",e.jsx("code",{children:".catch()"})," on the returned promise."]}),e.jsx(s,{children:`async function fetchJson(url){
  const res = await fetch(url);
  if (!res.ok) throw new HttpError(res.status, "HTTP " + res.status);
  return res.json(); // if JSON invalid, this throws (rejects)
}

try {
  const data = await fetchJson("/api");
  console.log(data);
} catch (e) {
  console.error("Failed:", e);
}

// Or: fetchJson("/api").then(use).catch(handle);`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Unhandled rejections:"})," Missing ",e.jsx("code",{children:".catch"})," triggers ",e.jsx("code",{children:"unhandledrejection"})," (browser/Node) - always handle errors."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best practices:"})," throw ",e.jsx("code",{children:"Error"})," subclasses (not strings); preserve stack with ",e.jsx("code",{children:"cause"}),"; don't swallow errors silently; rethrow if you can't handle; validate inputs early."]})]})},{id:"js-proxy",question:"What is a Proxy in JavaScript?",text:"Proxy wraps a target object and intercepts operations via handler traps (get, set, has, deleteProperty, apply, construct, ownKeys, etc.). Useful for validation, defaults, logging, virtualization.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("code",{children:"Proxy"})," lets you ",e.jsx("em",{children:"intercept"})," and customize fundamental operations on a target object/function by providing ",e.jsx("em",{children:"traps"})," in a handler. You get a new object (",e.jsx("em",{children:"the proxy"}),") that you use instead of the original."]}),e.jsx(s,{children:`// Basic: default values & validation
const user = { name: "Ada" };

const p = new Proxy(user, {
  get(target, prop, receiver) {
    if (!(prop in target)) return "(missing)";   // default
    return Reflect.get(target, prop, receiver);  // correct forwarding
  },
  set(target, prop, value, receiver) {
    if (prop === "age" && (!Number.isInteger(value) || value < 0)) {
      throw new TypeError("age must be a non-negative integer");
    }
    return Reflect.set(target, prop, value, receiver);
  }
});

p.name;   // "Ada"
p.city;   // "(missing)"
p.age = 30;         // OK
// p.age = -1;      // TypeError`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Common traps:"})," ",e.jsx("code",{children:"get"}),", ",e.jsx("code",{children:"set"}),", ",e.jsx("code",{children:"has"})," (",e.jsx("code",{children:"in"}),"), ",e.jsx("code",{children:"deleteProperty"}),",",e.jsx("code",{children:"ownKeys"}),", ",e.jsx("code",{children:"getOwnPropertyDescriptor"}),", ",e.jsx("code",{children:"defineProperty"}),", ",e.jsx("code",{children:"apply"})," (call a function),",e.jsx("code",{children:"construct"})," (",e.jsx("code",{children:"new"}),"), ",e.jsx("code",{children:"getPrototypeOf"}),", ",e.jsx("code",{children:"setPrototypeOf"}),", ",e.jsx("code",{children:"isExtensible"}),", ",e.jsx("code",{children:"preventExtensions"}),". Use the ",e.jsx("code",{children:"Reflect.*"})," API to perform the default behavior."]}),e.jsx(s,{children:`// Function proxy: timing/logging
function slow(x){ for(let i=0;i<1e6;i++); return x * 2; }

const timed = new Proxy(slow, {
  apply(target, thisArg, args) {
    const t0 = performance.now();
    const res = Reflect.apply(target, thisArg, args);
    console.log("took", (performance.now() - t0).toFixed(1), "ms");
    return res;
  }
});

timed(21); // logs timing, returns 42`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Virtual objects:"})," You can synthesize properties on the fly."]}),e.jsx(s,{children:`const env = new Proxy({}, {
  has(_, k) { return k in process.env; },
  get(_, k){ return process.env[k] ?? "(unset)"; },
  ownKeys(){ return Object.keys(process.env); }
});
"PATH" in env;       // true
env.PATH;            // value
Object.keys(env);    // keys from process.env`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Invariants (important):"})," Traps must respect JS object rules or a ",e.jsx("em",{children:"TypeError"})," is thrown. Examples: a non-configurable property must appear in ",e.jsx("code",{children:"ownKeys"}),"; if a property is non-writable & non-configurable,",e.jsx("code",{children:"set"})," cannot report success with a different value; sealed/frozen targets constrain traps."]}),e.jsx(s,{children:`const target = Object.freeze({ x: 1 });
const bad = new Proxy(target, {
  get(){ return 2; }  // OK (reading differs)
});
const bad2 = new Proxy(target, {
  set(){ return true; } // writing 'x' MUST fail (Reflect.set will fail)
});`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best practices:"})," Always delegate with ",e.jsx("code",{children:"Reflect.*"})," after your custom logic; keep traps fast (they run on every access); prefer Proxy for cross-cutting concerns (validation, logging, i18n, access control) over normal objects."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:"proxy !== target"})," (identity differs); some libraries cache method references (be mindful of ",e.jsx("code",{children:"this"}),"); Proxies can impact performance; JSON/stringify skips functions and behaves like the underlying properties you expose."]})]})},{id:"js-reflect-api",question:"What is the Reflect API and why use it?",text:"Reflect is a built-in object with static methods that mirror low-level operations (get, set, apply, construct, defineProperty…). It provides consistent return values (usually booleans) and pairs naturally with Proxy traps.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"Reflect"})," is a namespace of static methods that perform fundamental object operations (",e.jsx("code",{children:"get"}),", ",e.jsx("code",{children:"set"}),", ",e.jsx("code",{children:"apply"}),", ",e.jsx("code",{children:"construct"}),",",e.jsx("code",{children:"defineProperty"}),", ",e.jsx("code",{children:"ownKeys"}),", etc.). It's not a constructor. Methods return ",e.jsx("em",{children:"status booleans"})," or values instead of throwing where possible, making them ideal for implementing default behavior inside ",e.jsx("code",{children:"Proxy"})," traps."]}),e.jsx(s,{children:`// 1) Reading/writing with optional receiver
const base = {
  get x(){ return this._x ?? 0; }
};
const obj = Object.assign(Object.create(base), { _x: 1 });

// Read (respects prototype & descriptor semantics)
Reflect.get(obj, "x");           // 1

// Write: returns boolean success status (respects writability, receiver)
Reflect.set(obj, "y", 10);       // true
obj.y;                           // 10`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Define / delete properties:"})," return booleans instead of throwing (useful in strict mode)."]}),e.jsx(s,{children:`const o = {};
Reflect.defineProperty(o, "id", {
  value: 1, writable: false, enumerable: true, configurable: false
}); // true

Reflect.deleteProperty(o, "id"); // false (non-configurable) - no throw, just false`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Call & construct:"})," functional forms of ",e.jsx("code",{children:"fn.apply"})," and ",e.jsx("code",{children:"new"}),"."]}),e.jsx(s,{children:`function add(a,b){ return a + b; }
Reflect.apply(add, null, [2,3]); // 5

function User(name){ this.name = name; }
const u = Reflect.construct(User, ["Ada"]); // like: new User("Ada")`}),e.jsx("p",{children:e.jsx("strong",{children:"Prototype & extensibility:"})}),e.jsx(s,{children:`const p = { kind: "base" };
const a = {};
Reflect.setPrototypeOf(a, p);        // true
Reflect.getPrototypeOf(a) === p;     // true

Reflect.preventExtensions(a);        // true
Reflect.isExtensible(a);             // false`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Own keys (strings + symbols):"})," one-stop for all own property keys (enumerable or not)."]}),e.jsx(s,{children:`const S = Symbol("s");
const k = Reflect.ownKeys({ a:1, [S]:2 }); // ["a", Symbol(s)]`}),e.jsx("p",{children:e.jsx("strong",{children:"Why use Reflect:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"With Proxies:"})," implement traps by delegating to ",e.jsx("code",{children:"Reflect.*"})," for the default behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Consistent results:"})," boolean success values instead of exceptions (",e.jsx("code",{children:"defineProperty"}),", ",e.jsx("code",{children:"deleteProperty"}),", ",e.jsx("code",{children:"set"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Receiver control:"})," ",e.jsx("code",{children:"Reflect.get/set"})," let you specify the ",e.jsx("em",{children:"receiver"})," (the ",e.jsx("code",{children:"this"})," for accessors)."]})]}),e.jsx(s,{children:`// Proxy example: validate, then forward with Reflect
const target = { _n: 0, get n(){ return this._n }, set n(v){ this._n = v } };
const proxy = new Proxy(target, {
  set(t, prop, value, receiver){
    if (prop === "n" && !Number.isInteger(value)) return false; // reject
    return Reflect.set(t, prop, value, receiver);               // forward
  },
  get(t, prop, receiver){
    return Reflect.get(t, prop, receiver); // preserve accessor 'this'
  }
});
proxy.n = 5;   // true
proxy.n = 3.14;// false`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Reflect mirrors the language invariants-operations that would violate them still fail (often with ",e.jsx("code",{children:"false"}),` rather than throwing). It doesn't "bypass" security; it's a standardized toolbox for fundamental ops.`]})]})},{id:"js-new-operator",question:"What does the `new` operator do?",text:"`new` constructs an object: links it to constructor.prototype, calls the constructor with this bound, and returns the created object (unless the constructor returns another object). Classes must be called with new; arrows aren't constructible.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"new C(...args)"})," performs construction:"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Create a fresh object whose ",e.jsx("code",{children:"[[Prototype]]"})," is ",e.jsx("code",{children:"C.prototype"}),"."]}),e.jsxs("li",{children:["Call ",e.jsx("code",{children:"C"})," with ",e.jsx("code",{children:"this"})," bound to that object (and set ",e.jsx("code",{children:"new.target"})," to ",e.jsx("code",{children:"C"}),")."]}),e.jsxs("li",{children:["If ",e.jsx("code",{children:"C"})," returns an ",e.jsx("em",{children:"object"}),", use it; otherwise return the fresh object."]})]}),e.jsx(s,{children:`function Person(name){
  this.name = name;             // step 2: initialize 'this'
}
const p = new Person("Ada");    // p.__proto__ === Person.prototype
p instanceof Person;            // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Return override (functions only):"})," A function constructor can override the instance by returning an object."]}),e.jsx(s,{children:`function Make(){
  this.kind = "default";
  return { kind: "custom" };    // returned object wins
}
new Make(); // { kind: "custom" }`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Classes:"})," Must be called with ",e.jsx("code",{children:"new"}),"; returning a different object is not allowed."]}),e.jsx(s,{children:`class A {
  constructor(){ /* this already created by runtime */ }
}
try { A(); } catch (e) { /* TypeError: Class constructor A cannot be invoked without 'new' */ }`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Not all functions are constructible:"})," Arrow functions and some built-ins lack ",e.jsx("code",{children:"[[Construct]]"})," (no ",e.jsx("code",{children:"new"})," support)."]}),e.jsx(s,{children:`const F = () => {};
try { new F(); } catch (e) { /* TypeError */ }`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Prototype link & methods:"})," Instances share methods via ",e.jsx("code",{children:"Constructor.prototype"}),"."]}),e.jsx(s,{children:`function Counter(){ this.n = 0; }
Counter.prototype.inc = function(){ return ++this.n; };
const c1 = new Counter(), c2 = new Counter();
c1.inc(); // 1
c2.inc(); // 1 (shared method, separate state)`}),e.jsxs("p",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"new.target"}),":"]})," Inside a constructor, tells which constructor was used with ",e.jsx("code",{children:"new"})," (useful for abstract bases)."]}),e.jsx(s,{children:`function Base(){
  if (new.target === Base) throw new Error("abstract");
}
function Sub(){ Base.call(this); }
try { new Base(); } catch(e) {}
new Sub(); // OK`}),e.jsx("p",{children:e.jsx("strong",{children:"Gotchas:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Forgetting ",e.jsx("code",{children:"new"})," on a constructor function can write to ",e.jsx("code",{children:"globalThis"})," in sloppy mode-use ",e.jsx("code",{children:"class"})," or enforce with ",e.jsx("code",{children:"new.target"}),"."]}),e.jsxs("li",{children:["Changing ",e.jsx("code",{children:"Constructor.prototype"})," after instances exist won't affect their ",e.jsx("code",{children:"[[Prototype]]"})," link."]}),e.jsxs("li",{children:["Arrow functions are not constructors; use normal functions/classes for ",e.jsx("code",{children:"new"}),"."]})]})]})},{id:"js-delete-operator",question:"What does the `delete` operator do?",text:"`delete obj.prop` removes a property (if configurable) from an object and returns a boolean. It doesn't affect variables or close gaps in arrays; deleting a non-existent key returns true.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"delete"})," removes a property from an object (including array elements) if that property is ",e.jsx("em",{children:"configurable"}),", and returns a",e.jsx("strong",{children:"boolean"})," indicating success."]}),e.jsx(s,{children:`const o = { a: 1 };
delete o.a;        // true  (property removed)
o.a;               // undefined

// Non-existent properties -> true (nothing to do)
delete o.b;        // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Configurable matters:"})," Non-configurable props can't be deleted."]}),e.jsx(s,{children:`const obj = {};
Object.defineProperty(obj, "id", {
  value: 1, configurable: false, writable: true, enumerable: true
});
delete obj.id;     // false (strict mode would throw)
obj.id;            // 1`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Arrays:"})," Deleting an element creates a ",e.jsx("em",{children:"hole"})," (sparse array) and",e.jsx("code",{children:"length"})," doesn't change. Use ",e.jsx("code",{children:"splice"})," to remove and reindex."]}),e.jsx(s,{children:`const arr = [10, 20, 30];
delete arr[1];     // true -> [10, <1 empty item>, 30]
arr.length;        // 3
arr.splice(1, 1);  // [10, 30] (preferred removal)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Variables & bindings:"})," ",e.jsx("code",{children:"delete"})," does ",e.jsx("em",{children:"not"})," remove",e.jsx("code",{children:"let"}),"/",e.jsx("code",{children:"const"}),"/",e.jsx("code",{children:"var"})," bindings. In modules/strict mode it's a",e.jsx("em",{children:"SyntaxError"})," to delete an unqualified identifier."]}),e.jsx(s,{children:`"use strict";
let x = 1;
// delete x; // SyntaxError (can't delete bindings)

// Non-module sloppy scripts:
// var y = 2; delete y; // false (var creates non-configurable global prop)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Objects vs prototype:"})," ",e.jsx("code",{children:"delete"})," only affects own properties of the target object; it doesn't touch properties on the prototype. Use ",e.jsx("code",{children:"hasOwn"})," to check ownership."]}),e.jsx(s,{children:`const base = { a: 1 };
const child = Object.create(base);
child.a;                // 1 (inherited)
delete child.a;         // true (no own prop to delete)
child.a;                // still 1 (inherited remains)
Object.hasOwn(child, "a"); // false`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Return value:"})," ",e.jsx("code",{children:"true"}),` means "property either removed or didn't exist."`,e.jsx("code",{children:"false"}),' means "could not delete" (e.g., non-configurable).']}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best practice:"})," Avoid using ",e.jsx("code",{children:"delete"})," to update arrays; prefer structural methods (",e.jsx("code",{children:"splice"}),", ",e.jsx("code",{children:"filter"}),"). For objects, consider setting to",e.jsx("code",{children:"undefined"})," when you want to keep the key but mark it empty, or ",e.jsx("code",{children:"delete"})," when you truly want to remove it from the shape."]})]})},{id:"js-json-stringify-parse",question:"How do JSON.stringify and JSON.parse work (replacer, space, reviver, toJSON)?",text:"JSON.stringify serializes values to JSON; JSON.parse parses JSON. Replacer filters/transforms during stringify; space pretty-prints; reviver transforms during parse; toJSON customizes serialization.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Basics:"})," ",e.jsx("code",{children:"JSON.stringify(value)"})," → JSON string; ",e.jsx("code",{children:"JSON.parse(text)"})," → JS value. JSON supports objects, arrays, numbers, strings, booleans, and ",e.jsx("code",{children:"null"}),". It ",e.jsx("em",{children:"omits"})," functions, ",e.jsx("code",{children:"undefined"})," in objects, and symbol-keyed props."]}),e.jsx(s,{children:`JSON.stringify({ a:1, b: undefined }); // "{"a":1}"
JSON.stringify([1, undefined, 3]);             // "[1,null,3]" (arrays keep null)
JSON.parse('{"a":1,"b":null}');                // { a:1, b:null }`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Replacer (filter/transform):"})," second arg can be an array of allowed keys ",e.jsx("em",{children:"or"})," a function ",e.jsx("code",{children:"(key, value) ⇒ newValue"}),"."]}),e.jsx(s,{children:`const obj = { a:1, b:2, secret:"x" };
// As array (whitelist keys)
JSON.stringify(obj, ["a","b"]); // "{"a":1,"b":2}"
// As function (transform values)
JSON.stringify(obj, (k, v) => k === "secret" ? undefined : v); // "{"a":1,"b":2}"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Pretty printing:"})," third arg ",e.jsx("code",{children:"space"})," adds indentation (number of spaces or a string)."]}),e.jsx(s,{children:`JSON.stringify({ a:1, b:{ c:2 } }, null, 2);
/*
{
  "a": 1,
  "b": {
    "c": 2
  }
}
*/`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Custom serialization via ",e.jsx("code",{children:"toJSON"}),":"]})," If an object has ",e.jsx("code",{children:"toJSON()"}),", its return value is serialized instead."]}),e.jsx(s,{children:`const user = {
  name: "Ada",
  passwordHash: "SECRET",
  toJSON(){ return { name: this.name }; } // hide sensitive fields
};
JSON.stringify(user); // "{"name":"Ada"}"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Reviver (post-process on parse):"})," transform values as they are parsed."]}),e.jsx(s,{children:`const txt = '{"d":"2025-09-14","n": "42"}';
const val = JSON.parse(txt, (key, value) => {
  if (key === "d") return new Date(value);
  if (key === "n") return Number(value);
  return value;
});
val.d instanceof Date; // true
val.n === 42;          // true`}),e.jsx("p",{children:e.jsx("strong",{children:"Limits & gotchas:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Circular refs throw - use a library or ",e.jsx("code",{children:"structuredClone"})," for cloning complex graphs."]}),e.jsx("li",{children:"Non-JSON types (Map/Set, BigInt, Date, RegExp, undefined, functions, symbols) are not preserved (dates become ISO strings if you convert them yourself)."}),e.jsx("li",{children:"Numeric precision is that of JSON/JS numbers (IEEE-754 doubles); BigInt is not supported."})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tip:"})," For deep cloning that preserves more types (Dates, Maps, Sets, typed arrays) use ",e.jsx("code",{children:"structuredClone(value)"})," (covered separately)."]})]})},{id:"js-json-stringify-parse",question:"How do JSON.stringify and JSON.parse work (replacer, space, reviver, toJSON)?",text:"JSON.stringify serializes values to JSON; JSON.parse parses JSON. Replacer filters/transforms during stringify; space pretty-prints; reviver transforms during parse; toJSON customizes serialization.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Basics:"})," ",e.jsx("code",{children:"JSON.stringify(value)"})," → JSON string; ",e.jsx("code",{children:"JSON.parse(text)"})," → JS value. JSON supports objects, arrays, numbers, strings, booleans, and ",e.jsx("code",{children:"null"}),". It ",e.jsx("em",{children:"omits"})," functions, ",e.jsx("code",{children:"undefined"})," in objects, and symbol-keyed props."]}),e.jsx(s,{children:`JSON.stringify({ a:1, b: undefined }); // "{"a":1}"
JSON.stringify([1, undefined, 3]);             // "[1,null,3]" (arrays keep null)
JSON.parse('{"a":1,"b":null}');                // { a:1, b:null }`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Replacer (filter/transform):"})," second arg can be an array of allowed keys ",e.jsx("em",{children:"or"})," a function ",e.jsx("code",{children:"(key, value) ⇒ newValue"}),"."]}),e.jsx(s,{children:`const obj = { a:1, b:2, secret:"x" };
// As array (whitelist keys)
JSON.stringify(obj, ["a","b"]); // "{"a":1,"b":2}"
// As function (transform values)
JSON.stringify(obj, (k, v) => k === "secret" ? undefined : v); // "{"a":1,"b":2}"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Pretty printing:"})," third arg ",e.jsx("code",{children:"space"})," adds indentation (number of spaces or a string)."]}),e.jsx(s,{children:`JSON.stringify({ a:1, b:{ c:2 } }, null, 2);
/*
{
  "a": 1,
  "b": {
    "c": 2
  }
}
*/`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Custom serialization via ",e.jsx("code",{children:"toJSON"}),":"]})," If an object has ",e.jsx("code",{children:"toJSON()"}),", its return value is serialized instead."]}),e.jsx(s,{children:`const user = {
  name: "Ada",
  passwordHash: "SECRET",
  toJSON(){ return { name: this.name }; } // hide sensitive fields
};
JSON.stringify(user); // "{"name":"Ada"}"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Reviver (post-process on parse):"})," transform values as they are parsed."]}),e.jsx(s,{children:`const txt = '{"d":"2025-09-14","n": "42"}';
const val = JSON.parse(txt, (key, value) => {
  if (key === "d") return new Date(value);
  if (key === "n") return Number(value);
  return value;
});
val.d instanceof Date; // true
val.n === 42;          // true`}),e.jsx("p",{children:e.jsx("strong",{children:"Limits & gotchas:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Circular refs throw - use a library or ",e.jsx("code",{children:"structuredClone"})," for cloning complex graphs."]}),e.jsx("li",{children:"Non-JSON types (Map/Set, BigInt, Date, RegExp, undefined, functions, symbols) are not preserved (dates become ISO strings if you convert them yourself)."}),e.jsx("li",{children:"Numeric precision is that of JSON/JS numbers (IEEE-754 doubles); BigInt is not supported."})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tip:"})," For deep cloning that preserves more types (Dates, Maps, Sets, typed arrays) use ",e.jsx("code",{children:"structuredClone(value)"})," (covered separately)."]})]})},{id:"js-shallow-vs-deep-copy",question:"Shallow vs Deep Copy in JavaScript - what's the difference and how do we do each?",text:"`Shallow copy` only clones the top level; nested objects/arrays remain shared by reference. `Deep copy` clones the whole graph so later edits don't leak through. We'll see common ways to do both and where each is safe.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definitions:"})," A ",e.jsx("em",{children:"shallow copy"})," duplicates only the outer container, keeping references to the same nested objects. A ",e.jsx("em",{children:"deep copy"})," duplicates the entire reachable structure, so no references are shared."]}),e.jsx("p",{children:e.jsx("strong",{children:"Shallow copy - common patterns:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Objects: ",e.jsx("code",{children:"{ ...obj }"}),", ",e.jsxs("code",{children:["Object.assign(",", obj)"]})]}),e.jsxs("li",{children:["Arrays: ",e.jsx("code",{children:"[...arr]"}),", ",e.jsx("code",{children:"arr.slice()"}),", ",e.jsx("code",{children:"Array.from(arr)"})]})]}),e.jsx(s,{children:`// Shallow copy pitfall
const state = {
  user: { name: "Ash", social: { twitter: "@a2rp" } },
  tags: ["js", "react"]
};

const copy = { ...state };      // shallow
copy.user.name = "Ashish";      // ⚠️ also changes state.user.name
copy.tags.push("styled");       // ⚠️ also mutates state.tags

console.log(state.user.name);   // "Ashish" (leaked)
console.log(state.tags);        // ["js","react","styled"] (leaked)`}),e.jsx("p",{children:e.jsx("strong",{children:"Deep copy - options:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"structuredClone(value)"})," (recommended): deep, handles Dates/Maps/Sets/TypedArrays, supports cycles."]}),e.jsxs("li",{children:["JSON clone: ",e.jsx("code",{children:"JSON.parse(JSON.stringify(value))"})," - ",e.jsx("em",{children:"lossy"})," (drops ",e.jsx("code",{children:"undefined"}),", functions, Symbols; breaks Dates/Maps/Sets; fails on cycles)."]}),e.jsxs("li",{children:["Library: e.g., ",e.jsx("code",{children:"lodash.cloneDeep"})," (broad coverage; adds a dependency)."]}),e.jsx("li",{children:"Custom recursion: precise but easy to get wrong (cycles, special types, perf)."})]}),e.jsx(s,{children:`// Deep copy with structuredClone (safe for rich types)
const original = {
  when: new Date(),
  meta: new Map([["views", 10]]),
  set: new Set([1,2,3]),
  nested: { a: { b: 1 } }
};

const deep = structuredClone(original);
deep.nested.a.b = 99;

console.log(original.nested.a.b); // 1 (no leak)
console.log(deep.when instanceof Date); // true
console.log(deep.meta.get("views"));    // 10`}),e.jsx(s,{children:`// JSON clone (quick but lossy)
const obj = { d: new Date(), x: undefined, s: Symbol("id") };
const jsonCloned = JSON.parse(JSON.stringify(obj));

console.log(jsonCloned.d);          // ISO string, not a Date instance
console.log(jsonCloned.x);          // undefined was dropped => not present
console.log(Object.getOwnPropertySymbols(jsonCloned).length); // 0`}),e.jsxs("p",{children:[e.jsx("strong",{children:"React tip (immutable updates):"})," When updating nested state, do a ",e.jsx("em",{children:"targeted"})," deep copy of just the branch you're changing, not the whole object."]}),e.jsx(s,{children:`// Targeted deep update (clone only the path you change)
const next = {
  ...state,
  user: {
    ...state.user,
    social: {
      ...state.user.social,
      twitter: "@ashishranjan"
    }
  }
};`}),e.jsx("p",{children:e.jsx("strong",{children:"When to use what:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Shallow copy is fine if you won't mutate nested structures (or they're primitives)."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"structuredClone"})," for safe deep copies of complex data or when cycles/typed data are present."]}),e.jsx("li",{children:"Avoid JSON clone for Dates/Maps/Sets, functions, Symbols, or cyclic graphs."})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Performance note:"})," Deep copies scale with the size of the object graph. Prefer narrow, targeted copies during state updates to keep things fast."]})]})},{id:"js-object-assign-vs-spread",question:"Object.assign vs object spread `{...}` - what's the difference and when should we use each?",text:"Both create shallow copies by taking own *enumerable* properties (including Symbols) from sources. Key differences: mutation (Assign mutates its target), how null/undefined are treated, prototypes, and the fact that getters run and property descriptors aren't preserved.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Quick defs:"})," ",e.jsx("code",{children:"Object.assign(target, ...sources)"})," copies props into ",e.jsx("em",{children:"target"})," and returns it (mutating). Object spread ",e.jsx("code",{children:"{ ...src }"})," builds a ",e.jsx("em",{children:"new plain object"})," and copies props in. Both are ",e.jsx("em",{children:"shallow"})," merges (nested objects/arrays remain by reference)."]}),e.jsx("p",{children:e.jsx("strong",{children:"Same-result merges (new object):"})}),e.jsx(s,{children:`const a = { x: 1 }, b = { y: 2 };
const m1 = Object.assign({}, a, b);
const m2 = { ...a, ...b };
m1; // { x: 1, y: 2 }
m2; // { x: 1, y: 2 }`}),e.jsx("p",{children:e.jsx("strong",{children:"Last source wins (resolution order):"})}),e.jsx(s,{children:`const a = { x: 1 }, b = { x: 99 };
({ ...a, ...b }).x;                 // 99
Object.assign({}, a, b).x;          // 99`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Mutation vs immutability:"})," ",e.jsx("code",{children:"assign"})," changes the target; spread creates a new object."]}),e.jsx(s,{children:`const target = { x: 0 };
const res = Object.assign(target, { x: 1 }, { y: 2 });
target === res; // true (mutated): { x: 1, y: 2 }

const copy = { ...target, z: 3 };   // new object (target unchanged)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Getters run; descriptors not preserved:"})," both read via ",e.jsx("code",{children:"[[Get]]"})," and then set a plain data property on the result."]}),e.jsx(s,{children:`const src = {
  get v() { console.log("getter!"); return 42; }
};
const a = Object.assign({}, src); // logs "getter!"
const b = { ...src };             // logs "getter!"
Object.getOwnPropertyDescriptor(a, "v").get; // undefined (now a data prop)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Own enumerable only:"})," inherited or non-enumerable properties are skipped; Symbols are copied if enumerable."]}),e.jsx("p",{children:e.jsx("strong",{children:"null/undefined sources:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("code",{children:["Object.assign(",", null, ","a: 1 ",")"]})," ⇒ ",e.jsx("code",{children:"{ a: 1 }"})," (null/undefined sources are ignored)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"{ ...null, ...{ a: 1 } }"})," ⇒ ",e.jsx("em",{children:"TypeError"})," in engines that follow the spec strictly"]})]}),e.jsx(s,{children:`// Safe defaulting with spread
const withDefaults = { theme: "dark", ...(opts || {}) }; // guard in case opts is null/undefined`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Prototype considerations:"})," spread always creates a ",e.jsx("em",{children:"plain"})," object.",e.jsx("code",{children:"assign"})," lets us copy into a specific target (e.g., from ",e.jsx("code",{children:"Object.create(proto)"}),")."]}),e.jsx(s,{children:`const proto = { kind: "thing" };
const target = Object.create(proto);
Object.assign(target, { x: 1 });    // keeps custom prototype on target`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Arrays note:"})," both treat indices as enumerable props; results are shallow."]}),e.jsx("p",{children:e.jsx("strong",{children:"When to use which:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"Immutability (React state, config copies):"})," prefer spread for clarity and a new object."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Updating an existing instance/target:"})," use ",e.jsx("code",{children:"Object.assign(target, src)"}),"."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Need to tolerate null sources:"})," ",e.jsx("code",{children:"assign"})," skips them; with spread, guard via ",e.jsxs("code",{children:["...(src || ",")"]}),"."]})]})]})},{id:"js-hasown-vs-in",question:"Object.hasOwn vs hasOwnProperty vs the `in` operator - when to use which?",text:"`Object.hasOwn(obj, key)` (ES2022) checks only *own* properties. `hasOwnProperty` does the same but lives on the prototype, so you must guard against null-prototype objects. The `in` operator checks own *or inherited* properties.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Quick defs:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Object.hasOwn(obj, key)"})," → ",e.jsx("em",{children:"true"})," if ",e.jsx("code",{children:"key"})," is an ",e.jsx("em",{children:"own"})," property of ",e.jsx("code",{children:"obj"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"obj.hasOwnProperty(key)"})," → same semantics, but can be shadowed or missing; safest as ",e.jsx("code",{children:"Object.prototype.hasOwnProperty.call(obj, key)"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"key in obj"})," → ",e.jsx("em",{children:"true"})," if the property exists either on ",e.jsx("em",{children:"obj"})," or anywhere in its prototype chain."]})]})]}),e.jsx(s,{children:`const proto = { inherited: 1 };
const obj = Object.create(proto, { own: { value: 2, enumerable: true } });

Object.hasOwn(obj, "own");                // true
Object.hasOwn(obj, "inherited");          // false
("inherited" in obj);                     // true (found via prototype)
("missing" in obj);                       // false`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Why ",e.jsx("code",{children:"Object.hasOwn"})," is preferred:"]})," It's concise and safe even when the object has a null prototype or a shadowed method."]}),e.jsx(s,{children:`const a = Object.create(null);     // no Object.prototype
a.x = 1;

// ✅ Works
Object.hasOwn(a, "x");                    // true

// ⚠️ Fails (method not present)
typeof a.hasOwnProperty;                  // "undefined"

// ✅ Safe legacy pattern
Object.prototype.hasOwnProperty.call(a, "x"); // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Shadowing pitfall:"})," If an object defines its own ",e.jsx("code",{children:"hasOwnProperty"}),", direct calls are unsafe."]}),e.jsx(s,{children:`const tricky = { hasOwnProperty: () => false, x: 1 };

tricky.hasOwnProperty("x");               // false (shadowed!)
Object.hasOwn(tricky, "x");               // true (correct)
Object.prototype.hasOwnProperty.call(tricky, "x"); // true (correct)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Symbols and strings:"})," All three work with either string or Symbol keys. For ",e.jsx("code",{children:"in"}),", the RHS can be string or Symbol."]}),e.jsx(s,{children:`const S = Symbol("id");
const obj2 = { [S]: 123 };

Object.hasOwn(obj2, S);                   // true
S in obj2;                                // true`}),e.jsx("p",{children:e.jsx("strong",{children:"When to use what:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"Checking own props only:"})," Use ",e.jsx("code",{children:"Object.hasOwn(obj, key)"}),"."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Legacy environments:"})," Use ",e.jsx("code",{children:"Object.prototype.hasOwnProperty.call(obj, key)"}),"."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Need to consider prototypes (e.g., feature detection on window):"})," Use ",e.jsx("code",{children:"key in obj"}),"."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Notes:"})," All throw a ",e.jsx("code",{children:"TypeError"})," if ",e.jsx("code",{children:"obj"})," is ",e.jsx("code",{children:"null"})," or ",e.jsx("code",{children:"undefined"})," (they must be object-coercible). If you aren't sure, guard first."]}),e.jsx(s,{children:`const safeHasOwn = (o, k) => o != null && Object.hasOwn(o, k);
safeHasOwn(null, "x"); // false, no throw`})]})},{id:"js-property-descriptors",question:"Property descriptors & Object.defineProperty - what are writable / enumerable / configurable / get / set?",text:"Every object property has a descriptor that controls how it behaves. Data properties use {value, writable} and accessor properties use {get, set}. All have {enumerable, configurable}. Understanding these flags lets us make read-only, hidden, or computed properties-and avoid surprises.",answer:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx("strong",{children:"Reading a descriptor:"})}),e.jsx(s,{children:`const obj = { x: 1 };
Object.getOwnPropertyDescriptor(obj, "x");
// { value: 1, writable: true, enumerable: true, configurable: true }`}),e.jsx("p",{children:e.jsx("strong",{children:"Defining data vs accessor properties:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"Data"}),": ",e.jsx("code",{children:"{ value, writable, enumerable, configurable }"})]}),e.jsxs("li",{children:[e.jsx("em",{children:"Accessor"}),": ",e.jsx("code",{children:"{ get, set, enumerable, configurable }"})," (no ",e.jsx("code",{children:"value"}),"/",e.jsx("code",{children:"writable"}),")"]})]}),e.jsx(s,{children:`const user = {};
// Data property (read-only, non-enumerable)
Object.defineProperty(user, "id", {
  value: 101,
  writable: false,        // can't reassign value (throws in strict mode)
  enumerable: false,      // hidden from Object.keys / JSON.stringify / for...in
  configurable: true
});

// Accessor property (computed)
let _name = "Ash";
Object.defineProperty(user, "name", {
  get() { return _name.toUpperCase(); },
  set(v) { _name = String(v).trim(); },
  enumerable: true,
  configurable: true
});`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Enumerable affects listing:"})," only ",e.jsx("em",{children:"enumerable own string keys"})," appear in ",e.jsx("code",{children:"Object.keys"}),", ",e.jsx("code",{children:"for...in"})," (plus prototypes), and ",e.jsx("code",{children:"JSON.stringify"}),"."]}),e.jsx(s,{children:`Object.keys(user);          // ["name"] - "id" is hidden
JSON.stringify(user);         // {"name":"ASH"}
for (const k in user) console.log(k); // "name" (id skipped); +proto keys if any`}),e.jsx("p",{children:e.jsx("strong",{children:"Configurable = can reconfigure/delete:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["If ",e.jsx("code",{children:"configurable: false"})," on a ",e.jsx("em",{children:"data"})," prop, you can only change ",e.jsx("code",{children:"writable"})," from ",e.jsx("em",{children:"true → false"})," once; you cannot flip it back or change enumerable/configurable."]}),e.jsxs("li",{children:["If ",e.jsx("code",{children:"configurable: false"})," on an ",e.jsx("em",{children:"accessor"})," prop, you can't change its ",e.jsx("code",{children:"get"}),"/",e.jsx("code",{children:"set"})," later."]}),e.jsxs("li",{children:[e.jsx("code",{children:"delete obj.key"})," fails if not configurable (throws in strict mode, silently false otherwise)."]})]}),e.jsx(s,{children:`Object.defineProperty(user, "locked", {
  value: 1, writable: true, enumerable: true, configurable: false
});
user.locked = 2;           // OK (writable true)
Object.defineProperty(user, "locked", { writable: false }); // OK (true → false)
user.locked = 3;           // ❌ now fails (strict mode throws)
delete user.locked;        // ❌ can't delete non-configurable`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Accessor gotchas:"})," Accessors run code on get/set; they're lost if you copy with spread/assign (which convert them into data values)."]}),e.jsx(s,{children:`const src = {};
Object.defineProperty(src, "v", { get(){ return 42; }, enumerable: true });

const a = { ...src };                // ❗ getter ran, "v" became a plain data prop 42
const b = Object.assign({}, src);    // same

// ✅ Preserve descriptors/accessors:
const c = Object.defineProperties({}, Object.getOwnPropertyDescriptors(src));`}),e.jsx("p",{children:e.jsx("strong",{children:"Create objects with descriptors up-front:"})}),e.jsx(s,{children:`const dict = Object.create(null, {
  a: { value: 1, enumerable: true },
  b: { get(){ return this.a + 1; }, enumerable: true }
});`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Reflect variants:"})," ",e.jsx("code",{children:"Reflect.defineProperty(obj, key, desc)"})," returns ",e.jsx("em",{children:"true/false"})," instead of throwing; ",e.jsx("code",{children:"Reflect.getOwnPropertyDescriptor"})," mirrors ",e.jsx("code",{children:"Object.*"}),"."]}),e.jsx("p",{children:e.jsx("strong",{children:"Tips:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Hide implementation details with ",e.jsx("code",{children:"enumerable: false"})," (e.g., internal IDs)."]}),e.jsxs("li",{children:["Use read-only props (",e.jsx("code",{children:"writable: false"}),") for constants and exposed config."]}),e.jsxs("li",{children:["When cloning APIs, use ",e.jsx("code",{children:"Object.getOwnPropertyDescriptors"})," + ",e.jsx("code",{children:"Object.defineProperties"})," to preserve getters/setters and flags."]})]})]})},{id:"js-prevent-seal-freeze",question:"Object.preventExtensions vs Object.seal vs Object.freeze - what's the difference?",text:"These APIs progressively restrict how an object can change. preventExtensions stops adding new props. seal also blocks deleting/reconfiguring existing props. freeze makes all own data props read-only too. All are shallow and affect only the object itself.",answer:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx("strong",{children:"At a glance:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Object.preventExtensions(obj)"})," → can't ",e.jsx("em",{children:"add"})," new own properties."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.seal(obj)"})," → preventExtensions + make all own props ",e.jsx("code",{children:"configurable:false"})," (can't delete/change descriptors)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.freeze(obj)"})," → seal + for ",e.jsx("em",{children:"data"})," props set ",e.jsx("code",{children:"writable:false"})," (read-only values). For ",e.jsx("em",{children:"accessor"})," props, keeps get/set but makes them non-configurable."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Strict vs sloppy mode:"})," In non-strict code, disallowed writes silently fail; in strict mode they throw."]}),e.jsx(s,{children:`"use strict";

const o = { x: 1, y: 2 };

// 1) preventExtensions
Object.preventExtensions(o);
o.z = 3;                 // ❌ TypeError in strict; silently ignored otherwise
Object.isExtensible(o);  // false

// 2) seal
Object.seal(o);
// delete o.x;           // ❌ can't delete (configurable:false)
// Object.defineProperty(o, "x", { enumerable:false }); // ❌ can't reconfigure

// 3) freeze
Object.freeze(o);
o.x = 42;                // ❌ now read-only (TypeError in strict)
Object.isSealed(o);      // true
Object.isFrozen(o);      // true`}),e.jsx("p",{children:e.jsx("strong",{children:"Descriptors after sealing/freezing:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"Seal"}),": all own props become ",e.jsx("code",{children:"configurable:false"}),". Their ",e.jsx("code",{children:"writable"})," flag (for data props) is unchanged."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Freeze"}),": all own props become ",e.jsx("code",{children:"configurable:false"}),"; data props also get ",e.jsx("code",{children:"writable:false"}),". Accessor props keep their getter/setter functions but become non-configurable."]})]}),e.jsx(s,{children:`const obj = {};
Object.defineProperty(obj, "a", { value: 1, writable: true, configurable: true, enumerable: true });
Object.defineProperty(obj, "b", { get(){ return 2; }, configurable: true, enumerable: true });

Object.freeze(obj);
Object.getOwnPropertyDescriptor(obj, "a");
// { value:1, writable:false, configurable:false, enumerable:true }
Object.getOwnPropertyDescriptor(obj, "b");
// { get: [Function], set: undefined, configurable:false, enumerable:true }`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Shallow only:"})," these operations don't recurse. Nested objects remain mutable unless you freeze them too."]}),e.jsx(s,{children:`const conf = Object.freeze({
  theme: { dark: true }
});

conf.theme.dark = false; // ✅ still allowed (inner object not frozen)
Object.isFrozen(conf);        // true
Object.isFrozen(conf.theme);  // false`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Arrays:"})," Freezing an array makes indices read-only and locks ",e.jsx("code",{children:"length"})," (non-writable). You can't push/pop/splice, but nested items (objects) remain mutable."]}),e.jsx(s,{children:`const arr = Object.freeze([ { id: 1 } ]);
// arr.push(2);          // ❌ TypeError in strict
arr[0].id = 99;          // ✅ inner object still mutable`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Prototypes are unaffected:"})," You can't add props to the frozen object itself, but inherited props on its prototype can still exist or change."]}),e.jsx(s,{children:`const proto = { p: 1 };
const obj2 = Object.freeze(Object.create(proto));
"p" in obj2;          // true (via prototype)
obj2.p = 2;           // ❌ sets on obj2 forbidden; writing to proto still possible`}),e.jsx("p",{children:e.jsx("strong",{children:"Introspection & Reflect variants:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Object.isExtensible(obj)"}),", ",e.jsx("code",{children:"Object.isSealed(obj)"}),", ",e.jsx("code",{children:"Object.isFrozen(obj)"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"Reflect.preventExtensions(obj)"})," returns ",e.jsx("em",{children:"true/false"})," instead of throwing."]})]}),e.jsx(s,{children:`const x = {};
Reflect.preventExtensions(x);   // true
Object.isExtensible(x);         // false`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Irreversible (mostly):"}),` You can't "unfreeze"/"unseal". To "thaw", clone into a fresh object.`]}),e.jsx(s,{children:`const thaw = (o) => structuredClone(o); // or a descriptor-preserving clone if needed
const unfrozen = thaw(Object.freeze({ a: 1 }));`}),e.jsx("p",{children:e.jsx("strong",{children:"When to use:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"preventExtensions"}),": Lock shape (no new props) but allow updates."]}),e.jsxs("li",{children:[e.jsx("em",{children:"seal"}),": API surface fixed (no add/delete/reconfigure), values may still change."]}),e.jsxs("li",{children:[e.jsx("em",{children:"freeze"}),": Full immutability for the object's own props (useful for config/constants)."]})]})]})},{id:"js-prototype-vs-__proto__",question:"Prototype chain: [[Prototype]] vs __proto__ vs Function.prototype - what's the difference?",text:"Every object has an internal [[Prototype]] (either another object or null). Property lookup walks this chain. `__proto__` is a legacy accessor to read/write [[Prototype]]; prefer `Object.getPrototypeOf/setPrototypeOf` or `Object.create`. For constructor functions/classes, `Fn.prototype` is the object assigned as [[Prototype]] of new instances.",answer:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx("strong",{children:"Definitions:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"[[Prototype]]"}),": the internal link used during property lookup. Read via ",e.jsx("code",{children:"Object.getPrototypeOf(obj)"}),", set at creation (best) with ",e.jsx("code",{children:"Object.create(proto)"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"__proto__"}),": legacy accessor on ",e.jsx("code",{children:"Object.prototype"})," that gets/sets ",e.jsx("code",{children:"[[Prototype]]"}),". Avoid in new code."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Fn.prototype"}),": when you call ",e.jsx("code",{children:"new Fn()"})," (or use a ",e.jsx("code",{children:"class"}),"), the created object's ",e.jsx("code",{children:"[[Prototype]]"})," becomes ",e.jsx("code",{children:"Fn.prototype"}),"."]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Prototype lookup (how it works):"})}),e.jsx(s,{children:`const base = { kind: "base" };
const obj  = Object.create(base);
obj.x = 1;

obj.x;             // 1 (own)
obj.kind;          // "base" (found on prototype)
"toString" in obj; // true (via Object.prototype)
Object.getPrototypeOf(obj) === base; // true`}),e.jsx("p",{children:e.jsx("strong",{children:"Create with a prototype (preferred):"})}),e.jsx(s,{children:`// ✅ Best: set prototype at creation time
const dict = Object.create(null);    // no Object.prototype
dict.a = 1;
Object.getPrototypeOf(dict) === null; // true

// ⚠️ Avoid changing prototype later (slower):
const o = {};
Object.setPrototypeOf(o, { p: 1 }); // works but deopts engines`}),e.jsxs("p",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"__proto__"})," pitfalls:"]})," It lives on ",e.jsx("code",{children:"Object.prototype"}),", so null-prototype objects don't have it. Using it in merges can cause prototype pollution."]}),e.jsx(s,{children:`const n = Object.create(null);
n.__proto__;             // undefined (no accessor here)

// ⚠️ Prototype pollution example (do NOT do this):
const a = {};
const payload = JSON.parse('{"__proto__":{"polluted":true}}');
Object.assign(a, payload);
({}).polluted; // true in buggy merges`}),e.jsx("p",{children:e.jsx("strong",{children:"Constructor functions / classes:"})}),e.jsx(s,{children:`function Person(name){ this.name = name; }
Person.prototype.sayHi = function(){ return "Hi " + this.name; };

const p = new Person("Ash");
Object.getPrototypeOf(p) === Person.prototype; // true
p.sayHi(); // "Hi Ash"

// Classes do the same under the hood:
class Car { drive(){ return "go"; } }
const c = new Car();
Object.getPrototypeOf(c) === Car.prototype; // true
c.drive(); // "go"`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Arrow & bound functions:"})," Arrow functions and bound functions don't have a usable ",e.jsx("code",{children:"prototype"})," for ",e.jsx("code",{children:"new"}),"."]}),e.jsx(s,{children:`(() => {}).prototype;      // undefined
const f = function(){};
const g = f.bind(null);
g.prototype;              // undefined (can't be used with new)`}),e.jsxs("p",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"instanceof"})," uses the chain:"]})," ",e.jsx("code",{children:"a instanceof Ctor"})," walks ",e.jsx("code",{children:"[[Prototype]]"})," chain of ",e.jsx("code",{children:"a"})," looking for ",e.jsx("code",{children:"Ctor.prototype"}),"."]}),e.jsx(s,{children:`function A() {}
const a = new A();
a instanceof A;                        // true
A.prototype.isPrototypeOf(a);          // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Method placement tip:"})," Put shared methods on the prototype (one function shared by all instances). Instance fields/arrow methods create a new function per instance."]}),e.jsx(s,{children:`class Counter {
  // shared method (on prototype)
  inc(){ this.value = (this.value ?? 0) + 1; }

  // ❗ per-instance method (new function per instance)
  log = () => console.log(this.value);
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Summary:"})," Use ",e.jsx("code",{children:"Object.create(proto)"})," to set prototypes cleanly, avoid ",e.jsx("code",{children:"__proto__"}),", prefer prototype methods for shared behavior, and remember lookup walks the chain until a match or ",e.jsx("code",{children:"null"}),"."]})]})},{id:"js-equality-operators",question:"`==` vs `===` vs `Object.is` - which equality should I use and why?",text:"`===` (strict) compares without coercion and is the default choice. `==` (loose) coerces types; avoid except rare patterns like `value == null` to check null or undefined. `Object.is` is like `===` but treats `NaN` as equal to itself and distinguishes `+0` and `-0`.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Rules in one line:"})," Prefer ",e.jsx("code",{children:"==="}),". Use ",e.jsx("code",{children:"=="})," only when you intentionally want coercion. ",e.jsx("code",{children:"Object.is"})," is for precise edge cases (",e.jsx("code",{children:"NaN"}),", ",e.jsx("code",{children:"+0"}),"/",e.jsx("code",{children:"-0"}),")."]}),e.jsx(s,{children:`// 1) Strict equality (recommended)
1 === "1";        // false (no coercion)
true === 1;       // false
0 === 0;          // true

// 2) Loose equality (coerces types)
1 == "1";         // true  (string -> number)
true == 1;        // true
"" == 0;          // true
[] == "";         // true
[] == 0;          // true
// => Surprising; generally avoid

// Handy exception:
const v = undefined;
v == null;        // true (matches null OR undefined)

// 3) Object.is - edge differences from ===
Object.is(NaN, NaN);   // true   (=== would be false)
Object.is(+0, -0);     // false  (=== would be true)
Object.is(1, 1);       // true (same as ===)`}),e.jsx("p",{children:e.jsx("strong",{children:"Quick guidance:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"==="})," and ",e.jsx("code",{children:"!=="})," in almost all code."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"value == null"})," to “null-or-undefined” check in one shot."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"Object.is"})," when you specifically care about ",e.jsx("code",{children:"NaN"})," equality or distinguishing ",e.jsx("code",{children:"+0"}),"/",e.jsx("code",{children:"-0"})," (e.g., numeric libraries)."]})]})]})},{id:"js-for-in-vs-for-of",question:"for...in vs for...of vs Object.keys/entries - which one to use?",text:"for...in lists enumerable string keys (including inherited) - usually avoid unless you guard with hasOwn. for...of iterates values from any iterable (Arrays, Strings, Maps, Sets, generators). For plain objects, prefer Object.keys/values/entries (own, enumerable only).",answer:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx("strong",{children:"At a glance:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"for...in"})," → ",e.jsx("em",{children:"enumerable string keys"})," on the object ",e.jsx("em",{children:"and its prototype chain"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"for...of"})," → ",e.jsx("em",{children:"values from an iterable"})," (",e.jsx("code",{children:"Array"}),", ",e.jsx("code",{children:"String"}),", ",e.jsx("code",{children:"Map"}),", ",e.jsx("code",{children:"Set"}),", generators…)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.keys/values/entries"})," → ",e.jsx("em",{children:"own"})," enumerable string keys (no prototypes)."]})]}),e.jsx(s,{children:`// 1) for...of - arrays/iterables (values)
for (const v of [10, 20, 30]) console.log(v); // 10, 20, 30
for (const ch of "hi") console.log(ch);       // "h", "i"

const set = new Set([1,2,2,3]);
for (const v of set) console.log(v);          // 1, 2, 3

const map = new Map([["a",1],["b",2]]);
for (const [k,v] of map) console.log(k, v);   // a 1 / b 2`}),e.jsx(s,{children:`// 2) Object.keys/values/entries - plain objects
const obj = Object.create({ inherited: 1 }, { x: { value: 10, enumerable: true } });
Object.keys(obj);     // ["x"]
Object.values(obj);   // [10]
Object.entries(obj);  // [["x", 10]]`}),e.jsx(s,{children:`// 3) for...in - includes inherited keys (use with care)
const base = { a: 1 };
const o = Object.create(base);
o.b = 2;

for (const k in o) {
  // Guard if you only want own keys:
  if (Object.hasOwn(o, k)) {
    console.log(k);   // "b" (own) ; "a" is skipped by the guard
  }
}`}),e.jsx("p",{children:e.jsx("strong",{children:"Notes & tips:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"Arrays:"})," ",e.jsx("code",{children:"for...of"})," gives values; ",e.jsx("code",{children:"for...in"})," would give string indices (and can see added props) → prefer ",e.jsx("code",{children:"for...of"})," or array methods."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Plain objects aren't iterable:"})," ",e.jsx("code",{children:"for (const v of obj)"})," throws. Use ",e.jsx("code",{children:"Object.entries(obj)"})," + ",e.jsx("code",{children:"for...of"}),"."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Symbols/non-enumerables:"})," ",e.jsx("code",{children:"Object.keys/entries"})," ignore them. Use ",e.jsx("code",{children:"Reflect.ownKeys"})," for all own keys (strings + symbols)."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Order:"})," property order for objects: integer-like keys in ascending order, then other keys by insertion."]})]}),e.jsx(s,{children:`// Idiomatic object loop:
for (const [k, v] of Object.entries(obj)) {
  console.log(k, v);
}`})]})},{id:"js-json-parse-stringify",question:"How do JSON.parse and JSON.stringify work? (replacer, reviver, gotchas)",text:"JSON.stringify turns values into JSON text (own enumerable string-keyed props only). JSON.parse turns JSON text back into JS. Use replacer (filter/transform), space (pretty), and reviver (post-process) - but note limits: no functions/undefined/symbols, no cycles, BigInt unsupported.",answer:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx("strong",{children:"Basics:"})}),e.jsx(s,{children:`const obj = { a: 1, b: 2 };
const s = JSON.stringify(obj);      // '{"a":1,"b":2}'
const pretty = JSON.stringify(obj, null, 2);
/*
{
  "a": 1,
  "b": 2
}
*/
const back = JSON.parse(s);         // { a:1, b:2 }`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Replacer (second arg):"})," filter or transform during stringify."]}),e.jsx(s,{children:`// Pick specific keys:
JSON.stringify({ a:1, b:2, c:3 }, ["a", "c"]); // '{"a":1,"c":3}'

// Transform values:
JSON.stringify({ a:1, b:2 }, (key, value) =>
  typeof value === "number" ? value * 2 : value
); // '{"a":2,"b":4}'`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Pretty print (third arg):"})," number of spaces or a pad string (up to 10 chars)."]}),e.jsx(s,{children:`JSON.stringify({ x:1 }, null, 4);   // 4-space indent
JSON.stringify({ x:1 }, null, "\\t"); // tabs`}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Reviver in ",e.jsx("code",{children:"JSON.parse"}),":"]})," transform values after parsing (e.g., revive dates)."]}),e.jsx(s,{children:`const data = '{"when":"2025-09-14T00:00:00.000Z"}';
const parsed = JSON.parse(data, (k, v) =>
  typeof v === "string" && /^\\d{4}-\\d{2}-\\d{2}T/.test(v) ? new Date(v) : v
);
parsed.when instanceof Date; // true`}),e.jsxs("p",{children:[e.jsx("strong",{children:"toJSON hook:"})," if an object has ",e.jsx("code",{children:"toJSON()"}),", its return value is what gets stringified."]}),e.jsx(s,{children:`const user = {
  name: "Ada",
  password: "secret",
  toJSON(){ const { password, ...rest } = this; return rest; }
};
JSON.stringify(user); // '{"name":"Ada"}'`}),e.jsx("p",{children:e.jsx("strong",{children:"Gotchas / limits:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"No cycles:"})," circular objects throw (",e.jsx("code",{children:"TypeError: Converting circular structure"}),")."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Unsupported types:"})," functions, ",e.jsx("code",{children:"undefined"}),", and symbols are skipped in objects; become ",e.jsx("code",{children:"null"})," in arrays."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Special numbers:"})," ",e.jsx("code",{children:"NaN"}),", ",e.jsx("code",{children:"Infinity"}),", ",e.jsx("code",{children:"-Infinity"})," become ",e.jsx("code",{children:"null"}),"."]}),e.jsxs("li",{children:[e.jsx("em",{children:"BigInt:"})," not supported (throws); convert to string if needed."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Maps/Sets/Classes:"})," serialize manually (e.g., ",e.jsx("code",{children:"[...map]"})," or ",e.jsx("code",{children:"Object.fromEntries(map)"}),") and revive on parse."]})]}),e.jsx(s,{children:`JSON.stringify({ u: undefined, f(){}, s: Symbol() }); // "{}" (dropped)
JSON.stringify([1, undefined, () => {}, Symbol()]); // "[1,null,null,null]"
JSON.stringify({ n: NaN, inf: Infinity }); // '{"n":null,"inf":null}'

const cyc = {}; cyc.self = cyc;
// JSON.stringify(cyc); // ❌ TypeError

// Map/Set: choose a shape you can revive
const m = new Map([["a",1]]);
const json = JSON.stringify({ map: [...m] });     // {"map":[["a",1]]}
const revived = new Map(JSON.parse(json).map);`})]})},{id:"js-object-create-vs-constructor",question:"Object.create() vs constructor functions - what's the difference?",text:"Both set the [[Prototype]] link, but Object.create(proto) builds an object without running any constructor, while `new Ctor()` calls the function to initialize `this`. Use `Object.create(null)` for dictionary-like objects.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Key idea:"})," Both patterns establish a prototype, but they differ in how the instance is created and initialized."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Object.create(proto)"})," → makes a new object with its ",e.jsx("em",{children:"[[Prototype]]"})," set to ",e.jsx("code",{children:"proto"}),". No constructor runs."]}),e.jsxs("li",{children:[e.jsx("code",{children:"new Ctor(...args)"})," → creates a new object whose ",e.jsx("em",{children:"[[Prototype]]"})," is ",e.jsx("code",{children:"Ctor.prototype"})," and then invokes ",e.jsx("code",{children:"Ctor"})," with ",e.jsx("code",{children:"this"})," bound to that object."]})]}),e.jsx(s,{children:`// Using Object.create: choose any prototype object
const animal = {
  speak() { return \`I am \${this.name}\`; }
};
const dog = Object.create(animal); // [[Prototype]] -> animal
dog.name = "Rex";
dog.speak(); // "I am Rex"

// Dictionary with no prototype (no inherited keys)
const dict = Object.create(null);
dict.key = 123;
Object.getPrototypeOf(dict); // null`}),e.jsx(s,{children:`// Using constructor function (classic)
function Person(name) {
  this.name = name;          // runs at construction time
}
Person.prototype.greet = function () {
  return \`Hi, I'm \${this.name}\`;
};

const p = new Person("Ada");
p.greet(); // "Hi, I'm Ada"
Object.getPrototypeOf(p) === Person.prototype; // true`}),e.jsx("p",{children:e.jsx("strong",{children:"When to use which:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"Object.create"}),":"]})," simple prototype-only objects, custom prototypes, or pure key→value maps with ",e.jsx("code",{children:"Object.create(null)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Constructors/classes:"})," when you need initialization logic, parameters, or conventional OOP ergonomics (",e.jsx("code",{children:"new"}),", methods on ",e.jsx("code",{children:"prototype"}),")."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," ",e.jsx("code",{children:"Object.create"})," doesn't auto-define props; pass a second descriptor arg if needed. With constructors, forgetting ",e.jsx("code",{children:"new"})," changes ",e.jsx("code",{children:"this"})," (use classes or 'use strict')."]}),e.jsx(s,{children:`// Define properties at creation
const obj = Object.create(animal, {
  id: { value: 1, writable: false, enumerable: true }
});`})]})},{id:"js-getters-setters",question:"What are getters and setters?",text:"Getters compute a value on property access; setters run code on assignment. Use get/set in object literals or classes to create accessor properties (not data properties).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("em",{children:"Getters"})," are functions that run when you read a property;",e.jsx("em",{children:" setters"})," run when you assign to it. Declared with ",e.jsx("code",{children:"get"}),"/",e.jsx("code",{children:"set"})," in objects or classes."]}),e.jsx(s,{children:`// Object literal
const person = {
  first: "Ada",
  last: "Lovelace",
  get fullName() {                 // read: person.fullName
    return \`\${this.first} \${this.last}\`;
  },
  set fullName(v) {                // write: person.fullName = "Grace Hopper"
    const [f = "", l = ""] = String(v).split(" ");
    this.first = f; this.last = l;
  }
};

person.fullName;            // "Ada Lovelace"
person.fullName = "Grace Hopper";
person.first;               // "Grace"`}),e.jsx(s,{children:`// Class usage
class Rectangle {
  constructor(w, h){ this._w = w; this._h = h; }
  get area() { return this._w * this._h; }   // computed, read-only from outside
  set width(v) { this._w = Number(v) || 0; } // validation in setter
}

const r = new Rectangle(3, 4);
r.area;        // 12
r.width = "10";
r.area;        // 40`}),e.jsx("p",{children:e.jsx("strong",{children:"Key points:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Access like a normal property (",e.jsx("code",{children:"obj.prop"}),"), not as a function call."]}),e.jsxs("li",{children:["Accessor properties have ",e.jsx("code",{children:"get"}),"/",e.jsx("code",{children:"set"})," functions instead of a stored ",e.jsx("code",{children:"value"}),"."]}),e.jsx("li",{children:"You can define only a getter (read-only) or only a setter (write-only)."}),e.jsx("li",{children:"Great for validation, computed values, and encapsulation."})]}),e.jsx(s,{children:`// Define with descriptors
const o = {};
Object.defineProperty(o, "id", {
  get(){ return Math.random() },    // accessor descriptor (no 'value'/'writable')
  enumerable: true,
  configurable: true
});`}),e.jsx("p",{children:e.jsx("strong",{children:"Gotchas:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Don't mix ",e.jsx("code",{children:"value/writable"})," with ",e.jsx("code",{children:"get/set"})," on the same property."]}),e.jsx("li",{children:"A heavy getter runs every access-avoid expensive work or side effects."}),e.jsx("li",{children:"Keep naming consistent (e.g., use a leading underscore for backing fields)."})]})]})},{id:"js-iife",question:"What is an IIFE (Immediately Invoked Function Expression)?",text:"An IIFE is a function that runs immediately after it's created. It creates a private scope to avoid leaking variables into the surrounding/global scope.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," An ",e.jsx("em",{children:"IIFE"})," is a function expression that you execute right away. It's often used to create a private scope and avoid global variables."]}),e.jsx(s,{children:`// Classic IIFE (function expression wrapped in parentheses, then invoked)
(function () {
  const hidden = 42;
  console.log("running IIFE, hidden =", hidden);
})();`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Why use it:"})," isolate temporary variables, avoid polluting globals, and emulate block scope in pre-ES6 code."]}),e.jsx(s,{children:`// Passing arguments into an IIFE
(function (win, doc) {
  const title = doc.title;
  win.console.log("Title:", title);
})(window, document);`}),e.jsx("p",{children:e.jsx("strong",{children:"Variants:"})}),e.jsx(s,{children:`// Named IIFE (helpful in stack traces)
(function initModule() {
  // ...
})();

// Arrow IIFE
(() => {
  const tmp = "arrow iife";
  console.log(tmp);
})();

// Async IIFE (handy to use await at top level)
(async () => {
  const data = await Promise.resolve("ok");
  console.log(data);
})();`}),e.jsx("p",{children:e.jsx("strong",{children:"Notes:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"In ES modules, top-level scope is already isolated, so IIFEs are needed less often."}),e.jsx("li",{children:"If placing an IIFE after another statement, prefix with a semicolon to avoid ASI issues."})]}),e.jsx(s,{children:`// Defensive semicolon before IIFE
foo();
// ; ensures the next line starts a new statement
;(function(){ /* ... */ })();`})]})},{id:"js-arguments-object",question:"What is the `arguments` object? How is it different from rest parameters?",text:"`arguments` is an array-like object available inside non-arrow functions that holds the passed arguments. It's not a real array and is separate from arrow functions. Prefer rest parameters (`...args`) which give a true array.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," ",e.jsx("code",{children:"arguments"})," exists inside ",e.jsx("em",{children:"non-arrow"})," functions and contains all passed arguments (indexed) plus ",e.jsx("code",{children:"length"}),". It's ",e.jsx("em",{children:"array-like"})," (no array methods) and not available in arrow functions."]}),e.jsx(s,{children:`function demo(a, b) {
  console.log(arguments.length); // how many were passed
  console.log(arguments[0], arguments[1]); // indexed access
  // Turn into a real array if needed:
  const arr = Array.from(arguments); // or [...arguments] if iterable (most engines)
  return arr;
}
demo(1, 2, 3); // [1,2,3]`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Strict vs sloppy mode mapping:"})," In sloppy mode, changing a named parameter also changes the corresponding ",e.jsx("code",{children:"arguments[i]"}),". In strict mode, they are ",e.jsx("em",{children:"decoupled"}),"."]}),e.jsx(s,{children:`// Sloppy mode (no "use strict")
function sloppy(x) {
  x = 99;
  console.log(arguments[0]); // 99 (mapped)
}
sloppy(1);

// Strict mode: no mapping
"use strict";
function strict(x) {
  x = 99;
  console.log(arguments[0]); // 1 (decoupled)
}
strict(1);`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Not in arrows:"})," Arrow functions don't have their own ",e.jsx("code",{children:"arguments"})," (they'd close over an outer one if present). Use rest instead."]}),e.jsx(s,{children:`const bad = () => arguments[0]; // uses outer 'arguments' (often undefined)
const good = (...args) => args[0];`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Prefer rest parameters:"})," ",e.jsx("code",{children:"...args"})," gives a real array, is clearer, and works in both strict and non-strict modes."]}),e.jsx(s,{children:`function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sum(1,2,3); // 6`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Notes:"})," Avoid relying on ",e.jsx("code",{children:"arguments.callee"}),"/",e.jsx("code",{children:".caller"})," (deprecated). For performance/readability, use rest parameters in modern code."]})]})},{id:"js-fn-decl-vs-expr",question:"Function declaration vs function expression — what's the difference?",text:"Declarations are hoisted (callable before their line). Function expressions create a function value and assign it to a variable; they aren't callable before the assignment. Named function expressions aid debugging/recursion.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Function declaration:"})," ",e.jsx("code",{children:"function foo() {...}"})," is hoisted with its body, so it's callable before the line where it appears."]}),e.jsx(s,{children:`hoisted();               // ✅ works
function hoisted() {
  console.log("I am a declaration");
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Function expression:"})," the function is a value created at runtime and assigned to a variable. With ",e.jsx("code",{children:"let/const"})," you hit TDZ before the line; with ",e.jsx("code",{children:"var"})," the binding exists early but is",e.jsx("code",{children:"undefined"})," until assignment."]}),e.jsx(s,{children:`// let/const (TDZ)
try { expr(); } catch (e) { /* ReferenceError */ }
const expr = function() { console.log("I am an expression"); };

// var (binding hoisted, value not)
try { exprVar(); } catch (e) { /* TypeError: exprVar is not a function */ }
var exprVar = function() { console.log("late value"); };`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Named function expressions:"})," give the expression a name to improve stack traces and allow self-reference."]}),e.jsx(s,{children:`const fib = function inner(n) {
  return n < 2 ? n : inner(n - 1) + inner(n - 2); // uses its own name
};`}),e.jsxs("p",{children:[e.jsx("strong",{children:"When to use:"})," Declarations for top-level utilities (clear & hoisted). Expressions for conditional creation, passing as arguments, or attaching to objects."]}),e.jsx(s,{children:`// Attaching as a method (expression)
const math = {
  add: function(a,b){ return a + b; }, // or add(a,b) { ... } in class/obj literal
};`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Notes:"})," In ES modules/strict mode, block-scoped function ",e.jsx("em",{children:"declarations"})," behave consistently (scoped to the block). Avoid relying on cross-environment quirks of function-in-block in old scripts."]})]})},{id:"js-web-workers",question:"What are Web Workers and when should you use them?",text:"Web Workers run JS on a background thread separate from the main UI thread. Use them for CPU-heavy work so the page doesn't freeze. Communicate with postMessage/onmessage; no DOM access.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," A ",e.jsx("em",{children:"Web Worker"})," lets you run JS off the main thread. It has its own global scope (",e.jsx("code",{children:"self"}),"), no DOM access, and communicates with the page via messages."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"When to use:"})," CPU-heavy tasks (parsing, image processing, crunching data) that would block UI."]}),e.jsx(s,{children:`// main.js — create a dedicated worker (ES module worker)
const worker = new Worker("./worker.js", { type: "module" });

worker.onmessage = (e) => {
  console.log("Result from worker:", e.data);
};

worker.postMessage({ nums: [1,2,3,4,5] });

// stop later
// worker.terminate();`}),e.jsx(s,{children:`// worker.js — runs in the worker context (no window/document)
self.onmessage = (e) => {
  const { nums } = e.data;
  const sum = nums.reduce((a, b) => a + b, 0);
  self.postMessage({ sum });
  // self.close(); // optionally end the worker
};`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Inline worker (no separate file):"})," create a Blob URL."]}),e.jsx(s,{children:`const code = \`
self.onmessage = (e) => {
  let n = e.data;
  // simple CPU work
  for (let i = 0; i < 1e7; i++) n++;
  postMessage(n);
};
\`;
const url = URL.createObjectURL(new Blob([code], { type: "text/javascript" }));
const w = new Worker(url);
w.onmessage = (e) => console.log(e.data);
w.postMessage(1);`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Key points:"})," No DOM access; use ",e.jsx("code",{children:"postMessage"})," both ways (structured clone). You can",e.jsx("em",{children:"transfer"})," ",e.jsx("code",{children:"ArrayBuffer"}),"s for zero-copy (",e.jsx("code",{children:"postMessage(data, [data.buffer])"}),"). Errors: listen with ",e.jsx("code",{children:"worker.onerror"}),". Terminate with ",e.jsx("code",{children:"worker.terminate()"}),", or",e.jsx("code",{children:"self.close()"})," inside the worker."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Types (quick):"})," Dedicated Worker (one page); Shared Worker (multi-tab same origin);",e.jsx("em",{children:"Service Worker"})," is different (network proxy/background, not for CPU work)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Same-origin restrictions for script URL; no direct DOM APIs (use",e.jsx("code",{children:"OffscreenCanvas"})," for rendering); module workers prefer ES imports (avoid legacy ",e.jsx("code",{children:"importScripts"}),")."]})]})},{id:"js-storage-vs-cookies",question:"localStorage vs sessionStorage vs cookies — what's the difference?",text:"Web Storage (localStorage/sessionStorage) stores key–value strings on the client and is never sent with HTTP requests. Cookies are small (≈4KB), can have expiry, and are sent with matching requests. Use Web Storage for client-only data; cookies for server-driven/session data.",answer:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx("strong",{children:"Quick compare:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"localStorage"}),": ~5–10MB per origin, persists until cleared (survives tabs/restarts)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"sessionStorage"}),": ~5–10MB, per-tab session (clears when that tab closes)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cookies"}),": ~4KB each, optional expiry, ",e.jsx("em",{children:"sent with every matching HTTP request"}),"."]})]}),e.jsx("p",{children:e.jsx("strong",{children:"APIs (strings only):"})}),e.jsx(s,{children:`// localStorage
localStorage.setItem("theme", "dark");
localStorage.getItem("theme");        // "dark"
localStorage.removeItem("theme");
localStorage.clear();                  // all keys

// sessionStorage (same API)
sessionStorage.setItem("step", "2");

// Store objects: stringify/parse
const settings = { lang: "en", compact: true };
localStorage.setItem("settings", JSON.stringify(settings));
JSON.parse(localStorage.getItem("settings")); // { lang: "en", compact: true }`}),e.jsx("p",{children:e.jsx("strong",{children:"Cookies (client-side basics):"})}),e.jsx(s,{children:`// Set a cookie (expires in 7 days, path=/)
const days = 7;
document.cookie = \`token=abc123; Max-Age=\${60*60*24*days}; Path=/; SameSite=Lax\`;

// Read cookies (simple)
document.cookie; // "token=abc123; theme=dark"

// Delete (set Max-Age=0)
document.cookie = "token=; Max-Age=0; Path=/";`}),e.jsx("p",{children:e.jsx("strong",{children:"When to use what:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"localStorage"}),": user prefs, cached UI state that should survive reloads."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"sessionStorage"}),": wizard steps, per-tab state that shouldn't leak across tabs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cookies"}),": data the ",e.jsx("em",{children:"server"})," must see (e.g., session id). Keep them tiny."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Security notes (short):"})," Avoid putting sensitive tokens in Web Storage (vulnerable to XSS). For cookies, set ",e.jsx("code",{children:"Secure"})," (HTTPS), ",e.jsx("code",{children:"SameSite"})," (Lax/Strict), and prefer ",e.jsx("code",{children:"HttpOnly"})," (set by server only; JS can't read it)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," All three are same-origin. Storage is synchronous (don't spam in hot paths). Cookies are included in requests → bandwidth/perf considerations."]})]})},{id:"js-event-bubbling-capturing",question:"What is event bubbling and capturing in the DOM?",text:"DOM events travel in phases: capturing (top→target), target, then bubbling (target→top). By default, listeners run in the bubbling phase; pass { capture: true } to listen during capture. Use stopPropagation()/stopImmediatePropagation() to halt travel; preventDefault() blocks the default action.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Phases:"})," 1) ",e.jsx("em",{children:"Capturing"})," (window → document → ... → target), 2) ",e.jsx("em",{children:"Target"}),", 3) ",e.jsx("em",{children:"Bubbling"})," (target → ... → document → window)."]}),e.jsx(s,{children:`// Bubbling (default)
parent.addEventListener("click", (e) => console.log("parent bubble"));
child.addEventListener("click",  (e) => console.log("child bubble"));

// Capturing
parent.addEventListener("click", (e) => console.log("parent capture"), { capture: true });

// Click on child prints:
// parent capture -> child bubble -> parent bubble`}),e.jsx("p",{children:e.jsx("strong",{children:"Stopping:"})}),e.jsx(s,{children:`child.addEventListener("click", (e) => {
  e.stopPropagation();          // stops further propagation (no parent handlers in same phase)
  // e.stopImmediatePropagation(); // also stops other handlers on the same node
  // e.preventDefault();           // cancels default action (e.g., link navigation) if cancelable
});`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Event object tips:"})," ",e.jsx("code",{children:"e.target"})," = origin node; ",e.jsx("code",{children:"e.currentTarget"})," = node whose listener is running; ",e.jsx("code",{children:"e.eventPhase"})," = 1(capture)/2(target)/3(bubble)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Delegation:"})," Attach one listener high up and branch by ",e.jsx("code",{children:"e.target"}),"/",e.jsx("code",{children:"closest()"})," to handle many children efficiently."]}),e.jsx(s,{children:`list.addEventListener("click", (e) => {
  const btn = (e.target as Element).closest("button.delete");
  if (!btn) return;
  // handle delete for the clicked item
});`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Options:"})," ",e.jsx("code",{children:"{ capture: true, once: true, passive: true }"})," (passive hints “won't call preventDefault” — useful for scroll/touch perf)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," Not all events bubble (e.g., ",e.jsx("code",{children:"focus"}),"/",e.jsx("code",{children:"blur"})," don't; use ",e.jsx("code",{children:"focusin"}),"/",e.jsx("code",{children:"focusout"}),"). Stopping propagation doesn't cancel defaults—use ",e.jsx("code",{children:"preventDefault()"})," for that."]})]})},{id:"js-json-stringify",question:"How does JSON.stringify work? What gets serialized and what doesn't?",text:"JSON.stringify(value, replacer?, space?) serializes JSON-safe data. It keeps own enumerable string-keyed props of plain objects/arrays. Omits functions/undefined/symbols in objects (become null in arrays). NaN/±Infinity → null. Dates use toJSON (ISO). BigInt throws. Circular refs throw.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Signature:"})," ",e.jsx("code",{children:"JSON.stringify(value, replacer?, space?)"})]}),e.jsx(s,{children:`// What serializes:
JSON.stringify({ a: 1, s: "hi", b: true, n: null }); // '{"a":1,"s":"hi","b":true,"n":null}'

// Objects & arrays: only OWN, ENUMERABLE, STRING-KEYED props (no prototype props)
const base = { p: 1 };
const obj = Object.assign(Object.create(base), { a: 1 });
JSON.stringify(obj); // '{"a":1}'`}),e.jsx(s,{children:`// Omissions / conversions:
JSON.stringify({ u: undefined, f: () => {}, [Symbol("k")]: 1, x: 2 }); // '{"x":2}'
JSON.stringify([1, undefined, () => {}, Symbol()]); // '[1,null,null,null]'
JSON.stringify({ n: NaN, i: Infinity, m: -Infinity }); // '{"n":null,"i":null,"m":null}'
try { JSON.stringify({ big: 1n }); } catch (e) { /* TypeError (BigInt not supported) */ }`}),e.jsx(s,{children:`// Dates: use toJSON() -> ISO string
JSON.stringify({ d: new Date("2020-01-02T03:04:05Z") });
// '{"d":"2020-01-02T03:04:05.000Z"}' (ISO format)`}),e.jsx(s,{children:`// Circular references: TypeError
const a = {}; a.self = a;
JSON.stringify(a); // TypeError: Converting circular structure to JSON`}),e.jsx(s,{children:`// Replacer: function or allowlist array
const user = { id: 1, name: "Ada", password: "secret" };
JSON.stringify(user, ["id", "name"]); // '{"id":1,"name":"Ada"}'

JSON.stringify(user, (key, value) => key === "password" ? undefined : value);
// '{"id":1,"name":"Ada"}'`}),e.jsx(s,{children:`// Pretty-print with space (number or string)
const obj2 = { a: 1, b: { c: 2 } };
JSON.stringify(obj2, null, 2);
/*
{
  "a": 1,
  "b": {
    "c": 2
  }
}
*/`}),e.jsx(s,{children:`// Custom toJSON (runs before serialization)
const account = {
  id: 7, balance: 100, secret: "xxx",
  toJSON(){ return { id: this.id, balance: this.balance }; }
};
JSON.stringify(account); // '{"id":7,"balance":100}'`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Quick rules:"})," Own enumerable string keys only; functions/undefined/symbols are skipped in objects (→ ",e.jsx("code",{children:"null"})," in arrays); non-finite numbers → ",e.jsx("code",{children:"null"}),"; Dates stringify to ISO; BigInt & cycles throw; use ",e.jsx("code",{children:"replacer"})," to filter/transform and ",e.jsx("code",{children:"space"})," to pretty-print."]})]})},{id:"js-pure-function",question:"What is a Pure Function?",text:"A pure function always returns the same output for the same inputs and has no side effects (doesn't mutate external state, perform I/O, or depend on non-deterministic data).",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," Same inputs → same output; ",e.jsx("em",{children:"no side effects"}),". No reading/writing external mutable state, no I/O, no randomness/clock."]}),e.jsx(s,{children:`// Impure: reads external state and mutates it
let total = 0;
function addToTotal(x) {
  total += x;         // side effect (mutates external variable)
  return total;
}

// Pure: depends only on inputs, no mutations
function sum(a, b) {
  return a + b;       // same a,b => same result
}`}),e.jsx(s,{children:`// More examples
// ❌ Impure: depends on current time
function greeting(name) {
  return \`Hi \${name}, time: \${Date.now()}\`;
}

// ✅ Pure: deterministic
function greet(name) {
  return \`Hi \${name}\`;
}

// ❌ Impure: mutates the array argument
function pushX(arr) {
  arr.push("x");
  return arr;
}

// ✅ Pure: returns a new array (original unchanged)
function withX(arr) {
  return [...arr, "x"];
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Benefits:"})," Predictable, easy to test, cacheable (memoization), enables safe parallelization."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tips:"})," Avoid using ",e.jsx("code",{children:"Date.now()"}),", ",e.jsx("code",{children:"Math.random()"}),", global vars, or mutating inputs inside a “pure” function. Prefer returning new data instead of mutating."]})]})},{id:"js-memoization",question:"What is Memoization?",text:"Memoization caches a function's results for given inputs so repeated calls with the same arguments return instantly from cache instead of recomputing. Works best with pure functions.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," Store the result of a function call keyed by its arguments. Next time the same inputs appear, return the cached value instead of recalculating. Best for ",e.jsx("em",{children:"pure"})," (deterministic, no side effects) functions."]}),e.jsx(s,{children:`// Tiny memoize helper (primitive args or JSON-serializable)
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args); // simple keying
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Example: expensive computation
function slowFib(n) {
  if (n <= 1) return n;
  return slowFib(n - 1) + slowFib(n - 2);
}

const fastFib = memoize(function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});

fastFib(40); // much faster on repeated calls than slowFib(40)`}),e.jsx(s,{children:`// Safer keying for object args: use a nested Map chain
function memoizeByRef(fn) {
  const root = new Map();
  return function (...args) {
    let node = root;
    for (const a of args) {
      const key = (a !== Object(a)) ? \`[p]:\${a}\` : a; // primitives as tagged strings, objects by reference
      if (!node.has(key)) node.set(key, new Map());
      node = node.get(key);
    }
    if (node.has('v')) return node.get('v');
    const res = fn.apply(this, args);
    node.set('v', res);
    return res;
  };
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"When to use:"})," heavy CPU work, repeated with the same inputs (e.g., formatting, parsing, DP)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gotchas:"})," memoize only pure functions; beware of mutating arguments (cache becomes stale); JSON keying ignores property order issues and drops functions/symbols; consider ",e.jsx("code",{children:"WeakMap"})," for object keys to avoid leaks; add eviction/TTL if the cache might grow unbounded."]})]})},{id:"js-setTimeout-vs-setInterval",question:"What's the difference between setTimeout and setInterval?",text:"setTimeout(fn, delay) runs once after delay. setInterval(fn, delay) runs repeatedly every delay ms until cleared. Use clearTimeout/clearInterval to stop. Prefer a recursive timeout for more consistent spacing and to avoid overlap.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"setTimeout:"})," schedule a one-time call after ",e.jsx("code",{children:"delay"})," ms.",e.jsx("br",{}),e.jsx("strong",{children:"setInterval:"})," schedule repeated calls every ",e.jsx("code",{children:"delay"})," ms."]}),e.jsx(s,{children:`// 1) One-shot
const id = setTimeout(() => console.log("run once"), 500);
clearTimeout(id); // cancels if needed`}),e.jsx(s,{children:`// 2) Repeating
const iid = setInterval(() => console.log("tick"), 1000);
clearInterval(iid); // stop later`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Drift & overlap:"})," If the callback takes longer than the interval, ",e.jsx("code",{children:"setInterval"})," can queue up (overlap). A recursive ",e.jsx("code",{children:"setTimeout"})," schedules the next run after the previous finishes, which is often safer."]}),e.jsx(s,{children:`// Safer repeating with recursive timeout
function startTicker(delay = 1000) {
  let stopped = false;
  (function tick() {
    if (stopped) return;
    // ...work...
    setTimeout(tick, delay); // schedule after work completes
  })();
  return () => { stopped = true; }; // return a stop function
}
const stop = startTicker(1000);
// stop(); // call to stop`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Animation tip:"})," For UI animation, prefer ",e.jsx("code",{children:"requestAnimationFrame"})," (syncs with display refresh)."]}),e.jsx(s,{children:`function animate() {
  // draw...
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Notes:"})," ",e.jsx("code",{children:"setTimeout(fn, 0)"})," still runs after the current task and microtasks; both timers have a minimum clamp in browsers; always keep callbacks quick (don't block the event loop)."]})]})},{id:"js-void-operator",question:"What is the `void` operator and when would you use it?",text:"`void expr` evaluates `expr` and returns `undefined`. Common uses: (1) ensure an IIFE is parsed as an expression, (2) deliberately return `undefined` (e.g., in bookmarklets / links like `javascript:void 0`), and (3) historically, a guaranteed `undefined` value via `void 0`.",answer:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," The unary ",e.jsx("code",{children:"void"})," operator evaluates its operand and discards the result, returning ",e.jsx("code",{children:"undefined"}),"."]}),e.jsx(s,{children:`void (console.log("runs, but value becomes undefined"));
// -> logs "runs", expression value is undefined`}),e.jsx("p",{children:e.jsx("strong",{children:"Common uses:"})}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("strong",{children:"IIFE prefix:"})," Force a function expression without relying on leading punctuation."]})}),e.jsx(s,{children:`// Ensures this is parsed as an expression-IIFE:
void function () {
  // isolated scope
  console.log("IIFE");
}();`}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("strong",{children:"Deliberate undefined:"})," Use ",e.jsx("code",{children:"void 0"})," as a guaranteed ",e.jsx("code",{children:"undefined"})," value (historic safety; today ",e.jsx("code",{children:"undefined"})," is already immutable)."]})}),e.jsx(s,{children:`const UNSET = void 0; // always undefined
typeof UNSET; // "undefined"`}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("strong",{children:"Prevent navigation in links/bookmarklets:"})," Evaluate code but yield ",e.jsx("code",{children:"undefined"})," so the page doesn't navigate. (Prefer buttons + JS handlers in real apps.)"]})}),e.jsx(s,{children:`// In HTML (demo):
// <a href="javascript:void 0" onclick="doSomething()">Click</a>

// Bookmarklet idea (demo):
// javascript:void (function(){ alert("Hi"); }())`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Notes:"})," ",e.jsx("code",{children:"void"})," does not stop execution like ",e.jsx("code",{children:"return"}),"; it only controls the expression result. Use parentheses when needed due to operator precedence."]})]})}];function S(){const[n,i]=l.useState(""),d=l.useRef(null);l.useEffect(()=>{const r=c=>{var x,u;const h=(x=document.activeElement)==null?void 0:x.tagName;c.key==="/"&&h!=="INPUT"&&h!=="TEXTAREA"&&(c.preventDefault(),(u=d.current)==null||u.focus())};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[]);const a=r=>{(r.key==="Escape"||r.key==="Esc")&&(n?i(""):r.currentTarget.blur(),r.preventDefault())},o=l.useMemo(()=>{const r=n.trim().toLowerCase();return r?p.filter(({question:c,text:h})=>c.toLowerCase().includes(r)||h.toLowerCase().includes(r)):p},[n]);return e.jsxs(j.Wrapper,{children:[e.jsxs(j.TopBar,{children:[e.jsx(g,{}),e.jsxs(j.SearchBox,{children:[e.jsx("input",{ref:d,value:n,onChange:r=>i(r.target.value),onKeyDown:a,placeholder:"Search questions...  (press /, Esc to clear)","aria-label":"Search questions","aria-keyshortcuts":"/ Escape"}),n&&e.jsxs(e.Fragment,{children:[e.jsx("small",{className:"hint",children:"esc"}),e.jsx("button",{className:"clear",onClick:()=>i(""),"aria-label":"Clear search",title:"Clear (Esc)",children:"✕"})]})]})]}),e.jsx("p",{children:"Last updated: Sep 14, 2025"}),e.jsxs(j.Count,{children:[o.length," result",o.length!==1?"s":"",n?` for "${n}"`:""]}),o.length===0?e.jsx("p",{style:{opacity:.7},children:"No matches. Try a different keyword."}):o.map(r=>e.jsx(w,{question:r.question,children:r.answer},r.id))]})}export{S as default};
