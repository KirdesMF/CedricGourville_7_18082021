import { User } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { config } from '../config/config';
import { RegisterServices } from '../services/register.services';
import { ErrorHandler } from '../utils/error.utils';
import { httpStatus } from '../utils/http-status';

async function registerUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { password, email } = req.body as User;

    if (!password || !email) {
      throw new ErrorHandler(
        httpStatus.unauthorized,
        '❌ Please provide a password and email'
      );
    }
    const user = await RegisterServices.createUser(req.body);

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
    const user = await RegisterServices.deleteUserById(parseInt(id, 10));
    res.status(httpStatus.OK).json(user);
  } catch (error) {
    next(error);
  }
}

export const RegisterControllers = {
  registerUser,
  unRegisterUser,
};
