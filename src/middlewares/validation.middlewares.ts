import { Schema } from 'express-validator';
import { UserServices } from '../services/user.services';

export const registerValidatorSchema: Schema = {
  email: {
    in: 'body',
    notEmpty: true,
    normalizeEmail: true,
    isEmail: { bail: true },
    errorMessage: 'Invalid adress mail',
    custom: {
      options: (value: string) => {
        UserServices.findUserByEmail(value).then((user) => {
          if (user) {
            throw new Error('Already in use');
          }
          return true;
        });
      },
    },
  },
  password: {
    in: 'body',
    isLength: {
      errorMessage: 'Please provide a strong password at least 8 characters',
      options: { min: 8 },
    },
  },
  userName: {
    in: 'body',
    notEmpty: true,
    trim: true,
    escape: true,
    isLength: {
      errorMessage: 'Please provide a username with at least 2 characters',
      options: { min: 2 },
    },
  },
};
