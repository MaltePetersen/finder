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

  @Get('::path')
  async readDirectory(@Param('path') path: string) {
    return await this.sharedDirectoryService.readDirectory(path);
  }

  @Post()
  async createDirectory(@Body() directoryDTO: DirectoryDTO) {
    await this.directoryHandlingService.createDirectory(directoryDTO.path, directoryDTO.name);
    return await this.sharedDirectoryService.readDirectory(directoryDTO.path);
  }

  @Put()
  async updateDirectory(@Body() updateDirectoryDTO: UpdateDirectoryDTO) {
    await this.directoryHandlingService.updateDirectoryName(
      updateDirectoryDTO.path,
      updateDirectoryDTO.name,
      updateDirectoryDTO.newName
    );
    return await this.sharedDirectoryService.readDirectory(updateDirectoryDTO.path);
  }

  @Delete('::name::path')
  async deleteDirectory(@Param('name') directory: string, @Param('path') path: string) {
    await this.directoryHandlingService.deleteDirectory(path, directory);
    return await this.sharedDirectoryService.readDirectory(path);
  }

  @Get('/copy::from::to::name::newname')
  async copyDirectory(
    @Param('from') fromPath: string,
    @Param('to') toPath: string,
    @Param('name') name: string,
    @Param('newname') newName: string
  ) {
    this.directoryHandlingService.copyDirectory(fromPath, name, toPath, newName);
    return await this.sharedDirectoryService.readDirectory(fromPath);
  }

  @Get('/filenode')
  async getFileNode() {
    return await this.sharedDirectoryService.getDirectoryContent(this.sharedDirectoryService.getWorkspace());
  }
}
