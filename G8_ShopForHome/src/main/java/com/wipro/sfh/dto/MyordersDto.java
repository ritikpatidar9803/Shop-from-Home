package com.wipro.sfh.dto;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.wipro.sfh.entity.Myorders;


@Repository
public class MyordersDto {
	
	@Autowired
	EntityManagerFactory emf; 
	
	
	public boolean Storemyorrdetails(Myorders order) {
		try {
			EntityManager manager = emf.createEntityManager();		
			EntityTransaction tran = manager.getTransaction();
			
			tran.begin();
					manager.persist(order);                      
			tran.commit();
			return true;
		} catch (Exception e) {
			
			System.out.println(e);
			return false;
		}
	}


}
