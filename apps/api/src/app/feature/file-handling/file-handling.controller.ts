import { FileDTO, UpdateFileDTO } from '@finder/shared';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SharedDirectoryService } from '../../common/service/shared-directory/shared-directory.service';
import { FileHandlingService } from './file-handling.service';
//TODO Copy nach folgendem Schema RESTFUL machen https://stackoverflow.com/questions/30804876/rest-api-design-for-cloning-a-resource

@Controller('file')
export class FileHandlingController {
  constructor(
    private filehandlerService: FileHandlingService,
    private sharedDirectoryService: SharedDirectoryService
  ) {}

  @Get('/stats/:path')
  async getStats(@Param('path') path: string) {
    return await this.filehandlerService.getStats(path);
  }

  @Get('/:path')
  async getFile(@Param('path') path: string) {
    return { file: await this.filehandlerService.readFile(path) };
  }

  @Post()
  async createFile(@Body() fileDTO: FileDTO) {
    await this.filehandlerService.createFile(fileDTO.path, fileDTO.name);
    return await this.sharedDirectoryService.readDirectory(fileDTO.path);
  }

  @Put()
  async updateFileName(@Body() updateFileDTO: UpdateFileDTO) {
    await this.filehandlerService.updateFileName(updateFileDTO.path, updateFileDTO.newPath);
    return await this.sharedDirectoryService.readDirectory(updateFileDTO.path);
  }

  @Get('/copy/:frompath/:topath')
  async copy(@Param('frompath') fromPath: string, @Param('topath') toPath: string) {
    await this.filehandlerService.copyFile(fromPath, toPath);
  }

  @Delete('/:path')
  async delete(@Param('path') path: string) {
    await this.filehandlerService.deleteFile(path);
  }
}
