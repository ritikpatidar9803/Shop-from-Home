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

import com.wipro.sfh.entity.Wishlist;
import com.wipro.sfh.repositiry.WishlistRepository;
import com.wipro.sfh.service.WishlistService;



@RestController
@RequestMapping("wishlist")	
@CrossOrigin
public class WishlistController {
	@Autowired
	WishlistService wishlistservice;
	
	@Autowired
	WishlistRepository wishlistrepository;
	
	@PostMapping(value="storingWishlist")
	public String storeWishlist(@RequestBody Wishlist ws) {
		return wishlistservice.storeDetails(ws);
	}
	
	@GetMapping(value="wishlistProducts")
		public List<Wishlist> getWushlist(){
			return wishlistrepository.findAll();
		}
	@GetMapping(value="wishlistPids/{userid}")
	public List<Integer> wishlistpids(@PathVariable("userid") Integer userid){
		return wishlistrepository.ListPidsByUserId(userid);
	}
	
	@GetMapping(value="userwishlist/{userid}")
	public List<Wishlist> userWish(@PathVariable("userid") int userid){
		return wishlistrepository.ListWishlistByUserId(userid);
	}
	

}
