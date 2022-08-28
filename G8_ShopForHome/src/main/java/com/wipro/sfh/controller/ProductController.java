package com.wipro.sfh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.sfh.entity.Product;
import com.wipro.sfh.repositiry.ProductRepository;
import com.wipro.sfh.service.ProductService;



@RestController
@RequestMapping("products")	
@CrossOrigin
public class ProductController {
	@Autowired
	ProductService productService;
	
	@Autowired
	ProductRepository productrepo;
	
	@GetMapping(value = "findAll")
	public List<Product> findAllProduct() {
		return productService.getAllProduct();
	}
	
	@PostMapping(value = "storeProduct")
	public String storeProdcut(@RequestBody Product product) {
		return productService.storeProduct(product);
	}

	
	@PutMapping(value = "updateProduct")
	public String updateProduct(@RequestBody Product product) {
		return productService.updateProduct(product);
	}
	
	@PutMapping(value = "updateStocks")
	public String updateStocks(@RequestBody Product product) {
		return productService.updateStock(product);
	}
	@GetMapping(value = "findProductByPrice/{price}")
	public List<Product> findProductByPrice(@PathVariable("price") int price){
		return productService.findProductByPrice(price);
	}
	

	@GetMapping(value = "sortProductByPriceAsc/{category}")
	public List<Product> sortProductByPrice(@PathVariable("category") String category){
		return productService.sortProductByPrice(category);
	}
	
	@GetMapping(value = "sortProductByPriceDesc/{category}")
	public List<Product> sortProductByPriceDesc(@PathVariable("category") String category){
		return productService.sortByPriceDesc(category);
	}
	
	@GetMapping(value = "getProductsByCategory/{cat}")
	public List<Product> getProductsByCategories(@PathVariable("cat") String cat){
		return productService.getProductsByCategory(cat);
	}
	
	@GetMapping(value ="getWishlistProducts/{pids}")
	public List<Product> getMultipleProducts(@PathVariable("pids") List<Integer> pids){
		return productrepo.findAllById(pids);
	}
	
	@GetMapping(value="getProductById/{id}")
	public Product getProduct(@PathVariable("id") int id) {
		return productrepo.ListProductsById(id);
	}
	
	@GetMapping(value="AscendingProducts")
	public List<Product> getAscProduct() {
		return productService.AscendingProd();
	}
	@GetMapping(value="DescendingProducts")
	public List<Product> getDesProduct() {
		return productrepo.DesendingProducts();
	}
	
	@GetMapping(value="DescendingStocks")
	public List<Product> getDesStocks() {
		return productrepo.DesendingStocks();
	}
	@GetMapping(value="AscendingStocks")
	public List<Product> getAscStocks() {
		return productrepo.AscendingStocks();
	}
	@DeleteMapping(value = "deleteProduct/{pid}")
	public String deleteProduct(@PathVariable("pid") int pid) {
		return productService.deleteProduct(pid);
	}

}
