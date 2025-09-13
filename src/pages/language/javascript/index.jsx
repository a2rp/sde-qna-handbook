import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";

const Code = ({ children }) => (
    <pre
        style={{
            margin: "8px 0 14px",
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid hsl(0 0% 100% / 0.12)",
            background: "hsl(0 0% 100% / 0.04)",
            overflowX: "auto",
            lineHeight: 1.5,
            fontSize: 13.5,
        }}
    >
        {children}
    </pre>
);

const JavaScript = () => {
    const { pathname } = useLocation();

    return (
        <Styled.Page>
            <Styled.Header>
                <h1>JavaScript — Overview</h1>
                <p className="muted">
                    You are on: <code>{pathname}</code>
                </p>
            </Styled.Header>

            <Styled.Panel>
                <p>
                    <strong>Definition:</strong> JavaScript is a high-level, dynamic,{" "}
                    <em>prototype-based</em>, multi-paradigm language (ECMAScript). It runs in
                    browsers and on servers (Node.js), uses a single-threaded event loop with
                    non-blocking I/O, and supports first-class functions, lexical scope
                    (closures), modules, and async/await.
                </p>

                {/* 0) Execution Context & Scope Chain */}
                <h3>0) Execution Context, Lexical Environment & Scope Chain</h3>
                <p>
                    Code runs inside <em>execution contexts</em> (global, function, eval). Each has a
                    <em> lexical environment</em> that forms a <em>scope chain</em> for lookups.
                </p>
                <Code>{`let x = 1;
function outer(){ let y = 2; function inner(){ return x + y } return inner() }
outer(); // 3  (inner closes over x,y through scope chain)`}</Code>

                {/* 1) Values & Types */}
                <h3>1) Values & Types</h3>
                <p>
                    <strong>Primitives:</strong> <code>undefined</code>, <code>null</code>,{" "}
                    <code>boolean</code>, <code>number</code>, <code>bigint</code>,{" "}
                    <code>string</code>, <code>symbol</code>. Everything else is an object.
                </p>
                <Code>{`typeof 42      // "number"
typeof 42n     // "bigint"
typeof null    // "object" (legacy quirk)
typeof (()=>{})// "function"`}</Code>
                <p>Primitives copy by value; objects by reference.</p>

                {/* 2) Truthy/Falsy & Coercion */}
                <h3>2) Truthy/Falsy & Coercion</h3>
                <p>Falsy: <code>false, 0, -0, 0n, "", null, undefined, NaN</code>.</p>
                <Code>{`Boolean([])        // true
Number("12px")   // NaN
"" || "fallback" // "fallback"`}</Code>

                {/* 3) Equality */}
                <h3>3) Equality</h3>
                <p>
                    Prefer <code>===</code>. Safe <code>==</code> use: <code>x == null</code> for{" "}
                    <code>null|undefined</code>. <code>Object.is</code> fixes <code>NaN</code> and{" "}
                    <code>-0</code>.
                </p>
                <Code>{`NaN === NaN         // false
Object.is(NaN, NaN) // true
0 === -0            // true
Object.is(0, -0)    // false`}</Code>

                {/* 4) Variables, Scope, Hoisting */}
                <h3>4) Variables, Scope, Hoisting</h3>
                <p>
                    <code>let/const</code>: block scope + TDZ; <code>var</code>: function scope, hoisted to{" "}
                    <code>undefined</code>. Prefer <code>const</code>.
                </p>
                <Code>{`console.log(a); // undefined (var hoisted)
var a = 1;

console.log(b); // ReferenceError (TDZ)
let b = 2;`}</Code>

                {/* 5) Functions, this, Closures */}
                <h3>5) Functions, <code>this</code>, Closures</h3>
                <p>
                    Arrows capture lexical <code>this</code>; normal functions bind by call-site. Closures keep outer vars alive.
                </p>
                <Code>{`const obj = {
  x: 10,
  f(){ setTimeout(function(){ console.log(this?.x) }, 0) }, // undefined
  g(){ setTimeout(() => console.log(this.x), 0) }            // 10
}; obj.f(); obj.g();`}</Code>

                {/* 6) Full this binding rules */}
                <h4 style={{ marginTop: 6 }}>6) Complete <code>this</code> Binding Rules</h4>
                <Code>{`// default: undefined (strict) or window (sloppy)
function f(){ return this } f(); // undefined in modules/strict
// implicit: receiver object
obj.m(); // this = obj
// explicit: call/apply/bind
f.call(customThis);
// constructor: new
new C(); // this = new instance
// arrow: lexical this (from surrounding scope)`}</Code>

                {/* 7) call/apply/bind */}
                <h3>7) call • apply • bind</h3>
                <p>Control <code>this</code> & argument passing.</p>
                <Code>{`function greet(g, p){ return g + " " + this.name + p }
const ctx = { name:"Ash" };
greet.call(ctx, "Hi", "!");      // "Hi Ash!"
greet.apply(ctx, ["Hello", "."]); // "Hello Ash."
const hiAsh = greet.bind(ctx, "Hi");
hiAsh("?"); // "Hi Ash?"`}</Code>

                {/* 8) Objects, Prototypes, Classes */}
                <h3>8) Objects, Prototypes, Classes</h3>
                <p>Prototype chain handles property lookup; classes sugar prototype patterns.</p>
                <Code>{`const proto = { greet(){ return "hi" } };
const o = Object.create(proto);
o.greet(); // "hi"`}</Code>
                <p>Use descriptors via <code>Object.defineProperty</code>; check own props with <code>Object.hasOwn</code>.</p>

                {/* 9) Property Attributes & Order */}
                <h3>9) Property Attributes & Enumeration Order</h3>
                <p>Attributes: <code>writable</code>, <code>enumerable</code>, <code>configurable</code>, getters/setters.</p>
                <Code>{`const o = {};
Object.defineProperty(o, "id", { value:1, writable:false });
Object.keys(o); // [] if not enumerable
// Order: integer-like keys asc → string keys insertion → symbols insertion`}</Code>

                {/* 10) Arrays (must-know) */}
                <h3>10) Arrays (must-know APIs)</h3>
                <p>Prefer non-mutating <code>toSorted/toReversed/toSpliced</code> when clear.</p>
                <Code>{`[3,1,2].toSorted()         // [1,2,3]
[1,2,3].map(x=>x*2)      // [2,4,6]
[1,2,3].find(x=>x>1)     // 2
[1,2,3].some(x=>x%2===0) // true`}</Code>

                {/* 11) Destructuring/Spread/Rest */}
                <h3>11) Destructuring, Rest & Spread</h3>
                <p>Defaults apply only to <code>undefined</code> (not <code>null</code>).</p>
                <Code>{`const user = { id:1, name:"Ash", role:"dev" };
const { name, ...meta } = user;   // meta: {id:1, role:"dev"}
const nums = [1,2,3]; const more = [0, ...nums, 4];`}</Code>

                {/* 12) Parameter scope/TDZ & defaults */}
                <h3>12) Parameters: scope, defaults, TDZ</h3>
                <p>Default expressions form their own scope; referencing later params is TDZ.</p>
                <Code>{`function f(a = b, b = 2){ return a + b } // ReferenceError (a uses b before init)
function g(a = 1, b = a+1){ return [a,b] } // ok -> [1,2]`}</Code>

                {/* 13) Map/Set & Weaks */}
                <h3>13) Map/Set & WeakMap/WeakSet</h3>
                <p>Map keys can be any value; Weak collections don’t prevent GC of object keys.</p>
                <Code>{`const m = new Map([[{id:1},"meta"]]);
const s = new Set([1,1,2]); // Set {1,2}`}</Code>

                {/* 14) Strings & RegExp */}
                <h3>14) Strings & RegExp</h3>
                <p>Template literals; regex flags <code>g i m s u y</code>; named groups; indices (<code>d</code> flag) where supported.</p>
                <Code>{'`Hello, ${"Ash"}!`\\n/(?<area>\\d{3})-(?<num>\\d{7})/u.exec("080-1234567").groups.area'}</Code>

                {/* 15) Numbers, BigInt, Math, Date, Intl */}
                <h3>15) Numbers • BigInt • Date • Intl</h3>
                <p>IEEE-754 double; safe range ±(2^53−1). Use <code>EPSILON</code> for float comparisons; BigInt for large ints.</p>
                <Code>{`Number.EPSILON > 0              // true
(0.1 + 0.2 - 0.3) < Number.EPSILON // ~true
const id = 9007199254740993n;      // BigInt
new Date().toISOString();
new Intl.NumberFormat("en-IN").format(1234567); // "12,34,567"`}</Code>

                {/* 16) Errors */}
                <h3>16) Errors & Exceptions</h3>
                <p>Built-ins: Type/Reference/Range/Syntax/Aggregate. Attach context with <code>.cause</code>.</p>
                <Code>{`try { throw new Error("fail", { cause:{ step:"parse" } }) }
catch (e) { console.error(e.message, e.cause.step) }`}</Code>

                {/* 17) Event Loop */}
                <h3>17) Event Loop (tasks vs microtasks)</h3>
                <p>Microtasks (Promises) run before the next macrotask (e.g., timeout).</p>
                <Code>{`setTimeout(()=>console.log("task"), 0);
Promise.resolve().then(()=>console.log("micro"));
console.log("sync"); // sync → micro → task`}</Code>

                {/* 18) Promises & async/await */}
                <h3>18) Promises & <code>async/await</code></h3>
                <p>Use <code>Promise.all</code> for parallelism; <code>allSettled</code> for best-effort; <code>any</code> for first-success.</p>
                <Code>{`async function load(urls){
  const res = await Promise.all(urls.map(u=>fetch(u)));
  return Promise.all(res.map(r=>r.json()));
}`}</Code>

                {/* 19) Timers & Abort */}
                <h3>19) Timers & Abort</h3>
                <p>Cancel stale work when API supports <code>AbortSignal</code>.</p>
                <Code>{`const ac = new AbortController();
fetch("/api", { signal: ac.signal }); ac.abort();`}</Code>

                {/* 20) Modules (ESM) */}
                <h3>20) Modules (ESM)</h3>
                <p>Named/default exports; live bindings; dynamic import; top-level <code>await</code> (ESM only).</p>
                <Code>{`// math.js
export const add = (a,b)=>a+b;
export default Math.random;
// use
import rnd, { add } from "./math.js";`}</Code>

                {/* 21) Optional chaining & Nullish */}
                <h3>21) Optional Chaining & Nullish</h3>
                <p>Safe access <code>?.</code>; fallback only for <code>null|undefined</code> via <code>??</code>.</p>
                <Code>{`user.profile?.email ?? "(not set)"`}</Code>

                {/* 22) Logical assignment */}
                <h3>22) Logical Assignment</h3>
                <Code>{`config.timeout ??= 3000; // only if null/undefined
cache[key] ||= compute();   // only if falsy`}</Code>

                {/* 23) Iterables/Generators/Async */}
                <h3>23) Iterables, Generators, Async Iteration</h3>
                <Code>{`function* range(n){ for(let i=0;i<n;i++) yield i }
[...range(3)] // [0,1,2]
async function* nums(){ yield 1; yield 2 }
for await (const x of nums()) {/* ... */}`}</Code>

                {/* 24) Proxy/Reflect/Symbols (core) */}
                <h3>24) Meta: Proxy • Reflect • Symbols</h3>
                <p>Intercept ops; Reflect mirrors object ops; Symbols customize protocols.</p>
                <Code>{`const p = new Proxy({}, { get:(t,k)=> (k in t ? t[k] : "(missing)") });
Reflect.ownKeys({a:1, [Symbol("s")]:2}); // ["a", Symbol(s)]`}</Code>

                {/* 25) Memory & GC */}
                <h3>25) Memory & GC</h3>
                <p>GC by reachability; leaks from retained refs (closures/listeners/caches). Use WeakMap for ephemeral metadata.</p>
                <Code>{`const wm = new WeakMap();
(function(){ const o={}; wm.set(o,"meta"); })(); // o collectible`}</Code>

                {/* 26) Performance */}
                <h3>26) Performance Basics</h3>
                <p>Stable shapes, avoid array holes, batch async, measure (don’t guess).</p>
                <Code>{`console.time("sum"); let s=0; for(let i=0;i<1e6;i++) s+=i; console.timeEnd("sum");`}</Code>

                {/* 27) ToPrimitive & Symbol.toPrimitive */}
                <h3>27) ToPrimitive & <code>Symbol.toPrimitive</code></h3>
                <Code>{`const user = { [Symbol.toPrimitive](hint){ return hint==="string" ? "user" : 7 } };
1 + user      // 8   (number hint)
"hi " + user  // "hi user"`}</Code>

                {/* 28) Shallow vs Deep Copy */}
                <h3>28) Shallow vs Deep Copy</h3>
                <Code>{`const a = { nested:{ x:1 } };
const b = { ...a }; b.nested.x = 9; // mutates a
const c = structuredClone(a);       // deep`}</Code>

                {/* 29) instanceof & Symbol.hasInstance */}
                <h3>29) <code>instanceof</code> & <code>Symbol.hasInstance</code></h3>
                <Code>{`class A { static [Symbol.hasInstance](v){ return "mark" in v } }
({ mark:true }) instanceof A // true`}</Code>

                {/* 30) class fields, private, super */}
                <h3>30) Class Fields • Private • <code>super</code></h3>
                <Code>{`class Counter {
  #n = 0;
  inc(){ return ++this.#n }
  static from(n){ const c = new Counter(); c.#n = n; return c }
}`}</Code>

                {/* 31) Error patterns & finally */}
                <h3>31) Error Patterns & <code>finally</code></h3>
                <Code>{`try { /* ... */ }
catch (e) { /* log/transform */ }
finally { /* cleanup: close handles, abort signals, clear timers */ }`}</Code>

                {/* 32) Promise patterns (seq/parallel/retry) */}
                <h3>32) Promise Patterns (sequential • parallel • retry)</h3>
                <Code>{`// parallel
const [a,b] = await Promise.all([fa(), fb()]);
// sequential dependency
const a1 = await fa(); const b1 = await fb(a1);
// retry (basic)
const retry = (f,n=3)=> f().catch(e=> n>1 ? retry(f,n-1) : Promise.reject(e));`}</Code>

                {/* 33) Unhandled rejections & Node turn */}
                <h3>33) Unhandled Rejections & Node specifics</h3>
                <Code>{`window.addEventListener("unhandledrejection", e => console.error(e.reason));
process.on?.("unhandledRejection", r => console.error(r));
process.nextTick?.(()=>console.log("nextTick before Promise microtasks"));`}</Code>

                {/* 34) Custom Iterators */}
                <h3>34) Custom Iterators</h3>
                <Code>{`const it = {
  cur:0, max:3,
  [Symbol.iterator](){ return this },
  next(){ return this.cur < this.max ? {value:this.cur++, done:false} : {done:true} }
};
[...it] // [0,1,2]`}</Code>

                {/* 35) RegExp sticky & unicode properties */}
                <h3>35) RegExp Sticky & Unicode Props</h3>
                <Code>{`const r = /\\p{Letter}+/uy; r.lastIndex = 1; r.exec(" नमस्ते")?.[0]`}</Code>

                {/* 36) Floating-point pitfalls & safe ints */}
                <h3>36) Floating-point Pitfalls & Safe Integers</h3>
                <Code>{`Number.MAX_SAFE_INTEGER // 9007199254740991
0.1 + 0.2 === 0.3     // false
Math.abs((0.1+0.2)-0.3) < Number.EPSILON // true-ish`}</Code>

                {/* 37) Bitwise (32-bit) vs BigInt bitwise */}
                <h3>37) Bitwise: 32-bit vs BigInt</h3>
                <p>Bitwise on numbers uses 32-bit ints; BigInt supports <code>& | ^ ~ &lt;&lt; &gt;&gt;</code> (no unsigned &gt;&gt;&gt;).</p>
                <Code>{`(1 << 31) >> 31     // -1 (sign-propagating)
(1n << 65n) | 3n     // BigInt bit ops`}</Code>

                {/* 38) TypedArrays & DataView */}
                <h3>38) TypedArrays & DataView</h3>
                <Code>{`const buf = new ArrayBuffer(4);
new DataView(buf).setUint32(0, 0xdeadbeef, /* littleEndian */ true);
new Uint8Array(buf) // bytes`}</Code>

                {/* 39) Set operations */}
                <h3>39) Set Operations (union/intersection)</h3>
                <Code>{`const union = (a,b)=> new Set([...a, ...b]);
const inter = (a,b)=> new Set([...a].filter(x => b.has(x)));`}</Code>

                {/* 40) Debounce & Throttle */}
                <h3>40) Debounce & Throttle</h3>
                <Code>{`const debounce = (fn, ms) => { let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms) } };
const throttle = (fn, ms) => { let ok=true; return (...a)=>{ if(!ok) return; ok=false; fn(...a); setTimeout(()=>ok=true, ms) } };`}</Code>

                {/* 41) rAF & Timer Clamping */}
                <h3>41) Animation Frames & Timer Clamping</h3>
                <p><code>requestAnimationFrame</code> runs before paint; nested timeouts clamp to ~4ms in browsers.</p>
                <Code>{`requestAnimationFrame(ts => {/* smooth UI work */})`}</Code>

                {/* 42) Freeze/Seal */}
                <h3>42) Freeze/Seal</h3>
                <Code>{`const obj = Object.freeze({ a:1 }); Object.isFrozen(obj) // true`}</Code>

                {/* 43) for...in vs Object.* & Reflect */}
                <h3>43) <code>for...in</code> vs <code>Object.*</code> vs <code>Reflect</code></h3>
                <Code>{`const o = Object.create({ a:1 }); o.b = 2;
Object.keys(o) // ["b"]
for (const k in o) {/* a & b */}
Reflect.ownKeys(o) // ["b"] (plus symbols if any)`}</Code>

                {/* 44) JSON quirks & toJSON */}
                <h3>44) JSON Quirks & <code>toJSON</code></h3>
                <p><code>undefined</code>/functions/symbols drop; cycles throw; customize with replacer or <code>toJSON</code>.</p>
                <Code>{`JSON.stringify({x:undefined, y:1}) // '{"y":1}'
const user = { name:"Ash", toJSON(){ return { n:this.name } } };
JSON.stringify(user) // '{"n":"Ash"}'`}</Code>

                {/* 45) arguments vs rest */}
                <h3>45) <code>arguments</code> vs Rest Params</h3>
                <p><code>arguments</code> is array-like, not real array; in strict mode it doesn't map to params.</p>
                <Code>{`function f(...args){ return args.slice(1) }`}</Code>

                {/* 46) eval & Function ctor (use sparingly) */}
                <h3>46) <code>eval</code> & Function Constructor</h3>
                <p>Avoid for security/perf; in strict mode, eval has its own scope.</p>
                <Code>{`"use strict"; const x=1; eval("var x=2"); x // 1`}</Code>

                {/* 47) Strict mode notes */}
                <h3>47) Strict Mode Details</h3>
                <p>Modules are strict by default; disallows <code>with</code>, octal escapes, duplicate params; <code>this</code> remains <code>undefined</code> in plain calls.</p>

                {/* 48) new.target */}
                <h3>48) <code>new.target</code></h3>
                <Code>{`function C(){ if(!new.target) return new C(); } C(); // safe ctor`}</Code>

                {/* 49) Symbol registry & well-known symbols */}
                <h3>49) Symbol Registry & Well-known Symbols</h3>
                <Code>{`const s = Symbol.for("app:token"); Symbol.keyFor(s) // "app:token"
// well-known: iterator, asyncIterator, toStringTag, toPrimitive, hasInstance, species ...`}</Code>

                {/* 50) Intl deep cuts */}
                <h3>50) Intl Deep Cuts</h3>
                <Code>{`new Intl.Collator("en").compare("a","b"); // sorting
new Intl.RelativeTimeFormat("en").format(-1, "day"); // "1 day ago"
new Intl.ListFormat("en", { style:"short", type:"conjunction" }).format(["a","b","c"]);
new Intl.PluralRules("en").select(1); // "one"`}</Code>

                {/* 51) URL & search params */}
                <h3>51) URL & URLSearchParams</h3>
                <Code>{`const u = new URL("https://x.dev/p?q=js#h");
u.searchParams.get("q"); // "js"
u.hash; // "#h"`}</Code>

                {/* 52) Encoding helpers */}
                <h3>52) Encoding Helpers</h3>
                <Code>{`new TextEncoder().encode("hi") // Uint8Array
new TextDecoder().decode(new Uint8Array([104,105])) // "hi"
// Browser: btoa/atob ; Node: Buffer.from(...).toString("base64")`}</Code>

                {/* 53) SAB & Atomics (concept) */}
                <h3>53) SharedArrayBuffer & Atomics (concept)</h3>
                <p>Language primitives for cross-thread memory (Workers). Use atomics for safe coordination.</p>
                <Code>{`// Example shape (not runnable in this page)
/*
const sab = new SharedArrayBuffer(4);
const view = new Int32Array(sab);
Atomics.add(view, 0, 1);
*/`}</Code>

                {/* 54) WeakRef & FinalizationRegistry (advanced) */}
                <h3>54) WeakRef & FinalizationRegistry (advanced)</h3>
                <p>Weakly reference objects and observe collection; avoid for core logic.</p>
                <Code>{`const wr = new WeakRef({ big:true });
const fr = new FinalizationRegistry(token => {/* cleanup */});`}</Code>

                {/* 55) Control flow: labels, break/continue */}
                <h3>55) Control Flow Edge Cases</h3>
                <Code>{`outer: for (let i=0;i<3;i++){
  for (let j=0;j<3;j++){ if(i*j>2) break outer; }
}`}</Code>

                {/* 56) typeof undeclared & delete */}
                <h3>56) <code>typeof</code> undeclared • <code>delete</code> semantics</h3>
                <Code>{`typeof notDeclared   // "undefined" (no ReferenceError)
delete obj.prop     // true (own prop); delete x // false on local bindings`}</Code>

                {/* 57) at(), numeric separators, exponentiation */}
                <h3>57) Small Syntax Wins</h3>
                <Code>{`[1,2,3].at(-1)    // 3
1_000_000 + 1      // 1000001
2 ** 10            // 1024`}</Code>

                {/* 58) requestIdleCallback (host) note */}
                <h3>58) Scheduling note</h3>
                <p><code>requestIdleCallback</code> (browser host API) schedules low-priority work—feature-detect if you use it.</p>

                {/* 59) performance.now & friends */}
                <h3>59) Timing & Perf APIs</h3>
                <Code>{`performance.now(); // high-res timer
console.table([{name:"a",v:1},{name:"b",v:2}]);`}</Code>

                {/* 60) Language vs Platform (Browser vs Node) */}
                <h3>60) Language vs Platform</h3>
                <p>JS is the language. DOM/Fetch are browser APIs; FS/Net/Crypto are Node. Node adds <code>process.nextTick</code>/<code>setImmediate</code>.</p>

                <p style={{ marginTop: 10, opacity: 0.8 }}>
                    <em>Mini-checklist:</em> scope chain • TDZ • full <code>this</code> rules • call/apply/bind • prototypes/classes •
                    descriptors & property order • arrays & non-mutating ops • destructuring/spread • params scope/defaults • maps/sets & weaks •
                    strings/regex (unicode, sticky) • numbers (EPSILON, safe ints) & BigInt • dates & Intl • errors (.cause) •
                    event loop (micro vs macro) • promises patterns • timers & rAF • ESM + TLA • optional chaining/nullish • logical assignment •
                    iterables/generators • proxy/reflect/symbols • shallow vs deep copy • instanceof/hasInstance • freeze/seal •
                    JSON quirks & toJSON • arguments vs rest • strict/eval/new.target • typed arrays/DataView • bitwise vs BigInt bitwise •
                    SAB+Atomics (concept) • WeakRef/FinalizationRegistry • URL & encoding helpers.
                </p>
            </Styled.Panel>

            <Styled.CardGrid>
                <NavLink to="/javascript/theory" className="card">
                    <h3>Theory QnA</h3>
                    <p>Concepts, syntax, correct vs wrong, gotchas.</p>
                </NavLink>
                <NavLink to="/javascript/programs" className="card">
                    <h3>Programs QnA</h3>
                    <p>Problem → approach → code → complexity → tests.</p>
                </NavLink>
            </Styled.CardGrid>
        </Styled.Page>
    );
};

export default JavaScript;
