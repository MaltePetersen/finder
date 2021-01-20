import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DatabaseHandlingService } from './database-handling.service';

@Controller('database-handling')
export class DatabaseHandlingController {
  constructor(private databaseHandlingService: DatabaseHandlingService) {}

  @Get('::colname')
  async getCollection(@Param('colname') colname: string) {
    return await this.databaseHandlingService.getCollection(colname);
  }

  @Delete('::colname')
  async deleteCollection(@Param('colname') colname: string) {
    return await this.databaseHandlingService.deleteCollection(colname);
  }

  @Post('::colname::name')
  async createEntry(@Param('colname') colname: string, @Param('name') name: string) {
    return await this.databaseHandlingService.createEntry(colname, name);
  }

  @Put('::colname::oldname::newname')
  async updateEntry(
    @Param('colname') colname: string,
    @Param('oldname') oldname: string,
    @Param('newname') newname: string
  ) {
    return await this.databaseHandlingService.updateEntry(colname, oldname, newname);
  }

  @Delete('::colname::name')
  async deleteEntry(@Param('colname') colname: string, @Param('name') name: string) {
    console.log('Colname: ' + colname + ', Name: ' + name);
    // return await this.databaseHandlingService.deleteEntry(colname, name);
  }
}
