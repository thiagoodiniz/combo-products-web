import React from 'react';
import Routes from './routes';
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from '@material-ui/core/styles';
import GlobalStyle from "./assets/styles/global";
import theme from "./assets/styles/theme/theme";
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core';
import { ComboProvider } from './context/Combos';
import { ChannelsProvider } from './context/Channels';

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
					<ComboProvider>
						<ChannelsProvider>
							<Routes />
						</ChannelsProvider>
					</ComboProvider>
				</BrowserRouter>
			</MuiThemeProvider>
		</ThemeProvider>		
	);
}

export default App;
