import { PrismaClient, User } from '@prisma/client';
import { hash } from 'bcrypt';

type TUniqueUserField = keyof Pick<User, 'id' | 'username' | 'email'>;

const prisma = new PrismaClient();

// Create
/**
 * @param data
 * @returns
 * @description create a user and hash the password
 */
async function createUser(data: User) {
  const { password, ...userData } = data;
  const hashedPassword = await hash(password, 10);
  const user = await prisma.user.create({
    data: {
      password: hashedPassword,
      ...userData,
    },
  });
  return user;
}

// Find
/**
 *
 * @param field unique field "email" | "username" | "password"
 * @param value string | number depending on field
 * @returns User as promise
 */
async function getUser<T extends TUniqueUserField>(field: T, value: string) {
  const user = prisma.user.findUnique({
    where: { [field]: value },
  });

  return user;
}

// Update
/**
 *
 * @param field
 * @param value
 * @param data
 * @returns
 */
async function updateUser<T extends TUniqueUserField>(
  field: T,
  value: string,
  data: Partial<User>
) {
  const updatedUser = await prisma.user.update({
    where: { [field]: value },
    data,
  });

  return updatedUser;
}

// Delete
/**
 *
 * @param field
 * @param value
 * @returns
 */
async function deleteUser<T extends TUniqueUserField>(field: T, value: string) {
  const user = await prisma.user.delete({
    where: { [field]: value },
  });
  return user;
}

export const UserServices = {
  createUser,
  deleteUser,
  getUser,
  updateUser,
};
