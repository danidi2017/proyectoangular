import { TestBed, inject } from '@angular/core/testing';

import { ClientesServiceService } from './clientes-service.service';

describe('ClientesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientesServiceService]
    });
  });

  it('should be created', inject([ClientesServiceService], (service: ClientesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
