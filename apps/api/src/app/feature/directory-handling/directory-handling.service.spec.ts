import { Test, TestingModule } from '@nestjs/testing';
import { DirectoryHandlingService } from './directory-handling.service';

describe('DirectoryHandlingService', () => {
  let service: DirectoryHandlingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectoryHandlingService],
    }).compile();

    service = module.get<DirectoryHandlingService>(DirectoryHandlingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
