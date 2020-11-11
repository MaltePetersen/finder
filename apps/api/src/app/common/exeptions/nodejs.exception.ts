import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch()
export class ErrnoExeption implements ExceptionFilter {
  catch(exeption: NodeJS.ErrnoException, host: ArgumentsHost) {
    const ctx = host.switchToHttp;
  }
}
