package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Sales;
import com.repository.SalesDao;

@Service
public class SalesService {
	
	@Autowired
	SalesDao sdao;
	
	public String storeProduct(Sales product) {
		if(sdao.storeProduct(product)) {
			return "Product details stored successfully";
		}else {
			return "Product didn't store";
		}
	}

}
