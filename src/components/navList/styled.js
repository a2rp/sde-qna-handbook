import styled from "styled-components";

export const Styled = {
    Nav: styled.nav`
        display: grid;
        gap: 7px;
        h2 { margin: 0; color: #8ba4bf; font-size: 12px; letter-spacing: 0.09em; text-transform: uppercase; }
        h2 a, li a { display: flex; align-items: center; min-height: 38px; padding: 8px 10px; color: #9cb1c8; border: 1px solid transparent; border-radius: 8px; text-decoration: none; transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, text-shadow 160ms ease; &.active, &:hover { color: #ecf5ff; border-color: rgba(126, 183, 255, 0.38); box-shadow: 0 0 16px rgba(94, 161, 255, 0.12); text-shadow: 0 0 10px rgba(166, 213, 255, 0.6); } }
        ul { display: grid; gap: 4px; margin: 0 0 8px 9px; padding: 0 0 0 10px; border-left: 1px solid rgba(126, 183, 255, 0.18); list-style: none; }
        li { margin: 0; }
    `,
};
