import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

/*ng2-bootstrap component*/
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }  from './app.component';
import { ProdukComponent } from './components/produk.component';
import { DashboardComponent } from './components/dashboard.component';
import { DetailProdukComponent } from './components/detail-produk.component';
import { ProfilComponent } from './components/profil.component';
import { InformasiAkunComponent } from './components/informasi-akun.component';
import { DaftarKeinginanComponent } from './components/daftar-keinginan.component';
import { DaftarPesananComponent } from './components/daftar-pesanan.component';
import { RiwayatTransaksiComponent } from './components/riwayat-transaksi.component';

/*Services*/
import { ProdukService } from './services/produk.service';
import { MerekService } from './services/merek.service';

@NgModule({
  imports:[
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'detailProduk/:kodeProduk',
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
          {path: '', redirectTo: 'akunSaya', pathMatch: 'full'},
          {path: 'akunSaya', component: InformasiAkunComponent},
          {path: 'daftarKeinginan', component: DaftarKeinginanComponent},
          {path: 'daftarPesanan', component: DaftarPesananComponent},
          {path: 'riwayatTransaksi', component: RiwayatTransaksiComponent}
        ]
      }
    ]),
    CarouselModule,
    TabsModule,
    DropdownModule,
    CollapseModule
  ],
  declarations: [
    AppComponent,
    ProdukComponent,
    DashboardComponent,
    DetailProdukComponent,
    ProfilComponent,
    InformasiAkunComponent,
    DaftarKeinginanComponent,
    DaftarPesananComponent,
    RiwayatTransaksiComponent
  ],
  providers: [
    ProdukService,
    MerekService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
