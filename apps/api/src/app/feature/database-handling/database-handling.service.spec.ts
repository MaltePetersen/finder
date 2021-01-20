import { TestBed } from '@angular/core/testing';

import { DatabaseHandlingService } from './database-handling.service';

describe('DatabaseHandlingService', () => {
  let service: DatabaseHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
