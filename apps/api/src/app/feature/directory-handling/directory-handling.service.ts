import { Injectable } from '@nestjs/common';
import { copySync } from 'fs-extra';
import { SharedDirectoryService } from '../../common/service/shared-directory/shared-directory.service';
import { mkdir, rename, rmdir } from 'fs/promises';

@Injectable()
export class DirectoryHandlingService {
  constructor(private sharedDirectoryService: SharedDirectoryService) {}

  createDirectory(path: string): Promise<any> {
    return mkdir(path);
  }

  updateDirectoryName(path: string, newPath): Promise<any> {
    return rename(path, newPath);
  }

  copyDirectory(path: string, newPath: string) {
    copySync(path, newPath);
  }

  deleteDirectory(path: string): Promise<any> {
    return rmdir(path);
  }
}
