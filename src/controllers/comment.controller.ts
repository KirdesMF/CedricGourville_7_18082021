import { NextFunction, Response, Request } from 'express';
import { CommentServices } from '../services/comment.services';
import { httpStatus } from '../utils/http-status';

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { userId, body } = req;
    const comments = await CommentServices.createComment({ ...body, userId });

    res.status(httpStatus.OK).json(comments);
  } catch (error) {
    next(error);
  }
}

export const CommentController = { create };
