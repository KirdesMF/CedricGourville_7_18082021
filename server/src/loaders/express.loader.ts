import helmet from 'helmet';
import hpp from 'hpp';

import { Application, json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { config } from '../config/config';

const requestSizeLimit = '1kb';

export function ExpressLoader(app: Application) {
  app.use(helmet()); // help to set various http headers
  app.use(cors(config.cors));
  app.use(urlencoded({ extended: true, limit: requestSizeLimit }));
  app.use(json({ limit: requestSizeLimit }));
  app.use(cookieParser());

  app.use(hpp()); // http parameter pollution

  app.get('/', (req, res, next) => {
    res.send('🔥 API is ready');
    next();
  });

  return app;
}
