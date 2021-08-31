import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { AuthServices } from '../services/auth.services';
import { ErrorHandler } from '../utils/error.utils';
import { httpStatus } from '../utils/http-status';

const options = {
  maxAge: 5000 * 5000,
  httpOnly: true,
  secure: true,
  sameSite: 'lax',
} as const;

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

    res
      .cookie('jwt', token, options)
      .status(httpStatus.OK)
      .send({ success: `🎉 Successfully connected`, user, token });
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

    res.cookie('jwt', 'logged-out');

    res.status(httpStatus.OK).json({ success: '👋 Successfully logged out' });
  } catch (error) {
    next(error);
  }
}

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
    const user = await AuthServices.findUserById(id);

    if (user) {
      // TODO make an utils
      // remove password from response
      const removeProp = 'password';
      const { [removeProp]: remove, ...safe } = user;
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

export const AuthControllers = {
  login,
  logout,
  checkUserLogged,
};
