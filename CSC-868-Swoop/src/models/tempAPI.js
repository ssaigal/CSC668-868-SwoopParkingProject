// LOG IN
const loginRequest = {
	request_code: 0,
	username: "",
	password: "",
};

const loginResponse = {
	user_exists: false,
	password_matches: false,
};

// REGISTER
const registrationRequest = {
	request_code: 1,
	username: "",
	password: "",
};

const registrationResponse = {
	user_added: false,
};

// // PICK UP
// const pickUpRequest = {
// 	request_code: 2,
// 	user_id: "", // int value
// 	request_type: 0, // Request type is different from request code. Refers to parking vs looking for parking
// 	radius: "", // Int value
// 	position: {
// 		latitude: "", // int value
// 		longitude: "", // int value
// 	},
// 	destination: {
// 		latitude: "", // int value
// 		longitude: "", // int value
// 	}
// };


//UPDATED PICKUP
const pickUpRequest = {
	requestId: "",
	user_id: "", // int value
	request_type: 0, // Request type is different from request code. Refers to parking vs looking for parking
	radius: 10, // Int value
	time: "",
	cur_lat : "",
	cur_long : "",
	park_lat :	"",
	park_long : "",
};

const pickUpResponse = {
	request_added: false,
	request_id: "", // int value
};


// FETCH ALL SWOOPS
const fetchAllRequest = {
	request_code: 3,
	latitude: 68.958360,
	longitude: 33.116242,
	radius: 5,
};

const fetchAllResponse = {
	search_not_empty: false,
	number_of_results: "", // int value
	location_1: {
		latitude: 68.967575,
		location_id: 45,
		longitude: 33.087933
	},
	location_2: {
		latitude: 68.567575,
		location_id: 45,
		longitude: 33.0307933
	}
};


