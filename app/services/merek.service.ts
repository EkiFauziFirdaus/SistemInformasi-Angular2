import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Merek } from '../models/merek.model';

@Injectable()
export class MerekService{

  private apiUrl = '/api/merek';

  constructor(private http:Http){}

  //Error Handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getListMerek(): Promise<Merek[]> {
    return this.http.get(this.apiUrl).map((response: Response) => response.json()).toPromise().catch(this.handleError);
  }
}
