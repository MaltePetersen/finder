import { TestBed } from '@angular/core/testing';

import { FileNodeService } from './filenode.service';

describe('FilenodeService', () => {
  let service: FileNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
