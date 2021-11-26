/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { httpStatus } from '../utils/http-status';
import { ErrorHandler } from '../utils/error.utils';

function getFieldFromPrismaError(constraint: string) {
  return constraint.includes('username') ? 'Username' : 'Email';
}

function logger(
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (process.env.NODE_ENV === 'development') {
    console.error(`Error Logger: ${err.message}`);
  }
  next(err);
}

function responder(
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = err.status || httpStatus.serverError;
  const message = err.message || 'Something went wrong';

  if (err instanceof PrismaClientKnownRequestError) {
    const field = getFieldFromPrismaError(err.message);

    if (err.code === 'P2002') {
      return res
        .status(status)
        .json({ status, message: `${err.message} already in use` });
    }
  }
  return res.status(status).json({ status, message });
}

export const ErrorsMiddleWare = {
  logger,
  responder,
};
