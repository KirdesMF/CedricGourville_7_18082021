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
  const user = await prisma.user.findUnique({
    where: { [field]: value },
    select: {
      id: true,
      email: true,
      username: true,
      password: true,
      role: true,
      department: true,
      avatar: true,
    },
  });

  return user;
}

async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      createdAt: true,
      username: true,
      department: true,
      firstName: true,
      lastName: true,
      lastConnection: true,
      avatar: true,
      bio: true,
      posts: true,
      likes: true,
      comments: true,
    },
  });

  return user;
}

/**
 * get avatar id
 */
async function getAvatarId(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      avatarId: true,
    },
  });

  return user && user.avatarId;
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
async function deleteUser(id: string) {
  const comments = prisma.comment.deleteMany({
    where: { userId: id },
  });
  const posts = prisma.post.deleteMany({ where: { userId: id } });
  const user = prisma.user.delete({
    where: { id },
  });

  await prisma.$transaction([comments, posts, user]);
}

export const UserServices = {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  getAvatarId,
  updateUser,
};
