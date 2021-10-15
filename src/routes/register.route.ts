import { Application, Router } from 'express';
import { RegisterControllers } from '../controllers/register.controllers';

const route = Router();

export function registerRouter(app: Application) {
  app.use('/register', route);
  route.post('/', RegisterControllers.registerUser);
  route.delete('/:id', RegisterControllers.unRegisterUser);
  route.post('/check', RegisterControllers.checkUniqueValue);

  return app;
}
