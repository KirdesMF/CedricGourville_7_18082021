import { Comment } from '@prisma/client';
import { NextFunction, Response, Request } from 'express';
import { CommentServices } from '../services/comment.services';
import { httpStatus } from '../utils/http-status';

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body as Comment;
    console.log(req.body.userId);
    const comments = await CommentServices.createComment(data);
    res.status(httpStatus.OK).json(comments);
  } catch (error) {
    next(error);
  }
}

export const CommentController = { create };
