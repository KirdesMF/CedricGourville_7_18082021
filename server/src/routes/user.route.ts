import { Application, Router } from 'express';
import * as UserControllers from '../controllers/user.controllers';
import { isAdmin, isAuthenticated } from '../middlewares/auth.middleware';
import { multerAvatar } from '../middlewares/multer.middleware';
import {
  validationLogin,
  validationMiddleware,
  validationRegister,
} from '../middlewares/validation.middlewares';

export function userRouter(app: Application) {
  const router = Router();

  app.use('/user', router);

  router.get('/', isAuthenticated, UserControllers.getCurrentUser);
  router.get('/details/:id/', isAuthenticated, UserControllers.getUserById);
  router.get('/all', isAuthenticated, isAdmin, UserControllers.getAllUsers);

  router.post(
    '/login',
    validationLogin,
    validationMiddleware,
    UserControllers.login
  );
  router.post(
    '/register',
    validationRegister,
    validationMiddleware,
    UserControllers.register
  );

  router.patch('/edit', isAuthenticated, multerAvatar, UserControllers.edit);
  router.delete('/logout', isAuthenticated, UserControllers.logout);
  router.delete('/unregister', isAuthenticated, UserControllers.unRegister);
  router.delete(
    '/admin/unregister',
    isAuthenticated,
    isAdmin,
    UserControllers.deleteUser
  );

  return app;
}
