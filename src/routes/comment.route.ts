import { Application, Router } from 'express';
import { CommentController } from '../controllers/comment.controllers';
import { authorization } from '../middlewares/auth.middleware';

export function commentRouter(app: Application) {
  const router = Router();

  app.use('/comment', router);

  router.post('/', authorization, CommentController.create);
}
