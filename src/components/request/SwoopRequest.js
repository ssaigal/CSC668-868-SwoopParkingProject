/**
 * Swoop
 * Created by Shalaka
 */
import React from 'react';
import { TextField, Button, Typography, Paper, Grid} from 'material-ui';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';


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


class RequestArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			request_id: "",
			radius: "",
			request_type: 0,
			request_status: 0,
			time: 87,
			user_id: 1,
			cur_lat : "",
			cur_long : "",
			park_lat :	"",
			park_long : "",
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
		console.log("Submitting form with: \n request_id: " + this.state.request_id);
		event.preventDefault();
	}
	
	
	
	
	submitAll() {
		
		// Demonstration of built in fetch
			fetch('http://localhost:8080/swoop-backend/swooprequest', {
				method: "POST",
				body: JSON.stringify({
					requestId: this.state.requestId,
					radius: this.state.radius,
					requestType: 1,
					requestStatus:0,
					time: 2,
					userId: 1,
					cur_lat : "37.796504",
					cur_long : "-122.410093",
					park_lat :	"37.728031",
					park_long : "-122.477088",
					
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			})
				.then(response => response.json())
				.then(json => alert("Successfully made POST request with the  data" ))
					
	}

	render(){
		// console.log(this.state.value);
		return (
			<Paper {...MainContainerSettings}>
				<Grid container {...GridContainerSettings}>

					<Grid item sm={12}>
						<Typography {...Label.title} > Get Parking</Typography>
						<Typography {...Label.subtitle}> Parking made easy </Typography>
					</Grid>

					<Grid item {...GridItemSizes.textField}>
						<form onSubmit={this.handleSubmit} 
							  name={"destination"}>

							<TextField {...TextFieldSettings} placeholder={"Destination"}
									   name={"destination"}
									   value={this.state.userName}
									   onChange={this.handleInputChange}/>
						</form>
					</Grid>

					<Grid item {...GridItemSizes.textField}>
						<form onSubmit={this.handleSubmit} 
							  name={"position"}>
							<TextField {...TextFieldSettings} placeholder={"Position"}
									   name={"position"}
									   value={this.state.position}
									   onChange={this.handleInputChange}/>
						</form>
					</Grid>

					<Grid item {...GridItemSizes.textField}>
						<form onSubmit={this.handleSubmit} 
							  name={"radius"}>
							<TextField {...TextFieldSettings} placeholder={"Radius"}
									   name={"radius"}
									   value={this.state.radius}
									   onChange={this.handleInputChange}/>
						</form>
					</Grid>

					

					<Grid item {...GridItemSizes.register}>
						{/*<StyledLink to={{pathname: "/"}}>*/}
						<Button {...ButtonStyle} variant={"raised"} onClick={this.submitAll}> Swoop Request </Button>
						{/*</StyledLink>*/}
					</Grid>
					<Grid item {...GridItemSizes.register}>
						{/*<StyledLink to={{pathname: "/"}}>*/}
						<Button {...ButtonStyle} variant={"raised"} onClick={this.getLocations}> Location</Button>
						{/*</StyledLink>*/}
					</Grid>
				</Grid>
			</Paper>
		);
	}

};

export {RequestArea};
