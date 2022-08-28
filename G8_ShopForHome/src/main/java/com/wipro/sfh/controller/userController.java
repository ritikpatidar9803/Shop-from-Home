package com.wipro.sfh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.sfh.entity.User;
import com.wipro.sfh.service.UserService;



@RestController
@RequestMapping("user")
@CrossOrigin
public class userController {
	@Autowired
	UserService userservice;
	
	
	@GetMapping(value="welcomeUser")
	public String welcomemsge() {
		return "welcome to user Microservice";
	}
	@PostMapping(value="Register",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String userRegister(@RequestBody User user) {
		return userservice.registerUser(user);
	}
	@GetMapping(value="users",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAllusers(){
		return userservice.getAllUsers();
	}
	@DeleteMapping(value = "deleteUser/{pid}")
	public String deleteProduct(@PathVariable("pid") int pid) {
		return userservice.deleteuser(pid);
	}

}
