import { Component, OnInit } from '@angular/core';

import { ProdukService } from '../services/produk.service';
import { Produk } from '../models/produk.model';
import { MerekService } from '../services/merek.service';
import { Merek } from '../models/merek.model';

@Component({
  selector: 'dashboard-component',
  moduleId: module.id,
  templateUrl: '../views/dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  title = 'Dashboard';

  constructor(
    private produkService: ProdukService,
    private merekService: MerekService
  ){}

  ngOnInit():void{
    this.addSlide();
    this.getListMerek();
  }

  /*CAROUSEL SECTION START*/
  public carouselInterval:number = 3000;
  public noWrapSlides:boolean = false;
  public slideProduk: Produk[];

  public addSlide():void{
    this.produkService.getListProduk().then(slideProduk =>this.slideProduk = slideProduk);
  }
  /*CAROUSEL SECTION END*/

  /*GAMBAR MEREK SECTION START*/
  public listMerek: Merek[];

  public getListMerek():void{
    this.merekService.getListMerek().then(listMerek =>this.listMerek = listMerek);
  }
  /*GAMBAR MEREK SECTION END*/
}
