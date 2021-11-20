import { Comment, Like, Post, User } from 'p7_types';

export type Data = {
  user?: User;
  message?: string;
};

export type TError = Error & {
  status: number;
  message: string;
};

type LikePost = {
  likes: Pick<Like, 'id' | 'userId'>[];
};

type UserPost = {
  user: Pick<User, 'username' | 'avatar' | 'department'>;
};
type CommentsPost = {
  comments: (Pick<Comment, 'content' | 'createdAt' | 'id' | 'userId'> & {
    user: Pick<User, 'avatar' | 'department'>;
  })[];
};
export type TPost = Omit<Post, 'mediaId'> & UserPost & CommentsPost & LikePost;
