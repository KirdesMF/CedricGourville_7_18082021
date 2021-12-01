import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { NextFunction, Response, Request } from 'express';
import { sign } from 'jsonwebtoken';
import { config } from '../config/config';
import { ImageKitServices } from '../services/imagekit.services';
import * as UserServices from '../services/user.services';
import { ErrorHandler } from '../utils/error.utils';
import { httpStatus } from '../utils/http-status';

/**
 * utils
 */
function removePassword<T extends Partial<User>>(user: T) {
  const { password, ...safeUser } = user;
  return safeUser;
}

function signToken({ userId, role }: { userId: string; role: string }) {
  return sign({ userId, role }, process.env.SECRET || 'secret', {
    expiresIn: config.jwt.expire,
  });
}

/**
 * register user
 */
export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = req.body as Pick<User, 'email' | 'username' | 'password'>;

  try {
    // create user
    const user = await UserServices.createUser(body);
    if (!user) {
      throw new ErrorHandler(httpStatus.serverError, '❌ Something went wrong');
    }

    // sign token
    const token = signToken({ userId: user.id, role: user.role });

    // send response
    res
      .cookie('jwt', token, config.cookies)
      .status(httpStatus.created)
      .json(removePassword(user));
  } catch (error) {
    next(error);
  }
}

/**
 * login user
 */
export async function login(req: Request, res: Response, next: NextFunction) {
  const { password, log } = req.body as Record<string, string>;
  const field = log.includes('@') ? 'email' : 'username';
  const message = `We did not find this ${field}`;
  const lastConnection = new Date();

  try {
    // check if user exists
    const user = await UserServices.getUser(field, log);
    if (!user) {
      throw new ErrorHandler(httpStatus.forbidden, `❌ ${message}`);
    }

    // check password
    const isCorrectPassword = await compare(password, user.password);
    if (!isCorrectPassword) {
      throw new ErrorHandler(httpStatus.forbidden, `❌ Wrong Password`);
    }

    // update last connection
    await UserServices.updateUser(field, user[field], {
      lastConnection,
    });

    // sign token
    const token = signToken({ userId: user.id, role: user.role });

    // send response
    res
      .cookie('jwt', token, config.cookies)
      .status(httpStatus.OK)
      .json(removePassword(user));
  } catch (error) {
    next(error);
  }
}

/**
 * check looged user
 */
export async function getCurrentUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId } = req.user;

  try {
    const user = await UserServices.getUser('id', userId);

    if (!user) {
      throw new ErrorHandler(
        httpStatus.unauthorized,
        '❌ Session expired or User not logged in'
      );
    }

    res.status(httpStatus.accepted).json(removePassword(user));
  } catch (error) {
    next(error);
  }
}

/**
 * get user by id
 */
export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const user = await UserServices.getUserById(id);

    if (!user) {
      throw new ErrorHandler(
        httpStatus.unauthorized,
        '❌ This user does not exist or something went wrong'
      );
    }

    res.status(httpStatus.OK).json(user);
  } catch (error) {
    next(error);
  }
}

/**
 * get all users
 */
export async function getAllUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await UserServices.getAllUsers();

    res.status(httpStatus.OK).json(users);
  } catch (error) {
    next(error);
  }
}

/**
 * update user
 */
export async function edit(req: Request, res: Response, next: NextFunction) {
  const { userId } = req.user;
  const data = req.body as Partial<User>;
  const file = req?.file;
  let user: User;

  try {
    if (!file) {
      // if there is no file like images, update user
      user = await UserServices.updateUser('id', userId, data);
    } else {
      // get avatar id
      const currentAvatarId = await UserServices.getAvatarId(userId);

      // upload img to imagekit
      const { avatar, avatarId } = await ImageKitServices.upload(
        file,
        'avatar'
      );

      // throw if there is an issue
      if (!avatar) {
        throw new ErrorHandler(
          httpStatus.serverError,
          'Something went wrong with your image pls try again'
        );
      }

      // if image correctly upload delete old ones
      if (currentAvatarId && avatarId) {
        await ImageKitServices.remove(currentAvatarId);
      }

      // update the user
      user = await UserServices.updateUser('id', userId, {
        ...data,
        avatar,
        avatarId,
      });
    }

    // throw if something wrong with db
    if (!user) {
      throw new ErrorHandler(httpStatus.serverError, 'User not updated');
    }

    res.status(httpStatus.OK).json(removePassword(user));
  } catch (error) {
    next(error);
  }
}

/**
 * update user department
 */
export async function updateDepartment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id, department } = req.body as Pick<User, 'department' | 'id'>;

  try {
    const user = await UserServices.updateUser('id', id, { department });

    if (!user) {
      throw new ErrorHandler(httpStatus.serverError, 'User not updated');
    }

    res.status(httpStatus.OK).json(removePassword(user));
  } catch (error) {
    next(error);
  }
}
/**
 * log out user
 */
export async function logout(req: Request, res: Response, next: NextFunction) {
  res
    .clearCookie('jwt')
    .status(httpStatus.OK)
    .json({ message: '👋 Successfully logged out' });

  next();
}

/**
 * delete user
 */
export async function unRegister(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId } = req.user;
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

/**
 * delete user from admin
 */
export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;

  try {
    const avatarId = await UserServices.getAvatarId(id);
    if (avatarId) await ImageKitServices.remove(avatarId);
    await UserServices.deleteUser(id);

    res
      .status(httpStatus.OK)
      .json({ message: '👋 user successfully  deleted' });
  } catch (error) {
    next(error);
  }
}
