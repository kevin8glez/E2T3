import { TestBed } from '@angular/core/testing';

import { Hitzaurrea } from './hitzaurrea';

describe('Hitzaurrea', () => {
  let service: Hitzaurrea;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hitzaurrea);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
