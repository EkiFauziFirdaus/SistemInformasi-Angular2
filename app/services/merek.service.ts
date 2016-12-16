import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Merek } from '../models/merek.model';

@Injectable()
export class MerekService{

  private apiUrl = 'app/merek';

  constructor(private http:Http){}

  //Error Handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getListMerek(): Promise<Merek[]> {
    return this.http.get(this.apiUrl).toPromise().then(response => response.json().data as Merek[]).catch(this.handleError);
  }
}
