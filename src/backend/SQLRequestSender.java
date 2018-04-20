package backend;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class SQLRequestSender {
	
	public String executeSQL(String sql, Connection con) {
		boolean user_added = false; 
		try {
			Statement stmt = con.createStatement();
			int result = stmt.executeUpdate(sql);
	        if(result > 0)
	        	user_added = true;
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return "{user_added: '" + user_added + "'}";
	 }
	 
	 public ResultSet fetchRows(String sql, Connection con) {
		 try {
			Statement stmt = con.createStatement();
			ResultSet result = stmt.executeQuery(sql);
	        return result;

		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
		 
	 }

}
