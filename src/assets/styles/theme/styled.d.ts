import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            white: string;
            black: string;
            gray: string;
            gray2: string;
            gray3: string;
            gray4: string;
            gray5: string;
            gray6: string;
            gray7: string;
            blue: string;
            blue2: string;
            blueDark: string;
            blueGray: string;
            red: string;
        },
        fonts: {
            openSansFontFamily: string;
        },
        commoms: {
            boxShadow: string;
        },
        breakpoints: {
            mobileS: string;
            mobileM: string;
            mobileL: string;
            tablet: string;
            laptop: string;
            laptopM: string;
            laptopL: string;
            desktop: string;
        };
    }
}