import { Injectable } from '@angular/core';
import { CandidateDataSource, CandidateDTO } from './candidate-data-source';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockCandidateService extends CandidateDataSource {
  override uploadCandidate(formData: FormData): Observable<CandidateDTO[]> {
    return of([
      {
        name: (formData.get('name') as string) ?? '',
        surname: (formData.get('surname') as string) ?? '',
        seniority: 'junior',
        years: 3,
        availability: true,
      },
      {
        name: ((formData.get('name') as string) ?? '') + '1',
        surname: ((formData.get('surname') as string) ?? '') + '1',
        seniority: 'mid',
        years: 6,
        availability: true,
      },
      {
        name: ((formData.get('name') as string) ?? '') + '2',
        surname: ((formData.get('surname') as string) ?? '') + '2',
        seniority: 'senior',
        years: 11,
        availability: true,
      },
    ]);
  }
}
