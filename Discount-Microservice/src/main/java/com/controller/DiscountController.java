package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Discount;
import com.repository.DiscountRepository;
import com.service.DiscountService;

@RestController
@RequestMapping("discounts")
@CrossOrigin
public class DiscountController {
	
	@Autowired
	DiscountService ds;
	
	@Autowired
	DiscountRepository drepo;
	
	@PostMapping(value = "addDiscount")
	public String addDisc(@RequestBody Discount product) {
		return ds.addDiscount(product);
	}
	
	@GetMapping(value="alldiscounts")
	public List<Discount> allDiscounts(){
		return ds.allDiscounts();
	}
	
	@GetMapping(value = "userdiscounts/{usrid}")
	public List<Discount> UsrDiscounts(@PathVariable("usrid") int usrid){
		return drepo.userDiscounts(usrid);
	}
	@GetMapping(value="maxdiscount/{usrid}")
	public int usrmaxdiscount(@PathVariable("usrid") int usrid) {
		return drepo.usermaxDiscount(usrid);
	}
	
	@GetMapping(value="deleteCoupon/{usrid}/{per}")
	public Discount deleteDisc(@PathVariable("usrid") int usrid,@PathVariable("per") int per) {
		 return drepo.discDetails(usrid, per);
	}
	@DeleteMapping(value = "deleteDiscount/{did}")
	public String deleteProduct(@PathVariable("did") int did) {
		return ds.deleteProduct(did);
	}
	
	

}
