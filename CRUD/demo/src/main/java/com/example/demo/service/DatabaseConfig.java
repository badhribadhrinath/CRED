//package com.example.demo.service;
//
//import javax.sql.DataSource;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//
//@Configuration
//public class DatabaseConfig {
//    @Bean
//    DataSource dataSource() {
//	        DriverManagerDataSource dataSource = new DriverManagerDataSource();
//	        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");//com.microsoft.sqlserver.jdbc.SQLServerDriver
//	        dataSource.setUrl("jdbc/:sqlserver/://192.168.200.146/Test_DB"); //jdbc\:sqlserver\://192.168.200.146\:1433;DatabaseName\=Test_DB
//	        dataSource.setUsername("badhri");
//	        dataSource.setPassword("password@321");
//	        return dataSource;
//	    }
//}
