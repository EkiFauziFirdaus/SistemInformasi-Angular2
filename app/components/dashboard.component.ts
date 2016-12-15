import { Component, OnInit } from '@angular/core';

import { ProdukService } from '../services/produk.service';
import { Produk } from '../models/produk.model';

@Component({
  selector: 'dashboard-component',
  moduleId: module.id,
  templateUrl: '../views/dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  title = 'Dashboard';

  constructor(private produkService: ProdukService){}

  ngOnInit():void{
    this.addSlide();
  }

  /*CAROUSEL SECTION START*/
  public carouselInterval:number = 3000;
  public noWrapSlides:boolean = false;
  public slideProduk: Produk[];

  public addSlide():void{
    this.produkService.getListProduk().then(slideProduk =>this.slideProduk = slideProduk);
  }
  /*CAROUSEL SECTION END*/
}
