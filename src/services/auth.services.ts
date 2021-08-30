import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// TODO add username login
async function findUserByEmail(email: string) {
  const user = prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}

async function findUserById(id: number) {
  const user = prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
}

export const AuthServices = {
  findUserByEmail,
  findUserById,
};
