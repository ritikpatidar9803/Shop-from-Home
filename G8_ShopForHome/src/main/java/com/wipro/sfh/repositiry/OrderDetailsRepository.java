package com.wipro.sfh.repositiry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wipro.sfh.entity.Odetails;

@Repository
public interface OrderDetailsRepository extends JpaRepository<Odetails,Integer> {
	@Query("select p from Odetails p where p.id= :userid")
	public List<Odetails> ListOdetailsByUserId(@Param("userid") int userid);

}
