import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';
declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  failure: any;
  errmsg: any;
  count: any;
  isPresent: boolean;
  isloaded=false
  errisSend=false
  isSend=false
  viewId=false
  adminscreen=true
  editForm: FormGroup;
  useredit: any;
  edited=false;
  clicked: boolean;
  msg: any;
  user=[];
  deleteId: any;
  deleteuser: any;

  constructor(private formBuilder:FormBuilder,private router:Router,private apiservice:AdminService) { }

  ngOnInit(): void {
    this.users();
    this.editForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.\_\-])([a-zA-Z\.]+)$')]],
    })
  }

  get f() { return this.editForm.controls; }

  //get all the user
  users(){
    this.apiservice.userlist().subscribe(
      result=>{
        this.isloaded = true
        if(result.data){
          this.user=result.data
          this.count = this.user.length
          if(this.count>0){
            this.isPresent = true
            for(let i=0;i<this.count;i++){
              if(this.user[i].referalId==0){
                this.user[i].referalId = 'Self'
              }
              else{
                for(let j=0;j<this.count;j++){
                  if(this.user[i].referalId == this.user[j].userId){
                    this.user[i].referalId = this.user[j].name
                  }
                }
                
              }
            }
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

  //delete user
  delete(user){
    this.deleteId = user.userId
    this.deleteuser = user.name
  }

  conformDelete(){
    this.apiservice.userDelete(this.deleteId).subscribe(
      result=>{
        if(result.data){
          this.isSend=true
          this.errisSend =false
          // $("#delete").modal('show');
          this.users()
        }
        else{
          this.errisSend=true
          this.isSend=false
          // $("#delete").modal('show');
        }
      }
    )
  }
  //edit user
  edit(id){
    this.useredit = id.userId
    this.editForm.patchValue({
      email:id.email,
    })
  }

  edituser(){
    let data={
      email:this.f.email.value
    }

    this.apiservice.userEdit(this.useredit,data).subscribe(
      result=>{
        this.clicked=false
        if(result.data){
          this.edited=true
          this.msg = result.data
          this.users()
        }
        else{
          this.edited=true
          this.msg=result.error
        }
      }
    )
  }

  //view user by id
  viewById(id){
    localStorage.setItem('userId',id)
    this.viewId = true
    this.adminscreen=false
  }


  //navigate back to admin screen form user screen
  backtoAdmin(){
    this.viewId = false
    this.adminscreen=true
  }

  //logout
  logOut(){
    window.sessionStorage.clear();
      localStorage.clear();
      window.location.assign('/');
  }
}
