package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Sales {
	@Id
	private int sid;
	private String datedetails;
	private int id;
	private int pid;
	private String pname;
	private String Category;
	private int stockquantity;
	private int price;
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getDatedetails() {
		return datedetails;
	}
	public void setDatedetails(String datedetails) {
		this.datedetails = datedetails;
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
	public String getCategory() {
		return Category;
	}
	public void setCategory(String category) {
		Category = category;
	}
	public int getStockquantity() {
		return stockquantity;
	}
	public void setStockquantity(int stockquantity) {
		this.stockquantity = stockquantity;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public Sales(int sid, String datedetails, int id, int pid, String pname, String category, int stockquantity,
			int price) {
		super();
		this.sid = sid;
		this.datedetails = datedetails;
		this.id = id;
		this.pid = pid;
		this.pname = pname;
		Category = category;
		this.stockquantity = stockquantity;
		this.price = price;
	}
	public Sales() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Sales [sid=" + sid + ", datedetails=" + datedetails + ", id=" + id + ", pid=" + pid + ", pname=" + pname
				+ ", Category=" + Category + ", stockquantity=" + stockquantity + ", price=" + price + "]";
	}
	
	
	

}
