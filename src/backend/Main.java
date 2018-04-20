package backend;

public class Main {

	public static void main(String[] args) {
		JsonAPI api = new JsonAPI();
		String json1 =  "{request_code: 1, username: 'Cremy', password: '12345'}";
		String json2 =  "{request_code: 0, username: 'Cremy', password: '12345'}";

		System.out.println(api.reciveAndRespond(json1));
		System.out.println(api.reciveAndRespond(json2));
		
	}

}
