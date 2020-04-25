import { TestBed } from '@angular/core/testing';

import { CandidatItemService } from './candidat-item.service';

describe('CandidatItemService', () => {
  let service: CandidatItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
