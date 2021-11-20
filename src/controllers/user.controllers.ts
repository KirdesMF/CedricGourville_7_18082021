import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { NextFunction, Response, Request } from 'express';
import { validationResult } from 'express-validator';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { config } from '../config/config';
import { ImageKitServices } from '../services/imagekit.services';
import { UserServices } from '../services/user.services';
import { ErrorHandler } from '../utils/error.utils';
import { httpStatus } from '../utils/http-status';

/**
 * register user
 */
async function register(req: Request, res: Response, next: NextFunction) {
  const body = req.body as User;
  const errors = validationResult(req);

  try {
    if (!errors.isEmpty()) {
      const arr = errors.array();
      const message = arr.map((a) => a.msg).join(', ');
      throw new ErrorHandler(
        httpStatus.badRequest,
        `Can you check this: ${message}`
      );
    }

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
 * login user
 */
async function login(req: Request, res: Response, next: NextFunction) {
  const { password, log } = req.body as Record<string, string>;
  const field = log.includes('@') ? 'email' : 'username';
  const message = `We did not find this ${field}`;
  const lastConnection = new Date();

  try {
    const user = await UserServices.getUser(field, log);

    if (!user) {
      throw new ErrorHandler(httpStatus.forbidden, `❌ ${message}`);
    }

    await UserServices.updateUser(field, user[field], {
      lastConnection,
    });

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

/**
 * get user by id
 */
async function getUserById(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const user = await UserServices.getUserById(id);
    res.status(httpStatus.OK).json(user);
  } catch (error) {
    next(error);
  }
}

/**
 * update user
 */
async function edit(req: Request, res: Response, next: NextFunction) {
  const userId = req?.userId;
  const body = req.body as User;
  const file = req?.file;
  let user: User;

  try {
    if (!file) user = await UserServices.updateUser('id', userId, body);
    else {
      const currentAvatarId = await UserServices.getAvatarId(userId);
      const { avatar, avatarId } = await ImageKitServices.upload(
        file,
        'avatar'
      );

      if (!avatar) {
        throw new ErrorHandler(
          httpStatus.serverError,
          'Something went wrong with your image pls try again'
        );
      }

      if (currentAvatarId && avatarId) {
        await ImageKitServices.remove(currentAvatarId);
      }

      user = await UserServices.updateUser('id', userId, {
        ...body,
        avatar,
        avatarId,
      });
    }

    if (!user) {
      throw new ErrorHandler(httpStatus.serverError, 'User not updated');
    }

    res
      .status(httpStatus.OK)
      .json({ message: `🎉 Successfully updated`, user });
  } catch (error) {
    next(error);
  }
}

/**
 * log out user
 */
async function logout(req: Request, res: Response, next: NextFunction) {
  res
    .clearCookie('jwt')
    .status(httpStatus.OK)
    .json({ message: '👋 Successfully logged out' });

  next();
}

/**
 * delete user
 */
async function unRegister(req: Request, res: Response, next: NextFunction) {
  const { userId } = req;
  try {
    const avatarId = await UserServices.getAvatarId(userId);
    if (avatarId) await ImageKitServices.remove(avatarId);
    await UserServices.deleteUser(userId);

    res
      .clearCookie('jwt')
      .status(httpStatus.OK)
      .json({ message: '👋 user successfully  deleted' });
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
  getUserById,
  logout,
  register,
  unRegister,
  logged,
};
