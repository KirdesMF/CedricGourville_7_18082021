import express from 'express';
import { config } from 'dotenv';
import { createServer } from 'http';

import { ExpressLoader } from './loaders/express.loader';
import { Routes } from './routes';
import { ErrorsMiddleWare } from './middlewares/errors.middlewares';
import { Socket } from './loaders/socket.loader';

config();
const app = express();
const server = createServer(app);

const localhost = process.env.MYSQL_DB || 'localhost';
const port = process.env.API_PORT || 1234;

function startServer() {
  ExpressLoader(app);
  Routes(app);
  Socket.init(server);

  app.use(ErrorsMiddleWare.logger);
  app.use(ErrorsMiddleWare.responder);

  server.listen(process.env.API_PORT, () => {
    console.log(`🔥 Server is running on: http://${localhost}:${port}`);
  });
}

console.log(`🐋 Docker environment: ${process.env.NODE_ENV}`);
startServer();
