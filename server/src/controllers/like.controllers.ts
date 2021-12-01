import { NextFunction, Response, Request } from 'express';
import { Like } from '.prisma/client';
import { LikeServices } from '../services/like.services';
import { httpStatus } from '../utils/http-status';

export async function getLikesPost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;

  try {
    const likes = await LikeServices.getLikes(id);
    res.status(httpStatus.OK).json(likes);
  } catch (error) {
    next(error);
  }
}

export async function likePost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body as Like;
  try {
    await LikeServices.createLike(data);
    res.status(httpStatus.OK).json({ message: 'Successfully liked' });
  } catch (error) {
    next(error);
  }
}

export async function unLikePost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  try {
    await LikeServices.deleteLike(id);
    res.status(httpStatus.OK).json({ message: 'Successfully unliked' });
  } catch (error) {
    next(error);
  }
}

export const LikeControllers = { likePost, unLikePost, getLikesPost };
