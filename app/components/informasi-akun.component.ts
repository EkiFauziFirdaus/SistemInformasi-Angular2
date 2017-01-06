import { Component,OnInit } from '@angular/core';

import { PelangganService } from '../services/pelanggan.service';
import { Pelanggan } from '../models/pelanggan.model';

@Component({
  selector: 'informasi-akun-component',
  moduleId: module.id,
  templateUrl: '../views/informasi-akun.component.html',
})

export class InformasiAkunComponent implements OnInit{

  pelanggan:Pelanggan;

  constructor(private pelangganService: PelangganService){}

  ngOnInit(): void{
    this.getDetailPelanggan();
  }

  getDetailPelanggan(): void{
    this.pelangganService.getDetailPelanggan('cendzpm@gmail.com').then(pelanggan =>this.pelanggan = pelanggan);
  }
}
