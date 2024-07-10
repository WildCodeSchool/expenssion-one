import { TestBed } from '@angular/core/testing';

import { PersoServiceService } from './perso-service.service';

describe('PersoServiceService', () => {
  let service: PersoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
