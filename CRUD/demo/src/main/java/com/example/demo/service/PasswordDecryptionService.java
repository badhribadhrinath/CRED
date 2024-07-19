//package com.example.demo.service;
//
//import java.util.Base64;
//
//import javax.crypto.Cipher;
//import javax.crypto.spec.IvParameterSpec;
//import javax.crypto.spec.SecretKeySpec;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Component;
//
//
//@Component
//public class PasswordDecryptionService {
//
//    @Value("${encryption.key}") // Load the encryption key from application.properties
//    private String encryptionKey;
//
//    private static final String INIT_VECTOR = "encryptionIntVec"; // 16 bytes IV
//
//    public String decrypt(String encryptedPassword) throws Exception {
//        IvParameterSpec iv = new IvParameterSpec(INIT_VECTOR.getBytes("UTF-8"));
//        SecretKeySpec keySpec = new SecretKeySpec(encryptionKey.getBytes("UTF-8"), "AES");
//
//        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
//        cipher.init(Cipher.DECRYPT_MODE, keySpec, iv);
//
//        byte[] original = cipher.doFinal(Base64.decodeBase64(encryptedPassword));
//           return new String(original);
//    }
//}
