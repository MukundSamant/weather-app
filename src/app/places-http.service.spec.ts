import { TestBed, inject } from '@angular/core/testing';

import { PlacesHttpService } from './places-http.service';

describe('PlacesHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlacesHttpService]
    });
  });

  it('should be created', inject([PlacesHttpService], (service: PlacesHttpService) => {
    expect(service).toBeTruthy();
  }));
});
