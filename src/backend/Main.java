package backend;

public class Main {

	public static void main(String[] args) {
		JsonAPI api = new JsonAPI();
		String json1 =  "{request_code: 1, username: 'Cremy', password: '12345'}";
		String json2 =  "{request_code: 0, username: 'Cremy', password: '12345'}";
		String json3 = "{request_code: 2, user_id: 1, radius: 2, request_type: 0, position: '{ latitude: 68.967576, longitude: 33.087934 }', destination: '{ latitude: 68.967576, longitude: 33.087934 }'}";
		String json4 =  "{request_code: 3, latitude: 68.958360, longitude: 33.116242, radius: 5}";

		//System.out.println(api.reciveAndRespond(json1));
		System.out.println(api.reciveAndRespond(json2));
		System.out.println(api.reciveAndRespond(json3));
		System.out.println(api.reciveAndRespond(json4));
		
	}

}
