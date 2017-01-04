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
        <button type="button" class="navbar-toggle collapsed" (click)="isCollapsed = !isCollapsed" >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" [routerLink]="['']">{{title}}</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse" [collapse]="isCollapsed">
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
    </div>
  </nav>

  <!--ROUTER OUTLET-->
  <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent  {
  title = 'Jtk Online Store';
  public isCollapsed:boolean = false;
}
