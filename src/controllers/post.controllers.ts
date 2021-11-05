import { NextFunction, Response, Request } from 'express';
import { httpStatus } from '../utils/http-status';
import { PostServices } from '../services/post.services';
import { Post } from '.prisma/client';
import { ImageKitServices } from '../services/imagekit.services';
import { ErrorHandler } from '../utils/error.utils';

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const posts = await PostServices.getAllPosts();

    res.status(httpStatus.OK).json(posts);
  } catch (error) {
    next(error);
  }
}

async function getOne(req: Request, res: Response, next: NextFunction) {
  const id = req.body?.id;
  try {
    const post = await PostServices.getPost(id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  const body = req.body as Post;
  const file = req?.file;
  const userId = req?.userId;
  let post: Post;

  try {
    if (!file) {
      post = await PostServices.createPost({ ...body, userId });
    } else {
      const { media, mediaId } = await ImageKitServices.upload(file, 'feed');

      if (!media || !mediaId) {
        throw new ErrorHandler(
          httpStatus.serverError,
          'something went wrong with the post image'
        );
      }

      post = await PostServices.createPost({ ...body, media, mediaId, userId });
    }

    res.status(httpStatus.OK).json(post);
  } catch (error) {
    next(error);
  }
}

async function edit(req: Request, res: Response, next: NextFunction) {
  const { id: postId, body } = req.body;
  const file = req?.file;
  let post: Post;

  try {
    if (!file) post = await PostServices.updatePost(postId, body);
    else {
      const currentMediaId = await PostServices.getMediaId(postId);
      const { media, mediaId } = await ImageKitServices.upload(file, 'feed');

      if (!media) {
        throw new ErrorHandler(
          httpStatus.serverError,
          'Something went wrong with your image pls try again'
        );
      }

      if (currentMediaId && mediaId) {
        await ImageKitServices.remove(currentMediaId);
      }

      post = await PostServices.updatePost(postId, {
        ...body,
        media,
        mediaId,
      });
    }

    if (!post) {
      throw new ErrorHandler(httpStatus.serverError, 'Post not updated');
    }

    res
      .status(httpStatus.OK)
      .json({ message: `🎉 Successfully updated`, post });
  } catch (error) {
    next(error);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  const postId = req.body.id;
  try {
    const mediaId = await PostServices.getMediaId(postId);

    if (mediaId) await ImageKitServices.remove(mediaId);
    await PostServices.deletePost(postId);

    res.status(httpStatus.OK).json({ message: 'Successfully deleted' });
  } catch (error) {
    next(error);
  }
}

export const PostController = { getAll, getOne, create, remove, edit };
