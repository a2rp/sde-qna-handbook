import React, { useMemo, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import QnaItem, { Code } from "../../../components/QnaItem";
import BreadcrumbsBar from "../../../components/BreadcrumbsBar";

const Styled = {
    Wrapper: styled.div`
        padding: 16px;
        display: grid;
        gap: 12px;
    `,
    TopBar: styled.div`
        display: grid;
        grid-template-columns: 1fr 280px;
        gap: 12px;
        align-items: center;
        margin-bottom: 6px;

        @media (max-width: 720px) {
        grid-template-columns: 1fr;
        }
    `,
    SearchBox: styled.div`
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
    `,
    Count: styled.div`
        font-size: 12px; opacity: .75; margin: 2px 0 8px;
    `,
};

const QNAS = [
    {
        id: "js-what-is-javascript",
        question: "What is JavaScript?",
        text:
            "JavaScript is a high-level, dynamic, prototype-based, multi-paradigm language standardized as ECMAScript. Runs in browsers and Node. Event loop, closures, modules, async/await.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> JavaScript is a high-level, dynamic,{" "}
                    <em>prototype-based</em>, multi-paradigm language standardized as{" "}
                    <strong>ECMAScript</strong>. It runs in browsers and on servers (Node.js),
                    uses a single-threaded event loop with non-blocking I/O, and supports
                    first-class functions, lexical scope (closures), modules, and async/await.
                </p>
                <p>
                    <strong>Language vs Platform:</strong> JS = language; host APIs vary - Browser
                    (DOM, fetch) vs Node (fs, net, crypto).
                </p>
                <Code>{`console.log("Hello, JavaScript!");
function makeAdder(x){ return y => x + y }
makeAdder(10)(3); // 13`}</Code>
                <p>
                    <strong>Gotchas:</strong> float precision (<code>0.1 + 0.2 !== 0.3</code>),{" "}
                    <code>this</code> rules, <code>==</code> coercion,{" "}
                    <code>typeof null === "object"</code>.
                </p>
            </>
        ),
    },

    {
        id: "js-what-is-ecmascript",
        question: "What is ECMAScript?",
        text:
            "ECMAScript (ECMA-262) is the official language specification that defines JavaScript syntax, semantics, and built-ins (e.g., Promise, Map, Array methods).",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <em>ECMAScript (ES)</em> is the official <strong>ECMA-262</strong> spec for the JavaScript language:
                    grammar, types, operators, standard objects, and methods.
                </p>
                <p>
                    <strong>Why it matters:</strong> ES defines what works uniformly across engines (V8/SpiderMonkey/JSC). Things like DOM or Node's <code>fs</code> are <em>not</em> ECMAScript-they're host APIs.
                </p>
                <Code>{`// ECMAScript feature (portable across runtimes):
const email = user?.profile?.email ?? "(not set)";

// NOT ECMAScript (host APIs):
// document.querySelector("h1")   // Browser DOM
// (await import("node:fs/promises")).readFile // Node`}</Code>
                <p>
                    <strong>Gotcha:</strong> ES features are released yearly (ES2015+). Older environments may need transpile/polyfills.
                </p>
            </>
        )
    },

    {
        id: "js-what-is-js-engine",
        question: "What is a JavaScript engine?",
        text:
            "A JavaScript engine parses, compiles (often JIT), and executes JS code with garbage collection. Examples: V8 (Chrome/Node), SpiderMonkey (Firefox), JavaScriptCore (Safari).",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> A <em>JavaScript engine</em> is the program that
                    <em> parses → compiles (JIT) → executes</em> JavaScript and manages memory via
                    garbage collection. It implements the ECMAScript spec.
                </p>
                <p>
                    <strong>Examples:</strong> V8 (Chrome, Node, Deno, Bun uses a fork), SpiderMonkey (Firefox),
                    JavaScriptCore / Nitro (Safari).
                </p>
                <Code>{`// Engines run your JS (same code, different engines)
console.log("Hello from the engine!");
// Under the hood: parse -> optimize -> JIT -> run -> GC`}</Code>
                <p>
                    <strong>Why it matters:</strong> Performance and feature availability depend on the engine version.
                    New ECMAScript features appear as engines ship support.
                </p>
                <p>
                    <strong>Gotcha:</strong> An <em>engine</em> is not a <em>runtime</em>. DOM, fetch, fs, etc. come from the host runtime,
                    not the engine itself.
                </p>
            </>
        )
    },

    {
        id: "js-what-is-runtime",
        question: "What is a JavaScript runtime?",
        text:
            "A runtime is the environment that hosts the JS engine and provides APIs (I/O, timers, modules) plus an event loop. Examples: Browser, Node.js, Deno, Bun.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> A <em>JavaScript runtime</em> = JS engine <em>+</em> host APIs <em>+</em> event loop.
                    It's the environment where JS runs and where non-language features come from.
                </p>
                <ul>
                    <li><strong>Browser:</strong> DOM, <code>fetch</code>, <code>localStorage</code>, <code>requestAnimationFrame</code>, Workers…</li>
                    <li><strong>Node.js:</strong> <code>fs</code>, <code>net</code>, <code>http</code>, <code>process</code>, <code>Buffer</code>, timers…</li>
                    <li><strong>Deno/Bun:</strong> similar idea, different standard libs and tooling.</li>
                </ul>
                <Code>{`// ECMAScript (language) works everywhere:
[1,2,3].map(x => x * 2);

// Browser-only (host APIs):
// document.querySelector("h1");
// await fetch("/api");

// Node-only (host APIs):
// import { readFile } from "node:fs/promises";
// const txt = await readFile("notes.txt", "utf8");`}</Code>
                <p>
                    <strong>Why it matters:</strong> Tells you what's portable (language) vs what depends on the environment (host APIs).
                </p>
                <p>
                    <strong>Gotcha:</strong> Don't assume browser APIs exist in Node (and vice-versa). Choose the right polyfills or runtime-specific code paths.
                </p>
            </>
        )
    },

    {
        id: "js-what-is-event-loop",
        question: "What is the event loop?",
        text:
            "The event loop lets single-threaded JS run non-blocking: it executes the call stack, then runs microtasks (Promises) before moving to the next macrotask (timers/I-O).",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> The <em>event loop</em> drives execution in JS runtimes.
                    After synchronous code finishes, the runtime flushes all <strong>microtasks</strong>
                    (e.g., Promise callbacks, <code>queueMicrotask</code>) <em>before</em> handling the next
                    <strong>macrotask</strong> (e.g., <code>setTimeout</code>, I/O, message events).
                </p>

                <Code>{`setTimeout(() => console.log("task"), 0);      // macrotask
Promise.resolve().then(() => console.log("micro")); // microtask
console.log("sync");
// order: sync → micro → task`}</Code>

                <p>
                    <strong>Why it matters:</strong> Explains timing/order bugs, UI freezes (long sync blocks),
                    and why <em>Promises often run “before” timeouts</em>.
                </p>

                <p>
                    <strong>Gotchas:</strong> A tight microtask loop (e.g., recursively scheduling microtasks)
                    can starve macrotasks/rendering; <code>setTimeout(fn, 0)</code> never runs “immediately”
                    (minimum clamping, scheduled after current microtasks).
                </p>
            </>
        )
    },

    {
        id: "js-primitive-types",
        question: "What are the primitive types in JavaScript?",
        text:
            "Seven primitives: undefined, null, boolean, number, bigint, string, symbol. Primitives are immutable and compared by value; everything else is an object.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> JavaScript has <strong>7 primitive types</strong>:
                    <code>undefined</code>, <code>null</code>, <code>boolean</code>, <code>number</code>,
                    <code>bigint</code>, <code>string</code>, <code>symbol</code>. Everything else is an <em>object</em>.
                </p>
                <p>
                    <strong>Traits:</strong> Primitives are <em>immutable</em> and are copied <em>by value</em>.
                    When you access a “method” on a primitive (e.g., <code>"hi".toUpperCase()</code>), engines use a temporary wrapper object behind the scenes.
                </p>
                <Code>{`typeof 42           // "number"
typeof 42n          // "bigint"
typeof "hi"         // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof Symbol("x")  // "symbol"
typeof null         // "object"   // historical quirk
typeof function(){} // "function" // special-case object`}</Code>
                <p>
                    <strong>Gotchas:</strong> <code>typeof null === "object"</code> (legacy quirk);
                    <code>NaN</code> is a <em>number</em>; use <code>Number.isNaN</code> to test;
                    <code>Object.is(0, -0)</code> distinguishes the two zeros.
                </p>
            </>
        )
    },

    {
        id: "js-what-is-object",
        question: "What is an object in JavaScript?",
        text:
            "An object is a mutable collection of key–value pairs with a prototype. Keys are strings or symbols. Objects are reference types and are compared by reference.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> An <em>object</em> is a dynamic collection of properties
                    (key → value) linked to a <em>prototype</em>. Property keys are either
                    <strong> strings</strong> (including numeric-like strings) or <strong>symbols</strong>.
                    Arrays and functions are also objects (specialized kinds).
                </p>

                <p>
                    <strong>Create:</strong> object literal <code>&#123;&#125;</code>, constructor
                    <code>Object()</code>, or <code>Object.create(proto)</code> (use
                    <code>Object.create(null)</code> for a dictionary without a prototype).
                </p>

                <Code>{`// 1) Create
const o1 = { name: "Ada" };         // literal
const o2 = Object();                 // empty with Object.prototype
const dict = Object.create(null);    // no prototype (safe for pure key->value)

// 2) Keys: strings or symbols
const S = Symbol("secret");
o1.age = 36;              // string key "age"
o1[S] = 123;              // symbol key (not enumerable by keys())`}</Code>

                <p>
                    <strong>Access:</strong> dot for identifier-like keys; bracket for dynamic or
                    non-identifier keys.
                </p>

                <Code>{`const key = "first-name";
const user = { "first-name": "Grace" };
user["first-name"]; // "Grace"
user[key];          // "Grace"`}</Code>

                <p>
                    <strong>Own vs inherited:</strong> “Own” properties live on the object; inherited
                    ones come from the prototype chain. Check with <code>Object.hasOwn(obj, k)</code> (own)
                    vs <code>k in obj</code> (own or inherited).
                </p>

                <Code>{`const base = { role: "admin" };
const obj = Object.create(base);
obj.name = "Lin";
Object.hasOwn(obj, "name"); // true
Object.hasOwn(obj, "role"); // false
"role" in obj;              // true (inherited)`}</Code>

                <p>
                    <strong>Descriptors (glimpse):</strong> Every property has attributes
                    <code>value</code>, <code>writable</code>, <code>enumerable</code>, <code>configurable</code>
                    (or getter/setter). Define via <code>Object.defineProperty</code>.
                </p>

                <Code>{`Object.defineProperty(obj, "id", {
  value: 1, writable: false, enumerable: false, configurable: true
});`}</Code>

                <p>
                    <strong>Equality & copy:</strong> Objects are <em>reference</em> types:
                    two distinct objects are never equal even if contents match. Spread/assign are
                    <em>shallow</em> copies.
                </p>

                <Code>{`const a = { x: { y: 1 } };
const b = { x: { y: 1 } };
a === b;                // false (different references)
const c = { ...a };     // shallow copy
c.x.y = 9; a.x.y;       // 9 (inner object shared if reused)`}</Code>

                <p>
                    <strong>Enumeration (quick):</strong> <code>Object.keys</code> → own enumerable
                    string keys; <code>Object.getOwnPropertyNames</code> → own string keys (incl. non-enum);
                    <code>Reflect.ownKeys</code> → own strings + symbols.
                </p>

                <p>
                    <strong>Gotchas:</strong> numeric keys are stored as strings; JSON drops
                    <code>undefined</code> and symbol-keyed properties; avoid using <code>__proto__</code> for writes
                    (use <code>Object.setPrototypeOf</code> or <code>Object.create</code>).
                </p>
            </>
        )
    },

    {
        id: "js-typeof-operator",
        question: "What does `typeof` do? (common results & quirks)",
        text:
            "`typeof` returns a string describing the operand's type. Special cases: functions → 'function', null → 'object', arrays → 'object'. For undeclared identifiers, `typeof` is safe and returns 'undefined'.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <code>typeof</code> is a unary operator that returns a
                    <em> type tag string</em> for its operand. It never throws on <em>undeclared identifiers</em>.
                </p>

                <Code>{`typeof undefined     // "undefined"
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
typeof notDeclared   // "undefined"`}</Code>

                <p>
                    <strong>Use correctly:</strong> for primitives, <code>typeof</code> is reliable.
                    To detect arrays use <code>Array.isArray(v)</code>. For objects by class, prefer
                    <code>v instanceof Ctor</code> (same realm) or
                    <code>Object.prototype.toString.call(v)</code> for a generic tag.
                </p>

                <Code>{`Array.isArray([1,2,3]);                  // true
({}) instanceof Object;                      // true (same realm)
Object.prototype.toString.call(/re/)         // "[object RegExp]"`}</Code>

                <p>
                    <strong>Gotchas:</strong> <code>typeof null === "object"</code> (legacy);
                    arrays/regex/functions all report as <code>"object"</code> or <code>"function"</code>,
                    so use the right helper as above.
                </p>
            </>
        )
    },

    {
        id: "js-truthy-vs-falsy",
        question: "What are truthy and falsy values?",
        text:
            "Falsy: false, 0, -0, 0n, \"\", null, undefined, NaN. Everything else is truthy (e.g., [], {}, \"0\", \"false\", \" \").",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> In boolean contexts (e.g., <code>if</code>, <code>while</code>, logical ops),
                    values are coerced to <em>true</em> or <em>false</em>. The only <strong>falsy</strong> values are:
                    <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>""</code> (empty string),
                    <code>null</code>, <code>undefined</code>, and <code>NaN</code>. Everything else is <strong>truthy</strong>.
                </p>

                <Code>{`// Falsy
Boolean(false); Boolean(0); Boolean(-0); Boolean(0n);
Boolean(""); Boolean(null); Boolean(undefined); Boolean(NaN); // all false

// Truthy (common surprises)
Boolean([]);          // true
Boolean({});          // true
Boolean("0");         // true
Boolean("false");     // true  (non-empty string)
Boolean(" ");         // true  (space)
Boolean(function(){});// true`}</Code>

                <p>
                    <strong>Why it matters:</strong> Logical operators short-circuit based on truthiness.
                    Use <code>??</code> when you only want to treat <code>null</code>/<code>undefined</code> as “missing”.
                </p>

                <Code>{`// OR (||) returns first truthy; can skip valid falsy like 0 or ""
const port = userPort || 3000;  // if userPort = 0 -> mistakenly picks 3000

// Nullish (??) treats only null/undefined as missing
const portSafe = userPort ?? 3000; // 0 stays 0

// AND (&&) returns first falsy or last value
const name = user && user.profile && user.profile.name;
// with optional chaining:
const name2 = user?.profile?.name;`}</Code>

                <p>
                    <strong>Gotchas:</strong> Empty array/object are truthy; don't rely on <code>||</code> for defaults when <code>0</code> or <code>""</code> are valid inputs-use <code>??</code>. Avoid mixing <code>==</code> with booleans; prefer explicit checks.
                </p>
            </>
        )
    },

    {
        id: "js-equality-operators",
        question: "== vs === vs Object.is - what's the difference?",
        text:
            "=== compares without coercion (preferred). == allows coercion with tricky rules; safe use is only x == null to match null or undefined. Object.is fixes NaN and -0 edge cases.",
        answer: (
            <>
                <p>
                    <strong>Definitions:</strong> <code>===</code> (strict) compares values <em>without</em> coercion.
                    <code>==</code> (loose) coerces types first (many corner cases).
                    <code>Object.is(a,b)</code> is like <code>===</code> but treats <code>NaN</code> as equal to itself and distinguishes <code>-0</code> from <code>0</code>.
                </p>

                <Code>{`"5" == 5          // true   (coerces)
"5" === 5         // false  (no coercion)

0 == false        // true   (0 coerces to false)
0 === false       // false

null == undefined // true   (special loose rule)
null === undefined// false

NaN === NaN       // false
Object.is(NaN, NaN) // true

0 === -0          // true
Object.is(0, -0)  // false`}</Code>

                <p>
                    <strong>Guideline:</strong> Use <code>===</code> by default. The only common, safe loose check is
                    <code> x == null</code> to match both <code>null</code> and <code>undefined</code>.
                </p>

                <Code>{`if (user.email == null) {
  // runs when email is null OR undefined (but not "")
}`}</Code>

                <p>
                    <strong>Objects:</strong> Equality is by <em>reference</em> (same identity), not by structure.
                </p>
                <Code>{`{a:1} === {a:1}  // false (different objects)
const o = {}; o === o     // true`}</Code>

                <p>
                    <strong>Gotchas (why avoid <code>==</code>):</strong> coercion chains can surprise:
                </p>
                <Code>{`[] == ""   // true   (toString -> "")
[] == 0    // true   ("" -> 0)
"" == 0    // true
false == "0" // true`}</Code>

                <p>
                    <strong>Takeaway:</strong> Prefer <code>===</code>. Use <code>Object.is</code> when you specifically care about
                    <code>NaN</code> or the sign of zero.
                </p>
            </>
        )
    },

    {
        id: "js-null-vs-undefined",
        question: "What's the difference between `null` and `undefined`?",
        text:
            "`undefined` = missing/uninitialized; `null` = intentional empty value set by the programmer. Use x == null to check for either; use ?? to default only when null/undefined.",
        answer: (
            <>
                <p>
                    <strong>Definitions:</strong> <code>undefined</code> means “missing / not set / not provided”.
                    It's the default for uninitialized variables, missing object properties, and functions with no return.
                    <code>null</code> is an <em>intentional</em> “no value” you assign to signal emptiness.
                </p>

                <Code>{`let a;            // a is undefined
const o = {};      // o.x is undefined
function f() {}    // f() returns undefined by default

let b = null;      // programmer explicitly sets empty value
`}</Code>

                <p>
                    <strong>Equality:</strong> <code>null == undefined</code> is <code>true</code> (loose equality special-case),
                    but they're not strictly equal.
                </p>

                <Code>{`null == undefined   // true
null === undefined  // false`}</Code>

                <p>
                    <strong>Recommended checks:</strong>
                </p>
                <ul>
                    <li>
                        Use <code>x == null</code> to match “either <code>null</code> or <code>undefined</code>”.
                    </li>
                    <li>
                        Use <code>??</code> (nullish coalescing) to default only when value is <code>null</code>/<code>undefined</code> (not for <code>0</code>, <code>""</code>, <code>false</code>).
                    </li>
                    <li>
                        Use optional chaining <code>?.</code> to safely access nested properties.
                    </li>
                </ul>

                <Code>{`// Treat null or undefined as missing:
if (user.email == null) {
  // runs when email is null OR undefined
}

// Safe defaults without clobbering valid falsy:
const port = userPort ?? 3000; // 0 stays 0

// Safe access:
const city = user?.profile?.address?.city ?? "(unknown)";`}</Code>

                <p>
                    <strong>Gotchas:</strong> <code>typeof null === "object"</code> (legacy quirk);
                    don't use <code>||</code> for defaults if <code>0</code> or <code>""</code> are valid—use <code>??</code>.
                    Prefer reserving <code>null</code> to mean “intentionally empty” in your own APIs.
                </p>
            </>
        )
    },

    {
        id: "js-what-is-scope",
        question: "What is scope in JavaScript?",
        text:
            "Scope is where a variable is visible. JS has lexical (static) scope: global, function, and block. Inner scopes can read outer bindings; not vice-versa.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <em>Scope</em> is the region of code where an identifier
                    (variable/function/class) is accessible. JavaScript uses <strong>lexical (static) scope</strong>:
                    visibility is determined by where code is written, not how it’s called.
                </p>

                <ul>
                    <li><strong>Global scope:</strong> top-level bindings (module or script).</li>
                    <li><strong>Function scope:</strong> bindings declared inside a function.</li>
                    <li><strong>Block scope:</strong> bindings declared with <code>let</code>/<code>const</code> inside <code>{`{ ... }`}</code>.</li>
                </ul>

                <Code>{`const g = 1;           // global (module-level)
function outer(){
  const f = 2;        // function scope
  if (true) {
    let b = 3;        // block scope
    console.log(g, f, b); // 1 2 3 (inner sees outer)
  }
  // console.log(b);  // ReferenceError (b not visible here)
}
outer();`}</Code>

                <p>
                    <strong>Shadowing:</strong> An inner binding can hide an outer one of the same name.
                </p>

                <Code>{`let x = "outer";
{
  let x = "inner";   // shadows outer x
  console.log(x);    // "inner"
}
console.log(x);      // "outer"`}</Code>

                <p>
                    <strong>Gotchas:</strong> In old non-module scripts, assigning to an undeclared name
                    creates a global (sloppy mode). ES modules are strict by default—avoid <code>var</code>, prefer <code>let/const</code>.
                </p>
            </>
        )
    },

    {
        id: "js-what-is-hoisting",
        question: "What is hoisting?",
        text:
            "Hoisting is the compile-time step where declarations are registered before code runs. var is hoisted (initialized to undefined), function declarations are hoisted (callable early), let/const/class are hoisted but uninitialized (TDZ).",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <em>Hoisting</em> means declarations are processed
                    before execution, so identifiers exist for the entire scope. Behavior differs by kind:
                </p>
                <ul>
                    <li><strong>var</strong>: hoisted and <em>initialized to</em> <code>undefined</code>.</li>
                    <li><strong>function declaration</strong>: hoisted as a full callable binding.</li>
                    <li><strong>let/const/class</strong>: hoisted but <em>not initialized</em> (in the <strong>TDZ</strong>) until their line executes.</li>
                </ul>

                <Code>{`// var: exists early, value is undefined
console.log(a); // undefined
var a = 1;

// function declaration: callable early
greet(); // "hi"
function greet(){ console.log("hi"); }

// let/const/class: TDZ until initialization line
try { console.log(b); } catch (e) { /* ReferenceError */ }
let b = 2;

try { new Person(); } catch (e) { /* ReferenceError (class in TDZ) */ }
class Person {}`}</Code>

                <p>
                    <strong>Why it matters:</strong> Explains <code>undefined</code> reads with <code>var</code>,
                    why functions can run before their definition line, and why <code>let/const/class</code>
                    throw a <em>ReferenceError</em> if accessed too early.
                </p>

                <p>
                    <strong>Gotchas:</strong> Don’t rely on hoisting for readability; prefer declaring before use.
                    Remember: <code>function</code> <em>declarations</em> hoist, but <code>const f = () =&gt; { }</code> does <em>not</em> (it’s a <code>const</code> binding, in TDZ).
                </p>
            </>
        )
    },

    {
        id: "js-what-is-tdz",
        question: "What is the Temporal Dead Zone (TDZ)?",
        text:
            "TDZ is the period between scope entry and initialization where let/const/class bindings exist but are uninitialized; any access throws ReferenceError.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> The <em>Temporal Dead Zone (TDZ)</em> is the time from
                    when a scope starts to the moment a <code>let</code>/<code>const</code>/<code>class</code> binding is initialized.
                    During TDZ, reading or writing the binding throws <code>ReferenceError</code>.
                </p>

                <Code>{`// TDZ for 'x' begins at block start and ends at initialization line
{
  // console.log(x); // ReferenceError (x is in TDZ)
  let x = 10;        // TDZ ends here
  console.log(x);    // 10
}

// const behaves the same (must initialize at declaration)
{
  // y is in TDZ here
  const y = 5;
}`}</Code>

                <p>
                    <strong>Function & class notes:</strong> Function <em>declarations</em> are hoisted (callable early),
                    but <code>class</code> declarations are hoisted <em>into TDZ</em> (not usable before their line).
                </p>

                <Code>{`// class in TDZ
try { new Person(); } catch (e) { /* ReferenceError */ }
class Person {}`}</Code>

                <p>
                    <strong>Parameters TDZ:</strong> Inside parameter defaults, referencing a <em>later</em> parameter is TDZ.
                </p>

                <Code>{`function bad(a = b, b = 2) {}
try { bad(); } catch (e) { console.log(e instanceof ReferenceError); } // true

function ok(a = 1, b = a + 1) { return [a, b]; }
ok(); // [1, 2]`}</Code>

                <p>
                    <strong>Why it exists:</strong> TDZ prevents access to bindings before their
                    intended initialization, avoiding confusing “hoisted but undefined” reads.
                </p>

                <p>
                    <strong>Gotchas:</strong> <code>typeof</code> on a TDZ binding also throws (unlike undeclared names).
                </p>

                <Code>{`// Undeclared is safe:
typeof notDeclared; // "undefined"

// TDZ binding is NOT safe:
{
  // typeof z; // ReferenceError (z exists in TDZ)
  let z = 1;
}`}</Code>
            </>
        )
    },

    {
        id: "js-what-is-closure",
        question: "What is a closure?",
        text:
            "A closure is when a function remembers and can access its lexical scope even when the function is executed outside that scope.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> A <em>closure</em> is the combination of a function and the
                    lexical environment it was created in. The function can still access those variables
                    even after the outer function has returned.
                </p>

                <Code>{`function makeCounter(start = 0) {
  let n = start;            // captured by the inner function
  return function next() {  // <-- closure over 'n'
    return ++n;
  };
}
const c1 = makeCounter(5);
c1(); // 6
c1(); // 7  (still sees 'n')`}</Code>

                <p><strong>Why it matters:</strong> Enables data privacy, factories, once/memoize utilities, event handlers keeping state.</p>

                <Code>{`// Data privacy (module pattern)
function makeBankAccount() {
  let balance = 0;
  return {
    deposit(x){ balance += x; },
    getBalance(){ return balance; }
  };
}
const acct = makeBankAccount();
acct.deposit(100);
acct.getBalance(); // 100 (balance not directly accessible)`}</Code>

                <p><strong>Common gotcha:</strong> Loops with <code>var</code> capture the same binding.</p>

                <Code>{`// Using var: all log '3'
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
}`}</Code>

                <p>
                    <strong>Notes:</strong> Closures capture <em>bindings</em> (not copies), so if the captured variable changes,
                    the closure sees the latest value. Avoid leaking large captured objects to prevent unintended memory retention.
                </p>
            </>
        )
    }









];

export default function Theory() {
    const [query, setQuery] = useState("");
    const inputRef = useRef(null);

    // Focus search on "/" (unless typing in an input/textarea already)
    useEffect(() => {
        const onKey = (e) => {
            const tag = document.activeElement?.tagName;
            if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // ESC behavior: clear when query present; otherwise blur the input
    const onSearchKeyDown = (e) => {
        if (e.key === "Escape" || e.key === "Esc") {
            if (query) setQuery("");
            else e.currentTarget.blur();
            e.preventDefault();
        }
    };

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return QNAS;
        return QNAS.filter(({ question, text }) =>
            question.toLowerCase().includes(q) || text.toLowerCase().includes(q)
        );
    }, [query]);

    return (
        <Styled.Wrapper>
            {/* Top bar: breadcrumbs + search */}
            <Styled.TopBar>
                <BreadcrumbsBar />
                <Styled.SearchBox>
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={onSearchKeyDown}
                        placeholder="Search questions…  (press /, Esc to clear)"
                        aria-label="Search questions"
                        aria-keyshortcuts="/ Escape"
                    />
                    {query && (
                        <>
                            <small className="hint">esc</small>
                            <button
                                className="clear"
                                onClick={() => setQuery("")}
                                aria-label="Clear search"
                                title="Clear (Esc)"
                            >
                                ✕
                            </button>
                        </>
                    )}
                </Styled.SearchBox>
            </Styled.TopBar>

            <Styled.Count>
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                {query ? ` for “${query}”` : ""}
            </Styled.Count>

            {/* QnA list */}
            {filtered.length === 0 ? (
                <p style={{ opacity: 0.7 }}>No matches. Try a different keyword.</p>
            ) : (
                filtered.map((item) => (
                    <QnaItem key={item.id} question={item.question}>
                        {item.answer}
                    </QnaItem>
                ))
            )}
        </Styled.Wrapper>
    );
}
