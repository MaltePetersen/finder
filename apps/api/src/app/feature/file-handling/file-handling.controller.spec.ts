import { Test, TestingModule } from '@nestjs/testing';
import { instance, mock } from 'ts-mockito';
import { SharedDirectoryService } from '../../common/service/shared-directory/shared-directory.service';
import { FileHandlingController } from './file-handling.controller';
import { FileHandlingService } from './file-handling.service';

describe('FileHandlingController', () => {
  let controller: FileHandlingController;
  let fileHandlingServiceMock: FileHandlingService = mock(FileHandlingService);
  let sharedDirectoryServiceMock: SharedDirectoryService = mock(
    SharedDirectoryService
  );

  let fileHandlingService: FileHandlingService = instance(
    fileHandlingServiceMock
  );
  let sharedDirectoryService: SharedDirectoryService = instance(
    sharedDirectoryServiceMock
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileHandlingController],
      providers: [
        {
          provide: FileHandlingService,
          useFactory: () => fileHandlingService,
        },
        {
          provide: SharedDirectoryService,
          useFactory: () => sharedDirectoryService,
        },
      ],
    }).compile();

    controller = module.get<FileHandlingController>(FileHandlingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
