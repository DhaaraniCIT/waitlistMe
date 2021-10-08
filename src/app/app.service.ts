import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApiService } from '../config/api.service';
import { ConfigService } from '../config/config.service';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient,private api:ApiService,private config:ConfigService) { }

  
}
