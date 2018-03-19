// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//   <h1>Universal Demo using Angular and Angular CLI</h1>
//   <a routerLink="/">Home</a>
//   <a routerLink="/lazy">Lazy</a>
//   <a routerLink="/lazy/nested">Lazy_Nested</a>
//   <router-outlet></router-outlet>
//   `,
//   styles: []
// })
// export class AppComponent {

// }

import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mobileQuery: MediaQueryList;

  // fillerNav = Array(50).fill(0).map((_, i) => `Nav Itemzxcvzxcvzxcv ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
