import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { throwError } from 'rxjs';

@Catch()
export class ErrnoExeptionFilter implements ExceptionFilter {
  catch(exeption: NodeJS.ErrnoException, host: ArgumentsHost) {
    console.log(exeption);
  }
}
