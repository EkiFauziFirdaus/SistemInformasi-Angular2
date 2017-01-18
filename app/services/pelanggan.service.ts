import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pelanggan } from '../models/pelanggan.model';
import { DaftarKeinginan } from '../models/daftar-keinginan.model';
import { DaftarPesanan } from '../models/daftar-pesanan.model';
import { ProdukPesanan  } from '../models/produk-pesanan.model'

@Injectable()
export class PelangganService{

  private apiUrl = '/api';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http){}

  //Error Handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getDetailPelanggan(email: string): Promise<Pelanggan> {
    return this.http.get(this.apiUrl+'/pelanggan/'+email).map((response: Response) => response.json()).toPromise().catch(this.handleError);
  }

  getDaftarKeinginanPelanggan(email: string): Promise<DaftarKeinginan[]>{
    return this.http.get(this.apiUrl+'/daftar-keinginan/'+email)
    .map(
      (response: Response) => {
        let daftarKeinginan = new Array<DaftarKeinginan>();
        let i : number;
        for (i=0;i<response.json().length;i++){
          daftarKeinginan.push(
            {
              id_daftar_keinginan : response.json()[i].id_daftar_keinginan,
              nama_produk : response.json()[i].kode_produk.nama_produk,
              kode_produk : response.json()[i].kode_produk.hargabarang[0].kode_produk,
              harga : response.json()[i].kode_produk.hargabarang[0].harga - (response.json()[i].kode_produk.hargabarang[0].harga*(response.json()[i].kode_produk.diskon[0].besar_diskon/100)),
              stok : response.json()[i].kode_produk.stok,
              gambar : response.json()[i].kode_produk.gambar,
              tanggal_terdaftar : response.json()[i].tanggal_terdaftar,
              email : response.json()[i].email
            }
          )
        }
        return daftarKeinginan;
      }
    ).toPromise().catch(this.handleError);
  }
  getDaftarPesananPelanggan(email: string) : Promise<DaftarPesanan[]>{
    return this.http.get(this.apiUrl+'/daftar-pesanan/'+email)
    .map(
      (response: Response) => {
        let daftarPesanan = new Array<DaftarPesanan>();
        let produkPesanan = new Array<ProdukPesanan>();
        let i : number;
        let j : number;
        for (i=0;i<response.json().length;i++){
          for (j=0;j<response.json()[i].barangpesanan.length;j++){
            produkPesanan.push(
              {
                kode_produk : response.json()[i].barangpesanan[j].kode_produk.kode_produk,
                nama_produk : response.json()[i].barangpesanan[j].kode_produk.nama_produk,
                harga: response.json()[i].barangpesanan[j].kode_produk.hargabarang[0].latest_harga,
                besar_diskon: response.json()[i].barangpesanan[j].kode_produk.diskon[0].latest_diskon,
                stok :response.json()[i].barangpesanan[j].kode_produk.stok,
                kuantitas :response.json()[i].barangpesanan[j].kuantitas,
                gambar :response.json()[i].barangpesanan[j].kode_produk.gambar
              }
            );
          }
          daftarPesanan.push(
            {
              kode_pesanan : response.json()[i].kode_pesanan,
              barangpesanan : produkPesanan,
              waktu_pesanan : response.json()[i].waktu_pesanan,
              email : response.json()[i].email,
              kode_pembayaran : response.json()[i].kode_pembayaran
            }
          );
          produkPesanan = [];
        }
        return daftarPesanan;
      }
    ).toPromise().catch(this.handleError);
  }

  addToWishlist(tanggal:string, kode_produk:string, email:string){
    return this.http
    .post(this.apiUrl+'/daftar-keinginan/post/'+email, JSON.stringify({tanggal_terdaftar: tanggal,kode_produk: kode_produk,email: email}),{headers: this.headers})
    .map((response: Response) => response.json());
  }
}
