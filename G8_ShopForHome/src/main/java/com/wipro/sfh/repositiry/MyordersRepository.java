package com.wipro.sfh.repositiry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.wipro.sfh.entity.Myorders;



public interface MyordersRepository extends JpaRepository<Myorders,Integer> {
	@Query("select p from Myorders p where p.id= :userid")
	public List<Myorders> ListMyordersByUserId(@Param("userid") int userid);

}
