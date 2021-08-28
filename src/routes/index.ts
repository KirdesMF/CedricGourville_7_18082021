import { Application } from 'express';
import { registerRouter } from './register.route';

export function Routes(app: Application) {
  registerRouter(app);

  return app;
}
