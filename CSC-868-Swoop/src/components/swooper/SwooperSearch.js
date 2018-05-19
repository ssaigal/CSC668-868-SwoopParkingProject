/** SwooperSearch.js
 * Swoop
 * Created by Alaric Gonzales
 */
import React from 'react';
import { PickupOption } from "../pickup";
import { Grid } from 'material-ui';
import { GoogleMapsComponent } from "../googlemaps/GoogleMapsComponent";
import {swoopeeModel} from "../../models/Swoopee";


const Options = () => {
	const Settings = {
		parent: {
			style: {
				display: "flex",
				flexDirection: "column",
				flexGrow: 1,
				alignSelf: "flex-end",
				marginLeft: "18px",
				marginRight: "18px",
				marginBottom: "18px",
				// backgroundColor: "yellow",
			}
		},
		grid: {
			container: true,
			spacing: 8,
			direction: "row",
			justify: "flex-end",
			alignItems: "flex-end",
		}
	};

	function createSwoopeeComponent(swoopee) {
		return(
			<Grid key={swoopee.user.name} item xs={12} sm={12}> <PickupOption swoopee={swoopee}/></Grid>
		);
	}

	return (
		<React.Fragment>
			<div {...Settings.parent}>
				<Grid {...Settings.grid}>
					{swoopeeModel.map(createSwoopeeComponent)}
				</Grid>
			</div>
		</React.Fragment>
	)
};

class SwooperSearch  extends React.Component {
	render() {
		return (
			<GoogleMapsComponent width={"80vw"} height={"70vh"} >
				<Options/>
			</GoogleMapsComponent>
		)
	}
}

export {SwooperSearch}