import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CandidateDTO } from '../../infrastructure/data/candidate-data-source';

@Injectable({
  providedIn: 'root',
})
export class CandidateStoreService {
  private candidatesSubject = new BehaviorSubject<CandidateDTO[]>([]);
  candidates$: Observable<CandidateDTO[]> = this.candidatesSubject.asObservable();

  getCandidates(): CandidateDTO[] {
    return this.candidatesSubject.value;
  }

  addCandidates(newCandidates: CandidateDTO[]) {
    const updatedCandidates = [...this.getCandidates(), ...newCandidates];
    this.candidatesSubject.next(updatedCandidates);
  }

  clearCandidates() {
    this.candidatesSubject.next([]);
  }
}
