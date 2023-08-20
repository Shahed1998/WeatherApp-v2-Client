import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  // Properties
  errorCode: number = 400;
  errorMessage: string = 'Page not found';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    if (history.state.data) {
      this.errorCode = history.state.data['errorCode'];
      this.errorMessage = history.state.data['message'];
    }
    this.titleService.setTitle('Error');
  }
}
