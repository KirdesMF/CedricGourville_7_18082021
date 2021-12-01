import { Application, Router } from 'express';
import * as CommentControllers from '../controllers/comment.controllers';
import * as LikeControllers from '../controllers/like.controllers';
import * as PostController from '../controllers/post.controllers';
import { isAuthenticated } from '../middlewares/auth.middleware';
import { multerMedia } from '../middlewares/multer.middleware';
import {
  validationComment,
  validationCreatePost,
  validationMiddleware,
} from '../middlewares/validation.middlewares';

export function postRouter(app: Application) {
  const router = Router();

  app.use('/post', isAuthenticated, router);

  router.get('/', PostController.getAll);
  router.get('/:id', PostController.getOne);

  router.post(
    '/',
    multerMedia,
    validationCreatePost,
    validationMiddleware,
    PostController.create
  );

  router.patch('/', multerMedia, PostController.edit);
  router.delete('/', PostController.remove);

  router.post('/like', LikeControllers.likePost);
  router.delete('/like', LikeControllers.unLikePost);

  router.post(
    '/comment',
    validationComment,
    validationMiddleware,
    CommentControllers.create
  );
}
