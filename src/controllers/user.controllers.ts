import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { NextFunction, Response, Request } from 'express';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { config } from '../config/config';
import { UserServices } from '../services/user.services';
import { ErrorHandler } from '../utils/error.utils';
import { httpStatus } from '../utils/http-status';

/**
 *
 * @param req
 * @param res
 * @param next
 */
async function register(req: Request, res: Response, next: NextFunction) {
  const body = req.body as User;

  try {
    const user = await UserServices.createUser(body);

    if (!user) {
      throw new ErrorHandler(httpStatus.serverError, '❌ Something went wrong');
    }

    const token = sign({ id: user.id }, process.env.SECRET || 'secret', {
      expiresIn: '12h',
    });

    res
      .cookie('jwt', token, config.cookies)
      .status(httpStatus.created)
      .json({ message: '✔ User successfully created', user });
  } catch (error) {
    next(error);
  }
}

/**
 *
 * @param req
 * @param res
 * @param next
 */
async function login(req: Request, res: Response, next: NextFunction) {
  const { password, log } = req.body as Record<string, string>;
  const lastConnection = new Date();

  let user: User | null;
  let errorMessage: string;

  try {
    // if email input
    if (log.includes('@')) {
      user = await UserServices.getUser('email', log);
      errorMessage = 'We did not find this user email';

      if (!user) {
        throw new ErrorHandler(httpStatus.forbidden, `❌ ${errorMessage}`);
      }
      await UserServices.updateUser('email', user.email, { lastConnection });
    } else {
      // if username input
      user = await UserServices.getUser('username', log);
      errorMessage = 'We did not find this username';

      if (!user) {
        throw new ErrorHandler(httpStatus.forbidden, `❌ ${errorMessage}`);
      }
      await UserServices.updateUser('username', user.username, {
        lastConnection,
      });
    }

    // check password
    const isCorrectPassword = await compare(password, user.password);

    if (!isCorrectPassword) {
      throw new ErrorHandler(httpStatus.forbidden, `❌ Wrong Password`);
    }

    const token = sign({ id: user.id }, process.env.SECRET || 'secret', {
      expiresIn: config.jwt.expire,
    });

    res
      .cookie('jwt', token, config.cookies)
      .status(httpStatus.OK)
      .json({ message: `🎉 Successfully connected`, user });
  } catch (error) {
    next(error);
  }
}

async function edit(req: Request, res: Response, next: NextFunction) {
  const userId = req?.userId;
  const body = req.body as User;
  try {
    const user = await UserServices.updateUser('id', userId, body);
    res
      .status(httpStatus.OK)
      .json({ message: `🎉 Successfully updated`, user });
  } catch (error) {
    next(error);
  }
}

/**
 *
 * @param req
 * @param res
 * @param next
 */
async function logout(req: Request, res: Response, next: NextFunction) {
  res
    .clearCookie('jwt')
    .status(httpStatus.OK)
    .json({ message: '👋 Successfully logged out' });

  next();
}

/**
 *
 * @param req
 * @param res
 * @param next
 */
async function unRegister(req: Request, res: Response, next: NextFunction) {
  const id = req.userId;
  try {
    await UserServices.deleteUser(id);
    res
      .clearCookie('jwt')
      .status(httpStatus.OK)
      .json({ message: '👋 user successfully  deleted' });
  } catch (error) {
    next(error);
  }
}

async function checkNotUsed(req: Request, res: Response, next: NextFunction) {
  const email = req.body?.email;
  const username = req.body?.username;

  try {
    if (email) {
      const user = await UserServices.getUser('email', email);

      if (user) {
        throw new ErrorHandler(
          httpStatus.conflict,
          '❌ This email is already in use'
        );
      }

      res.json({ message: '✔ Ok, this email is not in use' });
    }

    if (username) {
      const user = await UserServices.getUser('username', username);

      if (user) {
        throw new ErrorHandler(
          httpStatus.conflict,
          '❌ This username is already in use'
        );
      }

      res.json({ message: '✔ Ok, this username is not in use' });
    }
  } catch (error) {
    next(error);
  }
}

async function logged(req: Request, res: Response, next: NextFunction) {
  if (req.cookies.jwt || req.headers.cookie) {
    const token = req.cookies.jwt as string;
    const { id } = verify(
      token,
      process.env.SECRET || ('secret' as string)
    ) as JwtPayload;

    const user = await UserServices.getUser('id', id);

    if (user) {
      const { password: _, ...safe } = user;
      return res.status(httpStatus.OK).json(safe);
    }
  }

  return next(
    new ErrorHandler(
      httpStatus.unauthorized,
      '❌ Session expired or User not logged in'
    )
  );
}

export const UserControllers = {
  login,
  edit,
  logout,
  register,
  unRegister,
  checkNotUsed,
  logged,
};
