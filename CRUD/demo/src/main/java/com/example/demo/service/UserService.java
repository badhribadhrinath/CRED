package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Result;
import com.example.demo.model.User;
import com.example.demo.model.UserDTO;
import com.example.demo.repo.UserRepository;

@Service
public class UserService {
	
	private static final Logger log = LogManager.getLogger(UserService.class);//logging 
	    // to convert UserDTO to User entity
    public User convertToUserEntity(UserDTO userDTO) {
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        user.setEmailid(userDTO.getEmailid());
        user.setDepartment(userDTO.getDepartment());
        user.setRole(userDTO.getRole());
        return user;
    }
    /**/
    
	@Autowired
	UserRepository userRepo;

	public Result loginAuthentication(String username, String password, String role) {
		try {
			
			Result result = new Result();

			User user = userRepo.findByUsername(username);
			if (user != null) {
				if (user.getPassword().equals(password)) {
					if (user.getRole().equals(role)) {
					

						result.setResult("Success");
						log.info("Login Authentication Passed...");
						result.setRole(role);
					} else {
						
						result.setResult("Invalid Role");
					}
				} else {
					
					result.setResult("Invalid password ");
				}
			} else {
				
				result.setResult("User doesn't Exist !!");
			}
			return result;
		} catch (Exception e) {

			e.printStackTrace();
		}
		return null;
	}

	public String addUser(User user) {
		try {
			log.info("Entered Add user Method");
			User existingUser = userRepo.findByUsername(user.getUsername()); // To get user
			if (existingUser == null) {
				userRepo.save(user);
				log.info("Added User :");
					log.info(user);			
				log.info("User Added Successfully");
				return "Success";		
			} else {
				return "fail";

			}
			
		} catch (Exception e) {

			e.printStackTrace();
		}
		return null;	
	}

	public List<User> userRecords() {

		return userRepo.findAll();
	}

	@Transactional
	public void deleteUser(String username) {
		try {
			log.info("<--Entered Delete Method-->");
			userRepo.deleteByUsername(username);
			log.info("Deleted UserName :");
			log.info(username);
			log.info("<--User Deleted Successfully-->");
			
		} catch (Exception e) {
			e.printStackTrace();
		}	
	}
	
	@Transactional
	public void updateUser(User user) {
		try {
			log.info("<--Entered Update Method-->");	
			
			User oldUser = userRepo.findByUsername(user.getUsername());
			
			oldUser.setUsername(user.getUsername());
			oldUser.setDepartment(user.getDepartment());
			oldUser.setEmailid(user.getEmailid());
			oldUser.setRole(user.getRole());
			
			userRepo.save(oldUser);
			log.info("Updated user :");
			log.info(user);
			log.info("<--User Updated Successfully-->");
			
		} catch (Exception e) {
			e.printStackTrace();
		}	
	}
}
