package com.wipro.sfh.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.sfh.dto.ProductDto;
import com.wipro.sfh.entity.Product;
import com.wipro.sfh.repositiry.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductDto productDto;
	
	@Autowired
	ProductRepository productRepository;
	
	
	public List<Product> getAllProductFromRepository() {
		return productRepository.findAll();
	}
	
	public String storeProduct(Product product) {
		if(productDto.storeProduct(product)) {
			return "Product details stored successfully";
		}else {
			return "Product didn't store";
		}
	}
	
	public List<Product> getAllProduct() {
		return productRepository.findAll();
	}
	
	public String updateProduct(Product product) {
		if(productDto.updateProductByPrice(product)) {
			return "Record updated successfully";
		}else {
			return "Record not present";
		}
	}
	public String updateStock(Product prod) {
		if(productDto.updateProductStocks(prod)) {
			return "Record updated successfully";
		}else {
			return "Record not present";
		}
	}
	
	public String deleteProduct(int pid) {
		Optional<Product> op =  productRepository.findById(pid);
			if(op.isPresent()) {
					Product p = op.get();
					productRepository.delete(p);
					return "Product deleted successfully";
			}else {
				return "Product not present";
			}
		}
	
	public List<Product> findProductByPrice(int price){
		return productRepository.findProductByPrice(price);
	}
	
	public Product findProductById(int id){
		return productRepository.ListProductsById(id);
	}
	public List<Product> sortProductByPrice(String category){
		return productRepository.sortByPrice(category);
	}
	public List<Product> sortByPriceDesc(String category){
		return productRepository.sortByPriceDesc(category);
	}
	public List<Product> getProductsByCategory(String cat){
		return productRepository.ListProductsByCategory(cat);
	}
	public List<Product> AscendingProd(){
		return productRepository.AcendingProducts();
	}

}
