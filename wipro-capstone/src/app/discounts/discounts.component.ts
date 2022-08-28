import { Component, OnInit } from '@angular/core';
import { Discount } from '../discount';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

  constructor(private rest:RestService) { }
  success:boolean=false;
  items:Discount[]=[];
  ngOnInit(): void {
    this.success=this.rest.getMessage();
    if(this.success){
    this.rest.getUserDiscounts(this.rest.getLoggedinUserDetails()["id"]).subscribe(
      (response)=>
      {
          this.items=response;
      }
    );
    }

  }
  prole(){
    return this.rest.getLoggedinUserDetails()["role"]=="admin";
  }

}
