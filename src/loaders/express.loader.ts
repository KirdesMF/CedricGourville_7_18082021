import { Application, json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const options = {
  origin: 'http://localhost:3000',
  credentials: true,
};
export function ExpressLoader(app: Application) {
  app.use(cors(options));
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cookieParser());

  app.get('/', (req, res, next) => {
    res.send('🔥 API is ready');
    next();
  });

  return app;
}
