import { Application, Router } from 'express';
import { UserControllers } from '../controllers/user.controllers';
import { authorization } from '../middlewares/auth.middleware';

export function userRouter(app: Application) {
  const router = Router();

  app.use('/user', router);

  router.get('/', UserControllers.logged);
  router.patch('/login', UserControllers.login);

  router.post('/register', UserControllers.register);
  router.post('/not-used', UserControllers.checkNotUsed);

  router.delete('/logout', authorization, UserControllers.logout);
  router.delete('/unregister', UserControllers.unRegister);

  return app;
}
