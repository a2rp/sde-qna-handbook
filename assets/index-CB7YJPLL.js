import{d as r,u as o,j as e,N as t}from"./index-DXfhbbN0.js";const n={Page:r.div`
        padding: 24px 18px 48px;
    `,Header:r.header`
        margin-bottom: 16px;
        h1 {
            font-size: 22px;
            margin: 0 0 6px;
            letter-spacing: 0.3px;
        }
        .muted {
            opacity: 0.7;
            font-size: 13px;
        }
        code {
            padding: 2px 6px;
            border-radius: 6px;
            background: hsl(0 0% 100% / 0.06);
        }
    `,Panel:r.section`
        border: 1px solid hsl(0 0% 100% / 0.12);
        border-radius: 12px;
        padding: 16px 16px 6px;
        background: hsl(0 0% 100% / 0.03);
        p {
            margin: 0 0 10px;
            line-height: 1.6;
        }
        ul {
            margin: 0 0 4px 18px;
            line-height: 1.7;
        }
    `,CardGrid:r.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(220px, 1fr));
        gap: 12px;
        margin-top: 16px;

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }

        .card {
            border: 1px solid hsl(0 0% 100% / 0.12);
            border-radius: 12px;
            padding: 14px 16px;
            text-decoration: none;
            color: inherit;
            background: hsl(0 0% 100% / 0.03);
            transition: transform 160ms ease, background 160ms ease,
                border 160ms ease;
        }
        .card:hover {
            transform: translateY(-2px);
            background: hsl(0 0% 100% / 0.05);
            border-color: hsl(0 0% 100% / 0.2);
        }
        .card h3 {
            margin: 0 0 6px;
            font-size: 16px;
            letter-spacing: 0.2px;
        }
        .card p {
            margin: 0;
            opacity: 0.8;
            font-size: 13px;
            line-height: 1.5;
        }
    `},s=({children:i})=>e.jsx("pre",{style:{margin:"8px 0 14px",padding:"10px 12px",borderRadius:10,border:"1px solid hsl(0 0% 100% / 0.12)",background:"hsl(0 0% 100% / 0.04)",overflowX:"auto",lineHeight:1.5,fontSize:13.5},children:i}),l=()=>{const{pathname:i}=o();return e.jsxs(n.Page,{children:[e.jsxs(n.Header,{children:[e.jsx("h1",{children:"JavaScript — Overview"}),e.jsxs("p",{className:"muted",children:["You are on: ",e.jsx("code",{children:i})]})]}),e.jsxs(n.Panel,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Definition:"})," JavaScript is a high-level, dynamic,"," ",e.jsx("em",{children:"prototype-based"}),", multi-paradigm language (ECMAScript). It runs in browsers and on servers (Node.js), uses a single-threaded event loop with non-blocking I/O, and supports first-class functions, lexical scope (closures), modules, and async/await."]}),e.jsx("h3",{children:"0) Execution Context, Lexical Environment & Scope Chain"}),e.jsxs("p",{children:["Code runs inside ",e.jsx("em",{children:"execution contexts"})," (global, function, eval). Each has a",e.jsx("em",{children:" lexical environment"})," that forms a ",e.jsx("em",{children:"scope chain"})," for lookups."]}),e.jsx(s,{children:`let x = 1;
function outer(){ let y = 2; function inner(){ return x + y } return inner() }
outer(); // 3  (inner closes over x,y through scope chain)`}),e.jsx("h3",{children:"1) Values & Types"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Primitives:"})," ",e.jsx("code",{children:"undefined"}),", ",e.jsx("code",{children:"null"}),","," ",e.jsx("code",{children:"boolean"}),", ",e.jsx("code",{children:"number"}),", ",e.jsx("code",{children:"bigint"}),","," ",e.jsx("code",{children:"string"}),", ",e.jsx("code",{children:"symbol"}),". Everything else is an object."]}),e.jsx(s,{children:`typeof 42      // "number"
typeof 42n     // "bigint"
typeof null    // "object" (legacy quirk)
typeof (()=>{})// "function"`}),e.jsx("p",{children:"Primitives copy by value; objects by reference."}),e.jsx("h3",{children:"2) Truthy/Falsy & Coercion"}),e.jsxs("p",{children:["Falsy: ",e.jsx("code",{children:'false, 0, -0, 0n, "", null, undefined, NaN'}),"."]}),e.jsx(s,{children:`Boolean([])        // true
Number("12px")   // NaN
"" || "fallback" // "fallback"`}),e.jsx("h3",{children:"3) Equality"}),e.jsxs("p",{children:["Prefer ",e.jsx("code",{children:"==="}),". Safe ",e.jsx("code",{children:"=="})," use: ",e.jsx("code",{children:"x == null"})," for"," ",e.jsx("code",{children:"null|undefined"}),". ",e.jsx("code",{children:"Object.is"})," fixes ",e.jsx("code",{children:"NaN"})," and"," ",e.jsx("code",{children:"-0"}),"."]}),e.jsx(s,{children:`NaN === NaN         // false
Object.is(NaN, NaN) // true
0 === -0            // true
Object.is(0, -0)    // false`}),e.jsx("h3",{children:"4) Variables, Scope, Hoisting"}),e.jsxs("p",{children:[e.jsx("code",{children:"let/const"}),": block scope + TDZ; ",e.jsx("code",{children:"var"}),": function scope, hoisted to"," ",e.jsx("code",{children:"undefined"}),". Prefer ",e.jsx("code",{children:"const"}),"."]}),e.jsx(s,{children:`console.log(a); // undefined (var hoisted)
var a = 1;

console.log(b); // ReferenceError (TDZ)
let b = 2;`}),e.jsxs("h3",{children:["5) Functions, ",e.jsx("code",{children:"this"}),", Closures"]}),e.jsxs("p",{children:["Arrows capture lexical ",e.jsx("code",{children:"this"}),"; normal functions bind by call-site. Closures keep outer vars alive."]}),e.jsx(s,{children:`const obj = {
  x: 10,
  f(){ setTimeout(function(){ console.log(this?.x) }, 0) }, // undefined
  g(){ setTimeout(() => console.log(this.x), 0) }            // 10
}; obj.f(); obj.g();`}),e.jsxs("h4",{style:{marginTop:6},children:["6) Complete ",e.jsx("code",{children:"this"})," Binding Rules"]}),e.jsx(s,{children:`// default: undefined (strict) or window (sloppy)
function f(){ return this } f(); // undefined in modules/strict
// implicit: receiver object
obj.m(); // this = obj
// explicit: call/apply/bind
f.call(customThis);
// constructor: new
new C(); // this = new instance
// arrow: lexical this (from surrounding scope)`}),e.jsx("h3",{children:"7) call • apply • bind"}),e.jsxs("p",{children:["Control ",e.jsx("code",{children:"this"})," & argument passing."]}),e.jsx(s,{children:`function greet(g, p){ return g + " " + this.name + p }
const ctx = { name:"Ash" };
greet.call(ctx, "Hi", "!");      // "Hi Ash!"
greet.apply(ctx, ["Hello", "."]); // "Hello Ash."
const hiAsh = greet.bind(ctx, "Hi");
hiAsh("?"); // "Hi Ash?"`}),e.jsx("h3",{children:"8) Objects, Prototypes, Classes"}),e.jsx("p",{children:"Prototype chain handles property lookup; classes sugar prototype patterns."}),e.jsx(s,{children:`const proto = { greet(){ return "hi" } };
const o = Object.create(proto);
o.greet(); // "hi"`}),e.jsxs("p",{children:["Use descriptors via ",e.jsx("code",{children:"Object.defineProperty"}),"; check own props with ",e.jsx("code",{children:"Object.hasOwn"}),"."]}),e.jsx("h3",{children:"9) Property Attributes & Enumeration Order"}),e.jsxs("p",{children:["Attributes: ",e.jsx("code",{children:"writable"}),", ",e.jsx("code",{children:"enumerable"}),", ",e.jsx("code",{children:"configurable"}),", getters/setters."]}),e.jsx(s,{children:`const o = {};
Object.defineProperty(o, "id", { value:1, writable:false });
Object.keys(o); // [] if not enumerable
// Order: integer-like keys asc → string keys insertion → symbols insertion`}),e.jsx("h3",{children:"10) Arrays (must-know APIs)"}),e.jsxs("p",{children:["Prefer non-mutating ",e.jsx("code",{children:"toSorted/toReversed/toSpliced"})," when clear."]}),e.jsx(s,{children:`[3,1,2].toSorted()         // [1,2,3]
[1,2,3].map(x=>x*2)      // [2,4,6]
[1,2,3].find(x=>x>1)     // 2
[1,2,3].some(x=>x%2===0) // true`}),e.jsx("h3",{children:"11) Destructuring, Rest & Spread"}),e.jsxs("p",{children:["Defaults apply only to ",e.jsx("code",{children:"undefined"})," (not ",e.jsx("code",{children:"null"}),")."]}),e.jsx(s,{children:`const user = { id:1, name:"Ash", role:"dev" };
const { name, ...meta } = user;   // meta: {id:1, role:"dev"}
const nums = [1,2,3]; const more = [0, ...nums, 4];`}),e.jsx("h3",{children:"12) Parameters: scope, defaults, TDZ"}),e.jsx("p",{children:"Default expressions form their own scope; referencing later params is TDZ."}),e.jsx(s,{children:`function f(a = b, b = 2){ return a + b } // ReferenceError (a uses b before init)
function g(a = 1, b = a+1){ return [a,b] } // ok -> [1,2]`}),e.jsx("h3",{children:"13) Map/Set & WeakMap/WeakSet"}),e.jsx("p",{children:"Map keys can be any value; Weak collections don’t prevent GC of object keys."}),e.jsx(s,{children:`const m = new Map([[{id:1},"meta"]]);
const s = new Set([1,1,2]); // Set {1,2}`}),e.jsx("h3",{children:"14) Strings & RegExp"}),e.jsxs("p",{children:["Template literals; regex flags ",e.jsx("code",{children:"g i m s u y"}),"; named groups; indices (",e.jsx("code",{children:"d"})," flag) where supported."]}),e.jsx(s,{children:'`Hello, ${"Ash"}!`\\n/(?<area>\\d{3})-(?<num>\\d{7})/u.exec("080-1234567").groups.area'}),e.jsx("h3",{children:"15) Numbers • BigInt • Date • Intl"}),e.jsxs("p",{children:["IEEE-754 double; safe range ±(2^53−1). Use ",e.jsx("code",{children:"EPSILON"})," for float comparisons; BigInt for large ints."]}),e.jsx(s,{children:`Number.EPSILON > 0              // true
(0.1 + 0.2 - 0.3) < Number.EPSILON // ~true
const id = 9007199254740993n;      // BigInt
new Date().toISOString();
new Intl.NumberFormat("en-IN").format(1234567); // "12,34,567"`}),e.jsx("h3",{children:"16) Errors & Exceptions"}),e.jsxs("p",{children:["Built-ins: Type/Reference/Range/Syntax/Aggregate. Attach context with ",e.jsx("code",{children:".cause"}),"."]}),e.jsx(s,{children:`try { throw new Error("fail", { cause:{ step:"parse" } }) }
catch (e) { console.error(e.message, e.cause.step) }`}),e.jsx("h3",{children:"17) Event Loop (tasks vs microtasks)"}),e.jsx("p",{children:"Microtasks (Promises) run before the next macrotask (e.g., timeout)."}),e.jsx(s,{children:`setTimeout(()=>console.log("task"), 0);
Promise.resolve().then(()=>console.log("micro"));
console.log("sync"); // sync → micro → task`}),e.jsxs("h3",{children:["18) Promises & ",e.jsx("code",{children:"async/await"})]}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"Promise.all"})," for parallelism; ",e.jsx("code",{children:"allSettled"})," for best-effort; ",e.jsx("code",{children:"any"})," for first-success."]}),e.jsx(s,{children:`async function load(urls){
  const res = await Promise.all(urls.map(u=>fetch(u)));
  return Promise.all(res.map(r=>r.json()));
}`}),e.jsx("h3",{children:"19) Timers & Abort"}),e.jsxs("p",{children:["Cancel stale work when API supports ",e.jsx("code",{children:"AbortSignal"}),"."]}),e.jsx(s,{children:`const ac = new AbortController();
fetch("/api", { signal: ac.signal }); ac.abort();`}),e.jsx("h3",{children:"20) Modules (ESM)"}),e.jsxs("p",{children:["Named/default exports; live bindings; dynamic import; top-level ",e.jsx("code",{children:"await"})," (ESM only)."]}),e.jsx(s,{children:`// math.js
export const add = (a,b)=>a+b;
export default Math.random;
// use
import rnd, { add } from "./math.js";`}),e.jsx("h3",{children:"21) Optional Chaining & Nullish"}),e.jsxs("p",{children:["Safe access ",e.jsx("code",{children:"?."}),"; fallback only for ",e.jsx("code",{children:"null|undefined"})," via ",e.jsx("code",{children:"??"}),"."]}),e.jsx(s,{children:'user.profile?.email ?? "(not set)"'}),e.jsx("h3",{children:"22) Logical Assignment"}),e.jsx(s,{children:`config.timeout ??= 3000; // only if null/undefined
cache[key] ||= compute();   // only if falsy`}),e.jsx("h3",{children:"23) Iterables, Generators, Async Iteration"}),e.jsx(s,{children:`function* range(n){ for(let i=0;i<n;i++) yield i }
[...range(3)] // [0,1,2]
async function* nums(){ yield 1; yield 2 }
for await (const x of nums()) {/* ... */}`}),e.jsx("h3",{children:"24) Meta: Proxy • Reflect • Symbols"}),e.jsx("p",{children:"Intercept ops; Reflect mirrors object ops; Symbols customize protocols."}),e.jsx(s,{children:`const p = new Proxy({}, { get:(t,k)=> (k in t ? t[k] : "(missing)") });
Reflect.ownKeys({a:1, [Symbol("s")]:2}); // ["a", Symbol(s)]`}),e.jsx("h3",{children:"25) Memory & GC"}),e.jsx("p",{children:"GC by reachability; leaks from retained refs (closures/listeners/caches). Use WeakMap for ephemeral metadata."}),e.jsx(s,{children:`const wm = new WeakMap();
(function(){ const o={}; wm.set(o,"meta"); })(); // o collectible`}),e.jsx("h3",{children:"26) Performance Basics"}),e.jsx("p",{children:"Stable shapes, avoid array holes, batch async, measure (don’t guess)."}),e.jsx(s,{children:'console.time("sum"); let s=0; for(let i=0;i<1e6;i++) s+=i; console.timeEnd("sum");'}),e.jsxs("h3",{children:["27) ToPrimitive & ",e.jsx("code",{children:"Symbol.toPrimitive"})]}),e.jsx(s,{children:`const user = { [Symbol.toPrimitive](hint){ return hint==="string" ? "user" : 7 } };
1 + user      // 8   (number hint)
"hi " + user  // "hi user"`}),e.jsx("h3",{children:"28) Shallow vs Deep Copy"}),e.jsx(s,{children:`const a = { nested:{ x:1 } };
const b = { ...a }; b.nested.x = 9; // mutates a
const c = structuredClone(a);       // deep`}),e.jsxs("h3",{children:["29) ",e.jsx("code",{children:"instanceof"})," & ",e.jsx("code",{children:"Symbol.hasInstance"})]}),e.jsx(s,{children:`class A { static [Symbol.hasInstance](v){ return "mark" in v } }
({ mark:true }) instanceof A // true`}),e.jsxs("h3",{children:["30) Class Fields • Private • ",e.jsx("code",{children:"super"})]}),e.jsx(s,{children:`class Counter {
  #n = 0;
  inc(){ return ++this.#n }
  static from(n){ const c = new Counter(); c.#n = n; return c }
}`}),e.jsxs("h3",{children:["31) Error Patterns & ",e.jsx("code",{children:"finally"})]}),e.jsx(s,{children:`try { /* ... */ }
catch (e) { /* log/transform */ }
finally { /* cleanup: close handles, abort signals, clear timers */ }`}),e.jsx("h3",{children:"32) Promise Patterns (sequential • parallel • retry)"}),e.jsx(s,{children:`// parallel
const [a,b] = await Promise.all([fa(), fb()]);
// sequential dependency
const a1 = await fa(); const b1 = await fb(a1);
// retry (basic)
const retry = (f,n=3)=> f().catch(e=> n>1 ? retry(f,n-1) : Promise.reject(e));`}),e.jsx("h3",{children:"33) Unhandled Rejections & Node specifics"}),e.jsx(s,{children:`window.addEventListener("unhandledrejection", e => console.error(e.reason));
process.on?.("unhandledRejection", r => console.error(r));
process.nextTick?.(()=>console.log("nextTick before Promise microtasks"));`}),e.jsx("h3",{children:"34) Custom Iterators"}),e.jsx(s,{children:`const it = {
  cur:0, max:3,
  [Symbol.iterator](){ return this },
  next(){ return this.cur < this.max ? {value:this.cur++, done:false} : {done:true} }
};
[...it] // [0,1,2]`}),e.jsx("h3",{children:"35) RegExp Sticky & Unicode Props"}),e.jsx(s,{children:'const r = /\\p{Letter}+/uy; r.lastIndex = 1; r.exec(" नमस्ते")?.[0]'}),e.jsx("h3",{children:"36) Floating-point Pitfalls & Safe Integers"}),e.jsx(s,{children:`Number.MAX_SAFE_INTEGER // 9007199254740991
0.1 + 0.2 === 0.3     // false
Math.abs((0.1+0.2)-0.3) < Number.EPSILON // true-ish`}),e.jsx("h3",{children:"37) Bitwise: 32-bit vs BigInt"}),e.jsxs("p",{children:["Bitwise on numbers uses 32-bit ints; BigInt supports ",e.jsx("code",{children:"& | ^ ~ << >>"})," (no unsigned >>>)."]}),e.jsx(s,{children:`(1 << 31) >> 31     // -1 (sign-propagating)
(1n << 65n) | 3n     // BigInt bit ops`}),e.jsx("h3",{children:"38) TypedArrays & DataView"}),e.jsx(s,{children:`const buf = new ArrayBuffer(4);
new DataView(buf).setUint32(0, 0xdeadbeef, /* littleEndian */ true);
new Uint8Array(buf) // bytes`}),e.jsx("h3",{children:"39) Set Operations (union/intersection)"}),e.jsx(s,{children:`const union = (a,b)=> new Set([...a, ...b]);
const inter = (a,b)=> new Set([...a].filter(x => b.has(x)));`}),e.jsx("h3",{children:"40) Debounce & Throttle"}),e.jsx(s,{children:`const debounce = (fn, ms) => { let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms) } };
const throttle = (fn, ms) => { let ok=true; return (...a)=>{ if(!ok) return; ok=false; fn(...a); setTimeout(()=>ok=true, ms) } };`}),e.jsx("h3",{children:"41) Animation Frames & Timer Clamping"}),e.jsxs("p",{children:[e.jsx("code",{children:"requestAnimationFrame"})," runs before paint; nested timeouts clamp to ~4ms in browsers."]}),e.jsx(s,{children:"requestAnimationFrame(ts => {/* smooth UI work */})"}),e.jsx("h3",{children:"42) Freeze/Seal"}),e.jsx(s,{children:"const obj = Object.freeze({ a:1 }); Object.isFrozen(obj) // true"}),e.jsxs("h3",{children:["43) ",e.jsx("code",{children:"for...in"})," vs ",e.jsx("code",{children:"Object.*"})," vs ",e.jsx("code",{children:"Reflect"})]}),e.jsx(s,{children:`const o = Object.create({ a:1 }); o.b = 2;
Object.keys(o) // ["b"]
for (const k in o) {/* a & b */}
Reflect.ownKeys(o) // ["b"] (plus symbols if any)`}),e.jsxs("h3",{children:["44) JSON Quirks & ",e.jsx("code",{children:"toJSON"})]}),e.jsxs("p",{children:[e.jsx("code",{children:"undefined"}),"/functions/symbols drop; cycles throw; customize with replacer or ",e.jsx("code",{children:"toJSON"}),"."]}),e.jsx(s,{children:`JSON.stringify({x:undefined, y:1}) // '{"y":1}'
const user = { name:"Ash", toJSON(){ return { n:this.name } } };
JSON.stringify(user) // '{"n":"Ash"}'`}),e.jsxs("h3",{children:["45) ",e.jsx("code",{children:"arguments"})," vs Rest Params"]}),e.jsxs("p",{children:[e.jsx("code",{children:"arguments"})," is array-like, not real array; in strict mode it doesn't map to params."]}),e.jsx(s,{children:"function f(...args){ return args.slice(1) }"}),e.jsxs("h3",{children:["46) ",e.jsx("code",{children:"eval"})," & Function Constructor"]}),e.jsx("p",{children:"Avoid for security/perf; in strict mode, eval has its own scope."}),e.jsx(s,{children:'"use strict"; const x=1; eval("var x=2"); x // 1'}),e.jsx("h3",{children:"47) Strict Mode Details"}),e.jsxs("p",{children:["Modules are strict by default; disallows ",e.jsx("code",{children:"with"}),", octal escapes, duplicate params; ",e.jsx("code",{children:"this"})," remains ",e.jsx("code",{children:"undefined"})," in plain calls."]}),e.jsxs("h3",{children:["48) ",e.jsx("code",{children:"new.target"})]}),e.jsx(s,{children:"function C(){ if(!new.target) return new C(); } C(); // safe ctor"}),e.jsx("h3",{children:"49) Symbol Registry & Well-known Symbols"}),e.jsx(s,{children:`const s = Symbol.for("app:token"); Symbol.keyFor(s) // "app:token"
// well-known: iterator, asyncIterator, toStringTag, toPrimitive, hasInstance, species ...`}),e.jsx("h3",{children:"50) Intl Deep Cuts"}),e.jsx(s,{children:`new Intl.Collator("en").compare("a","b"); // sorting
new Intl.RelativeTimeFormat("en").format(-1, "day"); // "1 day ago"
new Intl.ListFormat("en", { style:"short", type:"conjunction" }).format(["a","b","c"]);
new Intl.PluralRules("en").select(1); // "one"`}),e.jsx("h3",{children:"51) URL & URLSearchParams"}),e.jsx(s,{children:`const u = new URL("https://x.dev/p?q=js#h");
u.searchParams.get("q"); // "js"
u.hash; // "#h"`}),e.jsx("h3",{children:"52) Encoding Helpers"}),e.jsx(s,{children:`new TextEncoder().encode("hi") // Uint8Array
new TextDecoder().decode(new Uint8Array([104,105])) // "hi"
// Browser: btoa/atob ; Node: Buffer.from(...).toString("base64")`}),e.jsx("h3",{children:"53) SharedArrayBuffer & Atomics (concept)"}),e.jsx("p",{children:"Language primitives for cross-thread memory (Workers). Use atomics for safe coordination."}),e.jsx(s,{children:`// Example shape (not runnable in this page)
/*
const sab = new SharedArrayBuffer(4);
const view = new Int32Array(sab);
Atomics.add(view, 0, 1);
*/`}),e.jsx("h3",{children:"54) WeakRef & FinalizationRegistry (advanced)"}),e.jsx("p",{children:"Weakly reference objects and observe collection; avoid for core logic."}),e.jsx(s,{children:`const wr = new WeakRef({ big:true });
const fr = new FinalizationRegistry(token => {/* cleanup */});`}),e.jsx("h3",{children:"55) Control Flow Edge Cases"}),e.jsx(s,{children:`outer: for (let i=0;i<3;i++){
  for (let j=0;j<3;j++){ if(i*j>2) break outer; }
}`}),e.jsxs("h3",{children:["56) ",e.jsx("code",{children:"typeof"})," undeclared • ",e.jsx("code",{children:"delete"})," semantics"]}),e.jsx(s,{children:`typeof notDeclared   // "undefined" (no ReferenceError)
delete obj.prop     // true (own prop); delete x // false on local bindings`}),e.jsx("h3",{children:"57) Small Syntax Wins"}),e.jsx(s,{children:`[1,2,3].at(-1)    // 3
1_000_000 + 1      // 1000001
2 ** 10            // 1024`}),e.jsx("h3",{children:"58) Scheduling note"}),e.jsxs("p",{children:[e.jsx("code",{children:"requestIdleCallback"})," (browser host API) schedules low-priority work—feature-detect if you use it."]}),e.jsx("h3",{children:"59) Timing & Perf APIs"}),e.jsx(s,{children:`performance.now(); // high-res timer
console.table([{name:"a",v:1},{name:"b",v:2}]);`}),e.jsx("h3",{children:"60) Language vs Platform"}),e.jsxs("p",{children:["JS is the language. DOM/Fetch are browser APIs; FS/Net/Crypto are Node. Node adds ",e.jsx("code",{children:"process.nextTick"}),"/",e.jsx("code",{children:"setImmediate"}),"."]}),e.jsxs("p",{style:{marginTop:10,opacity:.8},children:[e.jsx("em",{children:"Mini-checklist:"})," scope chain • TDZ • full ",e.jsx("code",{children:"this"})," rules • call/apply/bind • prototypes/classes • descriptors & property order • arrays & non-mutating ops • destructuring/spread • params scope/defaults • maps/sets & weaks • strings/regex (unicode, sticky) • numbers (EPSILON, safe ints) & BigInt • dates & Intl • errors (.cause) • event loop (micro vs macro) • promises patterns • timers & rAF • ESM + TLA • optional chaining/nullish • logical assignment • iterables/generators • proxy/reflect/symbols • shallow vs deep copy • instanceof/hasInstance • freeze/seal • JSON quirks & toJSON • arguments vs rest • strict/eval/new.target • typed arrays/DataView • bitwise vs BigInt bitwise • SAB+Atomics (concept) • WeakRef/FinalizationRegistry • URL & encoding helpers."]})]}),e.jsxs(n.CardGrid,{children:[e.jsxs(t,{to:"/javascript/theory",className:"card",children:[e.jsx("h3",{children:"Theory QnA"}),e.jsx("p",{children:"Concepts, syntax, correct vs wrong, gotchas."})]}),e.jsxs(t,{to:"/javascript/programs",className:"card",children:[e.jsx("h3",{children:"Programs QnA"}),e.jsx("p",{children:"Problem → approach → code → complexity → tests."})]})]})]})};export{l as default};
