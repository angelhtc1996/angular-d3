import { TestBed } from '@angular/core/testing';

import { Central3plService } from './central3pl.service';

describe('Central3plService', () => {
  let service: Central3plService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Central3plService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
