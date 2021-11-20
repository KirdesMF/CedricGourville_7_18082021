import { Application, Router } from 'express';
import { UserControllers } from '../controllers/user.controllers';
import { authorization } from '../middlewares/auth.middleware';
import { multerAvatar } from '../middlewares/multer.middleware';
import { validationRegister } from '../middlewares/validation.middlewares';

export function userRouter(app: Application) {
  const router = Router();

  app.use('/user', router);

  router.get('/', UserControllers.logged);
  router.get('/:id', UserControllers.getUserById);
  router.post('/login', UserControllers.login);
  router.patch('/edit', authorization, multerAvatar, UserControllers.edit);

  router.post('/register', validationRegister, UserControllers.register);
  router.post('/not-used', UserControllers.checkNotUsed);

  router.delete('/logout', authorization, UserControllers.logout);
  router.delete('/unregister', authorization, UserControllers.unRegister);

  return app;
}
