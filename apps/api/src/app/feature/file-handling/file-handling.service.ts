import { Injectable } from '@nestjs/common';
import {
  constants,
  copyFile,
  readdir,
  readdirSync,
  readFile,
  rename,
  unlink,
  writeFile,
} from 'fs';
import { homedir } from 'os';

@Injectable()
export class FileHandlingService {
  readDirectory(path: string) {
    readdir(__dirname, (err, files) => {
      console.table(files);
    });
  }

  readFile(path: string, file: string) {
    readFile(
      this.constructFilePath(path, file),
      { encoding: 'utf-8' },
      (err, data) => console.log(data)
    );
  }

  createFile(path: string, file: string) {
    writeFile(this.constructFilePath(path, file), '', (err) =>
      this.errorLog(err)
    );
  }

  updateFileName(path: string, file: string, name: string) {
    rename(
      this.constructFilePath(path, file),
      this.constructFilePath(path, name),
      (err) => this.errorLog(err)
    );
  }

  copyFile(path: string, file: string, newPath: string, newFile: string) {
    copyFile(
      this.constructFilePath(path, file),
      this.constructFilePath(newPath, newFile),
      constants.COPYFILE_EXCL,
      (err) => this.errorLog(err)
    );
  }

  deleteFile(path: string, file: string) {
    unlink(this.constructFilePath(path, file), (err) => this.errorLog(err));
  }

  private errorLog(err: NodeJS.ErrnoException): void {
    if (err) console.log(err);
  }

  private constructFilePath(path: string, file: string): string {
    return `${path}/${file}`;
  }
}
