import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`padding: 20px 0 4px; border-top: 1px solid rgba(180, 180, 180, 0.16); background: rgba(9, 9, 9, 0.55);`,
    FooterTop: styled.div`display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-bottom: 17px; border-bottom: 1px solid rgba(180, 180, 180, 0.14); @media (max-width: 620px) { align-items: flex-start; flex-direction: column; }`,
    Title: styled.strong`font-size: 14px;`,
    Copyright: styled.span`color: #a7a7a7; font-size: 12px; a { color: #f1f1f1; font-weight: 800; text-decoration: none; &:hover { color: #b4b4b4; text-shadow: 0 0 12px rgba(180, 180, 180, 0.55); } }`,
    Groups: styled.div`display: grid; grid-template-columns: 1fr 1fr; gap: 24px; padding-top: 17px; @media (max-width: 620px) { grid-template-columns: 1fr; } > div { display: flex; align-items: center; gap: 12px; > span { color: #a7a7a7; font-size: 10px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; } }`,
    IconLinks: styled.div`display: flex; flex-wrap: wrap; gap: 7px;`,
    IconLink: styled.a`width: 31px; height: 31px; display: grid; place-items: center; color: #a5a5a5; border: 1px solid rgba(175, 175, 175, 0.22); border-radius: 8px; transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, text-shadow 160ms ease; &:hover { color: #c2c2c2; border-color: #c2c2c2; box-shadow: 0 0 16px rgba(194, 194, 194, 0.18); text-shadow: 0 0 10px rgba(194, 194, 194, 0.72); } &:focus-visible { outline: 2px solid #b4b4b4; outline-offset: 2px; }`,
};
