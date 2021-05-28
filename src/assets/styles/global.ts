import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        background-color: ${props => props.theme.colors.gray };
        height: 100vh;
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
    }
`;
