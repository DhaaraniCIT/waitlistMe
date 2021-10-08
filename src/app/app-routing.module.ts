import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

import { HomePageComponent } from '../Component/home-page/home-page.component';
import { SignupComponent } from "../Component/signup/signup.component";
import { LoginComponent } from "../Component/login/login.component";
import { AdminloginComponent } from "../Component/adminlogin/adminlogin.component";
import { AdminComponent } from "../Component/admin/admin.component";
import { UserComponent  } from "../Component/user/user.component";

const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'Adminsignin', component: AdminloginComponent },
  { path: 'Admin', component: AdminComponent },
  { path: ':userName/home', component: UserComponent },
  { path: 'signup/:userName/:token', component: SignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),  ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
