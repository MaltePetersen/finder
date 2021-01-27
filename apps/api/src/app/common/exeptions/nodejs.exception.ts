import { ExceptionFilter, Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { inspect } from 'util';

@Catch()
export class ErrnoExeptionFilter implements ExceptionFilter {
  catch(exeption: NodeJS.ErrnoException, host: ArgumentsHost) {
    let logger = new Logger();
    logger.error(inspect(exeption));
  }
}
