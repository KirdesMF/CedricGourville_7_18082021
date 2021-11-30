import { User, Like, Comment, Post } from '@server/types';

export type TError = Error & {
  status: number;
  message: string;
};

export type PostComment = Pick<
  Comment,
  'content' | 'createdAt' | 'id' | 'userId'
> & {
  user: Pick<User, 'avatar' | 'department'>;
};

export type TPost = Omit<Post, 'mediaId'> & {
  likes: Pick<Like, 'id' | 'userId'>[];
  user: Pick<User, 'username' | 'avatar' | 'department'>;
  comments: PostComment[];
};
