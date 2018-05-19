import React from 'react';
import {Button, Grid} from 'material-ui';
import {Avatar, Typography, Paper, Card} from 'material-ui';
// import {StyledLink} from "../utils/StyledLink";


class Transaction extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		transactionType: "",
	// 	}
	// }

	// setTransactionType(request_code) {
	// 	switch(request_code) {
	// 		case 0:
	// 			console.log("User requested to pick someone up");
	// 			break;
	// 		case 1:
	// 			console.log("User requested to be picked up");
	// 			break;
	// 		default:
	// 			console.log("User made unknown request");
	// 			break;
	// 	}
	// }
	//
	// componentDidMount() {
	// 	if (this.props.location.state) {
	// 		const {request_code} = this.props.location.state;
	//
	// 		console.log(request_code);
	// 		this.setTransactionType(request_code);
	// 	} else {
	// 		console.log("Unknown transaction");
	// 	}
	// }


	render() {
		const Settings = {
			grid: {
				container: true,
				direction: "row",
				justify: "center",
				alignItems: "stretch",
			}
		};
		const username = "Alan Turing";
		const BlueDot = () => {
			return(
				<div style={{
					backgroundColor: "blue",
					borderRadius: "5px",
					width: "10px",
					height: "10px",
				}}/>
			)
		};

		const RedDot = () => {
			return(
				<div style={{
					backgroundColor: "red",
					borderRadius: "5px",
					width: "10px",
					height: "10px",
				}}/>
			)
		};
		return(
			<Grid item xs={7}>
				<Card style={{display: "flexGrow", padding: "18px"}}>
					<Grid {...Settings.grid}>

						<Grid item xs={2}
							  // style={{backgroundColor: "yellow",}}
						>
							<Avatar style={{margin: "10px auto",}}> A </Avatar>
						</Grid>

						<Grid item xs={10}
							// style={{backgroundColor: "red",}}
						>
							<Typography variant={"caption"}>Picking Up</Typography>
							<Typography>{username}</Typography>
						</Grid>

						<Grid item xs={1}>
							{/*EMPTY*/}
						</Grid>
						<Grid item xs={1}>
							<BlueDot/>
						</Grid>

						<Grid item xs={10}>
							<Typography variant={"caption"}>From</Typography>
							<Typography>1600 Holloway Ave, San Francisco 94132</Typography>
						</Grid>

						<Grid item xs={1}>
							{/*EMPTY*/}
						</Grid>
						<Grid item xs={1}>
							<RedDot/>
						</Grid>

						<Grid item xs={10}>
							<Typography variant={"caption"}>To</Typography>
							<Typography>3251 20th Ave, San Francisco 9413</Typography>
						</Grid>

					</Grid>


				</Card>
			</Grid>
		)
	}
}

export { Transaction }