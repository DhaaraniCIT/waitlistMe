import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  public basePy='http://localhost:5000';

  public version = 'V 0.0.1';
  public buildNumber = '1';
}
