import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './Categories/product';
import { RestService } from './rest.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wipro-capstone';
  constructor(private rest:RestService){}

  public searchInput:string='';

  public programmingLanguages = [
    'Python','TypeScript','C','C++','Java',
    'Go','JavaScript','PHP','Ruby','Swift','Kotlin'
 ]
 

 @Output()
 searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

 onSearchTextChanged(){
   this.searchTextChanged.emit(this.searchInput);
 }
  
 
 
  

  
  
}
