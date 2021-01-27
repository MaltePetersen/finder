import { TestBed } from '@angular/core/testing';

import { CurrentCollectionnNameService } from './current-collectionn-name.service';

describe('CurrentCollectionnNameService', () => {
  let service: CurrentCollectionnNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentCollectionnNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
