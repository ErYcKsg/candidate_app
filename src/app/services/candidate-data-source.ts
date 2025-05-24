
export interface CandidateDTO {
  name: string;
  surname: string;
  seniority: 'junior' | 'senior' | 'mid';
  years: number;
  availability: boolean;
}

export abstract class CandidateDataSource {
  abstract uploadCandidate(formData: FormData): Promise<CandidateDTO[]>;
}
