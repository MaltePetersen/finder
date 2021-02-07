import { Module } from '@nestjs/common';
import { DaoUsersService } from './dao-users/dao-users.service';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, DaoUsersService],
  exports: [UsersService],
})
export class UsersModule {}
