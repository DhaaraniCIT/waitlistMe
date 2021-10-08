import { Injectable } from '@angular/core';
import { ApiService } from "../../config/api.service";
import { ConfigService } from "../../config/config.service";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private apiService: ApiService, private configService: ConfigService) { }

  //login
  login(email: string, password: string){
    return this.apiService.post(this.configService.loginUrl,{email,password});
  }

  //Normal Signup
  signup(data){
    return this.apiService.post(this.configService.signupUrl,data);
  }

  //Generate Captcha for signUp
  captcha(){
    return this.apiService.get(this.configService.getCaptchaUrl);
  }

  //signup by referal URL
  referalSignup(data){
    return this.apiService.post(this.configService.referUrl,data);
  }

  //get all user
  userlist(){
    return this.apiService.get(this.configService.viewallUrl);
  }

  //get user by id
  userById(id){
    return this.apiService.get(this.configService.viewabyidUrl+'/'+id)
  }

  //get refered user list by id
  userrefer(id){
    return this.apiService.get(this.configService.viewabyidUrl+'/'+id+'/referance')
  }

  //Delete user
  userDelete(id){
    return this.apiService.delete(this.configService.deleteUrl+'/'+id)
  }

  //Edit user
  userEdit(id,data){
    return this.apiService.put(this.configService.editUrl+'/'+id,data)
  }

  //sending mail to user when he/she reaches 1st position
  mailService(id){
    return this.apiService.post(this.configService.mailUrl,id)
  }

}
