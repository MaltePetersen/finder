import { Injectable } from '@nestjs/common';
import { copySync } from 'fs-extra';
const { mkdir, readdir, rename, rmdir } = require('fs').promises;
@Injectable()
export class DirectoryHandlingService {
  createDirectory(path: string, dir: string): Promise<any> {
    return mkdir(this.constructDirectoryPath(path, dir));
  }

  updateDirectoryName(path: string, dir: string, newdir: string): Promise<any> {
    return rename(
      this.constructDirectoryPath(path, dir),
      this.constructDirectoryPath(path, newdir)
    );
  }

  copyDirectory(path: string, dir: string, newPath: string, newDir: string) {
    copySync(this.constructDirectoryPath(path, dir), this.constructDirectoryPath(newPath, newDir));
  }

  deleteDirectory(path: string, dir: string): Promise<any> {
    return rmdir(this.constructDirectoryPath(path, dir));
  }


  private constructDirectoryPath(path: string, dir: string): string {
    return `${path}/${dir}`;
  }
}
