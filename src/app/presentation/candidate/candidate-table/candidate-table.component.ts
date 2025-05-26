import { Component, Input, OnInit } from '@angular/core';
import { CandidateStoreService } from '../../../application/store/candidate-store.service';
import { CandidateDTO } from '../../../infrastructure/data/candidate-data-source';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-candidate-table',
  templateUrl: './candidate-table.component.html',
  styleUrls: ['./candidate-table.component.scss'],
  standalone: true,
  imports: [CommonModule,
            MatCardModule,
            MatTableModule,],
})
export class CandidateTableComponent implements OnInit {
  @Input() candidates: CandidateDTO[] = [];
  displayedColumns = ['name', 'surname', 'seniority', 'yearsOfExperience', 'availability'];

  constructor(private candidateStore: CandidateStoreService) {}

  ngOnInit(): void {
  }
}
