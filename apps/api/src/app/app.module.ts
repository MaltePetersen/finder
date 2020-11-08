import { Module } from '@nestjs/common';

import { FileHandlingModule } from './feature/file-handling/file-handling.module';
import { DirectoryHandlingModule } from './feature/directory-handling/directory-handling.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [FileHandlingModule, DirectoryHandlingModule, CommonModule],
})
export class AppModule {}
