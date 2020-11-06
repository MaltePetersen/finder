import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FileHandlingService } from './file-handling.service';
@Controller('file-handling')
export class FileHandlingController {
  constructor(private filehandlerService: FileHandlingService) {}
  @Get('/files')
  getAllFiles() {
    return 'test';
  }
  @Get('/file::path::file')
  getFile(@Param('path') path: string, @Param('file') file: string) {
    console.log(__dirname === path);
    console.log(path);
    console.log(file === 'main.js');
    console.log(file);
    this.filehandlerService.readFile(path, file);
  }
  @Get('/rootPath')
  getRootPath() {
    return 'rootPath';
  }
  @Post('/file')
  createFile() {
    this.filehandlerService.createFile(__dirname, 'test');
  }
  @Put('/fileName')
  updateFileName() {
    this.filehandlerService.updateFileName(__dirname, 'test', 'hallo');
    this.filehandlerService.readDirectory(__dirname);
  }
  @Post('/copy')
  copy() {
    this.filehandlerService.copyFile(__dirname, 'hallo', __dirname, 'hallo2');
    this.filehandlerService.readDirectory(__dirname);
  }
  @Delete('/file')
  delete() {
    this.filehandlerService.deleteFile(__dirname, 'hallo');
    this.filehandlerService.readDirectory(__dirname);
  }
}
