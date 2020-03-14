import { TestBed } from '@angular/core/testing';

import { SessionCandidatureService } from './session-candidature.service';

describe('SessionCandidatureService', () => {
  let service: SessionCandidatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionCandidatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
