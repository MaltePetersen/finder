import { Test, TestingModule } from '@nestjs/testing';
import { SharedDirectoryService } from './shared-directory.service';

describe('SharedDirectoryService', () => {
  let service: SharedDirectoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedDirectoryService],
    }).compile();

    service = module.get<SharedDirectoryService>(SharedDirectoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
