import { Component, inject, OnInit } from '@angular/core';
import { Weather } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{
  weather: Weather = {} as Weather;
  weatherService = inject(WeatherService);

  ngOnInit(): void {
    this.weatherService.fetchWeather()
      .subscribe((response: Weather) => this.weather = response)
  }
}


