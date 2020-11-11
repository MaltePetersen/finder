import { Injectable } from '@nestjs/common';
import { constants } from 'fs';
const { unlink, copyFile, readFile, readdir, rename, writeFile } = require('fs').promises;

@Injectable()
export class FileHandlingService {
  async readFile(path: string, file: string): Promise<any> {
    return readFile(this.constructFilePath(path, file), {
      encoding: 'utf-8',
    }).catch((err: NodeJS.ErrnoException) => this.errorLog(err));
  }

  async createFile(path: string, file: string): Promise<any> {
    return writeFile(this.constructFilePath(path, file), '').catch((err: NodeJS.ErrnoException) => this.errorLog(err));
  }

  async updateFileName(path: string, name: string, nameNew: string): Promise<any> {
    return rename(
      this.constructFilePath(path, name),
      this.constructFilePath(path, nameNew)
    ).catch((err: NodeJS.ErrnoException) => this.errorLog(err));
  }

  async copyFile(path: string, file: string, newPath: string, newFile: string): Promise<any> {
    return copyFile(
      this.constructFilePath(path, file),
      this.constructFilePath(newPath, newFile),
      constants.COPYFILE_EXCL
    ).catch((err: NodeJS.ErrnoException) => this.errorLog(err));
  }

  async deleteFile(path: string, file: string): Promise<any> {
    return unlink(this.constructFilePath(path, file)).catch((err: NodeJS.ErrnoException) => this.errorLog(err));
  }

  private errorLog(err: NodeJS.ErrnoException): void {
    if (err) console.log(err);
  }

  private constructFilePath(path: string, file: string): string {
    return `${path}/${file}`;
  }
}
