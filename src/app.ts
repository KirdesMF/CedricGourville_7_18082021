import express from 'express';
import dotenv from 'dotenv';
// import ImageKit from 'imagekit';

import { ExpressLoader } from './loaders/express.loader';
import { Routes } from './routes';
import { ErrorsMiddleWare } from './middlewares/errors.middlewares';

dotenv.config();

const app = express();
const localhost = process.env.MYSQL_DB || 'localhost';
const port = process.env.API_PORT || 1234;

// TODO
// use .env file
// const imagekit = new ImageKit({
//   publicKey: 'public_LACBQ1l5yA/Ko4n7CaM23xA+ikg=',
//   privateKey: 'private_FGtYc6CIix1KSlqkT5utseJrS+w=',
//   urlEndpoint: 'https://ik.imagekit.io/i3uinwevzvu',
// });

function startServer() {
  ExpressLoader(app);
  Routes(app);

  app.use(ErrorsMiddleWare.logger);
  app.use(ErrorsMiddleWare.responder);

  // app.get('/imagekit', (req, res) => {
  //   const result = imagekit.getAuthenticationParameters();
  //   res.send(result);
  // });

  // TODO
  // remove this cookie part ?
  // I don't remember why its here
  app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`, `encrypted cookie string Value`, {
      maxAge: 5000 * 5000,
    });
    console.log(req.cookies);
    res.json('Cookie have been saved successfully');
  });

  app.get('/getcookie', (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);
  });

  app.listen(process.env.API_PORT, () => {
    console.log(`🔥 Server is running on: http://${localhost}:${port}`);
  });
}

console.log(`🐋 Docker environment: ${process.env.NODE_ENV}`);
startServer();
