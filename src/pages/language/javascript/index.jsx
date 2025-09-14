import { NavLink } from "react-router-dom";
import styled from "styled-components";
import BreadcrumbsBar from "../../../components/BreadcrumbsBar"; // adjust path if needed

const Styled = {
    Wrapper: styled.div`
    padding: 20px 16px 40px;
    display: grid;
    gap: 16px;
  `,
    Header: styled.header`
    display: grid;
    gap: 6px;
    h1 { margin: 0; letter-spacing: .3px; }
    p.lead { opacity: .85; margin: 0; }
    small.muted { opacity: .6; }
  `,
    Fieldset: styled.fieldset`
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
  `,
    Cards: styled.div`
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
  `,
    Links: styled.div`
    margin-top: 10px;
    font-size: 13px;
    a { color: inherit; }
  `,
};

const Javascript = () => {
    return (
        <Styled.Wrapper>
            {/* Breadcrumbs on top */}
            <BreadcrumbsBar />

            <Styled.Header>
                <h1>JavaScript</h1>
                <p className="lead">
                    The programming language of the Web — used with HTML &amp; CSS for interactive UI, and with runtimes like Node.js for servers/tools.
                </p>
                <small className="muted">Last updated: Sep 14, 2025</small>
            </Styled.Header>

            <Styled.Fieldset>
                <legend>About</legend>
                <div>
                    <p>
                        JavaScript (JS) is a programming language and a core web technology alongside HTML and CSS.
                        Most websites use JS on the client for behavior. Browsers run JS via an engine; the same language
                        also runs outside the browser in runtimes such as Node.js, Deno, and Bun.
                    </p>
                    <p>
                        JS conforms to the <strong>ECMAScript</strong> standard. It’s dynamically typed, prototype-based,
                        multi-paradigm (event-driven, functional, imperative) with first-class functions and modules.
                        The ECMAScript spec leaves I/O to the host — so browser/Node provide APIs like DOM, fetch, fs, etc.
                    </p>
                    <p>
                        Although the names sound similar, <strong>Java</strong> and <strong>JavaScript</strong> are different languages.
                    </p>

                    <ul>
                        <li><strong>Engines:</strong> V8 (Chrome/Node), SpiderMonkey (Firefox), JavaScriptCore (Safari).</li>
                        <li><strong>Key features:</strong> lexical scope &amp; closures, promises &amp; async/await, modules (ESM), event loop.</li>
                        <li><strong>Language vs platform:</strong> JS is the language; host APIs differ between Browser and Node.</li>
                    </ul>

                    <pre>{`// Tiny taste
console.log("Hello, JavaScript!");
export const add = (a, b) => a + b; // ESM named export`}</pre>

                    <Styled.Cards>
                        <NavLink to="/javascript/theory" className="card">
                            <h3>Theory QnA</h3>
                            <p>Core language, concepts, gotchas, tiny examples.</p>
                        </NavLink>
                        <NavLink to="/javascript/programs" className="card">
                            <h3>Programs QnA</h3>
                            <p>Problem → approach → code → complexity → tests.</p>
                        </NavLink>
                    </Styled.Cards>

                    <Styled.Links>
                        <span>
                            Reference:{" "}
                            <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noreferrer">
                                Wikipedia — JavaScript
                            </a>
                        </span>
                    </Styled.Links>
                </div>
            </Styled.Fieldset>
        </Styled.Wrapper>
    );
};

export default Javascript;
