package com.wipro.sfh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.sfh.dto.WishlistDto;
import com.wipro.sfh.entity.Wishlist;
import com.wipro.sfh.repositiry.WishlistRepository;


@Service
public class WishlistService {
	@Autowired
	WishlistRepository wishlistrepository;
	
	@Autowired
	WishlistDto wishlistdto;
	
	public String storeDetails(Wishlist ws) {
		if(wishlistdto.storeDetails(ws)) {
			return "details stored successfully";
		}
		else {
			return "storing unsuccessful";
		}
	}

}
