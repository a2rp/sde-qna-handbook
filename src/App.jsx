import { lazy, Suspense, useState } from "react";
import { useLocation, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { FiBookOpen, FiGithub, FiMenu, FiX } from "react-icons/fi";
import { CircularProgress } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import { Styled } from "./App.styled";
import Footer from "./components/footer";
import NavList from "./components/navList";

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notFound"));
const About = lazy(() => import("./pages/about"));
const JsOverview = lazy(() => import("./pages/language/javascript"));
const JsTheory = lazy(() => import("./pages/language/javascript/Theory"));
const JsPrograms = lazy(() => import("./pages/language/javascript/Programs"));

export default function App() {
    const [displayNav, setDisplayNav] = useState(true);
    const { pathname } = useLocation();

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Styled.HeaderMain>
                    <Styled.NavLinkWrapper as="button" type="button" onClick={() => setDisplayNav((previous) => !previous)} aria-label={displayNav ? "Close handbook navigation" : "Open handbook navigation"} title={displayNav ? "Close navigation" : "Open navigation"}>
                        {displayNav ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                    </Styled.NavLinkWrapper>
                    <Styled.Brand as={NavLink} to="/" aria-label="SDE QnA Handbook home">
                        <img src={import.meta.env.BASE_URL + "logo.png"} alt="" />
                        <span><small>A2RP HANDBOOK</small>SDE QnA Handbook</span>
                    </Styled.Brand>
                    <Styled.HeaderMeta><FiBookOpen aria-hidden="true" /> Theory and programs</Styled.HeaderMeta>
                    <Styled.HeaderLinks>
                        <Styled.HeaderLink href="https://github.com/a2rp/sde-qna-handbook" target="_blank" rel="noopener noreferrer" aria-label="Open repository" title="Open repository"><FiGithub /></Styled.HeaderLink>
                    </Styled.HeaderLinks>
                </Styled.HeaderMain>
            </Styled.Header>

            <Styled.Main>
                <Styled.NavWrapper className={displayNav ? "active" : ""}>
                    <div className="navInner"><NavList /></div>
                </Styled.NavWrapper>

                <Styled.ContentWrapper id="scroll-root" data-scroll-root>
                    <Styled.RoutesWrapper>
                        <Suspense key={pathname} fallback={<Styled.Loading><CircularProgress size={24} /><span>Loading page...</span></Styled.Loading>}>
                            <Routes>
                                <Route path="/" element={<Navigate to="/home" />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="javascript">
                                    <Route index element={<JsOverview />} />
                                    <Route path="theory" element={<JsTheory />} />
                                    <Route path="programs" element={<JsPrograms />} />
                                </Route>
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </Styled.RoutesWrapper>
                    <Styled.Footer><Footer /></Styled.Footer>
                </Styled.ContentWrapper>
            </Styled.Main>

            <ScrollToTop />
        </Styled.Wrapper>
    );
}
