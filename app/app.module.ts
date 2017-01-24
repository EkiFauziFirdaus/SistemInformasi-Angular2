
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { fakeBackendProvider } from './services/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

/*ng2-bootstrap component*/
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PopoverModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './components/dashboard.component';
import { DetailProdukComponent } from './components/detail-produk.component';
import { ProfilComponent } from './components/profil.component';
import { InformasiAkunComponent } from './components/informasi-akun.component';
import { DaftarKeinginanComponent } from './components/daftar-keinginan.component';
import { DaftarPesananComponent } from './components/daftar-pesanan.component';
import { RiwayatTransaksiComponent } from './components/riwayat-transaksi.component';
import { ListProdukComponent } from './components/list-produk.component';
import { ListProdukByKategoriComponent } from './components/list-produk-by-kategori.component';
import { ListProdukByMerekComponent } from './components/list-produk-by-merek.component';
import { PesananComponent } from './components/pesanan.component';
import { PembayaranComponent } from './components/pembayaran.component';

/*Services*/
import { ProdukService } from './services/produk.service';
import { MerekService } from './services/merek.service';
import { PelangganService } from './services/pelanggan.service';
import { KategoriService } from './services/kategori.service'

/*Fake Backend*/


@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'detail-produk/:kode_produk',
        component: DetailProdukComponent
      },
      {
        path:'',
        component: DashboardComponent
      },
      {
        path:'profil',
        component: ProfilComponent,
        children:
        [
          {path: '', redirectTo: 'akun-saya', pathMatch: 'full'},
          {path: 'akun-saya', component: InformasiAkunComponent},
          {path: 'daftar-keinginan', component: DaftarKeinginanComponent},
          {path: 'daftar-pesanan', component: DaftarPesananComponent},
          {path: 'riwayat-transaksi', component: RiwayatTransaksiComponent}
        ]
      },
      {
        path: 'list-produk',
        component : ListProdukComponent,
        children:
        [
          {path: '', redirectTo: 'kategori/:kode_kategori', pathMatch: 'full'},
          {path:'kategori/:kode_kategori', component: ListProdukByKategoriComponent},
          {path: 'merek/:kode_merek', component: ListProdukByMerekComponent}
        ]
      },
      {
        path: 'pesanan',
        component: PesananComponent
      },
      {
        path: 'pembayaran',
        component: PembayaranComponent
      }
    ]),
    TabsModule.forRoot(),
    DropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    PopoverModule.forRoot(),
    CarouselModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailProdukComponent,
    ProfilComponent,
    InformasiAkunComponent,
    DaftarKeinginanComponent,
    DaftarPesananComponent,
    RiwayatTransaksiComponent,
    ListProdukComponent,
    ListProdukByKategoriComponent,
    ListProdukByMerekComponent,
    PesananComponent,
    PembayaranComponent
  ],
  providers: [
    ProdukService,
    MerekService,
    KategoriService,
    PelangganService,
    fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        DatePipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
