import { Injectable } from '@nestjs/common';
import { readdir, mkdir, rename, rmdir } from 'fs';
import { copySync } from 'fs-extra';

@Injectable()
export class DirectoryHandlingService {
  readDirectory(path: string) {
    readdir(__dirname, (err, files) => {
      console.table(files);
    });
  }

  createDirectory(path: string, dir: string) {
    mkdir(this.constructDirectoryPath(path, dir), (err) => this.errorLog(err));
  }
  updateDirectoryName(path: string, dir: string, newdir: string) {
    rename(
      this.constructDirectoryPath(path, dir),
      this.constructDirectoryPath(path, newdir),
      (err) => this.errorLog(err)
    );
  }
  copyDirectory(path: string, dir: string, newPath: string, newDir: string) {
    copySync(
      this.constructDirectoryPath(path, dir),
      this.constructDirectoryPath(newPath, newDir)
    );
  }
  deleteDirectory(path: string, dir: string) {
    rmdir(this.constructDirectoryPath(path, dir), (err) => this.errorLog(err));
  }

  private errorLog(err: NodeJS.ErrnoException): void {
    if (err) console.log(err);
  }

  private constructDirectoryPath(path: string, dir: string): string {
    return `${path}/${dir}`;
  }
}
