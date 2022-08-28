import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './Categories/product';
import { User } from './user';
import { Wishlist } from './wishlist';
import { Orders } from './orders';
import { Odetails } from './odetails';
import { Discount } from './discount';
import { Email } from './email';
import { Sales } from './sales';
import { Myorders } from './myorders';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  category:number=0;
  setcategory(i:number){
    this.category=i;
  }
  getCategory(){
    return this.category;
  }
  
  // // url1:string="http://localhost:3000/electronic";
  // // url2:string="http://localhost:3000/school";
  // // url3:string="http://localhost:3000/Beds";
  // // url4:string="http://localhost:3000/Clothing";
  // // url5:string="http://localhost:3000/Furniture";
  // // url6:string="http://localhost:3000/Garden";
  // // url7:string="http://localhost:3000/Carpets";
  // // url8:string="http://localhost:3000/Furnishings";
  // url9:string="http://localhost:8282/products/findAll";
  url1:string="http://localhost:8282/products/getProductsByCategory/Appliances";
  url3:string="http://localhost:8282/products/getProductsByCategory/Beds&Mattresses";
  url5:string="http://localhost:8282/products/getProductsByCategory/Furniture";
  url6:string="http://localhost:8282/products/getProductsByCategory/Garden&Outdoor";
  url7:string="http://localhost:8282/products/getProductsByCategory/Carpets";
  url8:string="http://localhost:8282/products/getProductsByCategory/Furnishings";
  url9:string="http://localhost:8282/products/findAll";
  allusers:string="http://localhost:8282/user/users";
  wishdata:string="http://localhost:8282/wishlist/wishlistProducts";
  regUser:string=""
  success:boolean=false;
  user:number=0;
  userLoggedin!:User;
  rdata:any;
  wishpids:string="http://localhost:8282/wishlist/wishlistPids";
  wishprods:string="http://localhost:8282/products/getWishlistProducts";


  private baseUrl = 'http://localhost:8282/api/csv';
  
  uploadingfile(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }







  getOrders():Observable<Orders[]>{
    return this.http.get<Orders[]>("http://localhost:8282/orders/allorders");
  }
  getOrderdetails():Observable<Odetails[]>{
    return this.http.get<Odetails[]>("http://localhost:8282/orders/allordersDetails");
  }
  getDescending():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8282/products/DescendingProducts");
  }
  getAsccending():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8282/products/AscendingProducts");
  }

  getCategories(str:string):Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8282/products/getProductsByCategory/"+str);
  }
  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>("http://localhost:8282/products/getProductById/"+id);
  }
  getallSales():Observable<Sales[]>{
    return this.http.get<Sales[]>("http://localhost:8181/sales/allsales");
  }

  
  
  getCatProductsByAsc(str:string):Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8282/products/sortProductByPriceAsc/"+str);
  }
  getCatProductsByDesc(str:string):Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8282/products/sortProductByPriceDesc/"+str);
  }
  getAscStocks():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8282/products/AscendingStocks");
  }
  getDescStocks():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8282/products/DescendingProducts");
  }
 
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url9);
  }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.allusers);
  }
  getWishlist():Observable<Wishlist[]>{
    return this.http.get<Wishlist[]>("http://localhost:8282/wishlist/wishlistProducts");
  }
  getUserWishlist(usrid:number):Observable<Wishlist[]>{
    return this.http.get<Wishlist[]>("http://localhost:8282/wishlist/userwishlist/"+usrid);
  }
  getWeekly(dat:string):Observable<Sales[]>{
    return this.http.get<Sales[]>("http://localhost:8181/sales/weeklysales/"+dat);
  }
  getTwo(dat:string):Observable<Sales[]>{
    return this.http.get<Sales[]>("http://localhost:8181/sales/twodaysSales/"+dat)
  }
  getMonthly(dat:string):Observable<Sales[]>{
    return this.http.get<Sales[]>("http://localhost:8181/sales/monthly/"+dat)
  }
  getMonthlyTotal(dat:string):Observable<number>{
    return this.http.get<number>("http://localhost:8181/sales/monthlyprice/"+dat)
  }
  
  gettwoTotal(dat:string):Observable<number>{
    return this.http.get<number>("http://localhost:8181/sales/twoprice/"+dat)
  }
  getWeeklyTotal(dat:string):Observable<number>{
    return this.http.get<number>("http://localhost:8181/sales/weeklyprice/"+dat)
  }
  getmaxDiscount(usrid:number):Observable<number>{
    return this.http.get<number>("http://localhost:8080/discounts/maxdiscount/"+usrid);
  }
  
  getTotal(dat:string):Observable<number>{
    return this.http.get<number>("http://localhost:8181/sales/totalsales/"+dat)
  }
  
  getUserOrders(usrid:number):Observable<Odetails[]>{
    return this.http.get<Odetails[]>("http://localhost:8282/orders/userOrders/"+usrid);
  }
  getUsermyorders(usrid:number):Observable<Myorders[]>{
    return this.http.get<Myorders[]>("http://localhost:8282/myorders/usermyOrders/"+usrid);
  }
  getDiscounts():Observable<Discount[]>{
    return this.http.get<Discount[]>("http://localhost:8080/discounts/alldiscounts");
  }
  getUserDiscounts(usrid:number):Observable<Discount[]>{
    return this.http.get<Discount[]>("http://localhost:8080/discounts/userdiscounts/"+usrid);
  }
  getCat(prid:number):Observable<string>{
    return this.http.get<string>("http://localhost:8282/products/getCategory/"+prid);
  }
  getusedDiscount(usrid:number,per:number):Observable<Discount>{
  return this.http.get<Discount>("http://localhost:8080/discounts/deleteCoupon/"+usrid+"/"+per)
 
  }
  
  


  getWpids(usrid:number):Observable<number[]>{
    return this.http.get<number[]>("http://localhost:8282/wishlist/wishlistPids"+usrid);

  }
  getWiProducts(pds:number[]):Observable<Product[]>{
    return this.http.get<Product[]>(this.wishprods);
  }
  deleteProduct(pid:number):Observable<string> {
    return this.http.delete("http://localhost:8282/products/deleteProduct/"+pid,{responseType:'text'});
  }
  updateStocks(Prod:Product):Observable<string>{
    return this.http.put("http://localhost:8282/products/updateStocks",Prod,{responseType:'text'});
  }
  
  updateProd(Prod:Product):Observable<string>{
    return this.http.put("http://localhost:8282/products/updateProduct",Prod,{responseType:'text'});
  }
  // updateProduct(product:any):Observable<string> {
  //   return this.http.put("http://localhost:8080/products/updateProduct",product,{responseType:"text"});
  // }
  deleteUser(pid:number):Observable<string> {
    return this.http.delete("http://localhost:8282/user/deleteUser/"+pid,{responseType:'text'});
  }
  deleteDiscount(did:number):Observable<string>{
    return this.http.delete("http://localhost:8080/discounts/deleteDiscount/"+did,{responseType:'text'})
  }
  
  deleteCart(oid:number):Observable<string>{
    return this.http.delete("http://localhost:8282/orders/deletecartitem/"+oid,{responseType:'text'});
  }
  newproduct(prod:Product){
    
    return this.http.post("http://localhost:8282/products/storeProduct",prod,{responseType:'text'})
  }
  addDiscount(disc:Discount):Observable<string>{
    return this.http.post("http://localhost:8080/discounts/addDiscount",disc,{responseType:'text'})
  }
  sendemail(email:Email):Observable<string>{
    return this.http.post("http://localhost:8080/sendMail",email,{responseType:'text'})
  }
  
  registerUser(user:User){
    
    return this.http.post("http://localhost:8282/user/Register",user,{responseType:'text'})
  }
  addsales(sl:Sales):Observable<string>{
    return this.http.post("http://localhost:8181/sales/storeSales",sl,{responseType:'text'})
  }

  storeOrder(ord:Orders):Observable<string>{
    return this.http.post("http://localhost:8282/orders/store",ord,{responseType:'text'})
  }
  storeOrderdetails(ord:Odetails):Observable<string>{
    return this.http.post("http://localhost:8282/orders/storeOderDetails",ord,{responseType:'text'})
  }
  
  storeMyOrderdetails(ord:Myorders):Observable<string>{
    return this.http.post("http://localhost:8282/myorders/storemyOderDetails",ord,{responseType:'text'})
  }

  addWishlist(wl:Wishlist):Observable<string>{
    return this.http.post("http://localhost:8282/wishlist/storingWishlist",wl,{responseType:'text'})
  }
  addFile(f:File):Observable<string>{
    return this.http.post("http://localhost:8282/api/csv/upload",f,{responseType:'text'})
  }
  // addWishlist(wl:Wishlist){
  //   return this.http.post("http://localhost:8282/wishlist/storingWishlist",wl,).subscribe(data=>{
  //     console.log(data);
  //   },error=>console.log(error))
  // }
  getMessage(){
    return this.success;
  }
  setMessage(success:boolean){
    this.success=success;
  }
  setUserLoggedIn(user:number){
    this.user=user;
  }
  getUserLoggedIn(){
    return this.user;
  }
  getLoggedinUserDetails(){
    return this.userLoggedin;
  }
  setLoggedinuserDetails(usr:User){
    this.userLoggedin=usr;
  }
  


}
