import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { PelangganService } from '../services/pelanggan.service';
import { DaftarPesanan } from '../models/daftar-pesanan.model';

@Component({
  selector: 'pesanan-component',
  moduleId: module.id,
  templateUrl: '../views/pesanan.component.html',
})

export class PesananComponent implements OnInit{

  daftarPesanan:DaftarPesanan[];
  totalBelanja: number;

  constructor(private pelangganService: PelangganService, private location:Location){}

  ngOnInit(): void{
    this.getDaftarPesananPelanggan();
  }

  getDaftarPesananPelanggan(): void {
    this.pelangganService.getDaftarPesananPelanggan('cendzpm@gmail.com').then(daftarPesanan =>this.daftarPesanan = daftarPesanan);
  }
  goBack(): void {
    this.location.back();
  }
}
