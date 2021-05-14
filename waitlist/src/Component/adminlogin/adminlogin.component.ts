import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  registerForm: FormGroup;
  failure = false;
  hide=true;
  submitted = false;
  
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.\_\-])([a-zA-Z\.]+)$')]],
      password: ['',Validators.required]
    })
  }

  get f() { return this.registerForm.controls; }

  adminLogin(){
    if(this.f.email.value == 'admin@gmail.com' && this.f.password.value == 'Admin#1234'){
      this.router.navigate(['/Admin']);
      localStorage.setItem('userpic', '1');
            localStorage.setItem('userName', 'Admin');
            localStorage.setItem('isUser','true')
    }
    else{
      this.failure=true
    }
  }

}