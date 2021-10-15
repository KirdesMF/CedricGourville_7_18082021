import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { config } from '../config/config';
import { UserServices } from '../services/user.services';
import { ErrorHandler } from '../utils/error.utils';
import { httpStatus } from '../utils/http-status';

/**
 * @param req
 * @param res
 * @param next
 * @description log user
 */
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
    const user = await UserServices.findUserByEmail(email);

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

    res
      .cookie('jwt', token, config.cookies)
      .status(httpStatus.OK)
      .send({ success: `🎉 Successfully connected`, user, token });
  } catch (error) {
    next(error);
  }
}

/**
 *
 * @param req
 * @param res
 * @param next
 * @description log out user
 */
async function logout(req: Request, res: Response, next: NextFunction) {
  res
    .clearCookie('jwt')
    .status(httpStatus.OK)
    .json({ success: '👋 Successfully logged out' });

  next();
}

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns
 * @description
 */
async function checkUserLogged(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.cookies.jwt || req.headers.cookie) {
    const token = req.cookies.jwt as string;
    const { id } = verify(
      token,
      process.env.SECRET || ('secret' as string)
    ) as JwtPayload;

    const user = await UserServices.findUserById(id);

    if (user) {
      const { password: _, ...safe } = user;
      return res.status(httpStatus.OK).json({ user: safe });
    }
  }

  return next(
    new ErrorHandler(
      httpStatus.unauthorized,
      '❌ Session expired or User not logged in'
    )
  );
}

// Export
export const AuthControllers = {
  login,
  logout,
  checkUserLogged,
};
