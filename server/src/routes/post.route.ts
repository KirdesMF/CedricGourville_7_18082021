import { Application, Router } from 'express';
import { CommentControllers } from '../controllers/comment.controllers';
import { LikeControllers } from '../controllers/like.controllers';
import { PostController } from '../controllers/post.controllers';
import { authorization } from '../middlewares/auth.middleware';
import { multerMedia } from '../middlewares/multer.middleware';

export function postRouter(app: Application) {
  const router = Router();

  app.use('/post', authorization, router);

  router.get('/', PostController.getAll);
  router.get('/:id', PostController.getOne);

  router.post('/', multerMedia, PostController.create);
  router.patch('/', multerMedia, PostController.edit);
  router.delete('/', PostController.remove);

  router.post('/like', LikeControllers.likePost);
  router.delete('/like', LikeControllers.unLikePost);

  router.post('/comment', CommentControllers.create);
}
