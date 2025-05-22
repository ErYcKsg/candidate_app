import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { CandidateDataSource } from './services/candidate-data-source';
import { MockCandidateService } from './services/mock-candidate.service';
import { CandidateService } from './services/candidate.service';

const useMock = true;

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: CandidateDataSource,
      useClass: useMock ? MockCandidateService : CandidateService,
    },
  ],
};
