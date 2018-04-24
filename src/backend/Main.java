package backend;

public class Main {

	public static void main(String[] args) {
		JsonAPI api = new JsonAPI();
		String json1 =  "{request_code: 1, username: 'Cremy', password: '12345'}";
		String json2 =  "{request_code: 0, username: 'Cremy', password: '12345'}";
		String json3 = "{request_code: 2, user_id: 1, radius: 2, request_type: 0, position: '{ latitude: 59.928812, longitude: 10.781288 }', destination: '{ latitude: 59.928812, longitude: 10.781288 }'}";

		System.out.println(api.reciveAndRespond(json3));
		
	}

}
