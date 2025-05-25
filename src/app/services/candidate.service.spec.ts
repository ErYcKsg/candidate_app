import { TestBed } from '@angular/core/testing';
import { CandidateService } from '../services/candidate.service';
import { MockCandidateService } from './mock-candidate.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

describe('CandidateService (Mock)', () => {
  let service: CandidateService;
  let form: FormGroup;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        { provide: CandidateService, useClass: MockCandidateService },
        FormBuilder,
      ]
    });

    service = TestBed.inject(CandidateService);
    const fb = TestBed.inject(FormBuilder);

    form = fb.group({
      name: ['Eric'],
      surname: ['Salguero']
    });
  });

  it('should send form data and receive 3 mock candidates', async () => {
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('surname', form.value.surname);

    const result = await firstValueFrom(service.uploadCandidate(formData));

    expect(result.length).toBe(3);
    expect(result[0].name).toBe('Eric');
    expect(result[1].name).toBe('Eric1');
    expect(result[2].name).toBe('Eric2');
  });
});
