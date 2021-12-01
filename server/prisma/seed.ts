import { hash } from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // FIXME: use .env file
  const adminHashedPassword = await hash('12345678', 10);
  const directionHashedPassword = await hash('00000000', 10);

  await prisma.user.create({
    data: {
      email: 'admin@groupomania.com',
      username: 'admin',
      password: adminHashedPassword,
      department: 'COM',
      role: 'ADMIN',
      posts: {
        create: {
          title: 'Welcome to Groupomania',
          content:
            'Hey ! Glad to see you here ! You can update your profile and see the latest news from the community.',
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      email: 'direction@groupomania.com',
      username: 'Boss',
      password: directionHashedPassword,
      department: 'DIRECTION',
      role: 'ADMIN',
      posts: {
        create: {
          title: 'Hey this is your Boss',
          content:
            'Hope this new tool will hepl you be more efficient in your work :)',
        },
      },
    },
  });
}

seed();
