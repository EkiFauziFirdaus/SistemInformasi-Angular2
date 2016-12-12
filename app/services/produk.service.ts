import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Produk } from '../models/produk.model';

@Injectable()
export class ProdukService{

  private apiUrl = 'app/produk';

  constructor(private http:Http){}

  //Error Handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getListProduk(): Promise<Produk[]> {
    return this.http.get(this.apiUrl).toPromise().then(response => response.json().data as Produk[]).catch(this.handleError);
  }

  getProduk(kodeProduk: string): Promise<Produk>{
    return this.getListProduk().then(listProduk => listProduk.find(produk => produk.kodeProduk===kodeProduk));
  }
}
