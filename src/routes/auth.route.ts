import { Application, Router } from 'express';
import { AuthControllers } from '../controllers/auth.controllers';

const route = Router();

export function authRouter(app: Application) {
  app.use('/auth', route);
  route.get('/', AuthControllers.checkUserLogged);
  route.post('/', AuthControllers.login);
  route.delete('/', AuthControllers.logout);

  return app;
}
