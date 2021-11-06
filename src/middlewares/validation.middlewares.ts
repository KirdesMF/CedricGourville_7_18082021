import { checkSchema, Schema } from 'express-validator';
import { Department } from '.prisma/client';

const registerValidatorSchema: Schema = {
  email: {
    in: 'body',
    notEmpty: true,
    normalizeEmail: true,
    isEmail: true,
    errorMessage: 'Invalid adress mail',
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
  department: {
    in: 'body',
    notEmpty: true,
    custom: {
      options: (value) => {
        const dpt: (keyof typeof Department)[] = [
          'DIRECTION',
          'COM',
          'SOCIAL',
          'TECH',
          'VISITOR',
        ];

        const list = dpt.join(',');
        const error = `Please provide a department from this list: ${list}`;

        if (!dpt.includes(value)) {
          throw new Error(error);
        }

        return true;
      },
    },
  },
};

export const validationRegister = checkSchema(registerValidatorSchema);
