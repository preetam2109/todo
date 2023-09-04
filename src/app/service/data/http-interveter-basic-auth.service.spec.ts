import { TestBed } from '@angular/core/testing';

import { HttpInterveterBasicAuthService } from './http-interveter-basic-auth.service';

describe('HttpInterveterBasicAuthService', () => {
  let service: HttpInterveterBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterveterBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
