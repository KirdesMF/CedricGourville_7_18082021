import { Application, Router } from 'express';
import { PostController } from '../controllers/post.controllers';
import { authorization } from '../middlewares/auth.middleware';
import { multerMedia } from '../middlewares/multer.middleware';

export function postRouter(app: Application) {
  const router = Router();

  app.use('/post', router);

  router.get('/', authorization, PostController.getAll);
  router.get('/:id', authorization, PostController.getOne);
  router.post('/', authorization, multerMedia, PostController.create);
  router.patch('/', authorization, multerMedia, PostController.edit);
  router.delete('/', authorization, PostController.remove);
}
