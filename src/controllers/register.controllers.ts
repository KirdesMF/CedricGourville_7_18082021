import { User } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { config } from '../config/config';
import { UserServices } from '../services/user.services';
import { ErrorHandler } from '../utils/error.utils';
import { httpStatus } from '../utils/http-status';

// TODO
// add validation middleware

async function registerUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { password, email } = req.body as User;

    if (!password || !email) {
      throw new ErrorHandler(
        httpStatus.unauthorized,
        '❌ Please provide a password and email'
      );
    }
    const user = await UserServices.createUser(req.body);

    if (user) {
      const token = sign({ id: user.id }, process.env.SECRET || 'secret', {
        expiresIn: '12h',
      });

      res
        .cookie('jwt', token, config.cookies)
        .status(httpStatus.created)
        .json({ success: '✔ User successfully created', user });
    }
  } catch (error) {
    next(error);
  }
}

async function unRegisterUser(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const user = await UserServices.deleteUserById(parseInt(id, 10));
    res.status(httpStatus.OK).json(user);
  } catch (error) {
    next(error);
  }
}

async function checkUniqueValue(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const email = req.body?.email;
  const username = req.body?.userName;

  try {
    if (email) {
      const user = await UserServices.findUserByEmail(email);

      if (user) {
        throw new ErrorHandler(
          httpStatus.conflict,
          '❌ This email is already in use'
        );
      }

      res.json({ message: 'Ok, this email is not in use' });
    }

    if (username) {
      const user = await UserServices.findUserByUserName(username);

      if (user) {
        throw new ErrorHandler(
          httpStatus.conflict,
          '❌ This username is already in use'
        );
      }

      res.json({ message: 'Ok, this username is not in use' });
    }
  } catch (error) {
    next(error);
  }
}

export const RegisterControllers = {
  registerUser,
  unRegisterUser,
  checkUniqueValue,
};
