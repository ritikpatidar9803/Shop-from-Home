import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './Categories/product';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private http:HttpClient) { }
  
  sortcategory:string='';
  scarpet:string="http://localhost:8282/products/sortProductByPriceAsc/Carpets";
  sfurniture:string="http://localhost:8282/products/sortProductByPriceAsc/Furniture";
  sfurnishings:string="http://localhost:8282/products/sortProductByPriceAsc/Furnishings";
  sgarden:string="http://localhost:8282/products/sortProductByPriceAsc/Garden&Outdoor";
  sbeds:string="http://localhost:8282/products/sortProductByPriceAsc/Beds&Mattresses";
  sappliances:string="http://localhost:8282/products/sortProductByPriceAsc/Appliances";
  url1:string="http://localhost:8282/products/sortProductByPriceDesc/Carpets";
  url2:string="http://localhost:8282/products/sortProductByPriceDesc/Furniture";
  url3:string="http://localhost:8282/products/sortProductByPriceDesc/Furnishings";
  url4:string="http://localhost:8282/products/sortProductByPriceDesc/Garden&Outdoor";
  url5:string="http://localhost:8282/products/sortProductByPriceDesc/Beds&Mattresses";
  url6:string="http://localhost:8282/products/sortProductByPriceDesc/Appliances";
  sortnumber:boolean=false;;
  setSnumber(n:boolean){
    this.sortnumber=n;
  }
  getSnumber(){
    return this.sortnumber;
  }
  getscarpetdesc():Observable<Product[]>{
    return this.http.get<Product[]>(this.url1);
  }
  getsfurnituredesc():Observable<Product[]>{
    return this.http.get<Product[]>(this.url2);
  }
  getsfurnishingsdesc():Observable<Product[]>{
    return this.http.get<Product[]>(this.url3);
  }
  getsgardendesc():Observable<Product[]>{
    return this.http.get<Product[]>(this.url4);
  }
  getsbedsdes():Observable<Product[]>{
    return this.http.get<Product[]>(this.url5);
  }
  getsappliancesdesc():Observable<Product[]>{
    return this.http.get<Product[]>(this.url6);
  }
  getsortingcategory(){
    return this.sortcategory;
  }
  setsortingcategory(cat:string){
    this.sortcategory=cat;
  }
  getscarpet():Observable<Product[]>{
    return this.http.get<Product[]>(this.scarpet);
  }
  getsappliance():Observable<Product[]>{
    return this.http.get<Product[]>(this.sappliances);
  }
  getsgarden():Observable<Product[]>{
    return this.http.get<Product[]>(this.sgarden);
  }
  getbeds():Observable<Product[]>{
    return this.http.get<Product[]>(this.sbeds);
  }
  getsfurniture():Observable<Product[]>{
    return this.http.get<Product[]>(this.sfurniture);
  }
  getsfurnishings():Observable<Product[]>{
    return this.http.get<Product[]>(this.sfurnishings);
  }
}
