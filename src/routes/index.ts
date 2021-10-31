import { Application } from 'express';
import { commentRouter } from './comment.route';
import { postRouter } from './post.route';
import { userRouter } from './user.route';

export function Routes(app: Application) {
  userRouter(app);
  postRouter(app);
  commentRouter(app);
  return app;
}
