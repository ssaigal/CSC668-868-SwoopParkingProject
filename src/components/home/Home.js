/** Home.js
 * Swoop
 * Created by Alaric Gonzales
 */
import React, { Component } from 'react';
import { Paper, Grid, Typography } from 'material-ui';
import { StyledLink } from "../utils/StyledLink";

/**
 * The Item component is rendered into Home and acts as an object that directs the user to a certain
 * location of the website. This design exists to allow the user to decide whether they want to act as
 * the Swooper or Swoopee, instead of defaulting to one
 */
const Item = (props) => {
	return(
		<Paper>
			<Typography color={"primary"}
						align={"center"}
						variant={"headline"}
						style={{padding: "18px"}}>
				<StyledLink to={{pathname: props.pathname}}>
					{props.title}
				</StyledLink>
			</Typography>

			<Typography color={"primary"}
						align={"center"}
						variant={"subheading"}
						style={{padding: "18px"}}>
				{props.description}
			</Typography>
		</Paper>
	)
};

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Grid item xs={12} sm={4}>
					<Item pathname={"/swooper"}
						  title={"Getting Started"}
						  description={"Learn how our service works"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Item pathname={"/swooper"}
						  title={"Swooper"}
						  description={"Find a parking spot"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Item pathname={"/swooper"}
						  title={"Swoopee"}
						  description={"Exchange your parking spot for a free ride"}
					/>
				</Grid>
			</React.Fragment>
		);
	}
}

export default Home;
