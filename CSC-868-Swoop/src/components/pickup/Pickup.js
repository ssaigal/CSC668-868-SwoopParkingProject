/** Pickup.js
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

const SwoopeeAvatar = styled(Avatar)`	
	background-color: gray;
`;

const Caption = (props) => (
	<Typography variant={"caption"}>
		{props.label}
	</Typography>
);

const pickupDataModel = {
	swoopee: "Alan Turing",
	from: "1600 Holloway Ave, San Francisco, CA 94132",
	to: "3251 20th Ave, San Francisco, CA 94132",
};


function userClickedCancel() {
	console.log("User clicked cancel");
}

function userClickedConfirm() {
	console.log("User clicked confirm");
}

const PickupCard = () => {
	const {swoopee, from, to} = pickupDataModel;

	const GridSettings = {
		container: {
			container: true,
			spacing: 8,
			direction: "row",
			justify: "flex-start",
			alignItems: "flex-start",
		}
	};

	return(
		<StyledCard>
			<Grid {...GridSettings.container}>
				<Grid item xs={12} sm={2}>
					<SwoopeeAvatar> {swoopee.toString().charAt(0)}</SwoopeeAvatar>
				</Grid>
				<Grid item xs={12} sm={10}>
					<Typography>Picking up {swoopee} </Typography>
				</Grid>

				<Grid item xs={12} sm={12}>
					<Typography><Caption label={"From"}/> {from} </Typography>
				</Grid>

				<Grid item xs={12} sm={12}>
					<Typography><Caption label={"To"}/> {to}</Typography>
				</Grid>

				<Grid item xs={12} sm={6}>
					{/*EMPTY SPACE, solution for pushing buttons to right*/}
				</Grid>

				<Grid item xs={12} sm={3}>
					<Button color={"primary"} size={"small"} onClick={userClickedCancel}> Cancel </Button>
				</Grid>

				<Grid item xs={12} sm={3}>
					<Button color={"primary"} size={"small"} onClick={userClickedConfirm}> Confirm </Button>
				</Grid>
			</Grid>
		</StyledCard>
	)
};


export {PickupCard}