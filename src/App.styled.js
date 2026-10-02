import styled, { css } from "styled-components";

const stableScrollbar = css`
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    &::-webkit-scrollbar { width: 12px; height: 12px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb { background: transparent; border: 3px solid transparent; border-radius: 8px; background-clip: content-box; }
    @media (hover: hover) {
        &:hover { scrollbar-color: #767676 transparent; }
        &:hover::-webkit-scrollbar-thumb { background: #5e5e5e; }
    }
    @media (hover: none) {
        scrollbar-color: #5e5e5e transparent;
        &::-webkit-scrollbar-thumb { background: #5e5e5e; }
    }
`;

export const Styled = {
    Wrapper: styled.div`position: relative; min-height: 100vh; background: #0b0b0b; color: #f0f0f0;`,
    Header: styled.header`position: fixed; inset: 0 0 auto; z-index: 30; height: 72px; border-bottom: 1px solid rgba(180, 180, 180, 0.18); background: rgba(9, 9, 9, 0.92); backdrop-filter: blur(16px);`,
    HeaderMain: styled.div`height: 100%; width: min(1280px, calc(100% - 32px)); margin: 0 auto; display: flex; align-items: center; gap: 14px;`,
    NavLinkWrapper: styled.button`width: 38px; height: 38px; display: grid; place-items: center; flex: 0 0 auto; color: #d3d3d3; background: #1a1a1a; border: 1px solid rgba(180, 180, 180, 0.3); border-radius: 9px; cursor: pointer; transition: border-color 160ms ease, box-shadow 160ms ease, text-shadow 160ms ease; &:hover { border-color: #b4b4b4; box-shadow: 0 0 16px rgba(180, 180, 180, 0.18); text-shadow: 0 0 10px rgba(220, 220, 220, 0.7); } &:focus-visible { outline: 2px solid #b4b4b4; outline-offset: 2px; }`,
    Brand: styled.a`display: inline-flex; align-items: center; gap: 10px; min-width: max-content; color: #f9f9f9; text-decoration: none; &:hover span { text-shadow: 0 0 14px rgba(180, 180, 180, 0.58); } img { width: 38px; height: 38px; padding: 5px; object-fit: contain; border: 1px solid rgba(180, 180, 180, 0.4); border-radius: 9px; background: #1b1b1b; } span { display: grid; gap: 1px; font-size: 14px; font-weight: 800; } small { color: #b4b4b4; font-size: 9px; letter-spacing: 0.15em; } &:focus-visible { outline: 2px solid #b4b4b4; outline-offset: 4px; }`,
    HeaderMeta: styled.div`display: inline-flex; align-items: center; gap: 7px; margin-left: auto; color: #a8a8a8; font-size: 12px; svg { color: #b4b4b4; } @media (max-width: 680px) { display: none; }`,
    HeaderLinks: styled.div`display: flex; gap: 8px;`,
    HeaderLink: styled.a`width: 36px; height: 36px; display: grid; place-items: center; color: #c1c1c1; border: 1px solid rgba(180, 180, 180, 0.25); border-radius: 9px; transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease; &:hover { color: #fff; border-color: #b4b4b4; box-shadow: 0 0 16px rgba(180, 180, 180, 0.2); } &:focus-visible { outline: 2px solid #b4b4b4; outline-offset: 2px; }`,
    Main: styled.div`height: 100vh; padding-top: 72px; display: flex; align-items: stretch; overflow: hidden;`,
    NavWrapper: styled.aside`width: 0; flex: 0 0 0; overflow: hidden; z-index: 24; background: #0f0f0f; border-right: 1px solid transparent; transition: width 180ms ease, flex-basis 180ms ease, border-color 180ms ease; &.active { width: 260px; flex-basis: 260px; border-color: rgba(180, 180, 180, 0.16); } .navInner { width: 260px; height: 100%; overflow-y: auto; padding: 20px 14px; ${stableScrollbar}; } @media (max-width: 900px) { position: fixed; top: 72px; left: 0; height: calc(100vh - 72px); box-shadow: 18px 0 32px rgba(0, 0, 0, 0.3); } @media (max-width: 560px) { &.active { width: 236px; flex-basis: 236px; } .navInner { width: 236px; } }`,
    ContentWrapper: styled.div`width: 100%; min-width: 0; overflow: auto; scroll-behavior: smooth; ${stableScrollbar};`,
    RoutesWrapper: styled.div`min-height: calc(100% - 1px);`,
    Loading: styled.div`min-height: 50vh; display: grid; place-content: center; justify-items: center; gap: 12px; color: #b1b1b1; font-size: 12px;`,
    Footer: styled.div`padding: 16px 24px 28px; @media (max-width: 600px) { padding: 14px 16px 24px; }`,
};
