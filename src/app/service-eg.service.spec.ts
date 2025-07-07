import { TestBed } from '@angular/core/testing';

import { ServiceEgService } from './service-eg.service';

describe('ServiceEgService', () => {
  let service: ServiceEgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
