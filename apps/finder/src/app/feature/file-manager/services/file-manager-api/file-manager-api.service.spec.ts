import { TestBed } from '@angular/core/testing';

import { FileManagerApiService } from './file-manager-api.service';

describe('ApiService', () => {
  let service: FileManagerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileManagerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
