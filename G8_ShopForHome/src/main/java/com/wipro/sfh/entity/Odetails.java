package com.wipro.sfh.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity

public class Odetails {
	
	@Id
	private int orderid;
	private int id;
	private int pid;
	private String pname;
	private String description;
	private int price;
	private String address;
	private String email;
	private int discount;
	private String image;
	private String datedetails;
	private String category;
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getDiscount() {
		return discount;
	}
	public void setDiscount(int discount) {
		this.discount = discount;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getDatedetails() {
		return datedetails;
	}
	public void setDatedetails(String datedetails) {
		this.datedetails = datedetails;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	@Override
	public String toString() {
		return "Odetails [orderid=" + orderid + ", id=" + id + ", pid=" + pid + ", pname=" + pname + ", description="
				+ description + ", price=" + price + ", address=" + address + ", email=" + email + ", discount="
				+ discount + ", image=" + image + ", datedetails=" + datedetails + ", category=" + category + "]";
	}
	public Odetails(int orderid, int id, int pid, String pname, String description, int price, String address,
			String email, int discount, String image, String datedetails, String category) {
		super();
		this.orderid = orderid;
		this.id = id;
		this.pid = pid;
		this.pname = pname;
		this.description = description;
		this.price = price;
		this.address = address;
		this.email = email;
		this.discount = discount;
		this.image = image;
		this.datedetails = datedetails;
		this.category = category;
	}
	public Odetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	


}
