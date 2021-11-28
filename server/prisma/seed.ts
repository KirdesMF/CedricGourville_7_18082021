import { hash } from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // FIXME: use .env file
  const hashedPassword = await hash('12345678', 10);

  await prisma.user.upsert({
    where: { email: 'admin@groupomania.com' },
    update: {},
    create: {
      email: 'admin@groupomania.com',
      username: 'admin',
      password: hashedPassword,
      role: 'ADMIN',
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
