import { Injectable } from '@nestjs/common';
import { constants, Stats } from 'fs';
import { stat } from 'fs-extra';
import { SharedDirectoryService } from '../../common/service/shared-directory/shared-directory.service';
import { unlink, copyFile, readFile, rename, writeFile } from 'fs/promises';

@Injectable()
export class FileHandlingService {
  constructor(private sharedDirectoryService: SharedDirectoryService) {}

  async getStats(path: string): Promise<Stats> {
    return await stat(path);
  }

  async readFile(path: string): Promise<string> {
    return readFile(path, {
      encoding: 'utf-8',
    });
  }

  async createFile(path: string, file: string): Promise<void> {
    return writeFile(this.sharedDirectoryService.constructPath(path, file), '');
  }

  async updateFileName(path: string, newPath: string): Promise<void> {
    return rename(path, newPath);
  }

  async copyFile(path: string, newPath: string): Promise<void> {
    return copyFile(path, newPath, constants.COPYFILE_EXCL);
  }

  async deleteFile(path: string): Promise<void> {
    return unlink(path);
  }
}
