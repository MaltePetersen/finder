import { Module } from '@nestjs/common';

import { FileHandlingModule } from './feature/file-handling/file-handling.module';
import { DirectoryHandlingModule } from './feature/directory-handling/directory-handling.module';
import { CommonModule } from './common/common.module';
import { DatabaseHandlingModule } from './feature/database-handling/database-handling.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './common/auth/jwt-auth.guard';

@Module({
  imports: [FileHandlingModule, DirectoryHandlingModule, DatabaseHandlingModule, CommonModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ]
})
export class AppModule {}
