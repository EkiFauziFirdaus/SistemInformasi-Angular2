import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Kategori } from '../models/kategori.model';

@Injectable()
export class KategoriService{

  private apiUrl = '/api/kategori';

  constructor(private http:Http){}

  //Error Handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getListKategori(): Promise<Kategori[]> {
    return this.http.get(this.apiUrl).map((response: Response) => response.json()).toPromise().catch(this.handleError);
  }
}
