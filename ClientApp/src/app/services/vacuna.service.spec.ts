import { TestBed } from '@angular/core/testing';

import { VacunaService } from './vacuna.service';

describe('VacunaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VacunaService = TestBed.get(VacunaService);
    expect(service).toBeTruthy();
  });
});
