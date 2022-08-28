package com.wipro.sfh.repositiry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wipro.sfh.entity.Wishlist;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist,Integer> {

	@Query("select p.pid from Wishlist p where p.id= :userid")
	public List<Integer> ListPidsByUserId(@Param("userid") int userid);
	
	@Query("select p from Wishlist p where p.id= :userid")
	public List<Wishlist> ListWishlistByUserId(@Param("userid") int userid);
	
}
