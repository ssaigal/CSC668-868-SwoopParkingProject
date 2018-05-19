import React from 'react';
// import { Button, Grid} from 'material-ui';
import { TextField, Typography, Paper} from 'material-ui';
import $ from 'jquery';

// TODO: Fill out Pickup Request
// This is still a work in progress
const pickUpRequest = {
	request_code: 2,
	user_id: "", // int value
	request_type: 0, // Request type is different from request code. Refers to parking vs looking for parking
	radius: "", // Int value
	position: {
		latitude: "", // int value
		longitude: "", // int value
	},
	destination: {
		latitude: "", // int value
		longitude: "", // int value
	}
};

function createPickupRequest() {
// TODO
}

class LocationSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fromValue: "",
			toValue: "",

			didEnterFrom: false,
			didEnterTo: false,

			fromLat: 0,
			fromLng: 0,

			toLat: 0,
			toLng: 0,
		};

		this.handleFromInputChange = this.handleFromInputChange.bind(this);
		this.handleToInputChange = this.handleToInputChange.bind(this);
		this.handleFromSubmit = this.handleFromSubmit.bind(this);
		this.handleToSubmit = this.handleToSubmit.bind(this);
		this.performFromSearch = this.performFromSearch.bind(this);
		this.performToSearch = this.performToSearch.bind(this);
	}

	getFetchErrors(request, status, error) {
		console.log("Error: " + error);
		console.log("Status: " + status);
		console.log("Request: " + request);
		alert(request.responseText);
	}

	performFromSearch(locationName) {
		const mapsUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + locationName;
		$.ajax({
			url: mapsUrl,
			dataType: 'json',
			success: (jsonResult) => {
				jsonResult.results.map( (result) => {
					this.setState({
						didEnterFrom: true,
						fromLat: result.geometry.location.lat,
						fromLng: result.geometry.location.lng,
					});
				});
			},
			error: this.getFetchErrors,
		});
	}

	performToSearch(locationName) {
		const mapsUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + locationName;
		$.ajax({
			url: mapsUrl,
			dataType: 'json',
			success: (jsonResult) => {
				jsonResult.results.map( (result) => {
					this.setState({
						didEnterTo: true,
						toLat: result.geometry.location.lat,
						toLng: result.geometry.location.lng,
					});
				});
			},
			error: this.getFetchErrors,
		});
	}

	handleFromInputChange(event) {
		this.setState({
			fromValue: event.target.value
		});
	}
	handleToInputChange(event) {
		this.setState({
			toValue: event.target.value
		});
	}

	handleFromSubmit(event) {
		this.performFromSearch(this.state.fromValue);
		event.preventDefault();
	}

	handleToSubmit(event) {
		this.performToSearch(this.state.toValue);
		event.preventDefault();
	}

	render() {
		const Settings = {
			parent: {
				style: {
					display: "flex",
					flexDirection: "column",
					alignContent: "space-between",
					justifyContent: "space-between"
				}
			},
			locationDisplaySettings: {
				style: {
					margin: "auto",
					textAlign: "center"
				}
			}
		};

		const TextFieldSettings =
			{
				from: {
					placeholder: "Search",
					name: "Search",
					fullWidth: true,
					autoComplete: "off",
					type: "search",
					label: "From",
					value: this.state.fromValue,
					onChange: this.handleFromInputChange,
				},
				to:
					{
						placeholder: "Search",
						name: "Search",
						fullWidth: true,
						autoComplete: "off",
						type: "search",
						label: "To",
						value: this.state.toValue,
						onChange: this.handleToInputChange,
					}
			};

		const DisplayFromLocation = () => {
			if (this.state.didEnterFrom) {
				return(
					<div>
						<Typography {...Settings.locationDisplaySettings}>
							FROM:

							Latitude: {this.state.fromLat}
							<br/>
							Longitude: {this.state.fromLng}

						</Typography>
					</div>
				)
			}
		};

		const DisplayToLocation = () => {
			if (this.state.didEnterTo) {
				return(
					<div>
						<Typography {...Settings.locationDisplaySettings}>
							TO:
							Latitude: {this.state.toLat}
							<br/>
							Longitude: {this.state.toLng}
						</Typography>
					</div>
				)
			}
		};

		return (
			<div {...Settings.parent}>
				<div style={{margin: "auto"}}>
					<form onSubmit={this.handleFromSubmit}
						  ref="form"
						  name={"search"}>
						<TextField {...TextFieldSettings.from}/>
					</form>
					<form onSubmit={this.handleToSubmit}
						  ref="form"
						  name={"search"}>
						<TextField {...TextFieldSettings.to}/>
					</form>
				</div>
				{DisplayFromLocation()}
				{DisplayToLocation()}
			</div>
		)
	}
}

export {LocationSearch}