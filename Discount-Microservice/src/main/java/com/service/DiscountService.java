package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Discount;
import com.dao.DiscountDao;
import com.repository.DiscountRepository;

@Service
public class DiscountService {
	
	@Autowired
	DiscountDao discountdao;
	
	@Autowired
	DiscountRepository drepo;
	
	public String addDiscount(Discount offer) {
		if(discountdao.storeDiscount(offer)) {
			return "Discount added successfully";
		}
		else {
			return "unsuccessful";
		}
	}
	public List<Discount> allDiscounts(){
		return drepo.findAll();
	}
	public String deleteProduct(int did) {
		Optional<Discount> op =  drepo.findById(did);
			if(op.isPresent()) {
					Discount p = op.get();
					drepo.delete(p);
					return "discount deleted successfully";
			}else {
				return "discount not present";
			}
		}

}
