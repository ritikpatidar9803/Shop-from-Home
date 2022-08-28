package com.wipro.sfh.repositiry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.wipro.sfh.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	@Query("select p from Product p where p.price = :price")
	public List<Product> findProductByPrice(@Param("price") int price);
	
	@Query("select p from Product p order by p.price asc")
	public List<Product> AcendingProducts();
	
	@Query("select p from Product p order by p.price desc")
	public List<Product> DesendingProducts();
	
	@Query("select p from Product p order by p.stockquantity desc")
	public List<Product> DesendingStocks();
	
	@Query("select p from Product p order by p.stockquantity asc")
	public List<Product> AscendingStocks();
	
	
	@Query("select p from Product p where p.Category = :cat order by p.price asc")
	public List<Product> sortByPrice(@Param("cat") String cat);
	
	@Query("select p from Product p where p.Category = :cat order by p.price desc")
	public List<Product> sortByPriceDesc(@Param("cat") String cat);
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("delete from Product p where p.pname = :pname")
	public int deleteProductByName(@Param("pname") String pname);
	
	
	@Query("select p from Product p where p.pid = :id")
	public Product ListProductsById(@Param("id") int id);
	
	@Query("select p from Product p where p.Category= :cat")
	public List<Product> ListProductsByCategory(@Param("cat") String cat);
	
	

}
