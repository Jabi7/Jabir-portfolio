import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'creative-portfolio';
  faCoffee = faCoffee;
  constructor(public router: Router, private analytics: AngularFireAnalytics) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.analytics.logEvent('page_view', { page_path: event.urlAfterRedirects });
      }
    });
  }
}
