import { Comment, PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

async function create(body: Comment) {
  const { postId, userId, ...data } = body;
  const comment = await prisma.comment.create({
    data: {
      ...data,
      post: { connect: { id: postId } },
      user: { connect: { id: userId } },
    },
  });
  return comment;
}

export const CommentServices = {
  create,
};
