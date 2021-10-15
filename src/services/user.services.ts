import { PrismaClient, User } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

/**
 * @param userInput
 * @returns
 * @description create a user and hash the password
 */
async function createUser(userInput: User) {
  const { password, ...userData } = userInput;
  const hashedPassword = await hash(password, 10);
  const user = await prisma.user.create({
    data: {
      password: hashedPassword,
      ...userData,
    },
  });
  return user;
}

/**
 * @param id
 * @returns user
 * @description delete user by id
 */
async function deleteUserById(id: number) {
  const user = await prisma.user.delete({
    where: { id },
  });
  return user;
}

async function findUserByEmail(email: string) {
  const user = prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}

async function findUserByUserName(userName: string) {
  const user = prisma.user.findUnique({
    where: {
      userName,
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

export const UserServices = {
  createUser,
  deleteUserById,
  findUserByEmail,
  findUserByUserName,
  findUserById,
};
