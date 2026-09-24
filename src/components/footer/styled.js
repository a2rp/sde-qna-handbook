import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`padding: 20px 0 4px; border-top: 1px solid rgba(146, 183, 224, 0.16); background: rgba(5, 9, 15, 0.55);`,
    FooterTop: styled.div`display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-bottom: 17px; border-bottom: 1px solid rgba(146, 183, 224, 0.14); @media (max-width: 620px) { align-items: flex-start; flex-direction: column; }`,
    Title: styled.strong`font-size: 14px;`,
    Copyright: styled.span`color: #94a9c0; font-size: 12px; a { color: #e9f2ff; font-weight: 800; text-decoration: none; &:hover { color: #7eb7ff; text-shadow: 0 0 12px rgba(126, 183, 255, 0.55); } }`,
    Groups: styled.div`display: grid; grid-template-columns: 1fr 1fr; gap: 24px; padding-top: 17px; @media (max-width: 620px) { grid-template-columns: 1fr; } > div { display: flex; align-items: center; gap: 12px; > span { color: #94a9c0; font-size: 10px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; } }`,
    IconLinks: styled.div`display: flex; flex-wrap: wrap; gap: 7px;`,
    IconLink: styled.a`width: 31px; height: 31px; display: grid; place-items: center; color: #91a8c0; border: 1px solid rgba(142, 178, 218, 0.22); border-radius: 8px; transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, text-shadow 160ms ease; &:hover { color: #8bc8ff; border-color: #8bc8ff; box-shadow: 0 0 16px rgba(139, 200, 255, 0.18); text-shadow: 0 0 10px rgba(139, 200, 255, 0.72); } &:focus-visible { outline: 2px solid #7eb7ff; outline-offset: 2px; }`,
};
