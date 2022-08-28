package com.wipro.sfh.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.sfh.dto.UserDto;
import com.wipro.sfh.entity.User;
import com.wipro.sfh.repositiry.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userrepository;
	
	@Autowired
	UserDto userdto;
	

	public String registerUser(User user) {
		if(userdto.registerUser(user)) {
			return "user registered successfully";
		}else {
			return "registration unsuccessful";
		}
	}
	public List<User> getAllUsers(){
		return userrepository.findAll();
	}
	public String deleteuser(int pid) {
		Optional<User> op =  userrepository.findById(pid);
			if(op.isPresent()) {
					User p = op.get();
					userrepository.delete(p);
					return "User deleted successfully";
			}else {
				return "User not present";
			}
		}
	
	

}
