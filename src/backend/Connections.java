package backend;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Connection;


//import org.json.*;

public class Connections {
	private final String url = "jdbc:postgresql://swoop-db.ccvexujwljki.us-west-1.rds.amazonaws.com/swoop_db?currentSchema=swoop";
	private final String user = "swooper";
	private final String password = "NIb9NdGl5#QFz$J%XJQe";
	
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
	 
	 }
