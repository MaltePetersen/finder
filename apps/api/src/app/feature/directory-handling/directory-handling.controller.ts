import { DirectoryDTO, UpdateDirectoryDTO } from '@finder/shared';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SharedDirectoryService } from '../../common/service/shared-directory/shared-directory.service';
import { DirectoryHandlingService } from './directory-handling.service';

@Controller('directory')
export class DirectoryHandlingController {
  constructor(
    private directoryHandlingService: DirectoryHandlingService,
    private sharedDirectoryService: SharedDirectoryService
  ) {}

  @Get('/path')
  async readDirectory(@Param('path') path: string) {
    return await this.sharedDirectoryService.readDirectory(path);
  }

  @Post()
  async createDirectory(@Body() directoryDTO: DirectoryDTO) {
    await this.directoryHandlingService.createDirectory(directoryDTO.path);
    return await this.sharedDirectoryService.readDirectory(directoryDTO.path);
  }

  @Put()
  async updateDirectory(@Body() updateDirectoryDTO: UpdateDirectoryDTO) {
    await this.directoryHandlingService.updateDirectoryName(updateDirectoryDTO.path, updateDirectoryDTO.newPath);
  }

  @Delete('/:path')
  async deleteDirectory(@Param('path') path: string) {
    await this.directoryHandlingService.deleteDirectory(path);
  }

  @Get('/copy/:from/:to')
  async copyDirectory(@Param('from') fromPath: string, @Param('to') toPath: string) {
    this.directoryHandlingService.copyDirectory(fromPath, toPath);
  }
  @Get('/workspace')
  async getWorkspace() {
    return { path: this.sharedDirectoryService.getWorkspace() };
  }

  @Get('/filenode')
  async getFileNode() {
    return await this.sharedDirectoryService.getDirectoryContent(this.sharedDirectoryService.getWorkspace());
  }
}
