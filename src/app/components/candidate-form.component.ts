import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { CandidateDataSource } from '../services/candidate-data-source';

@Component({
  selector: 'app-candidate-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './candidate-form.component.html',
})
export class CandidateFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataSource: CandidateDataSource
  ) {
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

      this.dataSource.uploadCandidate(formData)
        .then((response: any) => {
          console.log('Respuesta del backend:', response);
        })
        .catch((error: any) => {
          console.error('Error al enviar el formulario:', error);
        });
    }
  }
}
