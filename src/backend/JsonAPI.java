package backend;
import org.json.*;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Connection;

public class JsonAPI {
	
	Connections connections;
	SQLRequestSender srs;
	
	JsonAPI(){
		this.connections = new Connections();
		this.srs =  new SQLRequestSender();
	}
	
	
	public String reciveAndRespond(String json) {
		Connection con =  connections.connect();
		JSONObject jsonObject = new JSONObject(json);
		int requestCode = jsonObject.getInt("request_code");
		
		switch(requestCode) {
		case 0:
			return processLoginRequest(jsonObject,con);
		case 1:
			return processRegistrationRequest(jsonObject,con);
		default:
			return "Request code not recognized. Unable to process request";
		}
	}

	private String processRegistrationRequest(JSONObject jsonObject, Connection con) {
		String sql = "INSERT INTO users (username,password) VALUES ('" + jsonObject.getString("username") + "','" + jsonObject.getString("password") + "')";
		return srs.executeSQL(sql,con);
	}


	private String processLoginRequest(JSONObject jsonObject,Connection con) {
		String sql = "SELECT password FROM users WHERE username = '" + jsonObject.getString("username") + "'";
		ResultSet result = srs.fetchRows(sql,con);
		boolean userExists = false;
		boolean passwdMatches = false;
		
		
		try {
			if(result.next()) {
				userExists = true;
				passwdMatches = result.getString("password").equals(jsonObject.getString("password"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "{user_exists: '" + userExists + "', password_matches: '" + passwdMatches + "'}";
	}
	

}
