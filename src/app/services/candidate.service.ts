import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidateDataSource } from './candidate-data-source';

@Injectable({
  providedIn: 'root',
})
export class CandidateService extends CandidateDataSource {
  constructor(private http: HttpClient) {
    super();
  }

  override uploadCandidate(formData: FormData): Promise<any> {
    return this.http.post('/api/candidates', formData).toPromise();
  }
}
