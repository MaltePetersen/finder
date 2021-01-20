import { Global, Module } from '@nestjs/common';
import { DatabaseHandlingController } from './database-handling.controller';
import { DatabaseHandlingService } from './database-handling.service';
@Global()
@Module({
  controllers: [DatabaseHandlingController],
  providers: [DatabaseHandlingService],
})
export class DatabaseHandlingModule {}
