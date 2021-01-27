import { ExceptionFilter, Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { throwError } from 'rxjs';
import { logger } from '../logger/logger.middleware';

@Catch()
export class ErrnoExeptionFilter implements ExceptionFilter {
  catch(exeption: NodeJS.ErrnoException, host: ArgumentsHost) {
    let logger = new Logger();
    logger.error(exeption);
  }
}
