import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Weather } from '../models/Weather';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // properties
  lat: number | null = null;
  lon: number | null = null;
  headers!: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
  }

  loc = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (err) => {
            reject(err);
          }
        );
      } else {
        reject();
      }
    });
  };

  async postWeatherLonLat(): Promise<void | Weather> {
    try {
      let coords = await this.loc();
      let res: any = await this.http
        .post(
          'https://shahed-weather-app-v2-server.onrender.com/api/weather/device-location',
          coords,
          {
            headers: this.headers,
          }
        )
        .toPromise();

      return await new Promise((resolve, reject) => {
        let weather = new Weather();
        weather.status = res.status;
        weather.status = res.status;
        weather.coord = res.data.coord;
        weather.weather = res.data.weather[0];
        weather.base = res.data.base;
        weather.main = res.data.main;
        weather.visibility = res.data.visibility;
        weather.wind = res.data.wind;
        weather.clouds = res.data.clouds;
        weather.dt = res.data.dt;
        weather.sys = res.data.sys;
        weather.timezone = res.data.timezone;
        weather.id = res.data.id;
        weather.name = res.data.name;
        weather.cod = res.data.cod;
        resolve(weather);
      });
    } catch (err: any) {
      throw new Error('Error');
    }
  }
}
