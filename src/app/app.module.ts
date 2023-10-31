import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { YearsComponent } from './components/years/years.component';
import { DecadeComponent } from './components/decade/decade.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    YearsComponent,
    DecadeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatTooltipModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
