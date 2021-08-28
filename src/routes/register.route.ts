import { Application, Router } from 'express';
import { RegisterControllers } from '../controllers/register.controllers';

const route = Router();

export function registerRouter(app: Application) {
  app.use('/register', route);

  route.post('/', RegisterControllers.registerUser);

  return app;
}
