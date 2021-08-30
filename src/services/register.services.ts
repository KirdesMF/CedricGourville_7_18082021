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
 * @description Delete a user
 */
async function deleteUserById(id: number) {
  const user = await prisma.user.delete({
    where: { id },
  });
  return user;
}

export const RegisterServices = {
  createUser,
  deleteUserById,
};
