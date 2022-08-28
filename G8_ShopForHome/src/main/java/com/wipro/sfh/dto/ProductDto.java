package com.wipro.sfh.dto;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.wipro.sfh.entity.Product;

@Repository
public class ProductDto {

	@Autowired
	EntityManagerFactory emf; 
	
	public boolean storeProduct(Product product) {
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
	public boolean updateProductByPrice(Product product) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		Product p1 = manager.find(Product.class, product.getPid());     
		if(p1==null) {
			return false;
		}else {
			tran.begin();
					p1.setPrice(product.getPrice());
					p1.setStockquantity(product.getStockquantity());	
					p1.setCategory(product.getCategory());
					p1.setDescription(product.getDescription());
					p1.setImage(product.getImage());
					p1.setPname(product.getPname());
					
					manager.persist(p1);                             
			tran.commit();
			return true;
		}
	}
	public boolean updateProductStocks(Product prod) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		Product p1 = manager.find(Product.class, prod.getPid());     
		if(p1==null) {
			return false;
		}else {
			tran.begin();
					p1.setStockquantity(p1.getStockquantity()-prod.getStockquantity());
					manager.persist(p1);                             
			tran.commit();
			return true;
		}
	}
	

	public boolean deleteProduct(int pid) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		Product p1 = manager.find(Product.class, pid);     
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
