import {Component, Inject} from '@angular/core';
import {WEEKDAYS} from './app.token';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(WEEKDAYS) private weekdays: string[]) {
    console.log(weekdays);
  }
}
