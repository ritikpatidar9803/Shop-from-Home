import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindiscountComponent } from './admindiscount/admindiscount.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { CartComponent } from './cart/cart.component';
import { BedsComponent } from './Categories/beds/beds.component';
import { CarpetsComponent } from './Categories/carpets/carpets.component';
import { ContactComponent } from './Categories/contact/contact.component';
import { ElectronicsComponent } from './Categories/electronics/electronics.component';
import { FurnishingsComponent } from './Categories/furnishings/furnishings.component';
import { FurnitureComponent } from './Categories/furniture/furniture.component';
import { GardenComponent } from './Categories/garden/garden.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { HomeComponent } from './home/home.component';
import { MyordersComponent } from './myorders/myorders.component';
import { RegisterComponent } from './register/register.component';
import { SalesReportComponent } from './sales-report/sales-report.component';

import { SigninComponent } from './signin/signin.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'register',component:RegisterComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'cart',component:CartComponent},
  {path:'beds',component:BedsComponent},
  {path:'carpet',component:CarpetsComponent},
  {path:'furniture',component:FurnitureComponent},
  {path:'furnishings',component:FurnishingsComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'contact',component:ContactComponent},
  {path:'garden',component:GardenComponent},
  {path:'admincrud',component:AllproductsComponent},
  {path:'newproduct',component:AdminproductComponent},
  {path:'discount',component:DiscountsComponent},
  {path:'fileupload',component:FileuploadComponent},
  {path:'adminusers',component:AdminusersComponent},
  {path:'myorders',component:MyordersComponent},
  {path:'admindiscount',component:AdmindiscountComponent},
  {path:'salesreport',component:SalesReportComponent},
  {path:'',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
