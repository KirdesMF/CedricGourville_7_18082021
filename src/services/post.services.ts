import { Post, PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

async function createPost(data: Post) {
  const post = await prisma.post.create({ data });
  return post;
}

async function deletePost(id: string) {
  const post = await prisma.post.delete({ where: { id } });
  return post;
}

async function updatePost(id: string, data: Post) {
  const post = await prisma.post.update({ where: { id }, data });
  return post;
}

async function getAllPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

async function getPost(id: string) {
  const post = await prisma.post.findUnique({ where: { id } });
  return post;
}

export const PostServices = {
  createPost,
  deletePost,
  updatePost,
  getAllPosts,
  getPost,
};
