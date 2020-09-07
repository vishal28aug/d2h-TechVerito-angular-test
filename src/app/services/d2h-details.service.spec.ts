import { TestBed } from '@angular/core/testing';

import { D2hDetailsService } from './d2h-details.service';

describe('D2hDetailsService', () => {
  let service: D2hDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(D2hDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
