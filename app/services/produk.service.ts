import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Produk } from '../models/produk.model';

@Injectable()
export class ProdukService{

  private apiUrl = '/api/produk';

  constructor(private http:Http){}

  //Error Handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getListProduk(): Promise<Produk[]> {
    return this.http.get(this.apiUrl).map((response: Response) => response.json()).toPromise().catch(this.handleError);
  }

  getProduk(kodeProduk: string): Promise<Produk>{
    //return this.getListProduk().then(listProduk => listProduk.find(produk => produk.kodeProduk===kodeProduk));
    return this.http.get(this.apiUrl+'/'+kodeProduk).map((response: Response) => response.json()).toPromise().catch(this.handleError);

  }
}
