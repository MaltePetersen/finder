import { DirectoryDTO, UpdateDirectoryDTO } from '@finder/shared';
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { DirectoryHandlingService } from './directory-handling.service';

@Controller('directory')
export class DirectoryHandlingController {
  constructor(private directoryHandlingService: DirectoryHandlingService) {}

  @Get()
  async readDirectory() {
    return await this.directoryHandlingService.readDirectory(__dirname);
  }
  @Post()
  async createDirectory(@Body() directoryDTO: DirectoryDTO) {
    await this.directoryHandlingService.createDirectory(
      directoryDTO.path,
      directoryDTO.name
    );
    return await this.directoryHandlingService.readDirectory(directoryDTO.path);
  }
  @Put()
  async updateDirectory(@Body() updateDirectoryDTO: UpdateDirectoryDTO) {
    await this.directoryHandlingService.updateDirectoryName(
      updateDirectoryDTO.path,
      updateDirectoryDTO.name,
      updateDirectoryDTO.newName
    );
    return await this.directoryHandlingService.readDirectory(
      updateDirectoryDTO.path
    );
  }
  @Delete()
  async deleteDirectory() {
    await this.directoryHandlingService.deleteDirectory(__dirname, 'testDir3');
    return await this.directoryHandlingService.readDirectory(__dirname);
  }
  @Post('/copy')
  async copyDirectory() {
    this.directoryHandlingService.copyDirectory(
      __dirname,
      'testDir2',
      __dirname,
      'testDir3'
    );
    return await this.directoryHandlingService.readDirectory(__dirname);
  }
}
