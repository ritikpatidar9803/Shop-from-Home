import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Categories/product';
import { Odetails } from '../odetails';
import { Orders } from '../orders';
import { RestService } from '../rest.service';
import { Wishlist } from '../wishlist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }
  items:Product[]=[];
  ngOnInit(): void {
    this.rest.getProducts().subscribe(
      (response)=>
      {
          this.items=response;
      }
    );
  }

  searchInput:string='';

  wlist:Wishlist[]=[];
  flag:boolean=true;
  success:boolean=false;
  wish!:Wishlist;
  i:number=0;
  st:string='';
  wishlist(prod:Product){
    this.success=this.rest.getMessage();
    if(this.success){
      console.log("hii");
      this.rest.getUserWishlist(this.rest.getLoggedinUserDetails()["id"]).subscribe(
        (response)=>
        {
            this.wlist=response;
        }
      );
        this.flag=true;
        for(this.i=0;this.i<this.wlist.length;this.i++){
            if(this.wlist[this.i]["pid"]==prod.pid){
              alert("Already added to Wishlist")
              this.flag=false;
              break;
            }
        }
        if(this.flag){  
          
          this.wish={
            "wid":Math.floor(Math.random() * 100000),
            "id":this.rest.getLoggedinUserDetails()["id"],
            "pid":prod.pid,
            "pname":prod.pname,
            "description":prod.description,
            "price":prod.price,
            "image":prod.image


          }
          
          alert("added to wishlist");
          
          this.rest.addWishlist(this.wish).subscribe(result=> {
            //alert(result);
            this.st=result;
          });;
          console.log(this.wish);
        }
        else{
          alert("already added to wishlist");
        }
        
      }
      else{
        this.router.navigateByUrl('/signin');
      }
    
      
    } 
    dateObj = new Date();
    month =this.dateObj.getUTCMonth() + 1; //months from 1-12
    day = this.dateObj.getUTCDate();
    year = this.dateObj.getUTCFullYear();
    
  newdate = String(this.year + "-" + this.month + "-" +this. day);
  citems:Odetails[]=[];
  orders:Orders[]=[];
  ord!:Orders;
  cord!:Odetails;
  disc:number=10;
  ordnumber:number=0;
    cart(prod:Product){
      this.success=this.rest.getMessage();
      if(this.success){
        console.log("hii");
        this.rest.getUserOrders(this.rest.getLoggedinUserDetails()["id"]).subscribe(
          (response)=>
          {
              this.citems=response;
          }
        );
          this.flag=true;
          for(this.i=0;this.i<this.citems.length;this.i++){
              if(this.wlist[this.i]["pid"]==prod.pid){
                
                this.flag=false;
                break;
              }
          }
          if(this.flag){  

            this.ordnumber=Math.floor(Math.random() * 100000);
            // this.ord={
            //   "ordid":this.ordnumber,
            //   "id":this.rest.getLoggedinUserDetails()["id"],
            //   "pid":prod.pid,
            //   "datedetails":this.newdate
            // };
            this.cord={
              "orderid":this.ordnumber,
              "id":this.rest.getLoggedinUserDetails()["id"],
              "pid":prod.pid,
              "pname":prod.pname,
              "description":prod.description,
              "price":prod.price,
              "address":this.rest.getLoggedinUserDetails()["address"],
              "email":this.rest.getLoggedinUserDetails()["email"],
              "discount":this.disc,
              "image":prod.image,
              "datedetails":this.newdate,
              "category":prod.category
            }
            
            console.log(this.newdate);
            alert("added to cart");
            // this.rest.storeOrder(this.ord).subscribe(result=> {
            //   //alert(result);
            //   this.st=result;
            // });
            this.rest.storeOrderdetails(this.cord).subscribe(result=> {
              //alert(result);
              this.st=result;
            });
            
          }
          else{
            alert("Already added to cart");
          }
          
      }
      else{
        this.router.navigateByUrl('/signin');
      }
      
        
      }

      
      

}
