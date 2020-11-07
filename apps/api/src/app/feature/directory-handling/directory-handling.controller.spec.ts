import { Test, TestingModule } from '@nestjs/testing';
import { DirectoryHandlingController } from './directory-handling.controller';
import { DirectoryHandlingService } from './directory-handling.service';
import { instance, mock } from 'ts-mockito';
describe('DirectoryHandlingController', () => {
  let controller: DirectoryHandlingController;
  let directoryHandlingServiceMock: DirectoryHandlingService = mock(
    DirectoryHandlingService
  );
  let directoryHandlingService: DirectoryHandlingService = instance(
    directoryHandlingServiceMock
  );
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectoryHandlingController],
      providers: [
        {
          provide: DirectoryHandlingService,
          useFactory: () => directoryHandlingService,
        },
      ],
    }).compile();

    controller = module.get<DirectoryHandlingController>(
      DirectoryHandlingController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
