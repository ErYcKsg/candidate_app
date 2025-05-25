import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidateDataSource, CandidateDTO } from './candidate-data-source';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidateService implements CandidateDataSource {
  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  
  uploadCandidate(formData: FormData): Observable<CandidateDTO[]> {
  return this.http.post<CandidateDTO[]>(`${this.API_URL}/candidates/upload`, formData);
}
}
