import { Component, OnInit, Directive } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './app-countdown.component.html',
  styleUrls: ['./app-countdown.component.scss']
})

export class AppCountdownComponent implements OnInit {

  getDate: any = new Date();
  campDate: any = new Date('June 10, 2020 18:00:00');
  res = Math.abs(this.getDate - this.campDate) / 1000;
  daycount = Math.floor(this.res / 86400);

  constructor() { }

  ngOnInit() {
  }
}
