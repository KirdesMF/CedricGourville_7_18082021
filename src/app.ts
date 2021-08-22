import { PrismaClient } from '@prisma/client';
import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
console.log(`docker env: ${process.env.NODE_ENV}`);

const setHeaders = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
};

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(setHeaders);

app.get('/', (req, res) => res.send('home'));

app.get('/users', async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: 'ced@prisma.io',
      name: 'ced Prisma',
    },
  });
  res.json(user);
  console.log(user);
});

app.get('/all', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(process.env.API_PORT, () => {
  console.log(
    `server is listenning here : http://${process.env.API_HOST}:${process.env.API_PORT}`
  );
});
