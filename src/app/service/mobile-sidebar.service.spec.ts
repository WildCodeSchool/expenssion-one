import { TestBed } from '@angular/core/testing';

import { MobileSidebarService } from './mobile-sidebar.service';

describe('MobileSidebarService', () => {
  let service: MobileSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
