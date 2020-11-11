import { Test, TestingModule } from '@nestjs/testing';
import { async } from 'rxjs/internal/scheduler/async';
import { SharedDirectoryService } from '../../common/service/shared-directory/shared-directory.service';
import { DirectoryHandlingService } from './directory-handling.service';

describe('DirectoryHandlingService', () => {
  let service: DirectoryHandlingService;
  let sharedService: SharedDirectoryService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectoryHandlingService, SharedDirectoryService],
    }).compile();
    sharedService = module.get<SharedDirectoryService>(SharedDirectoryService);
    service = module.get<DirectoryHandlingService>(DirectoryHandlingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('readDir tests', () => {
    it('should be notNull', async () => {
      expect(await sharedService.readDirectory(__dirname)).not.toBeNull();
    });
    it('should contain testFile', async () => {
      expect(await sharedService.readDirectory(__dirname)).toContain('directory-handling.controller.spec.ts');
    });
    describe('createDirectory tests', () => {
      afterEach(async () => {
        await service.deleteDirectory(__dirname, 'test');
      });
      it('should create folder', async () => {
        await service.createDirectory(__dirname, 'test');
        expect(await sharedService.readDirectory(__dirname)).toContain('test');
      });
    });
    describe('deleteDirectory tests', () => {
      beforeEach(async () => {
        await service.createDirectory(__dirname, 'test');
      });
      it('should delete folder', async () => {
        await service.deleteDirectory(__dirname, 'test');
        expect(await sharedService.readDirectory(__dirname)).not.toContain('test');
      });
    });
    describe('updateDirectory tests', () => {
      beforeEach(async () => await service.createDirectory(__dirname, 'test'));
      afterEach(async () => await service.deleteDirectory(__dirname, 'test2'));
      it('update folderName', async () => {
        await service.updateDirectoryName(__dirname, 'test', 'test2');
        const directoryContent = await sharedService.readDirectory(__dirname);
        expect(directoryContent).toContain('test2');
        expect(directoryContent).not.toContain('test');
      });
    });
      describe('copyDirectory tests', () => {
        beforeEach(async () => await service.createDirectory(__dirname, 'test'));
        afterEach(async () => {
          await service.deleteDirectory(__dirname, 'test');
          await service.deleteDirectory(__dirname, 'test2');
        });
        it('copy', async () => {
          service.copyDirectory(__dirname, 'test', __dirname, 'test2');
          const directoryContent = await sharedService.readDirectory(__dirname);
          expect(directoryContent).toContain('test');
          expect(directoryContent).toContain('test2');
        });
      });
    });
});
