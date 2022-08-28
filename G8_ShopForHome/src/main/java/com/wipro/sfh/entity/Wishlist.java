package com.wipro.sfh.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Wishlist {
	
	@Id
	private int wid;
	private int id;
	private int pid;
	private String pname;
	private String description;
	private int price;
	private String image;
	public int getWid() {
		return wid;
	}
	public void setWid(int wid) {
		this.wid = wid;
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
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Wishlist(int wid, int id, int pid, String pname, String description, int price, String image) {
		super();
		this.wid = wid;
		this.id = id;
		this.pid = pid;
		this.pname = pname;
		this.description = description;
		this.price = price;
		this.image = image;
	}
	@Override
	public String toString() {
		return "Wishlist [wid=" + wid + ", id=" + id + ", pid=" + pid + ", pname=" + pname + ", description="
				+ description + ", price=" + price + ", image=" + image + "]";
	}
	public Wishlist() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	

}
