import { DirectoryDTO, UpdateDirectoryDTO } from '@finder/shared';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DirectoryHandlingService } from './directory-handling.service';
//default __dirname /Users/mpetersen/finder/dist/apps/api
@Controller('directory')
export class DirectoryHandlingController {
  constructor(private directoryHandlingService: DirectoryHandlingService) {}

  @Get()
  async readDirectory() {
    console.log(__dirname);
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
  @Delete('::name::path')
  async deleteDirectory(
    @Param('name') directory: string,
    @Param('path') path: string
  ) {
    await this.directoryHandlingService.deleteDirectory(path, directory);
    return await this.directoryHandlingService.readDirectory(path);
  }
  @Get('/copy::from::to::name::newname')
  async copyDirectory(
    @Param('from') fromPath: string,
    @Param('to') toPath: string,
    @Param('name') name: string,
    @Param('newname') newName: string
  ) {
    this.directoryHandlingService.copyDirectory(
      fromPath,
      name,
      toPath,
      newName
    );
    return await this.directoryHandlingService.readDirectory(fromPath);
  }
}
