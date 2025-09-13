import styled from "styled-components";

export const Styled = {
    Page: styled.div`
        padding: 24px 18px 48px;
    `,
    Header: styled.header`
        margin-bottom: 16px;
        h1 {
            font-size: 22px;
            margin: 0 0 6px;
            letter-spacing: 0.3px;
        }
        .muted {
            opacity: 0.7;
            font-size: 13px;
        }
        code {
            padding: 2px 6px;
            border-radius: 6px;
            background: hsl(0 0% 100% / 0.06);
        }
    `,
    Panel: styled.section`
        border: 1px solid hsl(0 0% 100% / 0.12);
        border-radius: 12px;
        padding: 16px 16px 6px;
        background: hsl(0 0% 100% / 0.03);
        p {
            margin: 0 0 10px;
            line-height: 1.6;
        }
        ul {
            margin: 0 0 4px 18px;
            line-height: 1.7;
        }
    `,
    CardGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(220px, 1fr));
        gap: 12px;
        margin-top: 16px;

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }

        .card {
            border: 1px solid hsl(0 0% 100% / 0.12);
            border-radius: 12px;
            padding: 14px 16px;
            text-decoration: none;
            color: inherit;
            background: hsl(0 0% 100% / 0.03);
            transition: transform 160ms ease, background 160ms ease,
                border 160ms ease;
        }
        .card:hover {
            transform: translateY(-2px);
            background: hsl(0 0% 100% / 0.05);
            border-color: hsl(0 0% 100% / 0.2);
        }
        .card h3 {
            margin: 0 0 6px;
            font-size: 16px;
            letter-spacing: 0.2px;
        }
        .card p {
            margin: 0;
            opacity: 0.8;
            font-size: 13px;
            line-height: 1.5;
        }
    `,
};
