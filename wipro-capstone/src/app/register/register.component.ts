import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }
  users!:User[];
  id:number=0;
  username:string="";
  password:string="";
  phone:string="";
  Email:string="";
  onClick:boolean=false;
  address:string="";
  role:string="Customer";
  
  user!:User;
  i:number=0;
  nusers:number=0;
  success:boolean=false;
  userexist:boolean=false;
  st:string='';
  ngOnInit(): void {
    this.rest.getUsers().subscribe((data)=>{
      this.users=data;
      console.log(this.users);
      this.nusers=this.users.length;
      console.log(this.users.length);
      console.log("length of users is"+this.nusers);
      this.success=this.rest.getMessage();
    })
  }
  register(){
    this.onClick=true;
    this.user={
      "id":Math.floor(Math.random() * 100000),
      "username":this.username,
      "email":this.Email,
      "password":this.password,
      "phone":this.phone,
      "role":"Customer",
      "address":this.address
      
    }

    for(this.i=0;this.i<this.users.length;this.i++){
      console.log(this.nusers ,this.users.length)
      if(this.users[this.i]["username"]==this.username && this.users[this.i]["password"]==this.password && this.users[this.i]["email"]==this.Email){
        this.userexist=true;
        console.log("exit");
        break;
      }
      else{
        this.userexist=false;
      }
    }
    console.log(this.userexist);
    if(!this.userexist){
      this.userexist=false;
      console.log("new user details");
      console.log(this.user);
      this.rest.registerUser(this.user).subscribe(result=> {
        //alert(result);
        this.st=result;
      });
      alert('Registration successful')
      this.router.navigateByUrl("signin");
    }
}
logout(){
  this.rest.setMessage(false);
  alert("Logout successful")
  this.router.navigateByUrl('/signin');

}
}
