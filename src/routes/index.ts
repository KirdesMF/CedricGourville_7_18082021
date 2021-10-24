import { Application } from 'express';
import { postRouter } from './post.route';
import { userRouter } from './user.route';

export function Routes(app: Application) {
  userRouter(app);
  postRouter(app);
  return app;
}
