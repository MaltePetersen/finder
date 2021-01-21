import { Module } from '@nestjs/common';

import { FileHandlingModule } from './feature/file-handling/file-handling.module';
import { DirectoryHandlingModule } from './feature/directory-handling/directory-handling.module';
import { CommonModule } from './common/common.module';
import { DatabaseHandlingModule } from './feature/database-handling/database-handling.module';

@Module({
  imports: [FileHandlingModule, DirectoryHandlingModule, DatabaseHandlingModule, CommonModule],
})
export class AppModule {}
