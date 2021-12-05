import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  API_KEY ="3374998329248f55e519c116a197f05d";
  URL ="http://api.openweathermap.org/data/2.5/weather";

  getWeatherReport(city:String)
  {
    return this.http.get(this.URL+'?q='+city+'&appid='+this.API_KEY+'&units=imperial');
  }

}
