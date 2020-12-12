import { Component, OnInit } from '@angular/core';
import { ps4data } from './data/MOCKps4data';
import { Weather } from './data/weather';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ps4data: Weather[] = ps4data;
  cityWeather: Weather;
  chosenCity: Weather;
  fubar: any;

  constructor() { }

  ngOnInit(): void {
  }

  setCityName(cityWeather: Weather): void {
    this.chosenCity = cityWeather;
    console.log(`${cityWeather.cityName}`);
  }
}
