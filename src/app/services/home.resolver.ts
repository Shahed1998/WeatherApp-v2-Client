import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of, catchError } from 'rxjs';
import { Weather } from '../models/Weather';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<void | Weather> {
  constructor(private apiService: ApiService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<void | Weather> | Promise<void | Weather> {
    return this.apiService.postWeatherLonLat().catch((err) => {
      console.log('Uh oh');
      this.router.navigate(['/error'], {
        state: {
          data: { message: 'Internal Server Error', errorCode: 500 },
        },
      });
    });
  }
}
