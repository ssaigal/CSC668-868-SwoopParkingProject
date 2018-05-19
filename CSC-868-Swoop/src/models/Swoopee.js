/**
 * Swoopee.js
 * This file was used as a placeholder for handling API or fetch requests
 * Created by Alaric Gonzales
 */

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
				longitude: "214.748",
				latitude: "-321.421",
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

export {swoopeeModel}