package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.bean.Sales;

@Repository
public interface SalesRepository extends JpaRepository<Sales,Integer> {
	
	@Query("select p from Sales p where abs(datediff(p.datedetails,:date))<=7")
	public List<Sales> WeeklyReport(@Param("date") String date);
	
	@Query("select p from Sales p where abs(datediff(p.datedetails,:date))<=2")
	public List<Sales> twoReport(@Param("date") String date);
	
	@Query("select p from Sales p where abs(datediff(p.datedetails,:date))<=30")
	public List<Sales> monthlyReport(@Param("date") String date);
	
	@Query("select sum(p.price) from Sales p where abs(datediff(p.datedetails,:date))<=30")
	public int monthlyPrice(@Param("date") String date);
	
	@Query("select sum(p.price) from Sales p where abs(datediff(p.datedetails,:date))<=7")
	public int WeeklySales(@Param("date") String date);
	
	@Query("select sum(p.price) from Sales p where abs(datediff(p.datedetails,:date))<=2")
	public int twoSales(@Param("date") String date);
	
	@Query("select sum(p.price) from Sales p ")
	public int totalprice(@Param("date") String date);

}
