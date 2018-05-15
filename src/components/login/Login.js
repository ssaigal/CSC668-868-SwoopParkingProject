/** Login.js
 * Swoop
 * Created by Alaric Gonzales
 *
 * The login component is where an existing user (i.e., a user who already has login credentials),
 * will enter their login information to continue using the service this web application offers. When the user
 * clicks the continue button, the data inside the input forms will be sent to the database to make sure the
 * field inputs are valid.
 */
import React, { Component } from 'react';
import { Button, Grid} from 'material-ui';
import { TextField, Typography, Paper} from 'material-ui';
import {StyledLink} from "../utils/StyledLink";


	
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
				item: true,
				xs: 12,
				sm: 9,
			},
			login: {
				item: true,
				xs: 12,
				sm: 6
			},
			register: {
				item: true,
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
		
		class Login extends Component {
			
			constructor(props) {
		super(props);
		this.state = {
			id: "",
			value: "",
			userName: "",
			password: "",
			
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
		console.log("Submitting form with: \n userName: " + this.state.userName +
			"\n password: " + this.state.password +  "\n confirmPasword: " + this.state.confirmPassword);
		event.preventDefault();
	}

	
		

		submitAll() {

        console.log("submitAll()");
        // Demonstration of built in fetch
        fetch('http://localhost:8080/swoop-backend/api/login' + "?userName="+ this.state.userName+"&password="+this.state.password)
            .then(response => response.json())
            .then(json => {
                alert("Successfully made POST request with the following data: " + json)
            })
            .catch((error) => {
                console.log("Error while fetching: " + error);
            });
    }
					
	

			
			render() {
		// console.log(this.state.value);
		return (
			<Paper {...MainContainerSettings}>
				<Grid container {...GridContainerSettings}>

					<Grid item sm={12}>
						<Typography {...Label.title} > Get Swoopin' </Typography>
						<Typography {...Label.subtitle}> Parking made easy </Typography>
					</Grid>

					<Grid item {...GridItemSizes.textField}>
						<form onSubmit={this.handleSubmit} ref="form"
							  name={"userName"}>

							<TextField {...TextFieldSettings} placeholder={"User Name"}
									   name={"userName"}
									   value={this.state.userName}
									   onChange={this.handleInputChange}/>
						</form>
					</Grid>

					<Grid item {...GridItemSizes.textField}>
						<form onSubmit={this.handleSubmit} ref="form"
							  name={"password"}>
							<TextField {...TextFieldSettings} placeholder={"Password"}
									   name={"password"}
									   type={"password"}
									   value={this.state.password}
									   onChange={this.handleInputChange}/>
						</form>
					</Grid>



					<Grid item {...GridItemSizes.login}>
						{/*<StyledLink to={{pathname: "/"}}>*/}
						<Button {...ButtonStyle} variant={"raised"} onClick={this.submitAll}> Login </Button>
						{/*</StyledLink>*/}
					</Grid>
					
					<Grid item {...GridItemSizes.register}>
					{/*<StyledLink to={{pathname: "/"}}>*/}
						<Button {...ButtonStyle}> Register </Button>
						{/*</StyledLink>*/}
					</Grid>
				</Grid>
			</Paper>
		);
	}
}
export {Login}