import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Styled } from "./styled";

const NavListCore = () => {
    const navRef = useRef(null);
    const { pathname } = useLocation();

    // Keep the active NavLink centered/visible in the sidebar
    useEffect(() => {
        const el = navRef.current?.querySelector("a.active");
        if (!el) return;

        // small delay so NavLink receives the .active class after route update
        const id = requestAnimationFrame(() => {
            try {
                el.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" });
            } catch {
                // older browsers fallback
                el.scrollIntoView();
            }
        });
        return () => cancelAnimationFrame(id);
    }, [pathname]);

    return (
        <Styled.Nav ref={navRef} aria-label="JavaScript Core navigation">
            <h2 style={{ margin: 0 }}>
                <NavLink
                    to="/home"
                    title="Home"
                    style={{
                        display: "block",
                        padding: 0,
                        margin: 0
                    }}
                >
                    Home
                </NavLink>
            </h2>
            <h2 style={{ margin: 0 }}>
                <NavLink
                    to="/about"
                    title="About"
                    style={{
                        display: "block",
                        padding: 0,
                        margin: 0
                    }}
                >
                    About
                </NavLink>
            </h2>

            <h2>JavaScript</h2>
            <ul>
                <li><NavLink to="/javascript" end title="Overview">Overview</NavLink></li>
                <li><NavLink to="/javascript/theory" title="Theory">Theory</NavLink></li>
                <li><NavLink to="/javascript/programs" title="Programs">Programs</NavLink></li>
            </ul>

            {/* <h3>React</h3>
            <ul>
                <li><NavLink to="/react" end title="Overview">Overview</NavLink></li>
                <li><NavLink to="/react/theory" title="Theory">Theory</NavLink></li>
                <li><NavLink to="/react/programs" title="Programs">Programs</NavLink></li>
            </ul>

            <h3>Node</h3>
            <ul>
                <li><NavLink to="/node" end title="Overview">Overview</NavLink></li>
                <li><NavLink to="/node/theory" title="Theory">Theory</NavLink></li>
                <li><NavLink to="/node/programs" title="Programs">Programs</NavLink></li>
            </ul> */}
        </Styled.Nav>
    );
};

export default NavListCore;
