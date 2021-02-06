import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppController } from './login/app.controller';
import { SharedDirectoryService } from './service/shared-directory/shared-directory.service';
import { UsersModule } from './users/users.module';
@Global()
@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController],
  providers: [
    SharedDirectoryService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [SharedDirectoryService],
})
export class CommonModule {}
