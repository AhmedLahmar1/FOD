import { TestBed } from '@angular/core/testing';

import { HistoriqueService } from './Historique.service';

describe('CandidatureService', () => {
  let service: HistoriqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
