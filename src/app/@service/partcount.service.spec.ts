import { TestBed } from '@angular/core/testing';

import { PartcountService } from './partcount.service';

describe('PartcountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartcountService = TestBed.get(PartcountService);
    expect(service).toBeTruthy();
  });
});
