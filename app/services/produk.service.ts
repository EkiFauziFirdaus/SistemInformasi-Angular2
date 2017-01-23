import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Produk } from '../models/produk.model';
import { DetailProduk } from '../models/detail-produk.model'

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

  getProdukByKategori(kodeKategori: string): Promise<Produk[]>{
    return this.http.get(this.apiUrl+"/kategori/"+kodeKategori)
    .map(
      (response: Response) => { response.json()[0].daftarbarang

        let produkByKategori = new Array<Produk>();
        let i : number;
        for (i=0;i<response.json()[0].daftarbarang.length;i++){
          produkByKategori.push(
            {
              kode_produk : response.json()[0].daftarbarang[i].kode_produk.kode_produk,
              nama_produk : response.json()[0].daftarbarang[i].kode_produk.nama_produk,
              harga : response.json()[0].daftarbarang[i].kode_produk.hargabarang[0].harga,
              besar_diskon : response.json()[0].daftarbarang[i].kode_produk.diskon[0].besar_diskon,
              stok : response.json()[0].daftarbarang[i].kode_produk.stok,
              gambar : response.json()[0].daftarbarang[i].kode_produk.gambar
            }
          );
        }
        return produkByKategori;
      }
    ).toPromise().catch(this.handleError);
  }

  getProdukByMerek(kodeMerek: string): Promise<Produk[]>{
    return this.http.get(this.apiUrl+"/merek/"+kodeMerek)
    .map(
      (response: Response) => { response.json()[0].daftarbarang
        let produkByMerek = new Array<Produk>();
        let i : number;
        for (i=0;i<response.json()[0].produk.length;i++){
          produkByMerek.push(
            {
              kode_produk : response.json()[0].produk[i].kode_produk,
              nama_produk : response.json()[0].produk[i].nama_produk,
              harga : response.json()[0].produk[i].hargabarang[0].harga,
              besar_diskon : response.json()[0].produk[i].diskon[0].besar_diskon,
              stok : response.json()[0].produk[i].stok,
              gambar : response.json()[0].produk[i].gambar
            }
          );
        }
        return produkByMerek;
      }
    ).toPromise().catch(this.handleError);
  }

  getDetailProduk(kodeProduk: string): Promise<DetailProduk>{
    return this.http.get(this.apiUrl+'/kode-produk/'+kodeProduk)
    .map(
      (response: Response) => {
        let detailProduk = new DetailProduk();
        detailProduk.kode_produk = response.json()[0].kode_produk;
        detailProduk.hargabarang = response.json()[0].hargabarang[0].harga;
        detailProduk.besar_diskon = response.json()[0].diskon[0].besar_diskon;
        detailProduk.nama_produk = response.json()[0].nama_produk;
        detailProduk.material = response.json()[0].material;
        detailProduk.deskripsi_produk = response.json()[0].deskripsi_produk;
        detailProduk.negara_pemroduksi = response.json()[0].negara_pemroduksi;
        detailProduk.gambar = response.json()[0].gambar;
        detailProduk.stok = response.json()[0].stok;
        detailProduk.kode_merek = response.json()[0].kode_merek;

        return detailProduk;
      }
    ).toPromise().catch(this.handleError);
  }

  getProduk(kodeProduk: string): Promise<Produk>{
    return this.http.get(this.apiUrl+'/'+kodeProduk).map((response: Response) => response.json()).toPromise().catch(this.handleError);
  }
}
