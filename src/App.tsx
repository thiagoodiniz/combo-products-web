import React from 'react';
import Routes from './routes';
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from '@material-ui/core/styles';
import GlobalStyle from "./assets/styles/global";
import theme from "./assets/styles/theme/theme";
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core';

const materialUiTheme = createMuiTheme({
	typography: {
		fontFamily: theme.fonts.openSansFontFamily,
	}
})

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<MuiThemeProvider theme={materialUiTheme}>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</MuiThemeProvider>
		</ThemeProvider>		
	);
}

export default App;
