import { Injectable } from '@nestjs/common';
import { copySync } from 'fs-extra';
import { SharedDirectoryService } from '../../common/service/shared-directory/shared-directory.service';
import { mkdir, rename, rmdir } from 'fs/promises';

@Injectable()
export class DirectoryHandlingService {
  constructor() {}

  createDirectory(path: string): Promise<void> {
    return mkdir(path);
  }

  updateDirectoryName(path: string, newPath): Promise<void> {
    return rename(path, newPath);
  }

  copyDirectory(path: string, newPath: string): void {
    copySync(path, newPath);
  }

  deleteDirectory(path: string): Promise<void> {
    return rmdir(path, { recursive: true });
  }
}
