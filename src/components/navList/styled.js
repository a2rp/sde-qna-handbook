import styled from "styled-components";

export const Styled = {
    Nav: styled.nav`
        display: grid;
        gap: 7px;
        h2 { margin: 0; color: #a1a1a1; font-size: 12px; letter-spacing: 0.09em; text-transform: uppercase; }
        h2 a, li a { display: flex; align-items: center; min-height: 38px; padding: 8px 10px; color: #afafaf; border: 1px solid transparent; border-radius: 8px; text-decoration: none; transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, text-shadow 160ms ease; &.active, &:hover { color: #f4f4f4; border-color: rgba(180, 180, 180, 0.38); box-shadow: 0 0 16px rgba(160, 160, 160, 0.12); text-shadow: 0 0 10px rgba(208, 208, 208, 0.6); } }
        ul { display: grid; gap: 4px; margin: 0 0 8px 9px; padding: 0 0 0 10px; border-left: 1px solid rgba(180, 180, 180, 0.18); list-style: none; }
        li { margin: 0; }
    `,
};
