package com.wipro.sfh.repositiry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.sfh.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
