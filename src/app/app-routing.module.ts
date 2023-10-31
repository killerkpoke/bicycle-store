import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '', redirectTo:'home', pathMatch:'full'},
  // {path: 'home', component:},

  // {path: 'bikes', component:},
  // {path: 'bike/:id', component:},

  // {path: 'rentbike', component:},
  // {path: 'rentbike/:bikename', component:},

  // {path: 'bikeparts', component:},
  // {path: 'bikepart/:partname', component:},

  // {path: 'cart', component:},
  // {path: 'about', component:},

  // {path: 'login', component:},
  // {path: 'admin', component:},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
