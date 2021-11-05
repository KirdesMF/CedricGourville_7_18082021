import { Application, Router } from 'express';
import { UserControllers } from '../controllers/user.controllers';
import { authorization } from '../middlewares/auth.middleware';
import { multerAvatar } from '../middlewares/multer.middleware';

export function userRouter(app: Application) {
  const router = Router();

  app.use('/user', router);

  router.get('/', UserControllers.logged);
  router.patch('/login', UserControllers.login);
  router.post('/edit', authorization, multerAvatar, UserControllers.edit);

  router.post('/register', UserControllers.register);
  router.post('/not-used', UserControllers.checkNotUsed);

  router.delete('/logout', authorization, UserControllers.logout);
  router.delete('/unregister', authorization, UserControllers.unRegister);

  return app;
}
