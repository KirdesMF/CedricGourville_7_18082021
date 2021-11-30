import { NextFunction, Request, Response } from 'express';
import { checkSchema, Schema, validationResult } from 'express-validator';
import { ErrorHandler } from '../utils/error.utils';
import { httpStatus } from '../utils/http-status';

const registerValidatorSchema: Schema = {
  email: {
    in: 'body',
    notEmpty: true,
    normalizeEmail: true,
    isEmail: true,
    errorMessage: 'Invalid adress mail',
    custom: {
      options: (value: string) => {
        if (!value.includes('@groupomania.com')) {
          throw new Error('You must use a groupomania email');
        }

        return true;
      },
    },
  },
  password: {
    in: 'body',
    notEmpty: true,
    isLength: {
      errorMessage: 'Please provide a strong password at least 8 characters',
      options: { min: 8 },
    },
  },
  username: {
    in: 'body',
    notEmpty: true,
    isLength: {
      errorMessage: 'Please provide a username with at least 2 characters',
      options: { min: 2 },
    },
    custom: {
      options: (value: string) => {
        if (value.includes('@')) {
          throw new Error('username cannot contains special characters');
        }

        return true;
      },
    },
  },
};

const LoginValidatorSchema: Schema = {
  log: {
    in: 'body',
    notEmpty: true,
    custom: {
      options: (value: string) => {
        if (value.includes('@') && !value.includes('groupomania.com')) {
          throw new Error('You must use a groupomania email or your username');
        }
        return true;
      },
    },
  },
};

export const validationLogin = checkSchema(LoginValidatorSchema);
export const validationRegister = checkSchema(registerValidatorSchema);

export async function validationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);

  try {
    // check if there are errors
    if (!errors.isEmpty()) {
      const arr = errors.array();
      const errorMessage = arr.map((a) => a.msg).join(', ');
      throw new ErrorHandler(
        httpStatus.badRequest,
        `Can you check this: ${errorMessage}`
      );
    }
    next();
  } catch (error) {
    next(error);
  }
}
