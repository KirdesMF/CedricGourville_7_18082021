import { hash } from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // FIXME: use .env file
  const adminHashedPassword = await hash('Administration00!', 10);
  const directionHashedPassword = await hash('Direction00!', 10);
  const commHashedPassword = await hash('Communication00!', 10);
  const visitorHashedPassword = await hash('Visitor00!', 10);

  await prisma.user.create({
    data: {
      email: 'admin@groupomania.com',
      username: 'admin',
      password: adminHashedPassword,
      department: 'COM',
      role: 'ADMIN',
      avatar:
        'https://ik.imagekit.io/i3uinwevzvu/avatar/dog_U63iHIVV1.jpg?updatedAt=1638446699712',
      posts: {
        create: {
          title: 'Welcome to Groupomania',
          content:
            'Hey ! Glad to see you here ! You can update your profile and see the latest news from the community.',
          media:
            'https://ik.imagekit.io/i3uinwevzvu/feed/fireworks_plpegrmE6.jpg?updatedAt=1638446358256',
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      email: 'com@groupomania.com',
      username: 'Communication',
      password: commHashedPassword,
      department: 'COM',
      role: 'ADMIN',
      avatar:
        'https://ik.imagekit.io/i3uinwevzvu/avatar/girl__d6EQPpZp.jpg?updatedAt=1638446699530',
      posts: {
        create: {
          title: 'Welcome to Groupomania',
          content: 'Hey ! Welcome aboard',
          media:
            'https://ik.imagekit.io/i3uinwevzvu/feed/monkey_TUO9Y23vJ.jpg?updatedAt=1638448090473',
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
      avatar:
        'https://ik.imagekit.io/i3uinwevzvu/avatar/dog-yellow_rH_DU-ENg.jpg?updatedAt=1638446698798',
      posts: {
        create: {
          title: 'Hey this is your Boss',
          content:
            'Hope this new tool will hepl you be more efficient in your work :)',
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      email: 'visitor@groupomania.com',
      username: 'Visitor',
      password: visitorHashedPassword,
      department: 'VISITOR',
      posts: {
        create: {
          title: 'Oh this is cool',
          content: 'Blah bla bla... ok lets go',
        },
      },
    },
  });
}

seed();
