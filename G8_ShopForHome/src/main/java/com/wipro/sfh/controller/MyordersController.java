package com.wipro.sfh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.sfh.entity.Myorders;
import com.wipro.sfh.repositiry.MyordersRepository;
import com.wipro.sfh.service.MyordersService;


@RestController
@RequestMapping("myorders")
@CrossOrigin
public class MyordersController {
	
	
	@Autowired
	MyordersRepository repo;
	
	@Autowired
	MyordersService serv;
	
	@PostMapping(value="storemyOderDetails")
	public String storeOrderDetails(@RequestBody Myorders order) {
		return serv.storemyOrderDetails(order);
	}
	@GetMapping(value="allmyordersDetails")
	public List<Myorders> getAllOrdersDetails(){
		return serv.getAllmyOrdersDetails();
	}
	
	@GetMapping(value="usermyOrders/{userid}")
	public List<Myorders> userOrd(@PathVariable("userid") int userid){
		return repo.ListMyordersByUserId(userid);
	}

}
