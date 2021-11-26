import { Like, PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

async function getLikes(postId: string) {
  const likes = await prisma.like.findMany({
    where: { id: postId },
  });

  return likes;
}

async function createLike(body: Like) {
  const { postId, userId } = body;
  const like = await prisma.like.create({
    data: {
      post: { connect: { id: postId } },
      user: { connect: { id: userId } },
    },
  });
  return like;
}

async function deleteLike(id: string) {
  await prisma.like.delete({ where: { id } });
}

export const LikeServices = {
  createLike,
  deleteLike,
  getLikes,
};
