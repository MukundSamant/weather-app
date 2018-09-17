import { TestBed, inject } from '@angular/core/testing';

import { WeatherHttpService } from './weather-http.service';

describe('WeatherHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherHttpService]
    });
  });

  it('should be created', inject([WeatherHttpService], (service: WeatherHttpService) => {
    expect(service).toBeTruthy();
  }));
});
