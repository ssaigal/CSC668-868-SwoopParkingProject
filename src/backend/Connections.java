package backend;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Connection;


//import org.json.*;

public class Connections {
	private final String url = "jdbc:postgresql://localhost/swoop";
	private final String user = "postgres";
	private final String password = "Kortstokk1";
	
	 public Connection connect() {
	        Connection conn = null;
	        try {
	            conn = DriverManager.getConnection(url, user, password);
	            System.out.println("Connected to the PostgreSQL server successfully.");
	        } catch (SQLException e) {
	            System.out.println(e.getMessage());
	        }
	 
	        return conn;
	    }
	 
	 public void executeSQL(String sql) {
		 Connection con = connect();
		 try {
			Statement stmt = con.createStatement();
			int result = stmt.executeUpdate(sql);
	        stmt.close();
	        con.close();
	        System.out.println("Statement was executed successfully. " + result + " row(s) were affected.");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	 }
	 
	 public void fetchRows(String sql) {
		 Connection con = connect();
		 try {
			Statement stmt = con.createStatement();
			ResultSet result = stmt.executeQuery(sql);
	        while(result.next()) {
				 int user_id = result.getInt("user_id");
				 String username = result.getString("username");
				 String pass = result.getString("passwrd");
				 
				 System.out.println("User ID -> " + user_id);
				 System.out.println("Username -> " + username);
				 System.out.println("Password -> " + pass);
			 }
	        stmt.close();
	        con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	 }
	
	public static void main(String[] args) {
	Connections con = new Connections();
	String sql1 = "CREATE TABLE users (user_id SERIAL PRIMARY KEY NOT NULL, username VARCHAR(40) NOT NULL, passwrd VARCHAR(100) NOT NULL)";
	String sql2 = "INSERT INTO users (username,passwrd) VALUES ('kibb','wfsfsdf')";
	String sql3 = "SELECT * FROM users WHERE username = 'kibb'";
	String sql4 = "SELECT * FROM users";
	//con.executeSQL(sql1);
	//con.executeSQL(sql2);
	con.fetchRows(sql3);
	con.fetchRows(sql4);
	
		
	}
}
