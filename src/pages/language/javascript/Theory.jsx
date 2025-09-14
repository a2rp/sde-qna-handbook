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
                    <li><strong>Browser:</strong> DOM, <code>fetch</code>, <code>localStorage</code>, <code>requestAnimationFrame</code>, Workers...</li>
                    <li><strong>Node.js:</strong> <code>fs</code>, <code>net</code>, <code>http</code>, <code>process</code>, <code>Buffer</code>, timers...</li>
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
                    and why <em>Promises often run "before" timeouts</em>.
                </p>

                <p>
                    <strong>Gotchas:</strong> A tight microtask loop (e.g., recursively scheduling microtasks)
                    can starve macrotasks/rendering; <code>setTimeout(fn, 0)</code> never runs "immediately"
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
                    When you access a "method" on a primitive (e.g., <code>"hi".toUpperCase()</code>), engines use a temporary wrapper object behind the scenes.
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
                    <strong>Own vs inherited:</strong> "Own" properties live on the object; inherited
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
                    Use <code>??</code> when you only want to treat <code>null</code>/<code>undefined</code> as "missing".
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
                    <strong>Definitions:</strong> <code>undefined</code> means "missing / not set / not provided".
                    It's the default for uninitialized variables, missing object properties, and functions with no return.
                    <code>null</code> is an <em>intentional</em> "no value" you assign to signal emptiness.
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
                        Use <code>x == null</code> to match "either <code>null</code> or <code>undefined</code>".
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
                    don't use <code>||</code> for defaults if <code>0</code> or <code>""</code> are valid-use <code>??</code>.
                    Prefer reserving <code>null</code> to mean "intentionally empty" in your own APIs.
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
                    visibility is determined by where code is written, not how it's called.
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
                    creates a global (sloppy mode). ES modules are strict by default-avoid <code>var</code>, prefer <code>let/const</code>.
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
                    <strong>Gotchas:</strong> Don't rely on hoisting for readability; prefer declaring before use.
                    Remember: <code>function</code> <em>declarations</em> hoist, but <code>const f = () =&gt; { }</code> does <em>not</em> (it's a <code>const</code> binding, in TDZ).
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
                    intended initialization, avoiding confusing "hoisted but undefined" reads.
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
    },

    {
        id: "js-what-is-this",
        question: "What is `this` in JavaScript?",
        text:
            "`this` is set at call-time by how a function is invoked: default (undefined in strict), implicit (receiver object), explicit (call/apply/bind), constructor (new). Arrow functions don't bind `this`; they capture the surrounding one.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <code>this</code> is a context value determined by the
                    <em> call-site</em>. In modules/strict mode, plain calls set <code>this</code> to
                    <code> undefined</code>. Arrow functions don't have their own <code>this</code>; they
                    lexically capture the surrounding <code>this</code>.
                </p>

                <Code>{`"use strict";
// 1) Default (plain call) → undefined
function f(){ return this; }
f(); // undefined`}</Code>

                <Code>{`// 2) Implicit (receiver before dot)
const obj = { x: 10, m(){ return this.x; } };
obj.m(); // 10

// losing the receiver:
const m = obj.m;
m(); // undefined (strict)`}</Code>

                <Code>{`// 3) Explicit (call/apply/bind)
function greet(g){ return g + " " + this.name; }
const ctx = { name: "Ada" };
greet.call(ctx, "Hi");      // "Hi Ada"
const hi = greet.bind(ctx, "Hello");
hi();                       // "Hello Ada"`}</Code>

                <Code>{`// 4) Constructor (new) → new instance
function Person(n){ this.name = n; }
const p = new Person("Lin"); // this = p`}</Code>

                <Code>{`// 5) Arrow → lexical 'this'
const obj2 = {
  x: 42,
  run(){
    setTimeout(() => console.log(this.x), 0); // 42
  }
};
obj2.run();`}</Code>

                <p>
                    <strong>Gotchas:</strong> Extracted methods lose <code>this</code> unless bound;
                    top-level <code>this</code> is <code>undefined</code> in modules; DOM listeners with arrows
                    don't get the element as <code>this</code> (use function if you need it).
                </p>
            </>
        )
    },

    {
        id: "js-call-apply-bind",
        question: "What are `call`, `apply`, and `bind`?",
        text:
            "`call` and `apply` invoke a function immediately with an explicit `this` (`call(...args)`, `apply([...args])`). `bind` returns a new function with `this` (and optional args) pre-bound.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <code>call</code> and <code>apply</code> run a function <em>now</em> with an explicit
                    <code> this</code>. <code>call</code> takes args individually; <code>apply</code> takes them as an array.
                    <code>bind</code> returns a new function where <code>this</code> (and optionally some arguments) are fixed.
                </p>

                <Code>{`function greet(g, p){ return g + " " + this.name + p; }
const ctx = { name: "Ada" };

// call(args as list)
greet.call(ctx, "Hello", "!"); // "Hello Ada!"

// apply(args as array)
greet.apply(ctx, ["Hi", "!!"]); // "Hi Ada!!"

// bind (does not invoke)
const hiAda = greet.bind(ctx, "Hi");
hiAda("?"); // "Hi Ada?"`}</Code>

                <p>
                    <strong>Partial application with bind:</strong> You can pre-fill leading arguments.
                </p>
                <Code>{`const add = (a,b,c) => a + b + c;
const add5 = add.bind(null, 5);
add5(2, 3); // 10`}</Code>

                <p>
                    <strong>`new` beats `bind` for <code>this</code>:</strong> If a bound function is used with <code>new</code>,
                    the new instance becomes <code>this</code> (bound arguments remain).
                </p>
                <Code>{`function Person(name){ this.name = name; }
const Bound = Person.bind({ fake:true }, "Ignored");
new Bound("AlsoIgnored") instanceof Person; // true`}</Code>

                <p>
                    <strong>Common uses:</strong> method borrowing (<code>Array.prototype.slice.call</code> on array-like),
                    event handlers in classes (<code>this.method = this.method.bind(this)</code>), partials.
                </p>

                <p>
                    <strong>Gotchas:</strong> Don't overuse <code>bind</code> inside render loops (React); prefer arrows for
                    handlers needing lexical <code>this</code>. <code>apply</code> requires an array-when you already have an
                    array, modern engines allow <code>fn(...arr)</code> instead of <code>apply</code>.
                </p>
            </>
        )
    },

    {
        id: "js-arrow-functions",
        question: "What are arrow functions? How are they different from regular functions?",
        text:
            "Arrows are concise function syntax with lexical this (no own this/arguments/super/new.target). Not constructors, no prototype. Great for callbacks; avoid when you need a dynamic receiver.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> Arrow functions (<code>=&gt; </code>) are a shorter way to write
                    functions that <em>don't</em> have their own <code>this</code>, <code>arguments</code>,
                    <code>super</code>, or <code>new.target</code>. They <em>lexically capture</em> those from the surrounding scope.
                </p>

                <Code>{`// Concise syntax
const add = (a, b) => a + b;          // implicit return (expression body)
const double = n => { return n * 2 }; // block body requires 'return'`}</Code>

                <p><strong>Lexical <code>this</code>:</strong> Arrows keep the outer <code>this</code> - handy in callbacks.</p>
                <Code>{`const obj = {
  x: 42,
  normal() { setTimeout(function(){ console.log(this?.x) }, 0); }, // undefined
  arrow()  { setTimeout(() => console.log(this.x), 0); }           // 42
};
obj.normal(); obj.arrow();`}</Code>

                <p><strong>No constructor / no prototype:</strong> You can't use <code>new</code> with an arrow; they don't have <code>prototype</code>.</p>
                <Code>{`const F = () => {};
typeof F.prototype;      // "undefined"
try { new F(); } catch (e) { /* TypeError */ }`}</Code>

                <p><strong>No own <code>arguments</code>:</strong> Use rest parameters instead.</p>
                <Code>{`const bad = () => arguments[0];     // arguments is from outer scope (usually not what you want)
const good = (...args) => args[0];`}</Code>

                <p><strong>Common pitfalls:</strong></p>
                <ul>
                    <li>Arrow as an object <em>method</em> fixes <code>this</code> lexically - not suitable when you need a dynamic receiver (e.g., mixins).</li>
                    <li>Returning an object literal with implicit return needs parentheses.</li>
                    <li>Cannot use <code>yield</code> (not generators).</li>
                </ul>

                <Code>{`// Implicitly returning an object:
const makeUser = (name) => ({ name }); // parentheses wrap the object

// As a method (dynamic 'this' expected) - avoid arrows:
const user = {
  name: "Ada",
  say: () => console.log(this?.name) // likely undefined in modules
};`}</Code>

                <p><strong>When to use:</strong> Short callbacks, array methods, closures capturing outer <code>this</code>.
                    <strong>Avoid:</strong> When you need your own <code>this</code>/<code>arguments</code> or a constructible function.</p>
            </>
        )
    },

    {
        id: "js-var-vs-let-vs-const",
        question: "var vs let vs const - what's the difference?",
        text:
            "var = function-scoped, hoisted to undefined, redeclarable; let/const = block-scoped with TDZ; const prevents rebinding (not mutation). Top-level var in non-module scripts creates a global property; let/const do not.",
        answer: (
            <>
                <p><strong>Scope & hoisting:</strong></p>
                <ul>
                    <li><code>var</code> → <em>function-scoped</em>, hoisted and initialized to <code>undefined</code>.</li>
                    <li><code>let/const</code> → <em>block-scoped</em>, hoisted but uninitialized (in the <strong>TDZ</strong> until their line).</li>
                </ul>

                <Code>{`console.log(a); // undefined (var hoisted)
var a = 1;

try { console.log(b); } catch {} // ReferenceError (TDZ)
let b = 2;

try { console.log(c); } catch {} // ReferenceError (TDZ)
const c = 3;`}</Code>

                <p><strong>Reassignment & redeclaration:</strong></p>
                <ul>
                    <li><code>var</code> can be <em>reassigned</em> and <em>redeclared</em> in the same scope.</li>
                    <li><code>let</code> can be <em>reassigned</em> but <em>not redeclared</em> in the same scope.</li>
                    <li><code>const</code> can be <em>neither redeclared nor reassigned</em> (but the <em>object value</em> can mutate).</li>
                </ul>

                <Code>{`var x = 1; var x = 2;  // OK
let y = 1; /* let y = 2; */ // SyntaxError (same scope)
const z = { n: 1 };
z.n = 9;  // OK (mutating object)
/* z = {} */ // TypeError (rebinding)`}</Code>

                <p><strong>Top-level behavior:</strong> In non-module scripts, top-level <code>var</code> adds a property on <code>globalThis</code>; <code>let/const</code> create lexical bindings only.</p>
                <Code>{`// In a browser non-module script:
var gv = 1;
let gl = 2;
globalThis.gv; // 1
globalThis.gl; // undefined`}</Code>

                <p><strong>Loops & closures:</strong> <code>let</code> creates a fresh binding each iteration (great for closures). <code>var</code> reuses one binding.</p>
                <Code>{`for (var i = 0; i < 3; i++) setTimeout(()=>console.log("var", i), 0);
// var 3, var 3, var 3

for (let j = 0; j < 3; j++) setTimeout(()=>console.log("let", j), 0);
// let 0, let 1, let 2`}</Code>

                <p><strong>Recommendation:</strong> Prefer <code>const</code> by default, use <code>let</code> when reassignment is needed, avoid <code>var</code> in modern code.</p>
            </>
        )
    },

    {
        id: "js-default-parameters",
        question: "What are default parameters?",
        text:
            "A default parameter value is used only when the passed argument is undefined (not null/false/0). Defaults evaluate left→right, and each call re-evaluates the default expression.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> A <em>default parameter</em> provides a fallback value
                    when the corresponding argument is <code>undefined</code>. Passing <code>null</code>,
                    <code>false</code>, <code>0</code>, or <code>""</code> <em>does not</em> trigger the default.
                </p>

                <Code>{`function greet(name = "Guest") { return "Hi " + name; }
greet();           // "Hi Guest"      (undefined -> default)
greet(undefined);  // "Hi Guest"
greet(null);       // "Hi null"       (null does NOT trigger default)
greet("");         // "Hi "           (empty string kept)`}</Code>

                <p>
                    <strong>Left→right & TDZ:</strong> Parameters are created left to right.
                    Referencing a <em>later</em> parameter inside an earlier default causes a TDZ error.
                </p>

                <Code>{`function bad(a = b, b = 2) {}
try { bad(); } catch (e) { console.log(e instanceof ReferenceError); } // true

function ok(a = 1, b = a + 1) { return [a, b]; }
ok(); // [1, 2]`}</Code>

                <p>
                    <strong>Re-evaluated per call:</strong> Default expressions run at each invocation,
                    so avoid heavy work there.
                </p>

                <Code>{`let n = 0;
function nextId(id = ++n) { return id; }
nextId(); // 1
nextId(); // 2
nextId(99); // 99 (explicit arg bypasses default)`}</Code>

                <p>
                    <strong>Gotchas:</strong> Defaults apply only to <code>undefined</code>;
                    avoid referencing later params; heavy defaults can hurt performance;
                    <code>function.length</code> counts parameters <em>before</em> the first with a default.
                </p>

                <Code>{`function f(a, b = 1, c) {}
f.length; // 1`}</Code>
            </>
        )
    },

    {
        id: "js-rest-parameter",
        question: "What is the rest parameter (`...args`) in functions?",
        text:
            "Rest parameter collects remaining arguments into a real array. Must be last, only one allowed. Prefer over `arguments` (which is array-like).",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> The <em>rest parameter</em> <code>...args</code> gathers all
                    remaining arguments into a <strong>real array</strong>. It must appear <em>last</em> in the
                    parameter list, and there can be only one rest parameter.
                </p>

                <Code>{`// Collect all remaining arguments as an array:
function sum(label, ...nums) {
  return label + ": " + nums.reduce((a, b) => a + b, 0);
}
sum("total", 1, 2, 3); // "total: 6"
sum("none");           // "none: 0" (nums = [])`}</Code>

                <p>
                    <strong>Real array (vs <code>arguments</code>):</strong> Rest gives you a normal array with
                    methods like <code>map</code>/<code>filter</code>. In strict mode,
                    <code>arguments</code> is array-like and not synced with parameter reassignments.
                </p>

                <Code>{`"use strict";
function demo(x, ...rest) {
  console.log(Array.isArray(rest)); // true
  x = 42;
  console.log(arguments[0]);        // original value (not 42)
}
demo(10, 20, 30);`}</Code>

                <p>
                    <strong>Position & count:</strong> Rest must be last; function <code>length</code> doesn't count it.
                </p>

                <Code>{`function f(a, b, ...rest) {}
f.length; // 2 (rest not counted)`}</Code>

                <p>
                    <strong>Common uses:</strong> variable-arity functions (sum, max), collecting "options" after fixed params,
                    forwarding arguments to another function.
                </p>

                <Code>{`const logAll = (...args) => console.log(...args);
const callWith = (fn, ...args) => fn(...args);
callWith(Math.max, 3, 7, 2); // 7`}</Code>

                <p>
                    <strong>Gotchas:</strong> Only one rest parameter and it must be last; don't confuse function rest with
                    <em>object/array rest in destructuring</em> - those are patterns, not parameters (covered separately).
                </p>
            </>
        )
    },

    {
        id: "js-spread-syntax",
        question: "What is the spread syntax (`...`) in JavaScript?",
        text:
            "Spread expands an iterable (like an array or string) into individual elements, or expands an object's own enumerable properties into a new object. It's used in calls, array literals, and object literals; it makes shallow copies.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <em>Spread</em> (<code>...</code>) <em>expands</em> values.
                    In <strong>calls</strong> and <strong>array literals</strong>, it requires an <em>iterable</em> (Array, String, Set, etc.).
                    In <strong>object literals</strong>, it copies an object's <em>own enumerable</em> string & symbol properties.
                </p>

                <Code>{`// 1) Calls - expand iterable into arguments
function sum(a, b, c){ return a + b + c; }
const nums = [1, 2, 3];
sum(...nums); // 6

// 2) Arrays - copy / concatenate
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b]; // [1,2,3,4] (shallow copy)
const copy = [...a];    // [1,2] (shallow)`}</Code>

                <Code>{`// 3) Objects - copy / merge (last write wins)
const base = { x: 1, shared: "a" };
const extra = { y: 2, shared: "b" };
const merged = { ...base, ...extra }; // { x:1, shared:"b", y:2 }
const clone  = { ...base };           // shallow copy

// Property descriptors are not preserved (values are copied)
const withGetter = {
  get v(){ return Math.random() }
};
const copyGetter = { ...withGetter };
typeof Object.getOwnPropertyDescriptor(copyGetter, "v").get; // "undefined"`}</Code>

                <p>
                    <strong>Key points:</strong>
                </p>
                <ul>
                    <li><strong>Shallow copy:</strong> nested objects/arrays are shared references.</li>
                    <li><strong>Order matters:</strong> later spreads/props overwrite earlier ones.</li>
                    <li><strong>Arrays need iterables:</strong> spreading a non-iterable in an array/call throws.</li>
                    <li><strong>Objects:</strong> spreads copy own <em>enumerable</em> properties (string & symbol).</li>
                </ul>

                <Code>{`// Shallow copy example
const orig = { deep: { n: 1 } };
const copy2 = { ...orig };
copy2.deep.n = 9;
orig.deep.n; // 9 (same inner object)`}</Code>

                <p>
                    <strong>Don't confuse with rest:</strong> Spread <em>expands</em> values at usage sites,
                    while <em>rest</em> <code>...args</code> <em>collects</em> values in parameter/destructuring positions.
                </p>
            </>
        )
    },

    {
        id: "js-array-destructuring",
        question: "What is array destructuring?",
        text:
            "Array destructuring unpacks values from arrays/iterables into variables by position. Supports skipping, defaults, rest, nesting, and even quick swaps.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <em>Array destructuring</em> assigns elements of an array (or any iterable)
                    to variables by position using a pattern on the left-hand side.
                </p>

                <Code>{`// Basic
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
[a1, a2] = [a2, a1];               // a1=9, a2=5`}</Code>

                <p>
                    <strong>Gotchas:</strong> Rest element must be last; extra source items are ignored; defaults only kick in for
                    <code>undefined</code> (not <code>null</code>/<code>0</code>/<code>""</code>); the right-hand side must be iterable.
                </p>
            </>
        )
    },

    {
        id: "js-object-destructuring",
        question: "What is object destructuring?",
        text:
            "Object destructuring binds variables from object properties by name. Supports renaming, defaults, nested patterns, and rest properties; use = {} as a whole-arg default to avoid TypeError on null/undefined.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <em>Object destructuring</em> extracts properties by <em>name</em> into variables.
                    You can rename variables, set per-property defaults (used only when the value is <code>undefined</code>), nest patterns, and collect the rest.
                </p>

                <Code>{`// Basic by-name binding
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
`}</Code>

                <p>
                    <strong>Key points:</strong>
                </p>
                <ul>
                    <li>Order doesn't matter (it's by <em>property name</em>).</li>
                    <li>Per-property default applies only when the value is <code>undefined</code>.</li>
                    <li><code>...rest</code> collects <em>own enumerable</em> props not already picked.</li>
                    <li>Destructuring from <code>null</code>/<code>undefined</code> throws - use a whole-argument default like <code>= &#123;&#125;</code>.</li>
                    <li>Inherited properties can be read (normal property access); but <code>...rest</code> doesn't include inherited ones.</li>
                </ul>
            </>
        )
    },

    {
        id: "js-optional-chaining",
        question: "What is optional chaining (`?.`)?",
        text:
            "Optional chaining safely accesses a property/call/index and returns undefined if the base is null or undefined. Forms: obj?.prop, obj?.[expr], obj?.method?.(args).",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <em>Optional chaining</em> <code>?.</code> lets you read properties,
                    call methods, or index into objects that might be <code>null</code>/<code>undefined</code>.
                    If the left side is <code>null</code> or <code>undefined</code>, the whole expression evaluates to
                    <code>undefined</code> without throwing.
                </p>

                <Code>{`const user = { profile: { contact: { email: "a@b.com" } } };

user?.profile?.contact?.email     // "a@b.com"
user?.settings?.theme             // undefined (safe)

// Bracket form
const key = "email";
user?.profile?.contact?.[key];    // "a@b.com"

// Optional call (method may be missing)
user.service?.getToken?.();       // runs if both exist, otherwise undefined`}</Code>

                <p><strong>Why:</strong> Avoids verbose checks and prevents <code>TypeError: Cannot read properties of undefined</code>.</p>

                <p><strong>Pair with nullish coalescing:</strong> Provide a default only when result is <code>null</code>/<code>undefined</code>.</p>
                <Code>{`const city = user?.profile?.address?.city ?? "(unknown)";`}</Code>

                <p><strong>Forms:</strong> <code>obj?.prop</code> • <code>obj?.[expr]</code> • <code>obj.method?.(args)</code></p>

                <p><strong>Gotchas:</strong></p>
                <ul>
                    <li>It's <em>read-only short-circuit</em>; you can't assign through it (<code>obj?.prop = 1</code> is invalid).</li>
                    <li>Only stops on <code>null</code>/<code>undefined</code> - not on other falsy values (<code>0</code>, <code>""</code>, <code>false</code>).</li>
                    <li>Don't overuse; frequent optional chains can hide bugs where data should always exist.</li>
                </ul>
            </>
        )
    },

    {
        id: "js-nullish-coalescing",
        question: "What is nullish coalescing (`??`)?",
        text:
            "`??` returns the right side only when the left side is null or undefined (not for 0, \"\", or false). Use it for safe defaults; combine with optional chaining; don't mix with &&/|| without parentheses.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> The <em>nullish coalescing</em> operator <code>??</code> returns its
                    left operand if it's <code>not</code> <code>null</code> or <code>undefined</code>; otherwise it returns the right operand.
                    Unlike <code>||</code>, it <em>does not</em> treat <code>0</code>, <code>""</code>, or <code>false</code> as "missing".
                </p>

                <Code>{`// Defaults only for null/undefined
const port = userPort ?? 3000;  // userPort = 0 -> keeps 0, not 3000
const name = inputName ?? "(anonymous)"; // null/undefined -> "(anonymous)"

// Compare with OR (||): OR treats many values as missing (bad for 0/"")
const portOr = userPort || 3000; // 0 -> 3000 (surprising)
`}</Code>

                <p><strong>Combine with optional chaining:</strong></p>
                <Code>{`const city = user?.profile?.address?.city ?? "(unknown)";
const email = config?.contact?.email ?? "(not set)";`}</Code>

                <p><strong>Short-circuit behavior:</strong> If the left side is not null/undefined, the right side is not evaluated.</p>
                <Code>{`let calls = 0;
function inc(){ calls++; return "X"; }
const v = "ok" ?? inc(); // "ok" ; inc() not called (calls stays 0)`}</Code>

                <p><strong>Gotchas:</strong></p>
                <ul>
                    <li><code>??</code> only checks for <code>null</code>/<code>undefined</code> - it preserves valid falsy values (<code>0</code>, <code>""</code>, <code>false</code>).</li>
                    <li>Don't mix <code>??</code> with <code>&&</code> or <code>||</code> in the same expression <em>without parentheses</em> (SyntaxError). Use grouping:</li>
                </ul>

                <Code>{`// ❌ SyntaxError:
// a ?? b || c

// ✅ Group explicitly:
(a ?? b) || c
a ?? (b || c)`}</Code>
            </>
        )
    },

    {
        id: "js-logical-assignment",
        question: "What are logical assignment operators (||=, &&=, ??=)?",
        text:
            "They combine short-circuiting with assignment: x ||= v assigns when x is falsy; x &&= v assigns when x is truthy; x ??= v assigns when x is null/undefined.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> Logical assignment operators merge a logical check with an assignment:
                </p>
                <ul>
                    <li><code>x ||= v</code> → assign <code>v</code> <em>only if</em> <code>x</code> is <strong>falsy</strong>.</li>
                    <li><code>x &&= v</code> → assign <code>v</code> <em>only if</em> <code>x</code> is <strong>truthy</strong>.</li>
                    <li><code>x ??= v</code> → assign <code>v</code> <em>only if</em> <code>x</code> is <strong>null or undefined</strong>.</li>
                </ul>

                <Code>{`let a = 0;
a ||= 10;   // 0 is falsy -> a = 10

let b = "user";
b &&= b.toUpperCase(); // "USER" (b was truthy)

let c;       // undefined
c ??= 5;     // undefined -> c = 5
let d = 0;
d ??= 9;     // 0 is not null/undefined -> stays 0`}</Code>

                <p><strong>Typical uses:</strong></p>
                <Code>{`// Defaults
settings.timeout ??= 3000;  // only when null/undefined

// Fill only when truly missing (keeps 0 / "" / false)
user.age ??= 0;
user.nickname ||= "guest";  // BUT: "" is falsy -> becomes "guest"

// Guarded update
isLoggedIn &&= hasValidSession();`}</Code>

                <p><strong>Choosing the right one:</strong></p>
                <ul>
                    <li>Use <code>??=</code> for safe defaults that should <em>not</em> overwrite valid falsy values like <code>0</code> or <code>""</code>.</li>
                    <li>Use <code>||=</code> when any falsy should trigger the default (e.g., empty string should become a placeholder).</li>
                    <li>Use <code>&&=</code> to keep or replace a value only when it's already truthy.</li>
                </ul>

                <p><strong>Gotchas:</strong></p>
                <ul>
                    <li><strong>No optional chaining on the left-hand side:</strong> you cannot write <code>obj?.prop ??= v</code> (invalid left-hand side). Check the object first or use a guard.</li>
                    <li><code>||=</code> treats <code>0</code>, <code>""</code>, and <code>false</code> as missing; prefer <code>??=</code> if you want to preserve them.</li>
                </ul>

                <Code>{`// Guard before assigning nested props
if (obj && obj.config != null) {
  obj.config.port ??= 8080;
}`}</Code>
            </>
        )
    },

    {
        id: "js-in-operator",
        question: "What does the `in` operator do?",
        text:
            "`k in obj` checks whether a property key exists on an object or anywhere on its prototype chain. For own-only checks, use Object.hasOwn(obj, k).",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> The <code>in</code> operator returns <code>true</code> if the
                    property key (string or symbol) exists on the object <em>or its prototype chain</em>.
                </p>

                <Code>{`const base = { a: 1 };
const obj = Object.create(base);
obj.b = 2;

"a" in obj;                  // true  (inherited from base)
"b" in obj;                  // true  (own)
"c" in obj;                  // false`}</Code>

                <p>
                    <strong>Own-only check:</strong> Use <code>Object.hasOwn(obj, key)</code> (ES2022).
                    Older style: <code>Object.prototype.hasOwnProperty.call(obj, key)</code>.
                </p>

                <Code>{`Object.hasOwn(obj, "b"); // true
Object.hasOwn(obj, "a"); // false (since it's inherited)

// Older, safe form:
Object.prototype.hasOwnProperty.call(obj, "b"); // true`}</Code>

                <p>
                    <strong>Arrays:</strong> With arrays, <code>in</code> checks for the <em>index</em> key, not the value.
                    It also reports <em>holes</em> as missing.
                </p>

                <Code>{`const arr = [10, 20];
0 in arr;        // true  (index exists)
2 in arr;        // false (no element at index 2)
20 in arr;       // false (checks keys, not values)`}</Code>

                <p>
                    <strong>Symbols:</strong> Works with symbol keys too.
                </p>

                <Code>{`const S = Symbol("secret");
const o = { [S]: 123 };
S in o; // true`}</Code>

                <p>
                    <strong>Gotchas:</strong> <code>in</code> includes inherited properties; prefer
                    <code>Object.hasOwn</code> when you specifically want "own-only". On arrays, don't use <code>in</code> to test membership by value-use <code>includes</code>.
                </p>

                <Code>{`[1,2,3].includes(2); // true (by value)`}</Code>
            </>
        )
    },

    {
        id: "js-instanceof-operator",
        question: "What does the `instanceof` operator do?",
        text:
            "`v instanceof Ctor` checks whether Ctor.prototype is in v's prototype chain. Fails across realms (iframes) and with primitives. Prefer Array.isArray for arrays; you can customize via Symbol.hasInstance.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <code>v instanceof Ctor</code> returns <code>true</code> if
                    <code> Ctor.prototype</code> appears anywhere in <code>v</code>'s prototype chain.
                </p>

                <Code>{`function Person() {}
const p = new Person();
p instanceof Person;            // true
Object.getPrototypeOf(p) === Person.prototype; // true`}</Code>

                <p><strong>Primitives:</strong> Work only with <em>objects</em>. Primitives aren't instances (unless boxed).</p>
                <Code>{`42 instanceof Number;     // false (primitive)
new Number(42) instanceof Number; // true (boxed object)`}</Code>

                <p><strong>Arrays & built-ins:</strong> Use dedicated checks; <code>instanceof</code> can fail across realms (e.g., iframes).</p>
                <Code>{`Array.isArray([]);        // ✅ reliable
([]) instanceof Array;        // ❌ can be false across realms

Object.prototype.toString.call(/re/) === "[object RegExp]"; // generic tag`}</Code>

                <p><strong>Cross-realm gotcha:</strong> Each realm (iframe/worker) has its own constructors; an array from another realm fails <code>instanceof Array</code> in this realm.</p>

                <p><strong>Customizing:</strong> Classes/functions can override the check using <code>Symbol.hasInstance</code>.</p>
                <Code>{`class Marked {
  static [Symbol.hasInstance](obj) { return obj && obj.mark === true; }
}
({ mark:true }) instanceof Marked; // true`}</Code>

                <p><strong>Takeaways:</strong> Use <code>instanceof</code> when you control the constructor and realm.
                    For arrays use <code>Array.isArray</code>; for broad type tags use <code>Object.prototype.toString.call(v)</code>.
                </p>
            </>
        )
    },

    {
        id: "js-prototype-and-chain",
        question: "What is a prototype and the prototype chain?",
        text:
            "Every object has an internal [[Prototype]] link to another object (or null). Property lookups walk this chain. Create with Object.create, read via Object.getPrototypeOf, avoid writing __proto__.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> A <em>prototype</em> is another object that a given object
                    delegates to for missing properties. The linked objects form the <strong>prototype chain</strong>.
                    Lookup goes: <code>obj → obj.[[Prototype]] → ... → null</code>.
                </p>

                <Code>{`// Property lookup walks the chain
const base = { greet(){ return "hi"; } };
const obj  = Object.create(base); // set [[Prototype]] to base
obj.name = "Ada";

obj.greet();            // "hi" (found on prototype)
Object.getPrototypeOf(obj) === base; // true`}</Code>

                <p>
                    <strong>Create / read / set:</strong> Prefer <code>Object.create</code> to create with a prototype,
                    <code>Object.getPrototypeOf</code> to read it, and <code>Object.setPrototypeOf</code> to change (slow; avoid in hot paths).
                </p>

                <Code>{`const dict = Object.create(null); // no prototype (pure map)
Object.getPrototypeOf(obj);      // -> base
Object.setPrototypeOf(obj, null); // now no delegation (use sparingly)`}</Code>

                <p>
                    <strong>Functions & classes:</strong> A function used as a constructor has a
                    <code>.prototype</code> object. Instances created with <code>new</code> link to it.
                    <code>class</code> syntax configures the same prototype chain.
                </p>

                <Code>{`function Person(name){ this.name = name; }
Person.prototype.say = function(){ return "I am " + this.name; };

const p = new Person("Lin");
Object.getPrototypeOf(p) === Person.prototype; // true
p.say(); // "I am Lin"

// Classes (sugar over prototypes)
class A { talk(){ return "yo"; } }
new A().talk(); // "yo"`}</Code>

                <p>
                    <strong>Own vs inherited:</strong> Check own properties with <code>Object.hasOwn(obj, k)</code>;
                    <code>k in obj</code> includes inherited ones.
                </p>

                <Code>{`const o = Object.create({ a: 1 });
o.b = 2;
Object.hasOwn(o, "a"); // false
"a" in o;              // true (inherited)`}</Code>

                <p>
                    <strong>Gotchas:</strong> Writing <code>obj.x = ...</code> creates/overrides an <em>own</em> prop (doesn't modify the prototype).
                    Avoid using <code>__proto__</code> (legacy accessor); changing prototypes at runtime is slow.
                    Methods on built-in prototypes (e.g., <code>Array.prototype.map</code>) are shared by all instances.
                </p>
            </>
        )
    },

    {
        id: "js-property-descriptors",
        question: "What is a property descriptor?",
        text:
            "A property descriptor defines a property's attributes: data (value, writable) or accessor (get, set), plus enumerable and configurable. Read with getOwnPropertyDescriptor; create/change with defineProperty.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> Every own property has a <em>descriptor</em> with attributes.
                    Two kinds exist:
                </p>
                <ul>
                    <li><strong>Data descriptor:</strong> <code>value</code>, <code>writable</code>, <code>enumerable</code>, <code>configurable</code></li>
                    <li><strong>Accessor descriptor:</strong> <code>get</code>, <code>set</code>, <code>enumerable</code>, <code>configurable</code></li>
                </ul>
                <p>
                    A descriptor is either data <em>or</em> accessor (you can't mix <code>value/writable</code> with <code>get/set</code>).
                </p>

                <Code>{`const obj = { x: 1 };
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
// { value: 100, writable: false, enumerable: false, configurable: true }`}</Code>

                <p><strong>Accessor properties:</strong> use <code>get</code>/<code>set</code> instead of <code>value</code>/<code>writable</code>.</p>
                <Code>{`const user = {};
let _name = "Ada";
Object.defineProperty(user, "name", {
  get(){ return _name; },
  set(v){ _name = String(v).trim(); },
  enumerable: true,
  configurable: true
});
user.name;      // "Ada"
user.name = "  Lin  ";
user.name;      // "Lin"`}</Code>

                <p><strong>Key attributes:</strong></p>
                <ul>
                    <li><code>enumerable</code>: shows up in <code>for...in</code> / <code>Object.keys()</code>.</li>
                    <li><code>writable</code> (data only): controls assignment to <code>value</code>.</li>
                    <li><code>configurable</code>: allows <code>delete</code> and further descriptor changes.</li>
                </ul>

                <Code>{`const o = {};
Object.defineProperty(o, "locked", {
  value: 1, writable: false, enumerable: true, configurable: false
});

// Non-writable: assignment fails silently in sloppy mode; throws in strict mode
"use strict";
try { o.locked = 2; } catch (e) { /* TypeError */ }

// Non-configurable: cannot delete or change enumerable/writable back to true
delete o.locked;   // false
Object.defineProperty(o, "locked", { writable: true }); // TypeError`}</Code>

                <p><strong>Defaults matter:</strong> If you omit flags in <code>defineProperty</code>, they are <em>false</em> by default. When creating via literals, all three flags default to <em>true</em>.</p>

                <Code>{`// All flags true for literal 'a'
const a = { k: 1 };
Object.getOwnPropertyDescriptor(a, "k").enumerable;   // true

// defineProperty defaults: enumerable=false, writable=false, configurable=false unless set
const b = {};
Object.defineProperty(b, "k", { value: 1 });
Object.getOwnPropertyDescriptor(b, "k");
// { value:1, writable:false, enumerable:false, configurable:false }`}</Code>

                <p><strong>When to use:</strong> hide metadata (non-enumerable), make constants (non-writable), define computed properties (get/set), or lock API surface (non-configurable).</p>

                <p><strong>Gotchas:</strong> Once <code>configurable:false</code>, you can't flip it back; you may only change <code>writable:true → false</code> (one-way). Mixing <code>value</code> with <code>get</code>/<code>set</code> throws.</p>
            </>
        )
    },

    {
        id: "js-freeze-seal-preventExtensions",
        question: "What's the difference between Object.freeze, Object.seal, and Object.preventExtensions?",
        text:
            "preventExtensions: no new props. seal: no new props + cannot delete/configure existing (but writable values may change). freeze: seal + make all data properties non-writable (fully read-only, shallow).",
        answer: (
            <>
                <p>
                    <strong>Summary:</strong>
                    <ul>
                        <li><code>Object.preventExtensions(obj)</code>: disallow <em>adding</em> properties. Existing ones behave as-is.</li>
                        <li><code>Object.seal(obj)</code>: preventExtensions <em>and</em> make all existing props <code>configurable:false</code> (can't delete or reconfigure). <em>Values may still change</em> if writable.</li>
                        <li><code>Object.freeze(obj)</code>: seal <em>and</em> set all <em>data</em> props to <code>writable:false</code>. Object becomes <em>read-only</em> (but only <strong>shallowly</strong>).</li>
                    </ul>
                </p>

                <Code>{`const o = { a: 1, nested: { x: 1 } };

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
Object.isFrozen(f.nested); // false`}</Code>

                <p><strong>Accessors:</strong> Freezing doesn't change the behavior of existing getters/setters themselves; it only makes the property <code>configurable:false</code> and (for data props) <code>writable:false</code>. A setter will still run if the accessor remains.</p>

                <p><strong>Strict mode behavior:</strong> Adding/deleting/assigning when disallowed <em>throws</em> in strict mode; otherwise it fails silently.</p>

                <Code>{`"use strict";
const a = {};
Object.freeze(a);
try { a.newProp = 1; } catch (e) { /* TypeError */ }`}</Code>

                <p><strong>Deep freeze:</strong> To make the whole graph immutable, recursively freeze nested objects.</p>

                <Code>{`function deepFreeze(obj) {
  if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    for (const key of Reflect.ownKeys(obj)) {
      deepFreeze(obj[key]);
    }
  }
  return obj;
}`}</Code>

                <p><strong>Notes:</strong> <code>const</code> stops <em>rebinding</em> the variable, not mutating the object. Use <code>freeze</code> for object immutability; <code>seal</code> to lock shape but keep writable values; <code>preventExtensions</code> to disallow growth only.</p>
            </>
        )
    },

    {
        id: "js-what-is-symbol",
        question: "What is a Symbol in JavaScript?",
        text:
            "Symbol is a unique, immutable primitive often used as a non-colliding object property key. Even symbols with the same description are different. Symbol.for provides a global registry.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <code>Symbol</code> is a primitive for creating
                    <em>unique</em> identifiers. Useful as object keys that won't clash with other keys.
                    Symbols are immutable and not auto-converted to strings.
                </p>

                <Code>{`// Create symbols (descriptions are just labels for debugging)
const s1 = Symbol("id");
const s2 = Symbol("id");
s1 === s2; // false (unique)

const obj = {};
obj[s1] = 123;         // use brackets for symbol keys
// obj.s1 would be a string key "s1" - not the symbol`}</Code>

                <p><strong>Global registry:</strong> <code>Symbol.for(key)</code> returns the same symbol for a given key across the app (and realms sharing the registry).</p>
                <Code>{`const a = Symbol.for("channel");
const b = Symbol.for("channel");
a === b; // true
Symbol.keyFor(a); // "channel"`}</Code>

                <p><strong>Enumeration & JSON:</strong> Symbol-keyed properties are skipped by
                    <code>Object.keys</code>, <code>for...in</code>, and <code>JSON.stringify</code>.
                    Retrieve them via <code>Object.getOwnPropertySymbols</code> or <code>Reflect.ownKeys</code>.
                </p>
                <Code>{`const S = Symbol("hidden");
const o = { x: 1, [S]: 2 };
Object.keys(o);                 // ["x"]
Object.getOwnPropertySymbols(o);// [Symbol(hidden)]
Reflect.ownKeys(o);             // ["x", Symbol(hidden)]
JSON.stringify(o);              // "{"x":1}" (symbol key omitted)`}</Code>

                <p><strong>Well-known symbols (glimpse):</strong> Protocol hooks like
                    <code>Symbol.iterator</code>, <code>Symbol.toPrimitive</code>,
                    <code>Symbol.toStringTag</code>, <code>Symbol.hasInstance</code> let objects integrate with language features.
                    (Covered in separate questions.)
                </p>

                <p><strong>Gotchas:</strong> <code>new Symbol()</code> is a TypeError (not a constructor);
                    string concatenation with a symbol throws (<code>"" + Symbol()</code>) - use <code>String(sym)</code> if needed.
                </p>
            </>
        )
    },

    {
        id: "js-iterables-and-iterators",
        question: "What are iterables and iterators in JavaScript?",
        text:
            "An iterable has [Symbol.iterator]() that returns an iterator. An iterator has next() → { value, done }. for...of, spread, and array-from use this protocol.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> An <em>iterable</em> is any object with a
                    <code>[Symbol.iterator]()</code> method that returns an <em>iterator</em>.
                    An iterator is an object with <code>next()</code> that returns
                    <code>&#123; value, done &#125;</code>. <code>for...of</code>, spread (<code>...</code>),
                    destructuring, and <code>Array.from</code> consume iterables.
                </p>

                <Code>{`// Built-in iterables: Array, String, Map, Set, TypedArrays, arguments, NodeList (most)
// for...of uses the iterator under the hood
for (const ch of "hi") console.log(ch); // h, i

// Spread & destructuring consume iterables
const set = new Set([1,2,3]);
const arr = [...set];        // [1,2,3]
const [a, b] = new Map([["x",1],["y",2]]); // a=["x",1], b=["y",2]`}</Code>

                <p><strong>Custom iterable (manual iterator):</strong></p>
                <Code>{`const countdown = {
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
for (const n of countdown) console.log(n);`}</Code>

                <p><strong>Custom iterable (generator shortcut):</strong></p>
                <Code>{`const range = {
  *[Symbol.iterator]() { // generator makes an iterator easily
    for (let i = 1; i <= 3; i++) yield i;
  }
};
Array.from(range); // [1,2,3]`}</Code>

                <p><strong>for...of vs for...in:</strong> <code>for...of</code> iterates <em>values from the iterator</em>;
                    <code>for...in</code> iterates <em>enumerable property keys</em> (including inherited) of plain objects.
                    Plain objects are <em>not</em> iterable by default.</p>

                <Code>{`const obj = { a:1, b:2 };
for (const k in obj) console.log(k); // "a", "b"
// for (const v of obj) ... // TypeError: obj is not iterable
Object.values(obj); // [1,2]  (use this for values)`}</Code>

                <p><strong>Map/Set iteration:</strong> <code>for...of new Map([[k,v]])</code> yields <code>[key, value]</code> pairs;
                    <code>for...of new Set([v])</code> yields values.</p>

                <p><strong>Gotchas:</strong> Don't confuse array-like (has length, numeric keys) with iterable (needs <code>[Symbol.iterator]</code>).
                    For async data streams see <em>async iterables</em> (<code>[Symbol.asyncIterator]</code>) and <code>for await...of</code> (covered separately).</p>
            </>
        )
    },

    {
        id: "js-generators",
        question: "What are generators (`function*`) and `yield`?",
        text:
            "Generators are functions that can pause/resume via yield. Calling a generator returns an iterator that's also iterable. You can send values in with next(v), delegate with yield*, and end early with return()/throw().",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> A <code>generator</code> is a function declared with
                    <code> function*</code> that can <em>pause</em> at <code>yield</code> and <em>resume</em> later.
                    Invoking it returns a <em>generator object</em> (an iterator <em>and</em> iterable) with
                    <code>next()</code>, <code>return()</code>, and <code>throw()</code>.
                </p>

                <Code>{`// Basic generator: infinite ID sequence
function* idGen(start = 1) {
  let id = start;
  while (true) yield id++;
}
const g = idGen(100);
g.next(); // { value: 100, done: false }
g.next(); // { value: 101, done: false }`}</Code>

                <p><strong>Sending values into a generator:</strong> the value passed to <code>next(v)</code> becomes the result of the last <code>yield</code> expression.</p>
                <Code>{`function* dialog() {
  const name = yield "What's your name?";
  return "Hi " + name;
}
const d = dialog();
d.next();           // { value: "What's your name?", done: false }
d.next("Ada");      // { value: "Hi Ada", done: true }`}</Code>

                <p><strong>Iterating & delegation:</strong> Generators are iterable; use <code>for...of</code>, spread, or <code>yield*</code> to delegate to another iterable/generator.</p>
                <Code>{`function* letters() { yield* "abc"; } // delegate to string (iterable)
[...letters()]; // ["a","b","c"]

function* combo() {
  yield 1;
  yield* [2,3];      // delegate to array
  yield* letters();  // delegate to generator/iterable
}
[...combo()]; // [1,2,3,"a","b","c"]`}</Code>

                <p><strong>Early finish & errors:</strong> <code>return(v)</code> ends the generator (runs <code>finally</code> blocks). <code>throw(err)</code> throws inside the generator at the current pause point.</p>
                <Code>{`function* g1() {
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
it.next();         // {value:undefined, done:true}`}</Code>

                <p><strong>Key points:</strong></p>
                <ul>
                    <li>Calling a generator <em>does not run it</em> immediately; it returns an iterator. Execution starts on <code>next()</code>.</li>
                    <li>The generator object is both <em>iterator</em> and <em>iterable</em>: <code>it[Symbol.iterator]() === it</code>.</li>
                    <li>Use generators to create lazy sequences, control flows, or implement custom iterables concisely.</li>
                </ul>

                <p><strong>Gotchas:</strong></p>
                <ul>
                    <li>Arrow functions can't be generators; use <code>function*</code> or <code>{`class A { * method() { } }`}</code>.</li>
                    <li><code>yield</code> is only valid inside generator bodies.</li>
                    <li>This topic is <em>sync generators</em>; <em>async generators</em> (<code>async function*</code> + <code>for await...of</code>) are separate.</li>
                </ul>
            </>
        )
    },

    {
        id: "js-async-iterables-and-for-await-of",
        question: "What are async iterables and `for await...of`?",
        text:
            "An async iterable has [Symbol.asyncIterator]() returning an async iterator whose next() returns a Promise of {value, done}. Consume with for await...of or Array.fromAsync; create via async function*.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> An <em>async iterable</em> exposes{" "}
                    <code>[Symbol.asyncIterator]()</code> which returns an <em>async iterator</em>.
                    Its <code>next()</code> method returns a <strong>Promise</strong> resolving to{" "}
                    <code>&#123; value, done &#125;</code>. Consume it with{" "}
                    <code>for await...of</code> or <code>Array.fromAsync</code>.
                </p>

                <Code>{`// Manual async iterable: yields 1,2,3 with delays
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
})();`}</Code>

                <p><strong>Async generator shortcut:</strong> <code>async function*</code> creates async iterables easily.</p>
                <Code>{`async function* fetchPages(pages) {
  for (const url of pages) {
    const res = await fetch(url);        // awaits between yields
    yield await res.text();
  }
}

// Collect all chunks:
const texts = await Array.fromAsync(fetchPages(["/a","/b"]));`}</Code>

                <p><strong>for...of vs for <em>await</em>...of:</strong>
                    <code>for...of</code> consumes <em>sync</em> iterables (<code>[Symbol.iterator]</code>);
                    <code>for await...of</code> consumes <em>async</em> iterables and also awaits values if they are Promises.</p>

                <Code>{`// Array of promises: for-await awaits each element
const arr = [Promise.resolve(1), 2, Promise.resolve(3)];
for await (const v of arr) console.log(v); // 1, 2, 3`}</Code>

                <p><strong>Key points:</strong></p>
                <ul>
                    <li>Use inside an <code>async</code> function (or at module top level with TLA).</li>
                    <li>No async spread: <code>[...asyncIterable]</code> is invalid—use <code>Array.fromAsync</code> or a loop.</li>
                    <li>Plain objects aren't async iterable unless you add <code>[Symbol.asyncIterator]</code>.</li>
                </ul>

                <p><strong>Gotchas:</strong> Don't mix <code>for...of</code> with async iterables (TypeError).
                    Be mindful of backpressure—awaiting each item processes them sequentially.</p>
            </>
        )
    },

    {
        id: "js-what-is-promise",
        question: "What is a Promise in JavaScript?",
        text:
            "A Promise is an object representing the eventual result of an async operation. It's pending → fulfilled or rejected once, and then immutable. Use .then/.catch/.finally; handlers run as microtasks.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> A <em>Promise</em> wraps an asynchronous result.
                    It starts <strong>pending</strong> and settles exactly once to <strong>fulfilled</strong> (value)
                    or <strong>rejected</strong> (reason). Handlers attached via <code>.then</code>, <code>.catch</code>, and <code>.finally</code> run in the microtask queue.
                </p>

                <Code>{`// Basic creation and consumption
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 100);   // succeed later
  // reject(new Error("oops"));          // or fail
});

p.then(value => value * 2)              // returns a NEW promise
 .then(x => console.log(x))             // 84
 .catch(err => console.error("error:", err))
 .finally(() => console.log("done"));`}</Code>

                <p>
                    <strong>Chaining & errors:</strong> Returning a value in <code>.then</code> passes it down.
                    Throwing (or returning a rejected promise) jumps to the nearest <code>.catch</code>.
                    <code>.finally</code> runs after settle and passes through the original outcome.
                </p>

                <Code>{`Promise.resolve("A")
  .then(v => v + "B")             // "AB"
  .then(() => { throw new Error("X"); })
  .catch(e => "recover")          // handles the error -> "recover"
  .finally(() => console.log("cleanup"));`}</Code>

                <p>
                    <strong>Microtask timing:</strong> Promise callbacks run before timers of the same tick.
                </p>
                <Code>{`setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("microtask"));
// order: microtask -> timeout`}</Code>

                <p>
                    <strong>Gotchas:</strong> The executor runs <em>synchronously</em> at construction time;
                    a promise settles only once; missing a <code>.catch</code> can cause an
                    <code>unhandledrejection</code> event in browsers/Node. Prefer using <code>async/await</code> for readability (separate topics cover that and combinators).
                </p>
            </>
        )
    },

    {
        id: "js-promise-combinators",
        question: "What are Promise combinators (all, allSettled, race, any)?",
        text:
            "all waits for all to fulfill (fails fast on first reject). allSettled waits for all (never throws). race settles with the first settled promise. any fulfills on the first fulfillment (AggregateError if all reject).",
        answer: (
            <>
                <p>
                    <strong>Overview:</strong> Combinators coordinate multiple promises:
                </p>
                <ul>
                    <li><code>Promise.all(iterable)</code> → fulfills with <em>array of values</em> when <em>all</em> fulfill; <strong>rejects fast</strong> on the first rejection.</li>
                    <li><code>Promise.allSettled(iterable)</code> → always fulfills with <em>array of result objects</em> (<code>{'{ status, value | reason }'}</code>).</li>
                    <li><code>Promise.race(iterable)</code> → settles with the <em>first settled</em> promise (fulfill or reject).</li>
                    <li><code>Promise.any(iterable)</code> → fulfills with the <em>first fulfillment</em>; rejects with <strong>AggregateError</strong> if all reject.</li>
                </ul>

                <Code>{`// 1) Promise.all — parallel & fail-fast
const a = fetch("/a").then(r => r.text());
const b = fetch("/b").then(r => r.text());
const [ta, tb] = await Promise.all([a, b]); // throws if a or b rejects`}</Code>

                <Code>{`// 2) Promise.allSettled — never throws; inspect per-item status
const results = await Promise.allSettled([
  fetch("/ok"),
  fetch("/missing")
]);
/*
results = [
  { status: "fulfilled", value: Response(...) },
  { status: "rejected",  reason: ... }
]
*/`}</Code>

                <Code>{`// 3) Promise.race — first to settle wins (success or failure)
await Promise.race([
  fetch("/slow"),
  new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 1000))
]);`}</Code>

                <Code>{`// 4) Promise.any — first fulfillment wins; all reject -> AggregateError
try {
  const v = await Promise.any([
    Promise.reject("x"),
    Promise.resolve("ok"),
    Promise.resolve("later")
  ]);
  // v === "ok"
} catch (e) {
  // e is AggregateError if all reject
}`}</Code>

                <p><strong>Patterns:</strong></p>
                <ul>
                    <li><em>Parallel mapping:</em> <code>await Promise.all(arr.map(doAsync))</code> (start all first, then await).</li>
                    <li><em>Timeout wrapper:</em> <code>await Promise.race([task, timeoutPromise])</code>.</li>
                    <li><em>Best-effort batch:</em> use <code>allSettled</code> to collect successes + errors.</li>
                </ul>

                <p><strong>Gotchas:</strong> <code>all</code> rejects fast (others may still be running); <code>any</code> needs a polyfill in very old environments; always handle rejections to avoid <code>unhandledrejection</code>.</p>
            </>
        )
    },

    {
        id: "js-async-await",
        question: "What is async/await and how does it relate to Promises?",
        text:
            "async functions return Promises; await pauses within them until a Promise settles. Use try/catch/finally; prefer Promise.all for parallel work; avoid forEach with async.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <code>async</code> marks a function that <em>always returns a Promise</em>.
                    Inside it, <code>await</code> pauses the function until the awaited Promise <em>fulfills or rejects</em>,
                    resuming with the value or throwing the reason.
                </p>

                <Code>{`async function getText(url) {
  const res = await fetch(url);           // await a Promise
  if (!res.ok) throw new Error(res.status); // turn HTTP errors into rejections
  return res.text();                      // returned value -> resolved Promise
}

getText("/a").then(console.log).catch(console.error);`}</Code>

                <p><strong>Error handling:</strong> Use <code>try/catch/finally</code>. A thrown error rejects the returned Promise.</p>
                <Code>{`async function load() {
  try {
    const data = await getText("/data");
    return JSON.parse(data);
  } catch (e) {
    // handle/log/convert
    return { error: String(e) };
  } finally {
    console.log("cleanup");
  }
}`}</Code>

                <p><strong>Sequential vs parallel:</strong> Awaiting one-by-one is sequential; start tasks first and <code>await Promise.all</code> for parallelism.</p>
                <Code>{`// ❌ Sequential (slow)
const a = await getText("/a");
const b = await getText("/b");

// ✅ Parallel (start both, then await)
const [a2, b2] = await Promise.all([getText("/a"), getText("/b")]);`}</Code>

                <p><strong>Loop patterns:</strong> <code>for...of</code> works with <code>await</code>. Avoid <code>forEach</code> (it ignores async).</p>
                <Code>{`// ✅ sequential per item
for (const url of urls) {
  const t = await getText(url);
  console.log(t);
}

// ✅ parallel per item
const texts = await Promise.all(urls.map(getText));

// ❌ forEach doesn't await
urls.forEach(async u => { await getText(u) }); // fires and forgets`}</Code>

                <p><strong>Top-level <code>await</code>:</strong> In ES modules you can use <em>top-level await</em> (TLA). It pauses module evaluation until resolved.</p>
                <Code>{`// module.mjs
const config = await (await fetch("/config.json")).json();`}</Code>

                <p><strong>Cancellation:</strong> Promises aren't cancelable by default; use <code>AbortController</code> with APIs that support it (e.g., <code>fetch</code>).</p>
                <Code>{`const c = new AbortController();
const p = fetch("/slow", { signal: c.signal });
// later
c.abort(); // rejects fetch with AbortError`}</Code>

                <p><strong>Gotchas:</strong> forgetting <code>await</code> returns a pending Promise; mixing <code>??</code>/<code>||</code> with awaited values can hide errors; don't block the event loop with heavy sync work—offload to Workers.</p>
            </>
        )
    },

    {
        id: "js-strict-mode",
        question: "What is strict mode ('use strict')?",
        text:
            "Strict mode opts into safer semantics: no implicit globals, this is undefined in plain calls, duplicate params forbidden, some silent errors become throw, 'with' disallowed.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <em>Strict mode</em> is an opt-in subset of JS with
                    tighter rules that catch mistakes. Enable it with <code>"use strict"</code> at the
                    top of a file/function. ES modules are <em>strict by default</em>.
                </p>

                <Code>{`"use strict";        // file-level strict
function f(){ "use strict"; } // or function-level`}</Code>

                <p><strong>Key effects:</strong></p>
                <ul>
                    <li><strong>No implicit globals:</strong> assigning to an undeclared name throws.</li>
                    <li><strong>this in plain calls:</strong> <code>this === undefined</code> (not <code>globalThis</code>).</li>
                    <li><strong>No duplicate parameter names</strong>; <strong>octal literals</strong> like <code>012</code> banned (use <code>0o12</code>).</li>
                    <li>Some silent failures become <strong>errors</strong> (e.g., writing to read-only props).</li>
                    <li><strong>with</strong> statement disallowed; <code>eval</code>/<code>arguments</code> are more restricted.</li>
                </ul>

                <Code>{`"use strict";

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
// with (o) { /* ❌ */ }`}</Code>

                <p>
                    <strong>Notes:</strong> In strict (and modules), <code>arguments</code> is not linked to
                    parameter variables; <code>callee</code>/<code>caller</code> on functions are restricted.
                </p>

                <p>
                    <strong>Why use it:</strong> catches bugs early, prevents accidental globals,
                    enables better optimizations. Since ES modules are strict by default, most modern code already benefits.
                </p>
            </>
        )
    },

    {
        id: "js-number-type",
        question: "What is the Number type in JavaScript?",
        text:
            "Number is IEEE-754 double-precision floating point. Safe integer range is ±(2^53−1). Special values: NaN, Infinity, -Infinity, and -0. Use Number.isNaN/Number.isFinite.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> JavaScript <code>Number</code> is a 64-bit IEEE-754
                    floating-point type (double). Integers are represented exactly only up to
                    <strong> ±(2^53 − 1)</strong>.
                </p>

                <Code>{`Number.MAX_SAFE_INTEGER; // 9007199254740991  (2^53 - 1)
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.EPSILON; // ~2.220446049250313e-16 (smallest diff between 1 and next)`}</Code>

                <p><strong>Special values:</strong> <code>NaN</code>, <code>Infinity</code>, <code>-Infinity</code>, and signed zero <code>-0</code>.</p>
                <Code>{`0 === -0;             // true
Object.is(0, -0);      // false (distinguishes sign of zero)
Number.isNaN(NaN);     // true
Number.isFinite(42);   // true
isNaN("foo");          // true (coerces!) — avoid; prefer Number.isNaN`}</Code>

                <p><strong>Floating point pitfalls:</strong> fractions like 0.1 are approximations.</p>
                <Code>{`0.1 + 0.2 === 0.3;          // false
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON; // true (tolerant compare)`}</Code>

                <p><strong>Parsing & conversion:</strong></p>
                <Code>{`Number("42");        // 42
parseInt("42px", 10); // 42   (stops at non-digit)
parseFloat("3.14ms"); // 3.14
Number("  ");         // 0
Number("");           // 0
Number("0x10");       // 16
Number("1_000");      // NaN (underscores only in literals, not strings)

// Safer checks
Number.isInteger(3.0);        // true
Number.isSafeInteger(2**53);  // false`}</Code>

                <p><strong>Common Math helpers:</strong> <code>Math.floor</code>, <code>ceil</code>, <code>round</code>, <code>trunc</code>, <code>abs</code>, <code>max/min</code>, <code>pow</code>, <code>random</code>.</p>

                <p><strong>When you need big integers:</strong> use <code>BigInt</code> (separate topic) for integers beyond the safe range or exact integer math.</p>
            </>
        )
    },

    {
        id: "js-bigint-type",
        question: "What is BigInt in JavaScript?",
        text:
            "BigInt is an arbitrary-size integer primitive. Write with an n suffix (123n) or BigInt('123'). You can't mix BigInt and Number in arithmetic; division truncates toward zero.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <code>BigInt</code> is a primitive for integers of arbitrary size.
                    Use it when you need integers beyond <code>Number.MAX_SAFE_INTEGER</code> or exact integer math.
                </p>

                <Code>{`// Creating BigInts
const a = 123n;                 // literal (n suffix)
const b = BigInt("9007199254740993"); // from string
const c = BigInt(42);           // from number (safe only if integer within range)

// Basic arithmetic (integers only)
1n + 2n;        // 3n
5n * 10n;       // 50n
5n / 2n;        // 2n  (truncates toward 0)
-5n / 2n;       // -2n`}</Code>

                <p><strong>Mixing with Number:</strong> Not allowed in operators (throws). Convert explicitly.</p>
                <Code>{`1n + 2;             // TypeError (can't mix)
Number(1n) + 2;      // 3
BigInt(2) * 3n;      // 6n`}</Code>

                <p><strong>Comparisons & truthiness:</strong> Relational compare works across types; strict equality does not.</p>
                <Code>{`1n < 2;           // true
1n === 1;          // false (different types)
1n == 1;           // true  (loose equality, avoid in general)`}</Code>

                <p><strong>Utilities & limits:</strong></p>
                <ul>
                    <li>No <code>Math.*</code> support; use your own integer helpers.</li>
                    <li>Bitwise ops (<code>&</code>, <code>|</code>, <code>^</code>, <code>~</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code>) work on BigInt.</li>
                    <li>Convert/base formatting with <code>toString(radix)</code>.</li>
                    <li>Clamp to N bits with <code>BigInt.asUintN</code> / <code>BigInt.asIntN</code>.</li>
                    <li>Typed arrays: <code>BigInt64Array</code>, <code>BigUint64Array</code>.</li>
                </ul>

                <Code>{`(255n).toString(16);          // "ff"
BigInt.asUintN(8, 300n);       // 44n  (300 mod 2^8)
BigInt.asIntN(8, 0xffn);       // -1n`}</Code>

                <p><strong>Interoperability:</strong> JSON doesn't support BigInt natively.</p>
                <Code>{`JSON.stringify({ n: 1n }); // TypeError
// Workaround: stringify as string
const payload = { n: 1n.toString() };`}</Code>

                <p><strong>Gotchas:</strong> No decimals (only integers); division truncates; avoid mixing with Number without explicit conversion; performance differs by engine—measure for large-int workloads.</p>
            </>
        )
    },

    {
        id: "js-string-type",
        question: "What is the String type in JavaScript?",
        text:
            "String is an immutable primitive sequence of UTF-16 code units. length counts code units (not characters). Use codePointAt/fromCodePoint for full Unicode; strings are compared lexicographically.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <code>String</code> is an <em>immutable</em> primitive of
                    UTF-16 <em>code units</em>. Indexing uses zero-based positions into code units.
                    Reassign to change; methods return new strings.
                </p>

                <Code>{`const s = "hello";
s[0];           // "h"
s.length;       // 5
// s[0] = "H";  // ❌ no effect (immutable)
const t = s.toUpperCase(); // "HELLO" (original unchanged)`}</Code>

                <p><strong>Unicode & length:</strong> Some characters use <em>two</em> code units (surrogate pair),
                    so <code>length</code> may not equal the number of visible characters.</p>
                <Code>{`const g = "👋";           // U+1F44B
g.length;                 // 2 (two code units)
g.codePointAt(0).toString(16); // "1f44b"
String.fromCodePoint(0x1f44b); // "👋"`}</Code>

                <p><strong>Safe iteration:</strong> <code>for...of</code> iterates by Unicode code points (handles surrogate pairs correctly).</p>
                <Code>{`for (const ch of "A👋B") console.log(ch); // "A", "👋", "B"`}</Code>

                <p><strong>Common operations:</strong></p>
                <Code>{`"  hi  ".trim();           // "hi"
"hello".includes("ell"); // true
"hello".startsWith("he"); // true
"hello".endsWith("lo");   // true
"ab,cd".split(",");       // ["ab","cd"]
"ab".repeat(3);           // "ababab"
"pad".padStart(5, "0");   // "00pad"
"Hello".replace("l", "L");         // "HeLlo" (first only)
"Hello".replaceAll("l", "L");      // "HeLLo"`}</Code>

                <p><strong>Case & locale:</strong> Basic <code>toLowerCase/toUpperCase</code> don't handle all locales.
                    Use <code>Intl.Collator</code> for locale-aware comparisons/sorts.</p>
                <Code>{`new Intl.Collator("en").compare("a", "B"); // -1 (a < B by locale rules)`}</Code>

                <p><strong>Normalization:</strong> Visually identical strings can differ by combining marks.
                    Normalize before comparison.</p>
                <Code>{`"é".normalize("NFC") === "e\u0301".normalize("NFC"); // true`}</Code>

                <p><strong>Gotchas:</strong> <code>length</code> counts code units; slicing in the middle of a surrogate pair breaks the character;
                    prefer <code>[...str]</code> or <code>Array.from(str)</code> to split by code points when needed.</p>
            </>
        )
    },

    {
        id: "js-template-literals",
        question: "What are template literals and tagged templates?",
        text:
            "Template literals use backticks for multi-line strings and ${expr} interpolation. Tagged templates preprocess parts; String.raw gives backslash escapes verbatim.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <em>Template literals</em> use backticks (<code>`...`</code>) and support
                    multi-line text plus expression interpolation with <code>${"{expr}"}</code>. A
                    <em>tagged template</em> calls a function with the literal parts and evaluated expressions to customize output.
                </p>

                <Code>{`// Basic interpolation & multi-line
const name = "Ada";
const n = 3;
const s = \`Hello \${name}!\\nYou have \${n} messages.\`;
/*
Hello Ada!
You have 3 messages.
*/

// Expressions inside \${...}
\`2 + 2 = \${2 + 2}\`; // "2 + 2 = 4"`}</Code>

                <p><strong>Tagged templates:</strong> A tag function receives an array of string chunks and the interpolated values.</p>
                <Code>{`function tag(strings, ...values) {
  // strings: ["Hello ", "! Price: $", ""]
  // values:  ["Ada", 9.99]
  return strings[0] + values[0].toUpperCase() + strings[1] + values[1].toFixed(2) + strings[2];
}
const out = tag\`Hello \${"Ada"}! Price: $\${9.99}\`; 
// "Hello ADA! Price: $9.99"`}</Code>

                <p><strong>String.raw:</strong> Returns backslashes <em>unprocessed</em> (useful for regexes/paths).</p>
                <Code>{`String.raw\`C:\\\\Users\\\\me\\n\`; // "C:\\\\Users\\\\me\\n" (contains backslash+n, not newline)`}</Code>

                <p><strong>Common patterns:</strong></p>
                <ul>
                    <li><em>HTML templating (safe):</em> build strings, but escape untrusted data to prevent XSS.</li>
                    <li><em>SQL templating:</em> use a tag that parameterizes values (avoid raw concatenation to prevent injection).</li>
                    <li><em>i18n formatting:</em> tags can reorder/format placeholders.</li>
                </ul>

                <Code>{`// Example: naive escape (demo only)
const esc = (s) => String(s).replace(/[&<>"']/g, m => ({
  "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
}[m]));
const html = (strings, ...vals) =>
  strings.map((chunk, i) => chunk + (i < vals.length ? esc(vals[i]) : "")).join("");

const user = "<script>alert(1)</script>";
html\`<p>Hello \${user}</p>\`; // "<p>Hello &lt;script&gt;alert(1)&lt;/script&gt;</p>"`}</Code>

                <p><strong>Gotchas:</strong></p>
                <ul>
                    <li>Indentation inside backticks is preserved (mind leading spaces in multi-line literals).</li>
                    <li>Tagged templates do <em>not</em> use parentheses: <code>tag\`...\`</code> (not <code>tag(\`...\`)</code>).</li>
                    <li>Escapes like <code>\n</code> are processed normally—use <code>String.raw</code> for literal backslashes.</li>
                </ul>
            </>
        )
    },

    {
        id: "js-what-is-regexp",
        question: "What is a regular expression (RegExp) in JavaScript?",
        text:
            "RegExp is a pattern used to match/scan/replace text. Use /pattern/flags or new RegExp(). Common methods: test, exec, String.match/matchAll/replace/replaceAll/search/split.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> A <em>RegExp</em> is a pattern for matching text.
                    Create with literal syntax <code>/pattern/flags</code> or <code>new RegExp("pattern", "flags")</code>.
                </p>

                <Code>{`/ab+c/.test("xxabbbcxx");  // true
const re = /ab+(c)?/i;          // i = ignore case
re.exec("ABBC");                 // ["ABBc", "c", index:0, input:"ABBC", ...]`}</Code>

                <p><strong>Using with strings:</strong></p>
                <Code>{`"a1 b22 c333".match(/\\d+/g);     // ["1","22","333"]
"Hello".search(/l+/);             // 2
"12-34-56".split(/-/);            // ["12","34","56"]
"color".replace(/or/, "our");     // "colour"
"lollol".replaceAll(/lo/g, "LO"); // "LOLLOL"`}</Code>

                <p><strong>Capturing groups:</strong> unnamed <code>(...)</code>, named <code>{`(?<name>...)`}</code>; backrefs via <code>\\1</code> or <code>\\k&lt;name&gt;</code>.</p>
                <Code>{`const m = /(?<word>\\w+)\\s+\\1/.exec("hey hey");
m.groups.word; // "hey"

"2025-09-14".replace(/(?<y>\\d{4})-(?<m>\\d{2})-(?<d>\\d{2})/,
                     "$<d>/$<m>/$<y>"); // "14/09/2025"`}</Code>

                <p><strong>Lookarounds:</strong> <code>(?=...)</code> positive lookahead, <code>(?!...)</code> negative; <code>(?&lt;=...)</code>/<code>(?&lt;!...)</code> lookbehind.</p>
                <Code>{`"abc123".match(/\\d+(?=\\b)/);     // ["123"]
"price: $9".match(/(?<=\\$)\\d+/); // ["9"]`}</Code>

                <p><strong>Flags (quick tour):</strong> <code>g</code> global, <code>i</code> ignoreCase, <code>m</code> multiline (^/$ across lines),
                    <code>s</code> dotAll (<code>.</code> matches newline), <code>u</code> Unicode, <code>y</code> sticky (match at <code>lastIndex</code>), <code>d</code> indices.</p>
                <Code>{`// Global vs sticky & lastIndex
const r1 = /\\w+/g;
r1.lastIndex = 3;
r1.exec("abc def"); // matches from 3 onwards ("def")
const r2 = /\\w+/y;
r2.lastIndex = 3;
r2.exec("abc def"); // null unless pattern starts exactly at index 3`}</Code>

                <p><strong>Indices flag (d):</strong> get start/end indices of captures.</p>
                <Code>{`const r = /(\\w+)-(\\w+)/d;
const m2 = r.exec("foo-bar");
m2.indices; // e.g., [[0,7],[0,3],[4,7]]`}</Code>

                <p><strong>Gotchas:</strong></p>
                <ul>
                    <li><code>/g</code> and <code>/y</code> are <em>stateful</em> (they mutate <code>lastIndex</code>); don’t reuse across unrelated inputs.</li>
                    <li><code>String.match(re)</code> behaves differently with and without <code>g</code>; for all matches + groups, prefer <code>matchAll</code>.</li>
                    <li>Use <code>u</code> for correct Unicode handling (e.g., <code>.</code> vs surrogate pairs).</li>
                    <li><code>m</code>: <code>^</code>/<code>$</code> align to line starts/ends; <code>s</code>: <code>.</code> matches <code>\\n</code>.</li>
                </ul>

                <Code>{`// Match all with groups
const iter = "a1 b22".matchAll(/(\\w)(\\d+)/g);
[...iter].map(m => m.slice(1)); // [["a","1"], ["b","22"]]`}</Code>
            </>
        )
    },


    {
        id: "js-what-is-array",
        question: "What is an Array in JavaScript?",
        text:
            "Array is an ordered, zero-indexed, growable object specialized for indexed data. length is 1 + highest index; supports holes; common methods include push/pop, map/filter/reduce, sort with comparator.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> An <em>Array</em> is an ordered, zero-indexed, dynamically
                    sized object optimized for indexed elements. The <code>length</code> is one more than the
                    highest numeric index (not the count of defined elements).
                </p>

                <Code>{`// Create
const a = [1, 2, 3];
const b = new Array(3);   // [ <3 empty items> ] (a HOLEY array)
const c = Array.of(1, 2); // [1, 2]

// Length & holes
const arr = [];
arr[3] = "x";
arr.length;      // 4
arr;             // [ <3 empty items>, "x" ]`}</Code>

                <p><strong>Adding/removing:</strong></p>
                <Code>{`const xs = [1,2];
xs.push(3);      // [1,2,3]      (add at end)
xs.pop();        // [1,2]        (remove end)
xs.unshift(0);   // [0,1,2]      (add at start)
xs.shift();      // [1,2]        (remove start)
xs.splice(1, 0, 99); // [1,99,2] (insert/delete at index)`}</Code>

                <p><strong>Iteration & transform:</strong></p>
                <Code>{`[1,2,3].forEach(x => console.log(x));
[1,2,3].map(x => x * 2);           // [2,4,6]
[1,2,3].filter(x => x % 2);        // [1,3]
[1,2,3].reduce((a,b) => a + b, 0); // 6
[1,2,3].some(x => x > 2);          // true
[1,2,3].every(x => x > 0);         // true`}</Code>

                <p><strong>Search & copy:</strong></p>
                <Code>{`["a","b","c"].includes("b"); // true
["a","b","c"].indexOf("b");    // 1
["x","y","z"].slice(1);        // ["y","z"] (non-mutating)
["x","y","z"].concat(["w"]);   // ["x","y","z","w"]`}</Code>

                <p><strong>Sort:</strong> Default is <em>lexicographic</em> on strings; use a comparator for numbers.</p>
                <Code>{`[10,2,5].sort();              // [10,2,5] -> ["10","2","5"] => ["10","2","5"] => [10,2,5]
[10,2,5].sort((a,b) => a - b); // [2,5,10]`}</Code>

                <p><strong>Array-like ↔ Array:</strong></p>
                <Code>{`function f(){
  // arguments is array-like (has length, numeric keys) but not an Array
  return Array.from(arguments);     // make a real array
}
const nodes = document.querySelectorAll("div"); // NodeList (iterable)
const arrNodes = [...nodes]; // via spread (uses the iterator)`}</Code>

                <p><strong>Gotchas:</strong></p>
                <ul>
                    <li><strong>Holes vs <code>undefined</code>:</strong> <code>delete a[i]</code> makes a hole; prefer <code>splice</code> to remove items.</li>
                    <li><strong>length truncates:</strong> setting <code>arr.length = 0</code> clears the array.</li>
                    <li><strong>Performance:</strong> frequent <code>shift/unshift</code> are costlier than <code>push/pop</code> (reindexing).</li>
                    <li>Plain objects aren't arrays; use <code>Array.isArray(v)</code> to check.</li>
                </ul>

                <Code>{`const a2 = [1,2,3];
delete a2[1];     // [1, <1 empty item>, 3]
a2.length;        // 3
a2.splice(1,1);   // removes properly -> [1,3]

Array.isArray([]);        // true
Array.isArray({ length:1 }); // false`}</Code>
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
                        placeholder="Search questions...  (press /, Esc to clear)"
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

            <p>Last updated: Sep 14, 2025</p>



            <Styled.Count>
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                {query ? ` for "${query}"` : ""}
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
