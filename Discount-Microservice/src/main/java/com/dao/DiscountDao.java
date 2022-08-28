package com.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Discount;


@Repository
public class DiscountDao {
	
	@Autowired
	EntityManagerFactory emf; 
	
	public boolean storeDiscount(Discount offer) {
		try {
			EntityManager manager = emf.createEntityManager();		
			EntityTransaction tran = manager.getTransaction();		 
			tran.begin();
					manager.persist(offer);                      
			tran.commit();
			return true;
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e);
			return false;
		}
	}

}
