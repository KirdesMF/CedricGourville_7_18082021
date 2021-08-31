import { Application, Router } from 'express';
import { AuthControllers } from '../controllers/auth.controllers';

export function authRouter(app: Application) {
  const route = Router();
  app.use('/auth', route);

  route.get('/', AuthControllers.checkUserLogged);
  route.get('/check', AuthControllers.checkUserLogged);
  route.post('/', AuthControllers.login);
  route.post('/:id', AuthControllers.logout);
  return app;
}
