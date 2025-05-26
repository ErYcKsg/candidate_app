import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { CandidateDataSource, CandidateDTO } from '../../../infrastructure/data/candidate-data-source';
import { CandidateStoreService } from '../../../application/store/candidate-store.service';
import { CandidateTableComponent } from '../candidate-table/candidate-table.component';
import { catchError, from, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-candidate-form',
  standalone: true,
  styleUrls: ['./candidate-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, CandidateTableComponent],
  templateUrl: './candidate-form.component.html',
})
export class CandidateFormComponent {
  form: FormGroup;
  readonly candidates$: Observable<CandidateDTO[]>;

  constructor(
    private formBuilder: FormBuilder,
    private dataSource: CandidateDataSource,
    private store: CandidateStoreService
  ) {
    this.candidates$ = this.store.candidates$

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      file: [null, Validators.required],
    });
  }

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.form.patchValue({ file });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = new FormData();
      formData.append('name', this.form.value.name!);
      formData.append('surname', this.form.value.surname!);
      formData.append('file', this.form.value.file!);

      from(this.dataSource.uploadCandidate(formData)).pipe(
      tap(response => this.store.addCandidates(response)),
      catchError(error => {
        console.error(error);
        return of([]);
      })
    ).subscribe();
    }
  }
}
