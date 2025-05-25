import { TestBed } from '@angular/core/testing';
import { CandidateStoreService } from './candidate-store.service';
import { CandidateDTO } from './candidate-data-source';

describe('CandidateStoreService', () => {
  let service: CandidateStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateStoreService);
  });

  it('should add candidates', () => {
    const candidates: CandidateDTO[] = [
      { name: 'Eric', surname: 'Salguero', seniority: 'mid', years: 11, availability: true }
    ];
    service.addCandidates(candidates);
    service.candidates$.subscribe(data => {
      expect(data.length).toBe(1);
      expect(data[0].name).toBe('Eric');
    });
  });

  it('should clear candidates', () => {
    service.clearCandidates();
    service.candidates$.subscribe(data => {
      expect(data.length).toBe(0);
    });
  });
});
