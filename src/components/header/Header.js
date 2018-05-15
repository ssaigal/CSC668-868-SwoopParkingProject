/** Header.js
 * Swoop
 * Created by Alaric Gonzales
 *
 * The header component acts as the main function of navigation, as it will appear in all pages.
 */
import React from 'react';
import { AppBar, Typography } from 'material-ui';
import indigo from 'material-ui/colors/indigo';
import { Button, Grid} from 'material-ui';
import { StyledLink } from "../utils/StyledLink";

const HeaderSettings = {
	AppBar: {
		position: "static",
		style: {
			backgroundColor: indigo[700],
			paddingTop: "18px",
			paddingLeft: "18px",
			paddingBottom: "18px",
		}
	},
	Title: {
		variant: "display1",
		color: "inherit",
	},
	GridType: {
		row: {
			spacing: 8,
			direction: "row",
			justify: "flex-start",
			alignItems: "flex-start",
		}
	},
};

function userClickedRegister() {
	console.log("User clicked register");
}

function userClickedLogin() {
	console.log("User clicked login");
}
function userClickedRequest() {
	console.log("User clicked request");
}

const Header = () => (
	<header>
		<AppBar {...HeaderSettings.AppBar}>
			<Grid container>
				<Grid item xs={12} sm>

					<StyledLink to={{pathname: "/"}} style={{color: "white"}}>
						<Typography {...HeaderSettings.Title}> Swoop </Typography>
					</StyledLink>

				</Grid>
				<Grid item sm={7}>
					{/*Empty space*/}
				</Grid>

				<Grid item sm>
					<StyledLink to={{pathname: "/register"}}>
						<Button onClick={userClickedRegister}> Register </Button>
					</StyledLink>
				</Grid>
				
				<Grid item sm>
					<StyledLink to={{pathname: "/request"}}>
						<Button onClick={userClickedRequest}> Request Swoop </Button>
					</StyledLink>
				</Grid>
				
				<Grid item sm>
					<StyledLink to={{pathname: "/getParkingTransaction"}}>
						<Button onClick={userClickedRequest}> Get Parking </Button>
					</StyledLink>
				</Grid>

				<Grid item sm>
					<StyledLink to={{pathname: "/login"}}>
						<Button onClick={userClickedLogin}> Login</Button>
					</StyledLink>
				</Grid>
			</Grid>
		</AppBar>
	</header>
);

export default Header;