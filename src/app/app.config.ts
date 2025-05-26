import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { CandidateDataSource } from './infrastructure/data/candidate-data-source';
import { MockCandidateService } from './infrastructure/data/mock-candidate.service';
import { CandidateService } from './domain/services/candidate.service';

const useMock = false;

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: CandidateDataSource,
      useClass: useMock ? MockCandidateService : CandidateService,
    },
  ],
};
