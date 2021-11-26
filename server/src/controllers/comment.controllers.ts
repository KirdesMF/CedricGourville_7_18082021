import { Comment } from '@prisma/client';
import { NextFunction, Response, Request } from 'express';
import { CommentServices } from '../services/comment.services';
import { httpStatus } from '../utils/http-status';

async function create(req: Request, res: Response, next: NextFunction) {
  const body = req.body as Comment;
  try {
    const comments = await CommentServices.create(body);

    res.status(httpStatus.OK).json(comments);
  } catch (error) {
    next(error);
  }
}

export const CommentControllers = { create };
