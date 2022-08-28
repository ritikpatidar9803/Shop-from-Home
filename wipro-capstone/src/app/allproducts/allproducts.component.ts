import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Categories/product';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }
  items:Product[]=[];
  newprod!:Product;
  st:string='';
  upprice!:number;
  upstock!:number;
  success:boolean=false;
  productexist:boolean=false;
  pid:number=0;
  pname:string='';
  description:string='';
  price:number=0;
  image:string='';
  stockquantity:number=0;
  discount:number=0;
  category:string='';
  i:number=0;
  upold!:Product;
  upnew!:Product;
  upst:string='';
  ngOnInit(): void {
    this.loadAllProductDetails();
  }
  descendProd(){
    this.rest.getDescending().subscribe(
      (response)=>
      {
          this.items=response;
      }
    );
  }
  ascendprod(){
    this.rest.getAsccending().subscribe(
      (response)=>
      {
          this.items=response;
      }
    );
  }
  ascendStock(){
    this.rest.getAscStocks().subscribe(
      (response)=>
      {
          this.items=response;
      }
    );

  }
  descendStock(){
    this.rest.getDescStocks().subscribe(
      (response)=>
      {
          this.items=response;
      }
    );
  }
  loadAllProductDetails():void{
    this.rest.getProducts().subscribe(
      (response)=>
      {
          this.items=response;
      }
    );
  }
  deleteMsg:string='';
  deleteRec(p:Product): void {
    this.rest.deleteProduct(p.pid).subscribe(result=> {
      this.deleteMsg=result;
    },error=>console.log(error),()=> {
      this.loadAllProductDetails();
      
    });
    alert("product Deleted Successfully");
  }
 
  addprod(){
    
    this.newprod={
      "pid":this.pid,
      "pname":this.pname,
      "description":this.description,
      "price":this.price,
      "image":this.image,
      "stockquantity":this.stockquantity,
      "discount":this.discount,
      "category":this.category
    }
    for(this.i=0;this.i<this.items.length;this.i++){
      if(this.items[this.i]["pid"]==this.pid){
        this.productexist=true;
        console.log("exit");
        break;
      }
      else{
        this.productexist=false;
      }
    }
    if(!this.productexist){
      this.productexist=false;
      console.log("new product details");
      console.log(this.newprod);
      this.rest.newproduct(this.newprod).subscribe(result=> {
        //alert(result);
        this.st=result;
      },error=>console.log(error),()=> {
        this.loadAllProductDetails();
        
      });
      alert('Product Added Successfully')
    }
  }
  sal(){
    this.router.navigateByUrl('/salesreport');
  }
  upload(){
    this.router.navigateByUrl('/fileupload');
  }
  updateProd(p:Product){
    this.upnew={
      "pid":p.pid,
      "pname":p.pname,
      "description":p.description,
      "price":this.upprice,
      "image":p.image,
      "stockquantity":this.upstock,
      "discount":p.discount,
      "category":p.category

    }
    this.rest.updateProd(this.upnew).subscribe(
      (response)=>{
          this.upst=response;
      },error=>console.log(error),()=> {
        this.loadAllProductDetails();
        
      }
    )
    alert("product details updated successfully");
  }
  
  

}
