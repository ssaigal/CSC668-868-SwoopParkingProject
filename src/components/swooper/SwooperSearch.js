/** SwooperSearch.js
 * Swoop
 * Created by Alaric Gonzales
 */
import React from 'react';
import {  PickupOption } from "../pickup";
import { Grid } from 'material-ui';
import { GoogleMapsComponent } from "../googlemaps/GoogleMapsComponent";

class SwooperSearch  extends React.Component {
	static defaultProps = {
		showOptions: true,
	};

	constructor(props) {
		super(props);
		this.state = {
			showOptions: this.props.showOptions,
		};
	}

	render(){
		const swoopeeModel = [
			{
				user: {
					name: "Daz Eighnpattern",
					description: "Swoop Enthusiast",
					avatar: "D"
				},
				location: {
					areaParked: {
						longitude: "123.456",
						latitude: "214.483",
					},
					pickupArea: {
						longitude: "37.715264",
						latitude: "-122.472597",
						distanceAway: "3.2 miles away", // Might deprecate
					}
				},
			},
			{
				user: {
					name: "Alan Turing",
					description: "Computer Science Major",
					avatar: "A"
				},
				location: {
					areaParked: {
						longitude: "123.456",
						latitude: "214.483",
					},
					pickupArea: {
						longitude: "214.748",
						latitude: "-321.421",
						distanceAway: "1.7 miles away",
					}
				},
			}
		];

		const Options = () => {
			if (this.state.showOptions) {
				const GS = {
					container: true,
					spacing: 8,
					direction: "row",
					justify: "flex-end",
					alignItems: "flex-end",
				};
				return (
					<React.Fragment>
						<div style={{
							display: "flex",
							flexDirection: "column",
							flexGrow: 1,
							alignSelf: "flex-end",
							marginLeft: "18px",
							marginRight: "18px",
							marginBottom: "18px",
						}}>
							<Grid {...GS}>
								<Grid item xs={12} sm={12}> <PickupOption swoopee={swoopeeModel[0]}/></Grid>
								<Grid item xs={12} sm={12}> <PickupOption swoopee={swoopeeModel[1]}/></Grid>
							</Grid>
						</div>
					</React.Fragment>
				)
			}
		};
		return (
			<GoogleMapsComponent width={"80vw"} height={"70vh"} >
				{Options()}
			</GoogleMapsComponent>
		)
	}
}

export {SwooperSearch}