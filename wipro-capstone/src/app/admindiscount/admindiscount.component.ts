import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Discount } from '../discount';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-admindiscount',
  templateUrl: './admindiscount.component.html',
  styleUrls: ['./admindiscount.component.css']
})
export class AdmindiscountComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }
  Did!:number;
  dt:string='';
  success:boolean=false;
  Percentage!:number;
  Image!:string;
  newCoupon!:Discount;
  ngOnInit(): void {
    
    
  }
  adddisc(){
    this.success=this.rest.getMessage();
    if(this.success){
    this.newCoupon={
      "did":this.Did,
      "id":this.rest.getLoggedinUserDetails()["id"],
      "percentage":this.Percentage,
      "image":this.Image
    }
    this.rest.addDiscount(this.newCoupon).subscribe(
      (response)=>{
        this.dt=response;
      }
    );
    alert("New Coupon added successfully");
    this.router.navigateByUrl('/adminusers');
  }
  }

}
