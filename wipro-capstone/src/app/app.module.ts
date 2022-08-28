import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FurnitureComponent } from './Categories/furniture/furniture.component';
import { ElectronicsComponent } from './Categories/electronics/electronics.component';
import { BedsComponent } from './Categories/beds/beds.component';
import { ContactComponent } from './Categories/contact/contact.component';
import { GardenComponent } from './Categories/garden/garden.component';
import { CarpetsComponent } from './Categories/carpets/carpets.component';
import { FurnishingsComponent } from './Categories/furnishings/furnishings.component';
import { UsersessionComponent } from './usersession/usersession.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { SalesReportComponent } from './sales-report/sales-report.component';

import { SearchPipe } from './home/search.pipe';
import { MyordersComponent } from './myorders/myorders.component';
import { AdmindiscountComponent } from './admindiscount/admindiscount.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    RegisterComponent,
    WishlistComponent,
    CartComponent,
    FurnitureComponent,
    ElectronicsComponent,
    BedsComponent,
    ContactComponent,
    GardenComponent,
    CarpetsComponent,
    FurnishingsComponent,
    UsersessionComponent,
    AllproductsComponent,
    AdminproductComponent,
    DiscountsComponent,
    AdminusersComponent,
    FileuploadComponent,
    SalesReportComponent,
    SearchPipe,
    MyordersComponent,
    AdmindiscountComponent
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
