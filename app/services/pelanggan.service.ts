import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pelanggan } from '../models/pelanggan.model';

@Injectable()
export class PelangganService{

  private apiUrl = '/api/pelanggan';

  constructor(private http:Http){}

  //Error Handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getDetailPelanggan(email: string): Promise<Pelanggan> {
    return this.http.get(this.apiUrl+'/'+email).map((response: Response) => response.json()).toPromise().catch(this.handleError);
  }
}
