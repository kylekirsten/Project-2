package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Category;
@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{
	
}
