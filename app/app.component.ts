import { Component } from '@angular/core';

@Component({
  selector: 'jtk-online-store',
  template:
  `
  <div class="container">

  <!--NAVIGATION BAR-->
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" [routerLink]="['']">{{title}}</a>
      </div>
        <ul class="nav navbar-nav navbar-right">
            <div class="btn-group" dropdown keyboardNav="true">
              <button id="menu" type="button" class="btn btn-default navbar-btn" dropdownToggle>Menu <span class="caret"></span></button>
              <ul class="dropdown-menu" dropdownMenu role="menu" aria-labelledby="menu">
                <li role="menuitem"><a class="dropdown-item" [routerLink]="['/profil']">Profil</a></li>
                <li role="menuitem"><a class="dropdown-item" [routerLink]="['/profil/daftarKeinginan']">Keinginan</a></li>
                <li role="menuitem"><a class="dropdown-item" [routerLink]="['/profil/daftarPesanan']">Pesanan</a></li>
              </ul>
            </div>
        </ul>
    </div>
  </nav>

  <!--ROUTER OUTLET-->
  <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent  {
  title = 'Jtk Online Store';
}
