import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Fetch } from '../utils/fetcher.utils';
import type { Comment, Like, Post } from '@server/types';
import type { TError, TPost } from '../types';

/**
 * get all posts
 */
export function usePosts() {
  return useQuery(['post'], () => Fetch.get<TPost[]>('post'));
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
      },
    }
  );
}
