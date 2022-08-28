import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Categories/product';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }
  onClick:boolean=false;
  newprod!:Product;
  oldProd!:Product;
  st:string='';
  success:boolean=false;
  productexist:boolean=false;
  Pid!:number;
  Pname:string='';
  Description:string='';
  Price!:number;
  Image:string='';
  Stockquantity!:number;
  Discount:number=0;
  Category:string='';
  items:Product[]=[];
  i:number=0;
  ngOnInit(): void {
    // this.success=this.rest.getMessage();

    // if(this.success){
    //   this.rest.getProducts().subscribe(
    //     (response)=>
    //     {
    //         this.items=response;
    //     }
    //   );
    // }
  }
  // updprod(){

  //   this.newprod={
      // "pid":this.pid,
      // "pname":this.oldProd["pname"],
      // "description":this.oldProd["description"],
      // "price":this.price,
      // "image":this.oldProd["image"],
      // "stockquantity":this.stockquantity,
      // "discount":this.oldProd["discount"],
      // "category":this.oldProd["category"]
  //   }
    
   
  //     console.log("new product details");
      // console.log(this.newprod);
      // this.rest.updateProd(this.newprod).subscribe(result=> {
      //   //alert(result);
      //   this.st=result;
      // });
      // alert('Updated details successfully')
      // this.router.navigateByUrl("/admincrud");
    
  // }
  updprod(){
    this.newprod={
      "pid":this.Pid,
      "pname":this.Pname,
      "description":this.Description,
      "price":this.Price,
      "image":this.Image,
      "stockquantity":this.Stockquantity,
      "discount":0,
      "category":this.Category

    }
    console.log(this.newprod);
      this.rest.updateProd(this.newprod).subscribe(result=> {
        //alert(result);
        this.st=result;
      });
      alert('Updated details successfully')
      this.router.navigateByUrl("/admincrud");
  }

}
