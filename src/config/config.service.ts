import { Injectable } from '@angular/core';
import { SharedService } from 'src/shared/shared.service'


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor( private restapi: SharedService ) { }

  //login API
  private loginURL = this.restapi.basePy+'/login';
  get loginUrl(): string{ return this.loginURL}

  //Normal Signup API
  private signupURL = this.restapi.basePy+'/signup';
  get signupUrl(): string{ return this.signupURL}

  //Referal SignUp API
  private referURL = this.restapi.basePy+'/refer';
  get referUrl(): string{ return this.referURL}

  // private userURL = this.restapi.basePy+'/user';
  // get userUrl(): string{ return this.userURL}

  //Getting All the users of waitlist API
  private viewallURL = this.restapi.basePy+'/viewall';
  get viewallUrl(): string{ return this.viewallURL}

  //Deleting user API
  private deleteURL = this.restapi.basePy+'/delete';
  get deleteUrl(): string{ return this.deleteURL}

  //editing user API
  private editURL = this.restapi.basePy+'/edit';
  get editUrl(): string{ return this.editURL}

  //usere info by id API
  private viewbyidURL = this.restapi.basePy+'/view';
  get viewabyidUrl(): string{ return this.viewbyidURL}

  //Get captcha API
  private getCaptchaURL = this.restapi.basePy+'/captcha';
  get getCaptchaUrl():string{ return this.getCaptchaURL }

  //Mail thorough nodeJS API
  private mailURL = 'http://localhost:3100/email';
  get mailUrl(): string{ return this.mailURL }
}
