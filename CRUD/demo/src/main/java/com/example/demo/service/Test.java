package com.example.demo.service;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;

public class Test {

	public static void main(String[] args) {
		
		  StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();

	        // Set password for encryption
	        encryptor.setPassword("pointel@123"); // Replace with your encryption key

	        // Encrypt password
	        String plainTextPassword = "password@321"; // Replace with your actual password
	        String encryptedPassword = encryptor.encrypt(plainTextPassword);

	        // Print encrypted password
	        System.out.println("Encrypted Password: " + encryptedPassword);

	}

}
