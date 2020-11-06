import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { DirectoryHandlingService } from './directory-handling.service';

@Controller('directory-handling')
export class DirectoryHandlingController {
  constructor(private directoryHandlingService: DirectoryHandlingService) {}

  @Get()
  readDirectory() {
    this.directoryHandlingService.readDirectory(__dirname);
  }
  @Post()
  createDirectory() {
    this.directoryHandlingService.createDirectory(__dirname, 'testDir');
    this.directoryHandlingService.readDirectory(__dirname);
  }
  @Put()
  updateDirectory() {
    this.directoryHandlingService.updateDirectoryName(
      __dirname,
      'testDir',
      'testDir2'
    );
    this.directoryHandlingService.readDirectory(__dirname);
  }
  @Delete()
  deleteDirectory() {
    this.directoryHandlingService.deleteDirectory(__dirname, 'testDir3');
    this.directoryHandlingService.readDirectory(__dirname);
  }
  @Post('/copy')
  copyDirectory() {
    this.directoryHandlingService.copyDirectory(
      __dirname,
      'testDir2',
      __dirname,
      'testDir3'
    );
    this.directoryHandlingService.readDirectory(__dirname);
  }
}
