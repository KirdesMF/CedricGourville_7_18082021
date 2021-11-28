import { NextFunction, Response, Request } from 'express';
import { verify } from 'jsonwebtoken';
import type { TokenVerify } from '../types';
import { ErrorHandler } from '../utils/error.utils';
import { httpStatus } from '../utils/http-status';

const SECRET = process.env.SECRET || 'secret';

export async function authorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies?.jwt;
    if (!token) {
      throw new ErrorHandler(httpStatus.unauthorized, 'Token is expired');
    }

    const { userId } = verify(token, SECRET) as TokenVerify;
    req.userId = userId;

    next();
  } catch (error) {
    next(error);
  }
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies?.jwt;
    if (!token) {
      throw new ErrorHandler(httpStatus.forbidden, 'Token is expired');
    }

    const user = verify(token, SECRET) as TokenVerify;
    if (!user) {
      throw new ErrorHandler(
        httpStatus.forbidden,
        'Something went wrong with token'
      );
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    const { role } = req.user;
    if (role !== 'ADMIN') {
      throw new ErrorHandler(
        httpStatus.forbidden,
        'You are not authorized to perform this action'
      );
    }

    next();
  } catch (error) {
    next(error);
  }
}
