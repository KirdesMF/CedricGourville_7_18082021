import { Application, json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { config } from '../config/config';

export function ExpressLoader(app: Application) {
  app.use(cors(config.cors));
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cookieParser());

  app.get('/', (req, res, next) => {
    res.send('🔥 API is ready');
    next();
  });

  return app;
}
