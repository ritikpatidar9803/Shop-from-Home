package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Sales;
import com.repository.SalesRepository;
import com.service.SalesService;

@RestController
@RequestMapping("sales")
@CrossOrigin
public class SalesController {
	
	
	@Autowired
	SalesRepository repo;
	
	@Autowired
	SalesService ss;
	
	@PostMapping("storeSales")
	public String addSales(@RequestBody Sales s) {
		return ss.storeProduct(s);
		}
	@GetMapping(value="allsales")
	public List<Sales> allsales(){
		return repo.findAll();
	}
	@GetMapping(value="weeklysales/{date}")
	public List<Sales> weeklysales(@PathVariable("date") String date){
		return repo.WeeklyReport(date);
	}
	@GetMapping(value="monthly/{date}")
	public List<Sales> monthlysales(@PathVariable("date") String date){
		return repo.monthlyReport(date);
	}
	@GetMapping(value="twodaysSales/{date}")
	public List<Sales> twoDays(@PathVariable("date") String date){
		return repo.twoReport(date);
	}
	@GetMapping(value="monthlyprice/{date}")
	public int monthlyprice(@PathVariable("date") String date){
		return repo.monthlyPrice(date);
	}
	@GetMapping(value="weeklyprice/{date}")
	public int weekly(@PathVariable("date") String date){
		return repo.WeeklySales(date);
	}
	@GetMapping(value="twoprice/{date}")
	public int two(@PathVariable("date") String date){
		return repo.twoSales(date);
	}
	@GetMapping(value="totalsales/{date}")
	public int total(@PathVariable("date") String date){
		return repo.totalprice(date);
	}

}
