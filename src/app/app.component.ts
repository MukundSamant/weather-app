import {Component} from '@angular/core';
import {PlacesHttpService} from './places-http.service';
import {WeatherHttpService} from './weather-http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  autoSuggestions: any[];
  displayKey = 'title';
  weather: any;
  mapCenter: number[];
  searchPlaceholder = 'Search a place';
  autoSuggestValue = '';

  constructor(private placesHTTP: PlacesHttpService, private weatherHttpService: WeatherHttpService) {

  }

  searchChange(searchQuery: string) {
    if (searchQuery.length > 3) {
      this.placesHTTP.getPlacesSuggestions(searchQuery.trim()).subscribe((data) => {
        this.autoSuggestions = data.results;
      });
    }
  }

  autoSuggestClick(place: any) {
    this.mapCenter = [place.position[1], place.position[0]];
    this.getWeatherDetails(place.position[0], place.position[1]);
    this.autoSuggestions = [];
    this.autoSuggestValue = place.title;
  }

  getWeatherDetails(lat: number, long: number) {
    this.weatherHttpService.getWeatherForecast(lat, long).subscribe((data) => {
      this.weather = data;
    });
  }
}
