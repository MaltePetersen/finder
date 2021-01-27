import { Logger } from '@nestjs/common';

export function logger(req: Request, res: Response, next: Function) {
  let logger = new Logger();
  //logger.log(req);
  //logger.log(req);
  //logger.log(res.json);
  //logger.log(`${req}\n${res}`);
  next();
}
