import { FileDTO, UpdateFileDTO } from '@finder/shared';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SharedDirectoryService } from '../../common/service/shared-directory/shared-directory.service';
import { FileHandlingService } from './file-handling.service';

@Controller('file')
export class FileHandlingController {
  constructor(
    private filehandlerService: FileHandlingService,
    private sharedDirectoryService: SharedDirectoryService
  ) {}

  @Get('/stats::path')
  async getStats(@Param('path') path: string) {
    return await this.filehandlerService.getStats(path);
  }

  @Get('::path')
  async getFile(@Param('path') path: string) {
    return await this.filehandlerService.readFile(path);
  }

  @Post()
  async createFile(@Body() fileDTO: FileDTO) {
    await this.filehandlerService.createFile(fileDTO.path, fileDTO.name);
    return await this.sharedDirectoryService.readDirectory(fileDTO.path);
  }

  @Put()
  async updateFileName(@Body() updateFileDTO: UpdateFileDTO) {
    await this.filehandlerService.updateFileName(updateFileDTO.path, updateFileDTO.name, updateFileDTO.newName);
    return await this.sharedDirectoryService.readDirectory(updateFileDTO.path);
  }

  @Get('/copy::frompath::topath::name::newname')
  async copy(
    @Param('frompath') fromPath: string,
    @Param('topath') toPath: string,
    @Param('name') name: string,
    @Param('newname') newName: string
  ) {
    await this.filehandlerService.copyFile(fromPath, name, toPath, newName);
    return await this.sharedDirectoryService.readDirectory(toPath);
  }

  @Delete('::path::name')
  async delete(@Param('path') path: string, @Param('name') name: string) {
    await this.filehandlerService.deleteFile(path, name);
    return await this.sharedDirectoryService.readDirectory(path);
  }
}
