import { Test, TestingModule } from '@nestjs/testing';
import { async } from 'rxjs/internal/scheduler/async';
import { SharedDirectoryService } from '../../common/service/shared-directory/shared-directory.service';
import { FileHandlingService } from './file-handling.service';

describe('FileHandlingService', () => {
  let service: FileHandlingService;
  let sharedService: SharedDirectoryService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileHandlingService, SharedDirectoryService],
    }).compile();
    sharedService = module.get<SharedDirectoryService>(SharedDirectoryService);
    service = module.get<FileHandlingService>(FileHandlingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('read', () => {
    beforeEach(async () => await service.createFile(__dirname, 'test'));
    afterEach(async () => await service.deleteFile(__dirname, 'test'));
    it('read test', async () => {
      expect(await service.readFile(__dirname, 'test')).toBe('');
    });
  });
  describe('create', () => {
    afterEach(async () => await service.deleteFile(__dirname, 'test'));
    it('create test ', async () => {
      await service.createFile(__dirname, 'test');
      expect(await service.readFile(__dirname, 'test')).toBe('');
    });
  });
  describe('update Filename', () => {
    beforeEach(async () => await service.createFile(__dirname, 'test'));
    afterEach(async () => await service.deleteFile(__dirname, 'testNew'));
    it('update test ', async () => {
      await service.updateFileName(__dirname, 'test', 'testNew');
      expect(await sharedService.readDirectory(__dirname)).toContain('testNew');
    });
  });
  describe('delete File', () => {
    beforeEach(async () => await service.createFile(__dirname, 'test'));
    it('Delete test', async () => {
      await service.deleteFile(__dirname, 'test');
      expect(await sharedService.readDirectory(__dirname)).not.toContain(
        'test'
      );
    });
  });
});
