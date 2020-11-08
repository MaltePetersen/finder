import { Test, TestingModule } from '@nestjs/testing';
import { async } from 'rxjs/internal/scheduler/async';
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
  describe('Functions', () => {
    it('shouldRead ', async () =>
      expect(await service.readDirectory(__dirname)).toContain(
        'shared-directory.service.spec.ts'
      ));
  });
});
