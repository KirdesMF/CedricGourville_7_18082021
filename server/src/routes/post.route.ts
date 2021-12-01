import { Application, Router } from 'express';
import * as CommentControllers from '../controllers/comment.controllers';
import * as LikeControllers from '../controllers/like.controllers';
import * as PostController from '../controllers/post.controllers';
import { isAuthenticated } from '../middlewares/auth.middleware';
import { multerMedia } from '../middlewares/multer.middleware';

export function postRouter(app: Application) {
  const router = Router();

  app.use('/post', router);

  router.get('/', isAuthenticated, PostController.getAll);
  router.get('/:id', PostController.getOne);

  router.post('/', isAuthenticated, multerMedia, PostController.create);
  router.patch('/', multerMedia, PostController.edit);
  router.delete('/', PostController.remove);

  router.post('/like', LikeControllers.likePost);
  router.delete('/like', LikeControllers.unLikePost);

  router.post('/comment', CommentControllers.create);
}
