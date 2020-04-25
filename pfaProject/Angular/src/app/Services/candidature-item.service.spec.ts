import { TestBed } from '@angular/core/testing';

import { CandidatureItemService } from './candidature-item.service';

describe('CandidatureItemService', () => {
  let service: CandidatureItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatureItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
