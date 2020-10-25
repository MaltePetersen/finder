import { Injectable } from '@nestjs/common';
import { Message } from '@finder/api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
