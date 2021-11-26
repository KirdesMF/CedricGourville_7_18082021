import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.upsert({
    where: { email: 'admin@groupomania.com' },
    update: {},
    create: {
      email: 'admin@groupomania.com',
      username: 'admin',
      password: process.env.ADMIN_PASSWORD,
      posts: {
        create: {
          title: 'First post',
          content: 'This is the first post',
        },
      },
    },
  });
}

seed();
