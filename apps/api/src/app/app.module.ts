import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileHandlingModule } from './feature/file-handling/file-handling.module';
import { DirectoryHandlingModule } from './feature/directory-handling/directory-handling.module';

@Module({
  imports: [FileHandlingModule, DirectoryHandlingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
