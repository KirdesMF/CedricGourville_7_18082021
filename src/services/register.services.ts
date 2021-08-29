import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser(data: Prisma.UserCreateInput) {
  const user = await prisma.user.create({ data });
  return user;
}

export const RegisterServices = {
  createUser,
};
