import { Injectable } from '@nestjs/common';
import { constants } from 'fs';
const { unlink, copyFile, readFile, readdir, rename, writeFile } = require('fs').promises;
@Injectable()
export class FileHandlingService {
  async readFile(path: string, file: string): Promise<any> {
    return readFile(this.constructFilePath(path, file), {
      encoding: 'utf-8',
    });
  }

  async createFile(path: string, file: string): Promise<any> {
    return writeFile(this.constructFilePath(path, file), '');
  }

  async updateFileName(path: string, name: string, nameNew: string): Promise<any> {
    return rename(this.constructFilePath(path, name), this.constructFilePath(path, nameNew));
  }

  async copyFile(path: string, file: string, newPath: string, newFile: string): Promise<any> {
    return copyFile(
      this.constructFilePath(path, file),
      this.constructFilePath(newPath, newFile),
      constants.COPYFILE_EXCL
    );
  }

  async deleteFile(path: string, file: string): Promise<any> {
    return unlink(this.constructFilePath(path, file));
  }

  private constructFilePath(path: string, file: string): string {
    return `${path}/${file}`;
  }
}
