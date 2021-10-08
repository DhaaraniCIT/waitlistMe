import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  errmsg: any;
  img: string;
  referal: any;
  rneeded: number;
  per: number;
  refer: any;
  refered=[];
  failure: any;
  users:any
  isPresent:any
  loaded = false
  constructor(private router:Router,private apiservice:AdminService) {
    
   }
  
  ngOnInit(): void {
    this.userById()
  }

  //get user info by id
  userById(){
    let id = localStorage.getItem('userId')
    this.apiservice.userById(id).subscribe(
      result=>{
        if(result.data){
          this.users = result.data
          this.img='../../assets/avarters/'+this.users.profilePicture+'.PNG'
          this.referal = this.users.inital - this.users.position
          this.rneeded = this.users.inital-this.referal
          this.errmsg = false
          this.referedUsers(id)
        }
        else{
          this.errmsg = true
        }
      }
    )
  }

  //refered user list by user
  referedUsers(id){
    this.apiservice.userrefer(id).subscribe(
      result=>{
        if(result.data){
          this.refered = result.data
          let len = this.refered.length
          this.loaded = true
          if(len>0){
            this.isPresent=true
          }
            else{
              this.isPresent = false
            }
          }
          else{
            this.isPresent = false
            this.failure = this.failure
            this.errmsg=result.error
          }
      }
    )
  }

  logOut(){
    window.sessionStorage.clear();
      localStorage.clear();
      window.location.assign('/');
      // localStorage.setItem('isUser','false')
  }
  
  //percent of completion
  bindcamp(referal){
    let total = 98 + this.users.userId
    this.per = referal/total
    this.per = this.per*100
    return this.per+'%'
  }

}
