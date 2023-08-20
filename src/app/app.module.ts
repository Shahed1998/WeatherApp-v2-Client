import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ApiService } from './services/api.service';
import { HomeResolver } from './services/home.resolver';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiService, HomeResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
