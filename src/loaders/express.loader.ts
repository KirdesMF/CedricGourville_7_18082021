import { Application, json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

export function ExpressLoader(app: Application) {
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cookieParser());
  app.use(cors());

  return app;
}
