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

import { AppComponent }  from './app.component';
import { ProdukComponent } from './components/produk.component';
import { DashboardComponent } from './components/dashboard.component';
import { DetailProdukComponent } from './components/detail-produk.component';

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
      }
    ]),
    CarouselModule,
    TabsModule,
    DropdownModule
  ],
  declarations: [
    AppComponent,
    ProdukComponent,
    DashboardComponent,
    DetailProdukComponent
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
