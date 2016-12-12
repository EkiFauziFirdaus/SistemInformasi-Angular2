import { Component,OnInit } from '@angular/core';

import { ProdukService } from '../services/produk.service';
import { Produk } from '../models/produk.model';

@Component({
  selector: 'produk-component',
  moduleId: module.id,
  templateUrl: '../views/produk.component.html'
})

export class ProdukComponent implements OnInit  {

  title = 'List Produk';
  listProduk : Produk[];
  selectedProduk : Produk;

  constructor(private produkService: ProdukService){}

  ngOnInit(): void {
    this.getlistProduk();
  }

  getlistProduk(): void{
    this.produkService.getListProduk().then(listProduk =>this.listProduk = listProduk);
  }

  onSelect(produk: Produk): void{
    this.selectedProduk = produk;
  }
}
