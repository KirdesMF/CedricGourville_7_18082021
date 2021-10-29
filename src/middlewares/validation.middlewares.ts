import { Schema } from 'express-validator';

export const registerValidatorSchema: Schema = {
  email: {
    in: 'body',
    notEmpty: true,
    normalizeEmail: true,
    isEmail: { bail: true },
    errorMessage: 'Invalid adress mail',
  },
  password: {
    in: 'body',
    isLength: {
      errorMessage: 'Please provide a strong password at least 8 characters',
      options: { min: 8 },
    },
  },
  username: {
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
