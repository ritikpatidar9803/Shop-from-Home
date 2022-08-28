import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Discount } from '../discount';
import { RestService } from '../rest.service';
import { User } from '../user';

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }
  users:User[]=[];
  items:Discount[]=[];
  newdisc!:Discount;
  uid:number=0;
  usr!:User;
  username:string='';
  email:string='';
  phone:string='';
  address:string='';
  password:string='';
  i:number=0;
  ngOnInit(): void {
    this.loadAllProductDetails();
    this.rest.getUserDiscounts(this.rest.getLoggedinUserDetails()["id"]).subscribe(
      (response)=>
      {
          this.items=response;
      }
    );

  }
  loadAllProductDetails():void{
    this.rest.getUsers().subscribe(
      (response)=>
      {
          this.users=response;
      }
    );
  }
  userid:number=0;
  deleteMsg:string='';
  deleteuser(p:User): void {
    this.rest.deleteUser(p.id).subscribe(result=> {
      this.deleteMsg=result;
    },error=>console.log(error),()=> {
      this.loadAllProductDetails();
      
    });
    alert("User Deleted Successfully");
  }
  st:string='';
  addDiscount(p:Discount){
    this.newdisc={
      "did":Math.floor(Math.random() * 100000),
      "id":this.userid,
      "percentage":p.percentage,
      "image":p.image
    }
    console.log(this.newdisc);
    this.rest.addDiscount(this.newdisc).subscribe(result=> {
      //alert(result);
      this.st=result;
      
    });
    console.log(this.st);
    alert('discount added to the user');
    
  }
  userexist:boolean=false;
  addUser(){
    this.usr={
      "id":this.uid,
      "username":this.username,
      "email":this.email,
      "password":this.password,
      "phone":this.phone,
      "role":"Customer",
      "address":this.address

    }
    for(this.i=0;this.i<this.users.length;this.i++){
      if(this.users[this.i]["username"]==this.username && this.users[this.i]["password"]==this.password && this.users[this.i]["email"]==this.email){
        this.userexist=true;
        console.log("exit");
        break;
      }
      else{
        this.userexist=false;
      }
    }
    if(!this.userexist){
      this.userexist=false;
      console.log("new user details");
      console.log(this.usr);
      this.rest.registerUser(this.usr).subscribe(result=> {
        //alert(result);
        this.st=result;
      },error=>console.log(error),()=> {
        this.loadAllProductDetails()});
      
        console.log("user added Successfully");
    }

  }
  sal(){
    this.router.navigateByUrl('/salesreport');
  }
  
  upload(){
    this.router.navigateByUrl('/fileupload');
  }

}
