import { Injectable } from '@nestjs/common';
import { DaoUsersService } from './dao-users/dao-users.service';
export type User = any;

@Injectable()
export class UsersService {
  constructor(private daoUserService: DaoUsersService){}
  private readonly users = [
    {
      userId: 1,
      username: 'admin',
      password: 'admin',
    }
  ];

  async findOne(username: string): Promise<User | undefined> {
   let  inMemoryUser = this.users.find((user) => user.username === username);
   if(!inMemoryUser){
   const databaseUsers = await this.daoUserService.getUserCollection()
    let user = databaseUsers.find((user) => user.username === username)
    return user;
  }
  return inMemoryUser;
  }
}
