import { Test, TestingModule } from '@nestjs/testing';
import { instance, mock } from 'ts-mockito';
import { FileHandlingController } from './file-handling.controller';
import { FileHandlingService } from './file-handling.service';

describe('FileHandlingController', () => {
  let controller: FileHandlingController;
  let fileHandlingServiceMock: FileHandlingService = mock(FileHandlingService);
  let fileHandlingService: FileHandlingService = instance(
    fileHandlingServiceMock
  );
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileHandlingController],
      providers: [
        {
          provide: FileHandlingService,
          useFactory: () => fileHandlingService,
        },
      ],
    }).compile();

    controller = module.get<FileHandlingController>(FileHandlingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
