import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DatabaseHandlingService } from './database-handling.service';

@Controller('database-handling')
export class DatabaseHandlingController {
  constructor(private databaseHandlingService: DatabaseHandlingService) {}

  @Get('/collections')
  async getAllCollections() {
    return await this.databaseHandlingService.getallCollections();
  }

  @Get('/collection::colname')
  async getCollection(@Param('colname') colname: string) {
    return await this.databaseHandlingService.getCollection(colname);
  }

  @Delete('/collection::colname')
  async deleteCollection(@Param('colname') colname: string) {
    return await this.databaseHandlingService.deleteCollection(colname);
  }

  @Post('/collection::colname/entry')
  async createEntry(@Body() entry: Object, @Param('colname') colname: string) {
    console.log(entry);
    return await this.databaseHandlingService.createEntry(colname, entry);
  }

  @Put('/collection::colname/entry::id')
  async updateEntry(@Body() entry: Object, @Param('colname') colname: string, @Param('id') id: string) {
    return await this.databaseHandlingService.updateEntry(colname, id, entry);
  }

  @Delete('/collection::colname/entry::id')
  async deleteEntry(@Param('colname') colname: string, @Param('id') id: string) {
    return await this.databaseHandlingService.deleteEntry(colname, id);
  }
}