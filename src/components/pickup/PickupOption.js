/** PickupOption.js
 * Swoop
 * Created by Alaric Gonzales
 */
import React from 'react';
import { Card, Typography, Button, Avatar, Grid} from 'material-ui';
import styled from 'styled-components';

const StyledCard = styled(Card)`
	display: flex;
	padding: 18px;
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



function userClickedPickUp() {
	var d = new Date();
    var n = d.getTime();
	fetch('http://localhost:8080/swoop-backend/transaction', {
				method: "POST",
				body: JSON.stringify({
					requestId: 2,
					swooperId: 2,
					swoopeeId: 1,
					status: 0,
					startTime: n,
					endTime: 0,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			})
				.then(response => response.json())
				.then(json => alert("Successfully made POST request with the following data" +
					"\n id: " + json.requestId + "\n userName: " + json.swooperId))
				.catch((error) => {
					alert("Error in Transaction.");
                console.log("Error in Transaction: " + error);
            });
}

const PickupOption = (props) => {
	const swoopee = props.swoopee;

	// const {user, location} = props;
	const GridSettings = {
		container: {
			container: true,
			spacing: 8,
			direction: "row",
			justify: "center",
			alignItems: "center",
		}
	};
	return(
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
					<Button color={"primary"} onClick={userClickedPickUp}>Ask Pick up to Swap</Button>
				</Grid>
			</Grid>
		</StyledCard>
	)
};


export {PickupOption}