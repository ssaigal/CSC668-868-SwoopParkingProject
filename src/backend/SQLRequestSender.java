package backend;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class SQLRequestSender {
	
	public int executeSQL(String sql, Connection con) {
		try {
			Statement stmt = con.createStatement();
			ResultSet result = stmt.executeQuery(sql);
			result.next();
			return result.getInt(1);

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return 0;
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
