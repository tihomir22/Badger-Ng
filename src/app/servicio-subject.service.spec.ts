import { TestBed } from '@angular/core/testing';

import { ServicioSubjectService } from './servicio-subject.service';

describe('ServicioSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioSubjectService = TestBed.get(ServicioSubjectService);
    expect(service).toBeTruthy();
  });
});
