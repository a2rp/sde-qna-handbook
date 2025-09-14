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
        id: "js-ecmascript-vs-javascript",
        question: "What is ECMAScript? How is it different from JavaScript?",
        text:
            "ECMAScript is the official specification (ECMA-262) that defines the JavaScript language. JavaScript is the common name for implementations of that spec in browsers/Node, plus host APIs (DOM, fs, fetch) that are outside ECMAScript.",
        answer: (
            <>
                <p>
                    <strong>Definition:</strong> <em>ECMAScript (ES)</em> is the official language
                    specification published as <strong>ECMA-262</strong>. It defines syntax,
                    types, operators, objects, and built-ins (e.g., <code>Promise</code>, <code>Map</code>, <code>Array</code> methods).
                    <strong>JavaScript</strong> is what engines (V8, SpiderMonkey, JSC) implement and what developers use in
                    <em>runtimes</em> (Browser, Node, Deno, Bun).
                </p>

                <p>
                    <strong>Difference (mental model):</strong> ES = language rules &amp; standard library.
                    JavaScript (in a runtime) = ES <em>plus</em> host APIs:
                </p>
                <ul>
                    <li><strong>Browser host APIs:</strong> DOM, <code>fetch</code>, <code>localStorage</code>, <code>requestAnimationFrame</code>, etc.</li>
                    <li><strong>Node host APIs:</strong> <code>fs</code>, <code>net</code>, <code>process</code>, <code>Buffer</code>, etc.</li>
                </ul>

                <p>
                    <strong>Versions &amp; naming:</strong> Since 2015, the spec ships yearly (ES2015 ≈ ES6, then ES2016, ES2017 …).
                    Proposals move through TC39 stages (0→4). <em>Stage 4</em> features land in the next ES edition.
                </p>

                <Code>{`// ECMAScript features (language-level) — portable across runtimes:

// 1) Optional chaining & nullish coalescing
const email = user.profile?.contact?.email ?? "(not set)";

// 2) Non-mutating array helpers (ES2023)
[3,1,2].toSorted();         // [1,2,3]
[1,2,3].with(1, 99);        // [1,99,3]

// 3) BigInt (arbitrary-size integers)
const big = 9007199254740993n; // > Number.MAX_SAFE_INTEGER

// 4) Modules (ESM)
export const add = (a,b) => a + b;
`}</Code>

                <Code>{`// Host API examples — NOT part of ECMAScript:

// Browser-only (DOM, fetch)
document.querySelector("h1"); // DOM API (browser)
await fetch("/api");          // WHATWG Fetch (browser/Node >=18)

// Node-only (fs)
import { readFile } from "node:fs/promises";
const txt = await readFile("notes.txt", "utf8");`}</Code>

                <p>
                    <strong>Why it matters:</strong> Specs vs runtime separation tells you <em>what</em> is guaranteed everywhere
                    (language), and <em>what</em> is environment-specific (host). It guides portability, polyfills, and debugging.
                </p>

                <p>
                    <strong>Gotchas:</strong> A feature can be in ES but missing on an older engine. Use transpilers/polyfills when targeting older environments; also don’t assume browser-only APIs exist in Node (and vice-versa).
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
