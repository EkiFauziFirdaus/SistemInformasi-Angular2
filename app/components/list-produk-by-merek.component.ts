import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Produk } from '../models/produk.model';
import { ProdukService } from '../services/produk.service'

@Component({
  selector: 'list-produk-by-kategori-component',
  moduleId: module.id,
  templateUrl: '../views/produk.component.html'
})

export class ListProdukByMerekComponent implements OnInit{

  listProduk: Produk[];
  harga : number;
  sub : any;

  constructor(
    private produkService: ProdukService,
    private route: ActivatedRoute) {}


  ngOnInit():void{
    this.sub = this.route.params.subscribe(params => {
       const term = params['kode_merek'];
       console.log(term);
       this.produkService.getProdukByMerek(term).then(listProduk =>this.listProduk = listProduk);
     });
  }
}
