/** Footer.js
 * Swoop
 * Created by Alaric Gonzales
 *
 * Footer is the bottom navigation area that is located at the bottom of the website
 */
import React from 'react';
import indigo from "material-ui/colors/indigo";
import { withStyles } from 'material-ui/styles';
import {StyledLink} from "../utils/StyledLink";
import { Button, Toolbar, Grid } from 'material-ui';

/**
 * The styles object will overwrite the theme object (defined in App.js) to provide Footer with a customized style
 * This is a common occurrence throughout the web page, as most components extend the global theme object.
 */
const styles = {
	Footer: {
		display: "flex",
		backgroundColor: indigo[700],
	},
	Label: {
		color: "white",
	}
};

// Configure the button paths here
// When clicking a button, the following link will be appended to the site URL, and the component with the
// matching link will be rendered immediately.
const pathsForButton= {
	meetTheTeam: "/team",
	policy: "/policy",
	help: "/help",
};

class Footer extends React.Component {
	render() {
		const {classes} = this.props;

		const GridSettings = {
			container: true,
			direction: "row",
			justify: "space-around",
			alignItems: "center",
		};

		return (
			<footer>
				<Toolbar className={classes.Footer}>
					<Grid {...GridSettings}>
						<Grid item sm={4}>
							<StyledLink to={{pathname: pathsForButton.meetTheTeam}}>
								<Button> Meet the Team </Button>
							</StyledLink>
						</Grid>

						<Grid item sm={4}>
							<StyledLink to={{pathname: pathsForButton.help}}>
								<Button> Help </Button>
							</StyledLink>
						</Grid>

						<Grid item sm={4}>
							<StyledLink to={{pathname: pathsForButton.policy}}>
								<Button> Policy </Button>
							</StyledLink>
						</Grid>

					</Grid>
				</Toolbar>
			</footer>
		);
	}
}

export default withStyles(styles)(Footer);