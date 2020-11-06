import { Test, TestingModule } from '@nestjs/testing';
import { DirectoryHandlingController } from './directory-handling.controller';

describe('DirectoryHandlingController', () => {
  let controller: DirectoryHandlingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectoryHandlingController],
    }).compile();

    controller = module.get<DirectoryHandlingController>(
      DirectoryHandlingController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
