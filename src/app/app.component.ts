import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';
  loading: boolean = true;
  constructor(private router: Router) {
    // Check router event
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.loading = true;
      }
      if (
        e instanceof NavigationEnd ||
        e instanceof NavigationError ||
        e instanceof NavigationCancel
      ) {
        this.loading = false;
      }
    });
  }
}
