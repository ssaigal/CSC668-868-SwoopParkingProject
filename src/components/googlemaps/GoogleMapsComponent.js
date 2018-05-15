/** GoogleMapsComponent.js
 * Swoop
 * Created by Alaric Gonzales
 *
 * The GoogleMapReact component is a third-party API that provides access to all Google Maps features,
 * including longitude and latitude specification, location search, location name approximation, etc.
 */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Grid } from 'material-ui';

/**
 * Note: Do not confuse this with the google-maps-react api, as that one isn't documented perfectly
 * https://www.npmjs.com/package/google-map-react
 */

class GoogleMapsComponent extends Component {
	// Defaults to SFSU latitude and longitude
	static defaultProps = {
		center: {
			lat: 37.723894,
			lng: -122.4782,
		},
		zoom: 15,
		height: "500px",
		width: "500px",
	};

	render() {
		const PickupOptionsArea = () => {
			const GridSettings = {
				container: {
					container: true,
					direction: "row",
					justify: "flex-start",
					alignItems: "stretch",
					style: {
						// backgroundColor: "red",
						height: this.props.height,
						width: this.props.width,
					}
				}
			};
			return (
				<Grid {...GridSettings.container} lat={59.955413} lng={30.337844}>
					{this.props.children}
				</Grid>
			)
		};

		const Settings= {
			map: {
				style: {
					height: this.props.height,
					width: this.props.width,
				}
			},
			mapsAPI: {
				bootstrapURLKeys: {key: "AIzaSyDx31o1k-qZzCWjzteDH2P9isW9-5WzcPc"},
				defaultCenter: this.props.center,
				defaultZoom: this.props.zoom,
			},
		};

		return(
			<div {...Settings.map}>
				<GoogleMapReact {...Settings.mapsAPI}>
					<PickupOptionsArea/>
				</GoogleMapReact>
			</div>
		)
	}
}

export { GoogleMapsComponent }