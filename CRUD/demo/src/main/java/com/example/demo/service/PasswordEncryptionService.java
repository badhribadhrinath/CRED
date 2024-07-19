//package com.example.demo.service;
//
//import javax.crypto.Cipher;
//import javax.crypto.spec.IvParameterSpec;
//import javax.crypto.spec.SecretKeySpec;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Component;
//import org.apache.commons.codec.binary.Base64;
//
//@Component
//public class PasswordEncryptionService {
//
//    @Value("${encryption.key}") // Load the encryption key from application.properties
//    private String encryptionKey;
//
//    private static final String INIT_VECTOR = "encryptionIntVec"; // 16 bytes IV
//
//    public String encrypt(String password) throws Exception {
//        IvParameterSpec iv = new IvParameterSpec(INIT_VECTOR.getBytes("UTF-8"));
//        SecretKeySpec keySpec = new SecretKeySpec(encryptionKey.getBytes("UTF-8"), "AES");
//
//        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
//        cipher.init(Cipher.ENCRYPT_MODE, keySpec, iv);
//
//        byte[] encrypted = cipher.doFinal(password.getBytes());
//        return Base64.encodeBase64String(encrypted);
//    }
//}
