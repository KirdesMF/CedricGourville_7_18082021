import { Application, Router } from 'express';
import { UserControllers } from '../controllers/user.controllers';
import { authorization, getAvatarId } from '../middlewares/auth.middleware';
import { uploadAvatarToImageKit } from '../middlewares/imagekit.middleware';
import { uploadAvatar } from '../middlewares/multer.middleware';

export function userRouter(app: Application) {
  const router = Router();

  app.use('/user', router);

  router.get('/', UserControllers.logged);
  router.patch('/login', UserControllers.login);
  router.post(
    '/edit',
    authorization,
    getAvatarId,
    uploadAvatar,
    uploadAvatarToImageKit,
    UserControllers.edit
  );

  router.post('/register', UserControllers.register);
  router.post('/not-used', UserControllers.checkNotUsed);

  router.delete('/logout', authorization, UserControllers.logout);
  router.delete('/unregister', UserControllers.unRegister);

  return app;
}
