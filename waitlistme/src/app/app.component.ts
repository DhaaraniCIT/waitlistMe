import { Component, OnInit,HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from "../app/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Api-ex';
  pro: any = 1;
  from:any;
  to:any;
  max: any;
  figure:any;
  diffDays: number =0;
  Qr:any;
  Bc: any;
  Otp: any;
  Cap: any;
  ed:any;
  Md:any;
  articles: any;
  constructor(private apiService: AppService) { }
  ngOnInit(): void {

  }

}

