import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { BikesComponent } from 'src/components/bikes/bikes.component';
import { BikeDetailComponent } from 'src/components/bike-detail/bike-detail.component';
import { BikepartsComponent } from 'src/components/bikeparts/bikeparts.component';
import { BikepartDetailComponent } from 'src/components/bikepart-detail/bikepart-detail.component';
import { RentbikeComponent } from 'src/components/rentbike/rentbike.component';
import { RentbikeDetailComponent } from 'src/components/rentbike-detail/rentbike-detail.component';
import { CartComponent } from 'src/components/cart/cart.component';
import { AboutComponent } from 'src/components/about/about.component';
import { LoginComponent } from 'src/components/login/login.component';
import { AdminComponent } from 'src/components/admin/admin.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'bikes', component: BikesComponent},
  {path: 'bikes/:id', component: BikeDetailComponent},
  {path: 'rentbike', component: RentbikeComponent},
  {path: 'rentbike/:bikename', component: RentbikeDetailComponent},
  {path: 'bikeparts', component: BikepartsComponent},
  {path: 'bikeparts/:partname', component: BikepartDetailComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
