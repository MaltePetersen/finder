import { TestBed } from '@angular/core/testing';

import { AllCollectionsService } from './all-collections.service';

describe('AllCollectionsService', () => {
  let service: AllCollectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCollectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
