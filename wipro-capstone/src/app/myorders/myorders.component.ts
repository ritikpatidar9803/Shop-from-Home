import { Component, OnInit } from '@angular/core';
import { Myorders } from '../myorders';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  constructor(private rest:RestService) { }
  success:boolean=false;
  userid:number=0;
  items:Myorders[]=[]
  ngOnInit(): void {

    this.success=this.rest.getMessage();
    if(this.success){
    this.userid=this.rest.getLoggedinUserDetails()["id"];
    this.rest.getUsermyorders(this.userid).subscribe(
      (response)=>
      {
          this.items=response;
      }
    );
    }
  }

}
