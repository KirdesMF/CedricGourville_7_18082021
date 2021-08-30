import { Application } from 'express';
import { authRouter } from './auth.route';
import { registerRouter } from './register.route';

export function Routes(app: Application) {
  registerRouter(app);
  authRouter(app);
  return app;
}
