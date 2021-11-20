import { Post, PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

async function createPost(body: Post) {
  const { userId, ...data } = body;
  const post = await prisma.post.create({
    data: {
      ...data,
      user: { connect: { id: userId } },
    },
  });
  return post;
}

async function deletePost(id: string) {
  const comments = prisma.comment.deleteMany({ where: { postId: id } });
  const post = prisma.post.delete({ where: { id } });

  await prisma.$transaction([comments, post]);
}

async function updatePost(id: string, data: Post) {
  const post = await prisma.post.update({ where: { id }, data });
  return post;
}

async function getAllPosts() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      title: true,
      content: true,
      media: true,
      createdAt: true,
      userId: true,
      user: {
        select: {
          username: true,
          avatar: true,
          department: true,
        },
      },
      comments: {
        orderBy: { createdAt: 'asc' },
        select: {
          content: true,
        },
      },
    },
  });
  return posts;
}

async function getMediaId(id: string) {
  const post = await prisma.post.findUnique({
    where: { id },
    select: {
      mediaId: true,
    },
  });

  return post && post.mediaId;
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
  getMediaId,
};
