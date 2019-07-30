import { TestBed } from '@angular/core/testing';

import { CurrencyDataService } from './currency-data.service';

describe('CurrencyDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyDataService = TestBed.get(CurrencyDataService);
    expect(service).toBeTruthy();
  });
});
