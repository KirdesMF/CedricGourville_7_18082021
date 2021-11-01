import { NextFunction, Response, Request } from 'express';
import { httpStatus } from '../utils/http-status';
import { PostServices } from '../services/post.services';
import { Post } from '.prisma/client';
import { Socket } from '../loaders/socket.loader';

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
    const id = req.body?.id;

    const post = await PostServices.getPost(id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const body = req.body as Post;

    const post = await PostServices.createPost({ ...body, userId: req.userId });

    res.status(httpStatus.OK).json(post);
  } catch (error) {
    next(error);
  }
}

export const PostController = { getAll, getOne, create };
