import { Component, OnInit } from '@angular/core';

import { MerekService } from './services/merek.service';
import { Merek } from './models/merek.model';
import { KategoriService } from './services/kategori.service';
import { Kategori } from './models/kategori.model';

@Component({
  selector: 'jtk-online-store',
  template:
  `
  <div class="container">

  <!--NAVIGATION BAR-->
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" (click)="isCollapsed = !isCollapsed" >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" [routerLink]="['']">{{title}}</a>
      </div>

      <div id="navbar" class="navbar-collapse collapse" [collapse]="isCollapsed">

            <ul class="nav navbar-nav navbar-right">

            <div class="col-md-8" style="padding-top:8px">
            <form action="" class="search-form">
                <div class="form-group has-feedback">
                <label for="search" class="sr-only">Search</label>
                <input type="text" class="form-control" name="search" id="search" placeholder="search">
                  <span class="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
            </form>
            </div>
          <div class="btn-group" dropdown keyboardNav="true">
            <button id="menu" type="button" class="btn btn-default navbar-btn" dropdownToggle>Menu <span class="caret"></span></button>
              <ul class="dropdown-menu" dropdownMenu role="menu" aria-labelledby="menu">
                <li role="menuitem"><a class="dropdown-item" [routerLink]="['/profil']">Profil</a></li>
                <li role="menuitem"><a class="dropdown-item" [routerLink]="['/profil/daftar-keinginan']">Keinginan</a></li>
                <li role="menuitem"><a class="dropdown-item" [routerLink]="['/profil/daftar-pesanan']">Pesanan</a></li>
              </ul>
          </div>
        </ul>
        <button type="button" class="btn btn-default navbar-btn" (click)="isCollapsedCollapse = !isCollapsedCollapse"><span class="caret"></span></button>
        <div [collapse]="isCollapsedCollapse" class="card card-block card-header">
          <div class="well well-lg">
            <div class="row">
              <div class="col-sm-6">
                <a *ngFor="let kategori of listKategori" [routerLink]="['/list-produk/kategori',kategori.kode_kategori]" (click)="isCollapsedCollapse = !isCollapsedCollapse">
                  <div class="col-md-2">
                    <label>{{kategori.nama_kategori}}</label>
                  </div>
                </a>
              </div>
              <div class="col-sm-6">
                <a *ngFor="let merek of listMerek" [routerLink]="['/list-produk/merek',merek.kode_merek]" (click)="isCollapsedCollapse = !isCollapsedCollapse">
                  <div class="col-md-2">
                    <label>{{merek.nama_merek}}</label>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!--ROUTER OUTLET-->
  <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['/app/views/search.css']
})
export class AppComponent implements OnInit{

  title = 'Jtk Online Store';
  public isCollapsed:boolean = false;
  public isCollapsedCollapse:boolean = true;

  constructor(
    private merekService: MerekService,
    private kategoriService : KategoriService
  ){}

  ngOnInit():void{
    this.getListMerek();
    this.getListKategori();
  }
  public listMerek: Merek[];

  public getListMerek():void{
    this.merekService.getListMerek().then(listMerek =>this.listMerek = listMerek);
  }

  public listKategori: Kategori[];

  public getListKategori():void{
    this.kategoriService.getListKategori().then(listKategori =>this.listKategori = listKategori);
  }
}
