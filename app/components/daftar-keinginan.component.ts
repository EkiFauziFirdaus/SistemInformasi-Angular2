import { Component, OnInit } from '@angular/core';

import { PelangganService } from '../services/pelanggan.service';
import { DaftarKeinginan } from '../models/daftar-keinginan.model';

@Component({
  selector: 'daftar-keinginan-component',
  moduleId: module.id,
  templateUrl: '../views/daftar-keinginan.component.html',
})

export class DaftarKeinginanComponent implements OnInit{

  daftarKeinginan:DaftarKeinginan[];

  constructor(private pelangganService: PelangganService){}

  ngOnInit(): void{
    this.getDaftarKeinginanPelanggan();
  }

  getDaftarKeinginanPelanggan(): void {
    this.pelangganService.getDaftarKeinginanPelanggan('cendzpm@gmail.com').then(daftarKeinginan =>this.daftarKeinginan = daftarKeinginan);
  }
}
