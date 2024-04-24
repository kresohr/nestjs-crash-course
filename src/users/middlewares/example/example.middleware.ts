import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Example Middleware.');
    console.log(req.headers.authorization);
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException(
        'Invalid authorization token!',
        HttpStatus.FORBIDDEN,
      );

    if (authorization === 'secret') next();
    else
      throw new HttpException('No authorization token!', HttpStatus.FORBIDDEN);
  }
}
