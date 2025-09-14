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
                    <strong>Language vs Platform:</strong> JS = language; host APIs vary — Browser
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
                    <strong>Why it matters:</strong> ES defines what works uniformly across engines (V8/SpiderMonkey/JSC). Things like DOM or Node’s <code>fs</code> are <em>not</em> ECMAScript—they’re host APIs.
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
                    It’s the environment where JS runs and where non-language features come from.
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
                    <strong>Why it matters:</strong> Tells you what’s portable (language) vs what depends on the environment (host APIs).
                </p>
                <p>
                    <strong>Gotcha:</strong> Don’t assume browser APIs exist in Node (and vice-versa). Choose the right polyfills or runtime-specific code paths.
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
