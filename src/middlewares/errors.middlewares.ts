// TODO improve TS for unused var
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { httpStatus } from '../utils/http-status';
import { ErrorHandler } from '../utils/error.utils';

function logger(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(`Error Logger: ${err}`);
  next(err);
}

function responder(
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = err.status || httpStatus.serverError;
  const error = err.message || 'Something went wrong';
  res.status(status).json({ status, error });
}

export const ErrorsMiddleWare = {
  logger,
  responder,
};
