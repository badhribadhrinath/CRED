package com.example.demo.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.LoginRequest;
import com.example.demo.model.Result;
import com.example.demo.model.UpdateUser;
import com.example.demo.model.User;
import com.example.demo.model.UserDTO;
import com.example.demo.repo.UserRepository;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

	private static final Logger log = LogManager.getLogger(UserController.class);
	@Autowired
	UserRepository userRepo;

	@Autowired
	UserService userService;

	@PostMapping("/login")
	public ResponseEntity<Result> login(@RequestBody LoginRequest loginRequest) {
		log.info("Logger involked...");
		log.info("Login Controller");
		Result res = userService.loginAuthentication(loginRequest.getUsername(), loginRequest.getPassword(),
				loginRequest.getRole());
		return ResponseEntity.ok(res);
	}

	@PostMapping("/admin")
	public ResponseEntity<Result> admin(@RequestBody UserDTO userDTO) {

		log.info("Admin Controller");

		User user = userService.convertToUserEntity(userDTO); // conversion by avoiding the table Pojo class
		String res = userService.addUser(user);
		Result result = new Result();

		result.setResult(res);
		return ResponseEntity.ok(result);
	}

	@GetMapping("/getalluser")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> res = userService.userRecords();
		log.info("GetAllUsers Controller");
		return ResponseEntity.ok(res);
	}

	@PostMapping("/delete/{username}")
	public ResponseEntity<Result> delete(@PathVariable String username) {
		log.info("Delete Controller");
		userService.deleteUser(username);
		Result result = new Result();
		result.setResult("Success");
		return ResponseEntity.ok(result);
	}

	@PutMapping("/update")
	public ResponseEntity<Result> updateUser(@RequestBody UpdateUser updateUser) {
		log.info("Update Controller");
		log.info("Updated User : "+ updateUser);
		User user = new User();
		Result result = new Result();
		
		if(((updateUser.getUpdateUsername()!=null) && (!updateUser.getUpdateUsername().isEmpty())) && ((updateUser.getUpdateEmail()!=null) && (updateUser.getUpdateEmail().isEmpty()))){
			
			if(((updateUser.getUpdateDepartment()!=null) && (updateUser.getUpdateDepartment().isEmpty())) 	&& ((updateUser.getUpdateRole()!=null) && (updateUser.getUpdateRole().isEmpty()))){
				user.setUsername(updateUser.getUpdateUsername());
				user.setEmailid(updateUser.getUpdateEmail());
				user.setDepartment(updateUser.getUpdateDepartment());
				user.setRole(updateUser.getUpdateRole());
				userService.updateUser(user);
				result.setResult("Success");
			}
	
	}else {
		result.setResult("fail");
	}
		return ResponseEntity.ok(result);

	}
}





