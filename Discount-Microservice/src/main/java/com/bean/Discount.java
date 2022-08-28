package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Discount {
	@Id
	private int did;
	private int id;
	private int percentage;
	private String image;
	public int getDid() {
		return did;
	}
	public void setDid(int did) {
		this.did = did;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getPercentage() {
		return percentage;
	}
	public void setPercentage(int percentage) {
		this.percentage = percentage;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	@Override
	public String toString() {
		return "Discount [did=" + did + ", id=" + id + ", percentage=" + percentage + ", image=" + image + "]";
	}
	public Discount(int did, int id, int percentage, String image) {
		super();
		this.did = did;
		this.id = id;
		this.percentage = percentage;
		this.image = image;
	}
	public Discount() {
		super();
		
	}
	
	
	

}
