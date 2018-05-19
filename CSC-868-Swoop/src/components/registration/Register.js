/** Register.js
 * Swoop
 * Created by Alaric Gonzales
 *
 * Register is a component that will prompt the user to create their login credentials
 * When the user clicks on the designated submission button, the credentials will be sent to the database
 * to handle whether the user provided a valid login or not.
 *
 */
import React from 'react';
import { TextField, Button, Typography, Paper, Grid} from 'material-ui';

const MainContainerSettings = {
	style: {
		margin: "25px",
		padding: "18px",
		width: "45vw",
		height: "55vh",
		minWidth: "360px"
	}
};

const GridContainerSettings = {
	spacing: 8,
	direction: "row",
	justify: "flex-start",
	alignItems: "flex-start",
	style: {
		height: "100%",
		width: "100%"
	}
};

const GridItemSizes = {
	textField: {
		xs: 12,
		sm: 9,
	},
	login: {
		xs: 12,
		sm: 6
	},
	register: {
		xs: 12,
		sm: 5
	}
};

const TextFieldSettings = {
	fullWidth: true
};

const Label = {
	title: {
		variant: "display3",
		style: {
			fontWeight: "lighter",
			color: "black",
		}
	},
	subtitle: {
		variant: "display1",
		style: {
			fontWeight: "lighter",
		}
	}
};

const ButtonStyle = {
	color: "secondary",
};


class RegistrationArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: 1,
			value: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.submitAll= this.submitAll.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		console.log(event.target.name + " : " + this.state[event.target.name]);
		console.log("Submitting form with: \n email: " + this.state.email + "\n password: " +
			this.state.password +  "\n confirmPasword: " + this.state.confirmPassword);
		event.preventDefault();
	}

	submitAll() {
		// Demonstration of built in fetch
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: "POST",
			body: JSON.stringify({
				userId: this.state.userId,
				email: this.state.email,
				password: this.state.password,
				confirmPassword: this.state.confirmPassword
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
			.then(response => response.json())
			.then(json => alert("Successfully made POST request with the following data" +
				"\n userId: " + json.userId + "\n email: " + json.email + "\n password: "
				+ json.password + "\n confirmPassword: " +json.confirmPassword))
	}

	render(){
		return (
			<Paper {...MainContainerSettings}>
				<Grid container {...GridContainerSettings}>

					<Grid item sm={12}>
						<Typography {...Label.title} > Get Swoopin' </Typography>
						<Typography {...Label.subtitle}> Parking made easy </Typography>
					</Grid>

					<Grid item {...GridItemSizes.textField}>
						<form onSubmit={this.handleSubmit}
							  name={"email"}>

							<TextField {...TextFieldSettings} placeholder={"Email"}
									   name={"email"}
									   value={this.state.email}
									   onChange={this.handleInputChange}/>
						</form>
					</Grid>

					<Grid item {...GridItemSizes.textField}>
						<form onSubmit={this.handleSubmit}
							  name={"password"}>
							<TextField {...TextFieldSettings} placeholder={"Password"}
									   name={"password"}
									   type={"password"}
									   value={this.state.password}
									   onChange={this.handleInputChange}/>
						</form>
					</Grid>

					<Grid item {...GridItemSizes.textField}>
						<form onSubmit={this.handleSubmit}
							  name={"confirmPassword"}>
							<TextField {...TextFieldSettings} placeholder={"Confirm Password"}
									   name={"confirmPassword"}
									   type={"password"}
									   value={this.state.confirmPassword}
									   onChange={this.handleInputChange}/>
						</form>
					</Grid>

					<Grid item {...GridItemSizes.login}>
						<Button {...ButtonStyle}> Login instead </Button>
					</Grid>

					<Grid item {...GridItemSizes.register}>
						<Button {...ButtonStyle}
								variant={"raised"}
								onClick={this.submitAll}>
							Continue
						</Button>
					</Grid>
				</Grid>
			</Paper>
		);
	}
}

export {RegistrationArea};
