import { Component } from '@angular/core';

@Component({
  selector: 'jtk-online-store',
  template:
  `
  <div class="container">
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent  {
  title = 'Jtk Online Store';
}
