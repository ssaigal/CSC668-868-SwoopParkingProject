package backend;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class SQLRequestSender {
	
	public String executeSQL(String sql, Connection con) {
		 try {
			Statement stmt = con.createStatement();
			int result = stmt.executeUpdate(sql);
	        return "Statement was executed successfully. " + result + " row(s) were affected.";
		} catch (SQLException e) {
			e.printStackTrace();
			return "Something went wrong: " + e;
		}
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
