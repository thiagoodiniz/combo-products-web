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
            blue: string;
            blueDark: string;
        }
    }
}