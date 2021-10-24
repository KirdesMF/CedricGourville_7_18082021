import { NextFunction, Response, Request } from 'express';
import { PostServices } from '../services/post.services';
import { httpStatus } from '../utils/http-status';

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const posts = await PostServices.getAllPosts();

    res.status(httpStatus.OK).json(posts);
  } catch (error) {
    next(error);
  }
}

async function getOne(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.body?.id as number;

    const post = await PostServices.getPost(id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
}

export const PostController = { getAll, getOne };
