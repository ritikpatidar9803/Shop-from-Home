import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { User } from '../user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }
  success:boolean=false;
  username:string="";
  password:string="";
  onclick:boolean=false;
  user!:User;
  users:User[]=[];
  i:number=0;
  ngOnInit(): void {
    this.success=this.rest.getMessage();
    this.rest.getUsers().subscribe(
      (response)=>
      {
          this.users=response;
      }
    );
  }
  login(){
    this.onclick=true;
    for(this.i=0;this.i<this.users.length;this.i++){
      if((this.users[this.i]["username"]==this.username) && (this.users[this.i]["password"]==this.password)){
        this.success=true;
        console.log("success");
        this.rest.setMessage(true);
        console.log(this.success);
        this.rest.setUserLoggedIn(this.i);
        this.user={
          "id":this.users[this.i]["id"],
          "username":this.users[this.i]["username"],
          "password":this.users[this.i]["password"],
          "email":this.users[this.i]["email"],
          "phone":this.users[this.i]["phone"],
          
          "role":this.users[this.i]["role"],
          "address":this.users[this.i]["address"],
          
        }
        this.rest.setLoggedinuserDetails(this.user);
        alert("Login successful");
        // this.rest.setLoginorLogout('Logout');
        this.router.navigateByUrl('/home');
        break;
      }
      else{
        this.rest.setMessage(false);
        console.log(this.success);
      }
    }
  }

}
