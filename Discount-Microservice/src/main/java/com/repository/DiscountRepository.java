package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bean.Discount;

@Repository

public interface DiscountRepository extends JpaRepository<Discount,Integer>{
	
	@Query("select p from Discount p where p.id = :usrid")
	public List<Discount> userDiscounts(@Param("usrid") int usrid);
	
	@Query("select max(p.percentage) from Discount p where p.id = :usrid")
	public int usermaxDiscount(@Param("usrid") int usrid);
	
	@Query("select p from Discount p where p.id =:usrid and p.percentage =:per")
	public Discount discDetails(int usrid,int per);
	

}
