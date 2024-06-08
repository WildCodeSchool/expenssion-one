import { TestBed } from '@angular/core/testing';

import { MobileSideNavService } from './mobile-sidenav.service';

describe('MobileSidebarService', () => {
  let service: MobileSideNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileSideNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
