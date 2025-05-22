import { Injectable } from '@angular/core';
import { CandidateDataSource } from './candidate-data-source';

@Injectable({
  providedIn: 'root',
})
export class MockCandidateService extends CandidateDataSource {
  override uploadCandidate(formData: FormData): Promise<any> {
    return Promise.resolve({
      name: formData.get('name'),
      surname: formData.get('surname'),
      seniority: 'junior',
      years: 3,
      availability: true,
    });
  }
}