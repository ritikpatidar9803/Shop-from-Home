package com.repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Sales;

@Repository
public class SalesDao {
	

	@Autowired
	EntityManagerFactory emf; 
	
	public boolean storeProduct(Sales product) {
		try {
			EntityManager manager = emf.createEntityManager();		
			EntityTransaction tran = manager.getTransaction();		 
			tran.begin();
					manager.persist(product);                      
			tran.commit();
			return true;
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e);
			return false;
		}
	}

}
