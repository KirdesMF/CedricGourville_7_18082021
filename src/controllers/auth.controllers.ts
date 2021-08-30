import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { AuthServices } from '../services/auth.services';
import { ErrorHandler } from '../utils/error.utils';
import { httpStatus } from '../utils/http-status';

async function login(req: Request, res: Response, next: NextFunction) {
  const { password, email } = req.body as User;

  if (!password || !email) {
    next(
      new ErrorHandler(
        httpStatus.unauthorized,
        '❌ Please provide a password and an email'
      )
    );
  }

  try {
    const user = await AuthServices.findUserByEmail(email);

    if (!user) {
      throw new ErrorHandler(500, `❌ We did not find the user`);
    }

    const isCorrectPassword = await compare(password, user.password);

    if (!isCorrectPassword) {
      throw new ErrorHandler(500, `❌ Wrong Password`);
    }

    const token = sign({ id: user.id }, process.env.SECRET || 'secret', {
      expiresIn: '12h',
    });

    res.cookie('jwt', token, {
      sameSite: 'none',
      secure: true,
      httpOnly: true,
      maxAge: 120, // 2min
    });

    res.status(httpStatus.OK).json({ success: `🎉 Successfully connected` });
  } catch (error) {
    next(error);
  }
}

async function logout(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  try {
    const user = await AuthServices.findUserById(parseInt(id, 10));

    if (!user) {
      throw new ErrorHandler(500, `❌ We did not find the user`);
    }

    res.cookie('jwt', 'logged-out', {
      httpOnly: true,
      maxAge: 30,
    });
    res.status(httpStatus.OK).json({ success: '👋 Successfully logged out' });
  } catch (error) {
    next(error);
  }
}

export const AuthControllers = {
  login,
  logout,
};
