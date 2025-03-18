import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/weather';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{
  weather: Weather = {} as Weather;
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric&APPID=faf17d6bfe1477a97755d5134779e59c'

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    const weatherObservable: Observable<any> = this.httpClient
      .get<HttpResponse<WeatherApiResponse>>(this.apiUrl, {observe: 'response'});
    weatherObservable.pipe(
      tap((response: HttpResponse<WeatherApiResponse>) => console.info('Weather from server', response)),
      map(response => response.body),
      map(responseFromServer => responseFromServer!.main)
    ).subscribe((response: Weather) => this.weather = response);
  }
}

interface WeatherApiResponse {
  main: Weather
}
