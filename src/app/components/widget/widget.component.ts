import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  @Input() loggedInUser: User;
  data: any;
  constructor(private weatherService: WeatherService) { }
  
  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(){
    this.weatherService.getWeatherData().subscribe(data => {
      this.data = data;
    });
  }

}
