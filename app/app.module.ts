import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }  from './app.component';
import { ProdukService } from './services/produk.service';
import { ProdukComponent } from './components/produk.component';
import { DashboardComponent } from './components/dashboard.component';
import { DetailProdukComponent } from './components/detail-produk.component';

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
      }
    ])
  ],
  declarations: [
    AppComponent,
    ProdukComponent,
    DashboardComponent,
    DetailProdukComponent
  ],
  providers: [
    ProdukService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
