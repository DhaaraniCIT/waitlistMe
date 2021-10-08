import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isuserthere=false;
  img: string;
  name: string;
  link: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('isUser')=='true'){
      console.log('sss')
      this.isuserthere=true
      this.img = '../../assets/avarters/'+localStorage.getItem('userpic')+'.PNG'
      this.name = localStorage.getItem('userName')
      if(this.name != 'Admin'){
        this.link = '/'+this.name+'/home'
      }
      else{
        this.link = '/Admin'
      }
    }
  }

  //navigation to signup page
  signup(){
    this.router.navigate(['/signup'])
  }
}
