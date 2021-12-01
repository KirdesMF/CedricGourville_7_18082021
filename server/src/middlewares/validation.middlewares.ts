import { NextFunction, Request, Response } from 'express';
import { checkSchema, Schema, validationResult } from 'express-validator';
import { ErrorHandler } from '../utils/error.utils';
import { httpStatus } from '../utils/http-status';

// more secure regex password must be :
// more than 8 chars
// at least one number
// at least one special character
// at least one uppercase  and one lowercase letter

// prettier-ignore
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const REGEX_EMAIL = /.+@groupomania.com+/;

const registerValidatorSchema: Schema = {
  email: {
    in: 'body',
    notEmpty: true,
    normalizeEmail: true,
    isEmail: true,
    errorMessage: 'Invalid adress mail',
    custom: {
      options: (value: string) => {
        if (!REGEX_EMAIL.test(value)) {
          throw new Error('You must use a groupomania email');
        }

        return true;
      },
    },
  },
  password: {
    in: 'body',
    notEmpty: true,
    custom: {
      options: (value: string) => {
        if (!PASSWORD_REGEX.test(value)) {
          throw new Error(
            'Password must be more than 8 chars, at least one number, at least one special character, at least one uppercase and one lowercase letter'
          );
        }
        return true;
      },
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

const CreatePostValidatorSchema: Schema = {
  title: {
    in: 'body',
    notEmpty: true,
    isLength: {
      errorMessage: 'Please provide a title with at least 2 characters',
      options: { min: 2 },
    },
  },
  content: {
    in: 'body',
    notEmpty: true,
    isLength: {
      errorMessage: 'Please provide a content with at least 2 characters',
      options: { min: 2 },
    },
  },
};

const UpdateUserValidatorSchema: Schema = {
  username: {
    in: 'body',
    optional: {
      options: { nullable: true },
    },
    isLength: {
      errorMessage: 'Please provide a username with at least 2 characters',
      options: { min: 2 },
    },
  },
  firstName: {
    in: 'body',
    optional: {
      options: { nullable: true },
    },
    isLength: {
      errorMessage: 'Please provide a first name with at least 2 characters',
      options: { min: 2 },
    },
  },
  lastName: {
    in: 'body',
    optional: {
      options: { nullable: true },
    },
    isLength: {
      errorMessage: 'Please provide a last name with at least 2 characters',
      options: { min: 2 },
    },
  },
  bio: {
    in: 'body',
    optional: {
      options: { nullable: true },
    },
    isLength: {
      errorMessage: 'Please provide a bio with at least 2 characters',
      options: { min: 2 },
    },
  },
};

const CommentValidatorSchema: Schema = {
  content: {
    in: 'body',
    notEmpty: true,
    isLength: {
      errorMessage: 'Please provide a content with at least 2 characters',
      options: { min: 2 },
    },
  },
};

export const validationRegister = checkSchema(registerValidatorSchema);
export const validationLogin = checkSchema(LoginValidatorSchema);
export const validationCreatePost = checkSchema(CreatePostValidatorSchema);
export const validationUpdateUser = checkSchema(UpdateUserValidatorSchema);
export const validationComment = checkSchema(CommentValidatorSchema);

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
