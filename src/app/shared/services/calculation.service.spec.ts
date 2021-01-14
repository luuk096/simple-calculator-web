import { TestBed } from '@angular/core/testing';

import { CalculationService } from './calculation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
