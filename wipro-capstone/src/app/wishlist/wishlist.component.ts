import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Categories/product';
import { Odetails } from '../odetails';
import { RestService } from '../rest.service';
import { User } from '../user';
import { Wishlist } from '../wishlist';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private router:Router,private rest:RestService) { }
  success:boolean=false;
  items:Product[]=[];
  userid:number=0
  prodids:number[]=[];
 
  i:number=0;
  j:number=0;
  k:number=0;
  wl:Wishlist[]=[];
  p!:Product;
  prodid:number=0;
  flag:boolean=true;
  addmore(){
    this.router.navigateByUrl('/home');
  }


  
  ngOnInit(): void {
    this.success=this.rest.getMessage();
    if(this.success){
    this.userid=this.rest.getLoggedinUserDetails()["id"];
    this.rest.getUserWishlist(this.userid).subscribe(
      (response)=>
      {
          this.wl=response;
      }
    );
    }
  }
  // dateObj = new Date();
  //   month =this.dateObj.getUTCMonth() + 1; //months from 1-12
  //   day = this.dateObj.getUTCDate();
  //   year = this.dateObj.getUTCFullYear();
    
  // newdate = String(this.year + "-" + this.month + "-" +this. day);
  // citems:Odetails[]=[];
  // disc:number=10;
  // ordnumber:number=0;
  // cord!:Odetails;
  // st:string=''
  //   cart(prod:Wishlist){
  //     this.success=this.rest.getMessage();
  //     if(this.success){
  //       console.log("hii");
  //       this.rest.getUserOrders(this.rest.getLoggedinUserDetails()["id"]).subscribe(
  //         (response)=>
  //         {
  //             this.citems=response;
  //         }
  //       );
  //       this.flag=true;
  //       for(this.i=0;this.i<this.citems.length;this.i++){
  //           if(this.citems[this.i]["pid"]==prod.pid){
              
  //             this.flag=false;
  //             break;
  //           }
  //       }
  //       if(this.flag){  

  //         this.ordnumber=Math.floor(Math.random() * 100000);
        
  //         this.cord={
  //           "orderid":this.ordnumber,
  //           "id":this.rest.getLoggedinUserDetails()["id"],
  //           "pid":prod.pid,
  //           "pname":prod.pname,
  //           "description":prod.description,
  //           "price":prod.price,
  //           "address":this.rest.getLoggedinUserDetails()["address"],
  //           "email":this.rest.getLoggedinUserDetails()["email"],
  //           "discount":prod.discount,
  //           "image":prod.image,
  //           "datedetails":this.newdate,
  //           "category":prod.category
  //         }
          
  //         console.log(this.newdate);
  //         alert("added to cart");
          
  //         this.rest.storeOrderdetails(this.cord).subscribe(result=> {
  //           //alert(result);
  //           this.st=result;
  //         });
          
          
  //       }
  //       else{
  //         alert("Already added to cart");
  //       }
  //   }
  

  // }

}
