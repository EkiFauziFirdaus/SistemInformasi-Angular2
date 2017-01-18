import { Component, OnInit } from '@angular/core';

import { PelangganService } from '../services/pelanggan.service';
import { DaftarPesanan } from '../models/daftar-pesanan.model';

@Component({
  selector: 'pesanan-component',
  moduleId: module.id,
  templateUrl: '../views/pesanan.component.html',
})

export class PesananComponent implements OnInit{

  daftarPesanan:DaftarPesanan[];

  constructor(private pelangganService: PelangganService){}

  ngOnInit(): void{
    this.getDaftarPesananPelanggan();
  }

  getDaftarPesananPelanggan(): void {
    this.pelangganService.getDaftarPesananPelanggan('cendzpm@gmail.com').then(daftarPesanan =>this.daftarPesanan = daftarPesanan);
  }
}
