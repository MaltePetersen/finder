import { Global, Module } from '@nestjs/common';
import { SharedDirectoryService } from './service/shared-directory/shared-directory.service';
@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [SharedDirectoryService],
  exports: [SharedDirectoryService],
})
export class CommonModule {}
