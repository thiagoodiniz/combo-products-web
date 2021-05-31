import React from 'react';
import Routes from './routes';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/global";
import theme from "./assets/styles/theme/theme";
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>

			<GlobalStyle />

			<BrowserRouter>
				<Routes />
			</BrowserRouter>

		</ThemeProvider>		
	);
}

export default App;
