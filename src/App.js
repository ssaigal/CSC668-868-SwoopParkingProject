/** App.js
 * Swoop
 * Created by Alaric Gonzales
 */
import React, { Component } from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import { Grid } from 'material-ui';

/**
 * The purpose of this object is to define the theme once (text color, primary color, secondary colors, etc.)
 */
const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#757de8",
			main: indigo[500],
			dark: "#002984",
			contrastText: '#fff',
		},
		secondary: {
			light: "#ff867f",
			main: "#ff5252",
			dark: "#c50e29",
			contrastText: '#fff',
		},
	},
	overrides: {
		MuiButton: {
			root: {
				color: 'white',
			},
		},
	},
});

/**
 * This is the entry point of the web application.
 * Every react component is rendered into App, which is then rendered into
 * the HTML element "root".
 */
class App extends Component {
	static defaultProps = {
		isLoggedIn: false,
	};

	render() {
		const GridSettings = {
			container: {
				container: true,
				spacing: 8,
				direction: "row",
				justify: "center",
				alignItems: "center",
				style: {
					marginTop: "48px",
					marginBottom: "48px",
					minHeight: "300px",
				}
			}
		};

		/**
		 * The App component is configured with Grid Layout to support responsive layouts,
		 * i.e., the website should be presentable on both mobile and desktop (or laptop) devices.
		 * It is important to note that each component added as a child to App must be a grid item
		 * Otherwise, the layout of the added component may not display as expected
		 */
		return (
			<MuiThemeProvider theme={theme}>
				<CssBaseline/>
				<Header/>
				<Grid {...GridSettings.container}>
					{this.props.children}
				</Grid>
				<Footer/>
			</MuiThemeProvider>
		);
	}
}

export default App;
