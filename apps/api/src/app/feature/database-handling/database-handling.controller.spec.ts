import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseHandlingController } from './database-handling.controller';

describe('DatabaseHandlingController', () => {
  let controller: DatabaseHandlingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatabaseHandlingController],
    }).compile();

    controller = module.get<DatabaseHandlingController>(DatabaseHandlingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
