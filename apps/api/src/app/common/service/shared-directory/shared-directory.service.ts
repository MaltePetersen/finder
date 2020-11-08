import { Injectable } from '@nestjs/common';
const { mkdir, readdir, rename, rmdir } = require('fs').promises;

@Injectable()
export class SharedDirectoryService {
  async readDirectory(path: string): Promise<any> {
    return readdir(path).catch((err: NodeJS.ErrnoException) =>
      this.errorLog(err)
    );
  }
  private errorLog(err: NodeJS.ErrnoException): void {
    if (err) console.log(err);
  }
}
