import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Sales } from '../sales';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }
  items:Sales[]=[];
  salestotal:number=0;
  monthlyTotal:number=0;
  weeklyTotal:number=0;
  twoTotal:number=0;
  total:number=0;
  dateObj = new Date();
    month =this.dateObj.getUTCMonth() + 1; //months from 1-12
    day = this.dateObj.getUTCDate();
    year = this.dateObj.getUTCFullYear();
    
  newdate = String(this.year + "-" + this.month + "-" +this. day);
  ngOnInit(): void {
    this.rest.getallSales().subscribe(
      (response)=>
      {
          this.items=response;
      }
    );
    this.rest.getMonthlyTotal(this.newdate).subscribe(
      (response)=>
      {
        this.monthlyTotal=response;
      }
    );
    this.rest.getWeeklyTotal(this.newdate).subscribe(
      (response)=>
      {
        this.weeklyTotal=response;
      }
    );
    this.rest.gettwoTotal(this.newdate).subscribe(
      (response)=>
      {
        this.twoTotal=response;
      }
    );
    this.rest.getTotal(this.newdate).subscribe(
      (response)=>
      {
        this.total=response;
      }
    );
    
    this.salestotal=this.total;
  }
  loadAllDetails():void{
    this.rest.getallSales().subscribe(
      (response)=>
      {
          this.items=response;
      }
    );
    
    this.salestotal=this.total;
  }
  week(){
    this.rest.getWeekly(this.newdate).subscribe(
      (response)=>
      {
        this.items=response;
      }
    );
    console.log(this.total);
    // console.log(this.weeklyTotal);
    this.total=this.weeklyTotal;
  }
  monthwise(){
    this.rest.getMonthly(this.newdate).subscribe(
      (response)=>
      {
        this.items=response;
      }
    );
    console.log(this.total);
    // console.log(this.monthlyTotal);
    this.total=this.monthlyTotal;

  }
  two(){
    this.rest.getTwo(this.newdate).subscribe(
      (response)=>
      {
        this.items=response;
      }
    );
    // console.log(this.twoTotal);
    this.total=this.twoTotal;

  }
  sal(){
    this.router.navigateByUrl('/salesreport');
  }
  upload(){
    this.router.navigateByUrl('/fileupload');
  }
  

}
