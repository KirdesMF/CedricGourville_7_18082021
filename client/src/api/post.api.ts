import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Fetch } from '../utils/fetcher.utils';
import type { Comment, Like, Post } from '@server/types';
import type { TError, TPost } from '../types';
import toast from 'react-hot-toast';

/**
 * get all posts
 */
export function usePosts() {
  return useQuery(['post'], () => Fetch.get<TPost[]>('post'));
}

/**
 * get one post
 */
export function usePostId(id: string) {
  return useQuery([`post`, id], () => Fetch.get<TPost>(`post/${id}`));
}

/**
 * create a new post
 */
export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation<FormData, TError, FormData>(
    (body) => Fetch.postFormData('post', body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('post');
        toast.success('Post created');
      },
    }
  );
}

/**
 * delete post
 */
export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation<Pick<Post, 'id'>, TError, Pick<Post, 'id'>>(
    (id) => Fetch.remove('post', id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('post');
        toast.success('Post deleted');
      },
    }
  );
}

/**
 * comment post
 */
type TCommentPost = Pick<Comment, 'content' | 'postId' | 'userId'>;

export function useCommentPost() {
  const queryClient = useQueryClient();
  return useMutation<Comment, TError, TCommentPost>(
    (body) => Fetch.post('post/comment', body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('post');
        toast.success('Comment posted');
      },
    }
  );
}

/**
 * like post
 */
type TLikePost = Pick<Like, 'postId' | 'userId'>;

export function useLikePost() {
  const queryClient = useQueryClient();

  return useMutation<TLikePost, TError, TLikePost>(
    (body) => Fetch.post('post/like', body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('post');
        toast.success('Post liked');
      },
    }
  );
}

/**
 * remove like post
 */
export function useRemoveLikePost() {
  const queryClient = useQueryClient();

  return useMutation<Pick<Like, 'id'>, TError, Pick<Like, 'id'>>(
    (body) => Fetch.remove('post/like', { id: body.id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('post');
        toast.success('Post unliked');
      },
    }
  );
}
