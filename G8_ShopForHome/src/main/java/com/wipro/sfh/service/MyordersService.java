package com.wipro.sfh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.sfh.dto.MyordersDto;
import com.wipro.sfh.entity.Myorders;
import com.wipro.sfh.repositiry.MyordersRepository;


@Service
public class MyordersService {
	@Autowired
	MyordersDto dto;
	
	@Autowired
	MyordersRepository repo;
	
	public String storemyOrderDetails(Myorders ord){
		if(dto.Storemyorrdetails(ord)) {
			return "order details stored successfully";
		}else {
			return "order didn't store";
		}
		
	}
	public List<Myorders> getAllmyOrdersDetails(){
		return repo.findAll();
	}

}
