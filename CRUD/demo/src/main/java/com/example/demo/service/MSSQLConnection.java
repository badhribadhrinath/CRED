//package com.example.demo.service;
//
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.SQLException;
//
//public class MSSQLConnection {
//    public static void main(String[] args) {
//        String url = "jdbc:sqlserver://192.168.200.146;databaseName=Test_DB"; //jdbc\:sqlserver\://192.168.200.146\:1433;DatabaseName\=Test_DB
//      // String url = "jdbc:sqlserver:localhost:192.168.200.146;databaseName=Test_DB";
//        String username = "badhri";
//        String password = "password@321";
//
//        try {
//            // Register JDBC driver
//            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver"); //com.microsoft.sqlserver.jdbc.SQLServerDriver
//            
//            // Open a connection
//            Connection conn = DriverManager.getConnection(url, username, password);
//            
//            // Use the connection
//            
//            // Close the connection
//            conn.close();
//        } catch (SQLException | ClassNotFoundException e) {
//            e.printStackTrace();
//        }
//    }
//}
//
