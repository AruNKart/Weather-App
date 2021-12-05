import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title="weather"
  
  constructor(private weatherservice:WeatherService) {  }

  ngOnInit(): void {
  }
  
  cityname:any = '';
  tempartureData:any;

  
  searchCity()
  {
      this.weatherservice.getWeatherReport(this.cityname).subscribe((res:any)=>{
        console.log(res)
        this.tempartureData = res;
        
      })
  }

}
