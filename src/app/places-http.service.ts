import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlacesHttpService {
  appId: string;
  appCode: string;
  placesURL: string;

  constructor(private _http: HttpClient) {
    this.appId = 'bmppp67yuvNYAVmCN4FW';
    this.appCode = 'croiZl4lOf1Mw3ITvQxR0w';
    this.placesURL = 'https://places.api.here.com/places/v1/autosuggest';
  }

  getPlacesSuggestions(searchQuery: string): Observable<any> {
    const worldBoundingBox = '-180,-90,180,90';
    const forecastURL = `${this.placesURL}?in=${worldBoundingBox}&q=${searchQuery}&app_id=${this.appId}&app_code=${this.appCode}`;
    return this._http.get(forecastURL);
  }

}
