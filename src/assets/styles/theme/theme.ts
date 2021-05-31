import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    colors: {
        white: '#FFFFFF',
        black: '#000000',
        blue: '#143D75',
        blue2: '#0F2D56',
        blueDark: '#000034',
        gray: '#F5F8FF',
        gray2: '#F5F5F5',
        gray3: '#FCFCFC',
        gray4: '#A8A8B1',
        gray5: '#727583',
        red: '#F8292E',
    },

    fonts: {
        openSansFontFamily: '"Open Sans", sans-serif',
    },
    commoms: {
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    },
    breakpoints: {
        mobileS: "320px",
        mobileM: "375px",
        mobileL: "425px",
        tablet: "768px",
        laptop: "890px",
        laptopM: "1024px",
        laptopL: "1440px",
        desktop: "2560px",
    },
}

export default theme;
