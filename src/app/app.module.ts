import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AutosuggestComponent} from './autosuggest/autosuggest.component';
import {PlacesHttpService} from './places-http.service';
import {WeatherHttpService} from './weather-http.service';
import {MapComponent} from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    AutosuggestComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PlacesHttpService, WeatherHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
