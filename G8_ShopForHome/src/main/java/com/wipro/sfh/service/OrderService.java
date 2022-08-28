package com.wipro.sfh.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.sfh.dto.OrderDto;
import com.wipro.sfh.entity.Odetails;
import com.wipro.sfh.repositiry.OrderDetailsRepository;


@Service
public class OrderService {

	@Autowired
	OrderDto orderdto;
	
	
	
	@Autowired
	OrderDetailsRepository odrepo;
	
	
	public String storeOrderDetails(Odetails ord){
		if(orderdto.StoreOrdrrdetails(ord)) {
			return "order details stored successfully";
		}else {
			return "order didn't store";
		}
		
	}
	public List<Odetails> getAllOrdersDetails(){
		return odrepo.findAll();
	}
	public String deletecartProduct(int ordid) {
		Optional<Odetails> op =  odrepo.findById(ordid);
			if(op.isPresent()) {
					Odetails p = op.get();
					odrepo.delete(p);
					return "Product deleted successfully";
			}else {
				return "Product not present";
			}
		}
	

}
