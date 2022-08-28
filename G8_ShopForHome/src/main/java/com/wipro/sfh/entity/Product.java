package com.wipro.sfh.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity

public class Product {
	
	@Id
	private int pid;
	private String pname;
	private String description;
	private int price;
	private String image;
	private int stockquantity;
	private int discount;
	private String Category;
	

	
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getStockquantity() {
		return stockquantity;
	}
	public void setStockquantity(int stockquantity) {
		this.stockquantity = stockquantity;
	}
	public int getDiscount() {
		return discount;
	}
	public void setDiscount(int discount) {
		this.discount = discount;
	}
	public String getCategory() {
		return Category;
	}
	public void setCategory(String category) {
		Category = category;
	}
	public Product(int pid, String pname, String description, int price, String image, int stockquantity,
			int discount, String category) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.description = description;
		this.price = price;
		this.image = image;
		this.stockquantity = stockquantity;
		this.discount = discount;
		Category = category;
	}
	public Product() {
		super();
	}
	@Override
	public String toString() {
		return "Product [pid=" + pid + ", pname=" + pname + ", description=" + description + ", price=" + price
				+ ", image=" + image + ", stockquantity=" + stockquantity + ", discount=" + discount + ", Category="
				+ Category + "]";
	}

}
