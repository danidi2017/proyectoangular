import { TestBed, inject } from '@angular/core/testing';

import { OrdenesService } from './ordenes-service.service';

describe('OrdenesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdenesService]
    });
  });

  it('should be created', inject([OrdenesService], (service: OrdenesService) => {
    expect(service).toBeTruthy();
  }));
});
