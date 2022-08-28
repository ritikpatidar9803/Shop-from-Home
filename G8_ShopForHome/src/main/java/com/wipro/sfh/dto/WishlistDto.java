package com.wipro.sfh.dto;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.wipro.sfh.entity.Wishlist;

@Repository
public class WishlistDto {
	
	@Autowired
	EntityManagerFactory emf; 
	
	public boolean storeDetails(Wishlist ws) {
		try {
			EntityManager manager = emf.createEntityManager();		
			EntityTransaction tran = manager.getTransaction();
			
			tran.begin();
					manager.persist(ws);                      
			tran.commit();
			return true;
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e);
			return false;
		}
	}


}
