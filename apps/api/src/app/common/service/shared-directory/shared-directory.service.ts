import { Injectable } from '@nestjs/common';
const { mkdir, readdir, rename, rmdir } = require('fs').promises;

@Injectable()
export class SharedDirectoryService {
  async readDirectory(path: string): Promise<any> {
    return readdir(path);
  }

  public constructPath(path: string, file: string): string {
    return `${path}/${file}`;
  }
}
