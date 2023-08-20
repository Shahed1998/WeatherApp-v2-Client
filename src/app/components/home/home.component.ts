import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from 'src/app/models/Weather';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  weather!: Weather;
  time!: string;
  date!: string;
  month!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    // if (history.state.data) {
    //   history.state.data = undefined;
    // }

    this.titleService.setTitle('Weather App V2');

    this.activatedRoute.data.subscribe((data) => {
      this.weather = data['weather'];
      console.log(this.weather);
    });

    // Initially gets date and time
    let now = new Date();

    // Date
    this.month = now.getMonth() + 1;
    this.date = `${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}-${
      this.month < 10 ? '0' + this.month : this.month
    }-${now.getFullYear()}`;
    // Time
    this.time = `${
      now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
    }:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}:${
      now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
    }`;

    // Updates the date every hour
    setInterval(() => {
      now = new Date();
      this.month = now.getMonth() + 1;

      // Date
      this.date = `${
        now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
      }-${
        this.month < 10 ? '0' + this.month : this.month
      }-${now.getFullYear()}`;

      // Time
      this.time = `${
        now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
      }:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}:${
        now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
      }`;
    }, 1000);
  }
}
