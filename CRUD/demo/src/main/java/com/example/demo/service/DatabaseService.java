//package com.example.demo.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//@Service
//public class DatabaseService {
//
//    @Autowired
//    private PasswordEncryptionService encryptionService;
//
//    @Autowired
//    private PasswordDecryptionService decryptionService;
//
//    @Value("${database.password}") // Load the password from application.properties
//    private String encryptedPassword;
//
//    public void connectToDatabase() throws Exception {
//        String decryptedPassword = decryptionService.decrypt(encryptedPassword);
//        // Use the decrypted password to connect to the database
//    }
//
//    public void saveEncryptedPassword(String password) throws Exception {
//        String encryptedPassword = encryptionService.encrypt(password);
//        // Save the encrypted password securely
//    }
//}
