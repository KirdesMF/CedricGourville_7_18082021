import { PrismaClient } from '@prisma/client';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.NODE_ENV);
console.log(process.env.NODE_PATH);

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

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

app.listen(process.env.API_PORT, () => {
   console.log(
      `server is listenning here : http://${process.env.API_HOST}:${process.env.API_PORT}`
   );
});
