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
	const TypographySettings = {
		color: "primary",
		align: "center",
		style: {
			padding: "18px",
		}
	};

	return(
		<Paper>
			<Typography {...TypographySettings} variant={"headline"}>
				<StyledLink to={{pathname: props.pathname}}>
					{props.title}
				</StyledLink>
			</Typography>

			<Typography {...TypographySettings} variant={"subheading"}>
				{props.description}
			</Typography>
		</Paper>
	)
};

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			receivedName: "",
			receivedPropsFromLink: false,
		};
	};

	componentDidMount() {
		if (this.props.location.state) {
			const {name, didReceiveProps} = this.props.location.state;
			this.setState({
				receivedName: name,
				receivedPropsFromLink: didReceiveProps,
			})
		}
	};

	render() {
		const GridItem = (props) => {
			return(
				<Grid item xs={12} sm={4} md={5} lg={6}>
					{props.children}
				</Grid>
			)
		};

		return (
			<React.Fragment>
				{this.state.receivedName}
				<GridItem>
					<Item pathname={"/gettingstarted"}
						  title={"Getting Started"}
						  description={"Learn how our service works"}
					/>
				</GridItem>

				<GridItem>
					<Item pathname={"/swooper"}
						  title={"Swooper"}
						  description={"Find a parking spot"}
					/>
				</GridItem>

				<GridItem>
					<Item pathname={"/swooper"}
						  title={"Swoopee"}
						  description={"Exchange your parking spot"}
					/>
				</GridItem>

				<GridItem>
					<Item pathname={"/search"}
						  title={"Maps"}
						  description={"Search for a location"}
					/>
				</GridItem>
			</React.Fragment>
		);
	}
}

export default Home;
