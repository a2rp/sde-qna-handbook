import ScrollToTop from './components/ScrollToTop'
import { Styled } from './App.styled'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'
import { MdMenuOpen } from 'react-icons/md'
import { CircularProgress } from '@mui/material'
import Footer from './components/footer'
import NavList from './components/navList'

/* Pages */
const Home = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/notFound'));
const About = lazy(() => import('./pages/about'));

// JavaScript pages
const JsOverview = lazy(() => import("./pages/language/javascript")); // folder index.jsx
const JsTheory = lazy(() => import("./pages/language/javascript/Theory"));
const JsPrograms = lazy(() => import("./pages/language/javascript/Programs"));

const App = () => {
    const [displayNav, setDisplayNav] = useState(true);
    const handleDisplayNav = () => setDisplayNav(prev => !prev);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Styled.NavLinkWrapper onClick={handleDisplayNav}>
                    <MdMenuOpen size={20} />
                </Styled.NavLinkWrapper>
                <Styled.Heading><NavLink to="/">a2rp: QnA Handbook</NavLink></Styled.Heading>
            </Styled.Header>

            <Styled.Main>
                <Styled.NavWrapper className={`${displayNav ? "active" : ""}`}>
                    <div className="navInner">
                        <NavList />
                    </div>
                </Styled.NavWrapper>

                <Styled.ContentWrapper id="scroll-root" data-scroll-root>
                    <Styled.RoutesWrapper>
                        <Suspense fallback={<CircularProgress />}>
                            <Routes>
                                {/* Basics */}
                                <Route path="/" element={<Navigate to="/home" />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/about" element={<About />} />

                                {/* /javascript -> Overview (index), /javascript/theory, /javascript/programs */}
                                <Route path="javascript">
                                    <Route index element={<JsOverview />} />
                                    <Route path="theory" element={<JsTheory />} />
                                    <Route path="programs" element={<JsPrograms />} />
                                </Route>

                                {/* 404 */}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </Styled.RoutesWrapper>

                    <Styled.Footer>
                        <Footer />
                    </Styled.Footer>
                </Styled.ContentWrapper>
            </Styled.Main>

            <ScrollToTop />
        </Styled.Wrapper>
    )
}

export default App
