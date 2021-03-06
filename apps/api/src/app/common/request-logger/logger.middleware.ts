import { Logger } from '@nestjs/common';
import { inspect } from 'util';

export function logger(req: Request, res: Response, next: Function) {
  let logger = new Logger();
  logger.log(inspect(req.headers));
  logger.log(inspect(res.headers));
  next();
}
