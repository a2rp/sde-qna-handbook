import styled, { css } from "styled-components";

const stableScrollbar = css`
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    &::-webkit-scrollbar { width: 12px; height: 12px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb { background: transparent; border: 3px solid transparent; border-radius: 8px; background-clip: content-box; }
    @media (hover: hover) {
        &:hover { scrollbar-color: #5c7898 transparent; }
        &:hover::-webkit-scrollbar-thumb { background: #45617d; }
    }
    @media (hover: none) {
        scrollbar-color: #45617d transparent;
        &::-webkit-scrollbar-thumb { background: #45617d; }
    }
`;

export const Styled = {
    Wrapper: styled.div`position: relative; min-height: 100vh; background: #070b11; color: #e8f1ff;`,
    Header: styled.header`position: fixed; inset: 0 0 auto; z-index: 30; height: 72px; border-bottom: 1px solid rgba(146, 183, 224, 0.18); background: rgba(5, 9, 15, 0.92); backdrop-filter: blur(16px);`,
    HeaderMain: styled.div`height: 100%; width: min(1280px, calc(100% - 32px)); margin: 0 auto; display: flex; align-items: center; gap: 14px;`,
    NavLinkWrapper: styled.button`width: 38px; height: 38px; display: grid; place-items: center; flex: 0 0 auto; color: #b9d6f7; background: #101b2a; border: 1px solid rgba(126, 183, 255, 0.3); border-radius: 9px; cursor: pointer; transition: border-color 160ms ease, box-shadow 160ms ease, text-shadow 160ms ease; &:hover { border-color: #7eb7ff; box-shadow: 0 0 16px rgba(126, 183, 255, 0.18); text-shadow: 0 0 10px rgba(190, 224, 255, 0.7); } &:focus-visible { outline: 2px solid #7eb7ff; outline-offset: 2px; }`,
    Brand: styled.a`display: inline-flex; align-items: center; gap: 10px; min-width: max-content; color: #f5f9ff; text-decoration: none; &:hover span { text-shadow: 0 0 14px rgba(126, 183, 255, 0.58); } img { width: 38px; height: 38px; padding: 5px; object-fit: contain; border: 1px solid rgba(126, 183, 255, 0.4); border-radius: 9px; background: #111c2b; } span { display: grid; gap: 1px; font-size: 14px; font-weight: 800; } small { color: #7eb7ff; font-size: 9px; letter-spacing: 0.15em; } &:focus-visible { outline: 2px solid #7eb7ff; outline-offset: 4px; }`,
    HeaderMeta: styled.div`display: inline-flex; align-items: center; gap: 7px; margin-left: auto; color: #94abc4; font-size: 12px; svg { color: #7eb7ff; } @media (max-width: 680px) { display: none; }`,
    HeaderLinks: styled.div`display: flex; gap: 8px;`,
    HeaderLink: styled.a`width: 36px; height: 36px; display: grid; place-items: center; color: #a9c4e3; border: 1px solid rgba(126, 183, 255, 0.25); border-radius: 9px; transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease; &:hover { color: #fff; border-color: #7eb7ff; box-shadow: 0 0 16px rgba(126, 183, 255, 0.2); } &:focus-visible { outline: 2px solid #7eb7ff; outline-offset: 2px; }`,
    Main: styled.div`height: 100vh; padding-top: 72px; display: flex; align-items: stretch; overflow: hidden;`,
    NavWrapper: styled.aside`width: 0; flex: 0 0 0; overflow: hidden; z-index: 24; background: #090f18; border-right: 1px solid transparent; transition: width 180ms ease, flex-basis 180ms ease, border-color 180ms ease; &.active { width: 260px; flex-basis: 260px; border-color: rgba(146, 183, 224, 0.16); } .navInner { width: 260px; height: 100%; overflow-y: auto; padding: 20px 14px; ${stableScrollbar}; } @media (max-width: 900px) { position: fixed; top: 72px; left: 0; height: calc(100vh - 72px); box-shadow: 18px 0 32px rgba(0, 0, 0, 0.3); } @media (max-width: 560px) { &.active { width: 236px; flex-basis: 236px; } .navInner { width: 236px; } }`,
    ContentWrapper: styled.div`width: 100%; min-width: 0; overflow: auto; scroll-behavior: smooth; ${stableScrollbar};`,
    RoutesWrapper: styled.div`min-height: calc(100% - 1px);`,
    Loading: styled.div`min-height: 50vh; display: grid; place-content: center; justify-items: center; gap: 12px; color: #9cb4cf; font-size: 12px;`,
    Footer: styled.div`padding: 16px 24px 28px; @media (max-width: 600px) { padding: 14px 16px 24px; }`,
};
