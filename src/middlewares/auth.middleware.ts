import { NextFunction, Response, Request } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import { ErrorHandler } from '../utils/error.utils';
import { httpStatus } from '../utils/http-status';

export async function authorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies?.jwt;
    if (!token) {
      throw new ErrorHandler(httpStatus.unauthorized, 'User not authorized');
    }

    const { id } = verify(
      token,
      process.env.SECRET || ('secret' as string)
    ) as JwtPayload;

    req.userId = id;
    req.body.userId = id;

    next();
  } catch (error) {
    next(error);
  }
}
