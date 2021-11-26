import { NextFunction, Response, Request } from 'express';
import { verify } from 'jsonwebtoken';
import { ErrorHandler } from '../utils/error.utils';
import { httpStatus } from '../utils/http-status';
import type { Role } from '.prisma/client';

type TokenVerify = {
  id: string;
  role: Role;
};

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

    const { id, role } = verify(
      token,
      process.env.SECRET || 'secret'
    ) as TokenVerify;

    if (!id || !role) {
      throw new ErrorHandler(httpStatus.unauthorized, 'User not authorized');
    }

    req.userId = id;

    next();
  } catch (error) {
    next(error);
  }
}
