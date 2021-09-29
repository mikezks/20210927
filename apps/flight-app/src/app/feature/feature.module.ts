import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WEEKDAYS } from '../app.token';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: WEEKDAYS, useValue: 'Thursday', multi: true },
    { provide: WEEKDAYS, useValue: 'Friday', multi: true },
    { provide: WEEKDAYS, useValue: 'Saturday', multi: true },
    { provide: WEEKDAYS, useValue: 'Sunday', multi: true }
  ]
})
export class FeatureModule { }
