import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidateDataSource } from './candidate-data-source';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidateService extends CandidateDataSource {
  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    super();
  }
  override uploadCandidate(formData: FormData): Promise<any> {
    return firstValueFrom(this.http.post(`${this.API_URL}/candidates/upload`, formData));
  }
}
