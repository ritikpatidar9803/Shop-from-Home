package com.wipro.sfh.dto;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.wipro.sfh.entity.User;


@Repository
public class UserDto {
	
	@Autowired
	EntityManagerFactory emf;
	
	public boolean registerUser(User user) {
		
		
		try {
			EntityManager manager = emf.createEntityManager();		
			EntityTransaction tran = manager.getTransaction();		
			tran.begin();
					manager.persist(user);                       
			tran.commit();
	
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;
		}
	}
	public boolean updatePassword(User user) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		User p1 = manager.find(User.class, user.getId());     
		if(p1==null) {
			return false;
		}else {
			tran.begin();
					p1.setPassword(user.getPassword());
					manager.persist(p1);                             
			tran.commit();
			
			return true;
		}
	}
	public boolean deleteuserById(int id) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		User p1 = manager.find(User.class, id);     
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
