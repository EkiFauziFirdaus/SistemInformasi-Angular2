import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';

import { DetailProduk } from '../models/detail-produk.model';
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
  harga : number;

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
      }
    );
  }
  goBack(): void {
    this.location.back();
  }

  addToWishlist(kode_produk: string, email:string): void{
    this.pelangganService.addToWishlist(this.datePipe.transform(Date.now(),'yyyy-mm-dd H:m:s'),kode_produk,email);
  }
}
