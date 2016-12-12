import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Produk } from '../models/produk.model';
import { ProdukService } from '../services/produk.service'

@Component({
  selector: 'detail-produk-component',
  moduleId: module.id,
  templateUrl: '../views/detail-produk.component.html'
})

export class DetailProdukComponent implements OnInit{
  title = 'Detail Produk';

  @Input()
  produk: Produk;

  constructor(
    private produkService: ProdukService,
    private route: ActivatedRoute,
    private location: Location) {}


  ngOnInit():void{
    this.route.params
    .switchMap((params:Params) => this.produkService.getProduk(params['kodeProduk']))
    .subscribe(produk => this.produk = produk);
  }
  goBack(): void {
    this.location.back();
  }
}
