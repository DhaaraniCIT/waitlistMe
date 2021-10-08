import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from 'src/config/api.service';
import { ConfigService } from 'src/config/config.service';
import { SharedService } from 'src/shared/shared.service';
import { AppInterceptor } from './app.interceptor';
import { HomePageComponent } from '../Component/home-page/home-page.component';
import { SignupComponent } from "../Component/signup/signup.component";
import { LoginComponent } from "../Component/login/login.component";
import { AdminloginComponent } from "../Component/adminlogin/adminlogin.component";
import { AdminComponent } from "../Component/admin/admin.component";
import { UserComponent  } from "../Component/user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    AdminloginComponent,
    UserComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
  ],
  providers: [
    ApiService,
    ConfigService,
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
