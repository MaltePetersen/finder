import { Injectable } from '@nestjs/common';
import { copySync } from 'fs-extra';
import { SharedDirectoryService } from '../../common/service/shared-directory/shared-directory.service';
const { mkdir, readdir, rename, rmdir } = require('fs').promises;
@Injectable()
export class DirectoryHandlingService {
  constructor(private sharedDirectoryService: SharedDirectoryService) {}

  createDirectory(path: string, dir: string): Promise<any> {
    return mkdir(this.sharedDirectoryService.constructPath(path, dir));
  }

  updateDirectoryName(path: string, dir: string, newdir: string): Promise<any> {
    return rename(
      this.sharedDirectoryService.constructPath(path, dir),
      this.sharedDirectoryService.constructPath(path, newdir)
    );
  }

  copyDirectory(path: string, dir: string, newPath: string, newDir: string) {
    copySync(
      this.sharedDirectoryService.constructPath(path, dir),
      this.sharedDirectoryService.constructPath(newPath, newDir)
    );
  }

  deleteDirectory(path: string, dir: string): Promise<any> {
    return rmdir(this.sharedDirectoryService.constructPath(path, dir));
  }
}
