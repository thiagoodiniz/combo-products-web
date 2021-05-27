import React from 'react';
import Routes from './routes';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/global";
import theme from "./assets/styles/theme/theme";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>

			<GlobalStyle />
			<Routes />

		</ThemeProvider>		
	);
}

export default App;
