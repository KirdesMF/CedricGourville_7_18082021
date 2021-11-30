import { Application, Router } from 'express';
import * as UserControllers from '../controllers/user.controllers';
import { isAdmin, isAuthenticated } from '../middlewares/auth.middleware';
import { multerAvatar } from '../middlewares/multer.middleware';
import { validationRegister } from '../middlewares/validation.middlewares';

export function userRouter(app: Application) {
  const router = Router();

  app.use('/user', router);

  router.get('/', isAuthenticated, UserControllers.getCurrentUser);
  router.get('/details/:id/', isAuthenticated, UserControllers.getUserById);
  router.get('/all', isAuthenticated, isAdmin, UserControllers.getAllUsers);

  router.post('/login', UserControllers.login);
  router.post('/register', validationRegister, UserControllers.register);

  router.patch('/edit', isAuthenticated, multerAvatar, UserControllers.edit);
  router.delete('/logout', isAuthenticated, UserControllers.logout);
  router.delete('/unregister', isAuthenticated, UserControllers.unRegister);

  return app;
}
