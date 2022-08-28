import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Email } from 'src/app/email';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router,private rest:RestService) { }
  username:string='';
  subject:string='';
  body:string='';
  success:boolean=true;
  onclick:boolean=false;
  ema!:Email;
  st:string=''
  contact(){
    this.ema={
      "recipient":this.username,
      "msgBody":this.body,
      "subject":this.subject
      
    }
    console.log(this.ema);
    this.rest.sendemail(this.ema).subscribe(
      (response)=>
      {
          this.st=response;
      }
    );
    alert('Mail was sent');
    // this.router.navigateByUrl('/home');

  }
  ngOnInit(): void {
  }

}
