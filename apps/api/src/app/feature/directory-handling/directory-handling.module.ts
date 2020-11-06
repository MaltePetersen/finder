import { Module } from '@nestjs/common';
import { DirectoryHandlingController } from './directory-handling.controller';
import { DirectoryHandlingService } from './directory-handling.service';

@Module({
  controllers: [DirectoryHandlingController],
  providers: [DirectoryHandlingService],
})
export class DirectoryHandlingModule {}
