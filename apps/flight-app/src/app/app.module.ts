import { FlightCancellingModule } from './flight-booking/flight-cancelling/flight-cancelling.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FlightLibModule } from '@flight-workspace/flight-lib';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { BasketComponent } from './basket/basket.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WEEKDAYS } from './app.token';
import { FeatureModule } from './feature/feature.module';
import { environment } from '../environments/environment';




@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // FlightBookingModule,

    BrowserAnimationsModule,
    FlightCancellingModule,

    FlightLibModule.forRoot(),
    SharedModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    environment.production ? FeatureModule : []
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [
    { provide: WEEKDAYS, useValue: 'Monday', multi: true },
    { provide: WEEKDAYS, useValue: 'Tuesday', multi: true },
    { provide: WEEKDAYS, useValue: 'Wednesday', multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
