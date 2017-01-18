import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Merek } from '../models/merek.model';
import { MerekService } from '../services/merek.service';
import { Kategori } from '../models/kategori.model';
import { KategoriService } from '../services/kategori.service';

@Component({
  selector: 'list-produk-component',
  moduleId: module.id,
  templateUrl: '../views/list-produk.component.html',
})
export class ListProdukComponent implements OnInit{

  public listMerek: Merek[];
  public listKategori: Kategori[];

  public getListMerek():void{
    this.merekService.getListMerek().then(listMerek =>this.listMerek = listMerek);
  }

  public getListKategori():void{
    this.kategoriService.getListKategori().then(listKategori =>this.listKategori = listKategori);
  }

  constructor(
    private kategoriService: KategoriService,
    private merekService: MerekService,
  ){}

  ngOnInit():void{

    this.getListMerek();
    this.getListKategori();
  }
}
