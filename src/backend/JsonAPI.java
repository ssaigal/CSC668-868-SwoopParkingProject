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
		case 2:
			return processAddPickUpRequest(jsonObject,con);
		case 3:
			return processViewPickUpRequests(jsonObject,con);
		default:
			return "Request code not recognized. Unable to process request";
		}
	}

	private String processViewPickUpRequests(JSONObject jsonObject, Connection con) {
		String sql = "SELECT * FROM locations";
		return null;
	}


	private String processAddPickUpRequest(JSONObject jsonObject, Connection con) {
		JSONObject position = new JSONObject(jsonObject.getString("position"));
		JSONObject destination = new JSONObject(jsonObject.getString("destination"));
		
		
		String sql1 = "INSERT INTO locations (latitude, longitude) VALUES (" + position.getInt("latitude") + ", " + position.getInt("longitude") + ") RETURNING  location_id";
		String sql2 = "INSERT INTO locations (latitude, longitude) VALUES (" + destination.getInt("latitude") + ", " + destination.getInt("longitude") + ") RETURNING  location_id";
		
		int position_id = 0;
		int destination_id = 0;
		int request_id = 0;
		
		String sql3 = "";
		
		try {
			con.setAutoCommit(false);
			position_id = srs.executeSQL(sql1,con);
			destination_id = srs.executeSQL(sql2,con);
			sql3 = "INSERT INTO requests (user_id, request_type, radius, position, destination) VALUES (" + jsonObject.getInt("user_id") 
			+ ", " + jsonObject.getInt("request_type") + ", " + jsonObject.getInt("radius") + ",  " + position_id + ", " + destination_id + ") RETURNING request_id";
			if(position_id != 0 && destination_id != 0) {
				request_id = srs.executeSQL(sql3,con);
			}else{
				con.rollback();
			}
			
			if(request_id != 0) {
				
				con.commit();
			}else {
				con.rollback();
			}
		}catch (SQLException e) {
			e.printStackTrace();
		}
		
		if(position_id != 0 && destination_id != 0 && request_id != 0) {
			return "{request_added: 'true', request_id: " + request_id + "}";
		}else {
			return "{request_added: 'false', request_id: " + request_id + "}}";
		}		
	}


	private String processRegistrationRequest(JSONObject jsonObject, Connection con) {
		String sql = "INSERT INTO users (username,password) VALUES ('" + jsonObject.getString("username") + "','" + jsonObject.getString("password") + "') RETURNING user_id";
		int user_id = srs.executeSQL(sql,con);
		if(user_id != 0) {
			return "{user_added: true, user_id: " + user_id + "}";
		}else{
			return "{user_added: false, user_id: " + user_id + "}";
		}
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
