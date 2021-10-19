import { Application, Router } from 'express';
import { checkSchema } from 'express-validator';
import { RegisterControllers } from '../controllers/register.controllers';
import { registerValidatorSchema } from '../middlewares/validation.middlewares';

const route = Router();

export function registerRouter(app: Application) {
  app.use('/register', route);
  route.post(
    '/',
    checkSchema(registerValidatorSchema),
    RegisterControllers.registerUser
  );
  route.delete('/:id', RegisterControllers.unRegisterUser);
  route.post('/check', RegisterControllers.checkUniqueValue);

  return app;
}
