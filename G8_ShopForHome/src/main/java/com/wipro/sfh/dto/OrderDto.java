package com.wipro.sfh.dto;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.wipro.sfh.entity.Odetails;


@Repository
public class OrderDto {
	
	@Autowired
	EntityManagerFactory emf; 
	
	
	public boolean StoreOrdrrdetails(Odetails order) {
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
	public boolean deletecartProduct(int ordid) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		Odetails p1 = manager.find(Odetails.class, ordid);     
		if(p1==null) {
			return false;
		}else {
			tran.begin();
			manager.remove(p1);                             
			tran.commit();
			return true;
		}
	}

}
