import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from 'src/components/navbar-component/navbar-component.component';

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
import { MyCardComponent } from 'src/components/my-card/my-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponent,
    BikesComponent,
    BikeDetailComponent,
    BikepartsComponent,
    BikepartDetailComponent,
    RentbikeComponent,
    RentbikeDetailComponent,
    CartComponent,
    AboutComponent,
    LoginComponent,
    AdminComponent,
    MyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
