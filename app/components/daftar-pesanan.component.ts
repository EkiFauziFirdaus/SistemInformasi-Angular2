import { Component, OnInit } from '@angular/core';

import { PelangganService } from '../services/pelanggan.service';
import { DaftarPesanan } from '../models/daftar-pesanan.model';

@Component({
  selector: 'daftar-pesanan-component',
  moduleId: module.id,
  templateUrl: '../views/daftar-pesanan.component.html',
})

export class DaftarPesananComponent implements OnInit{

  daftarPesanan:DaftarPesanan[];

  constructor(private pelangganService: PelangganService){}

  ngOnInit(): void{
    this.getDaftarPesananPelanggan();
  }

  getDaftarPesananPelanggan(): void {
    this.pelangganService.getDaftarPesananPelanggan('cendzpm@gmail.com').then(daftarPesanan =>this.daftarPesanan = daftarPesanan);
  }
}
