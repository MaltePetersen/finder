import { Test, TestingModule } from '@nestjs/testing';
import { DirectoryHandlingController } from './directory-handling.controller';
import { DirectoryHandlingService } from './directory-handling.service';
import { instance, mock } from 'ts-mockito';
import { SharedDirectoryService } from '../../common/service/shared-directory/shared-directory.service';
describe('DirectoryHandlingController', () => {
  let controller: DirectoryHandlingController;
  let directoryHandlingServiceMock: DirectoryHandlingService = mock(
    DirectoryHandlingService
  );
  let sharedDirectoryServiceMock: SharedDirectoryService = mock(
    SharedDirectoryService
  );

  let directoryHandlingService: DirectoryHandlingService = instance(
    directoryHandlingServiceMock
  );
  let sharedDirectoryService: SharedDirectoryService = instance(
    sharedDirectoryServiceMock
  );
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectoryHandlingController],
      providers: [
        {
          provide: DirectoryHandlingService,
          useFactory: () => directoryHandlingService,
        },
        {
          provide: SharedDirectoryService,
          useFactory: () => sharedDirectoryService,
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
