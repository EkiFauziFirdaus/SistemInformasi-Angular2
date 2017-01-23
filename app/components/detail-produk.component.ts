import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';

import { DetailProduk } from '../models/detail-produk.model';
import { DaftarPesanan } from '../models/daftar-pesanan.model';
import { ProdukService } from '../services/produk.service';
import { PelangganService } from '../services/pelanggan.service';

@Component({
  selector: 'detail-produk-component',
  moduleId: module.id,
  templateUrl: '../views/detail-produk.component.html'
})

export class DetailProdukComponent implements OnInit{
  title = 'Detail Produk';

  detailProduk: DetailProduk;
  daftarPesanan:DaftarPesanan[];
  kodePesanan : string;
  harga : number;
  numbers = new Array<number>();
  selectedValue : number;

  constructor(
    private produkService: ProdukService,
    private pelangganService: PelangganService,
    private route: ActivatedRoute,
    private location: Location,
    private datePipe: DatePipe) {}


  ngOnInit():void{
    this.produkService.getDetailProduk(this.route.snapshot.params['kode_produk'])
    .then(
      detailProduk => {
        this.detailProduk = detailProduk;
        this.harga = detailProduk.hargabarang - (detailProduk.hargabarang*(detailProduk.besar_diskon/100));
        let i:number;
        for (i=0;i<detailProduk.stok;i++){
          this.numbers.push(i+1);
        }
      }
    );
    this.pelangganService.getDaftarPesananPelanggan('cendzpm@gmail.com').then(daftarPesanan =>{this.daftarPesanan = daftarPesanan; this.kodePesanan = this.daftarPesanan[0].kode_pesanan});
  }
  goBack(): void {
    this.location.back();
  }

  addToWishlist(kode_produk: string, email:string): void{
    this.pelangganService.addToWishlist(this.datePipe.transform(Date.now(),'yyyy-mm-dd H:m:s'),kode_produk,email);
  }

  addToCart(kuantitas: number, kodeProduk: string): void{
    this.pelangganService.addToCart(kuantitas,kodeProduk,this.kodePesanan);
  }
}
