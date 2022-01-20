import { TestBed } from '@angular/core/testing';

import { PhrasesService } from './shared/phrases.service';

describe('PhrasesService', () => {
  let service: PhrasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhrasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
