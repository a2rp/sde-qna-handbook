import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 920px;
        padding: clamp(24px, 5vw, 64px);
        margin: 0 auto;
        fieldset { padding: clamp(22px, 4vw, 42px); border: 1px solid rgba(180, 180, 180, 0.28); border-radius: 16px; background: linear-gradient(145deg, rgba(32, 32, 32, 0.88), rgba(19, 19, 19, 0.86)); box-shadow: 0 22px 46px rgba(0, 0, 0, 0.22); }
        legend { padding: 0 12px; color: #bcbcbc; font-size: 12px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; }
        div { color: #d6d6d6; font-size: 15px; line-height: 1.85; }
        ul { margin: 10px 0 18px; padding-left: 20px; color: #bdbdbd; }
        p { margin: 24px 0 0; color: #f2f2f2; font-weight: 700; }
    `,
};
