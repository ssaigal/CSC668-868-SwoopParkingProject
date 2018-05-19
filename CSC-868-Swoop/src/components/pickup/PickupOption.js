/** PickupOption.js
 * Swoop
 * Created by Alaric Gonzales
 */
import React from 'react';
import { Card, Typography, Button, Avatar, Grid} from 'material-ui';
import {Modal} from 'material-ui';
import styled from 'styled-components';
import {Transaction} from "../parking/ParkingTransaction";

const StyledCard = styled(Card)`
	display: flex;
	padding: 18px;
	justify-content: center;
`;

const SwoopeeName = (props) => {
	return(
		<div>
			<Avatar> {props.avatar} </Avatar>
			<Typography>{props.name}</Typography>
			<Typography>{props.description}</Typography>
			<Typography> {props.distanceAway}</Typography>
		</div>
	)
};

class PickupOption extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			open: false,
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClick() {
		this.setState({
			open: true,
		})
	}

	handleClose() {
		this.setState({
			open: false,
		})
	}

	render() {
		const swoopee = this.props.swoopee;

		const GridSettings = {
			container: {
				container: true,
				spacing: 8,
				direction: "row",
				justify: "center",
				alignItems: "center",
			}
		};

		//TODO: Should center
		return(
			<React.Fragment>
				<Modal
					open={this.state.open}
					onClose={this.handleClose}
					style={{
						display: "flex",
						margin: "auto",
					}}
				>
					<Transaction/>
				</Modal>
				<StyledCard>
					<Grid {...GridSettings.container}>
						<Grid item sm={5}>
							<SwoopeeName avatar={swoopee.user.avatar}
										 name={swoopee.user.name}
										 description={swoopee.user.description}
										 distanceAway={swoopee.location.pickupArea.distanceAway}/>
						</Grid>

						<Grid item sm={5}>
							<Typography> Parked at SFSU parking Garage </Typography>
						</Grid>

						<Grid item sm={2}>
							<Button color={"primary"} onClick={this.handleClick}> Pick up </Button>
						</Grid>
					</Grid>
				</StyledCard>
			</React.Fragment>
		)
	}
};


export {PickupOption}