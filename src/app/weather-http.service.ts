import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class WeatherHttpService {
  apiKey: string;

  constructor(private _http: HttpClient) {
    this.apiKey = '0d9c38a67a79cd24dd58944c3cd6d708';
  }

  getWeatherForecast(lat: number, long: number): Observable<any> {
    const forecastURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.apiKey}/${lat},${long}`;
    return this._http.get(forecastURL);
  }
}
