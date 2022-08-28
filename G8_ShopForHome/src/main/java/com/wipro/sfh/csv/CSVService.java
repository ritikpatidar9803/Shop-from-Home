package com.wipro.sfh.csv;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.wipro.sfh.entity.Product;
import com.wipro.sfh.repositiry.ProductRepository;


@Service
public class CSVService {

	 @Autowired
	  ProductRepository repository;

	  public void save(MultipartFile file) {
	    try {
	      List<Product> products = CSVHelper.csvToTutorials(file.getInputStream());
	      repository.saveAll(products);
	    } catch (IOException e) {
	      throw new RuntimeException("fail to store csv data: " + e.getMessage());
	    }
	  }

	  public ByteArrayInputStream load() {
	    List<Product> tutorials = repository.findAll();

	    ByteArrayInputStream in = CSVHelper.tutorialsToCSV(tutorials);
	    return in;
	  }

	  public List<Product> getAllTutorials() {
	    return repository.findAll();
	  }
}
