import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        font-family: ${props => props.theme.fonts.openSansFontFamily };
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        background-color: ${props => props.theme.colors.gray };
        height: 100vh;
        font-size: 16px;
    }
`;
