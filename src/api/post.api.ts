import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Fetch } from '../utils/fetcher.utils';
import { Comment, Like, Post } from 'p7_types';
import { TError, TPost } from '../types';

/**
 * get all posts
 */
export function usePosts() {
  return useQuery<TPost[], TError>(['post'], () => Fetch.get<TPost[]>('post'));
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation<FormData, unknown, FormData>(
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
export function useCommentPost() {
  const queryClient = useQueryClient();
  return useMutation<Comment, TError, Comment>(
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
export function useLikePost() {
  const queryClient = useQueryClient();

  return useMutation<
    Pick<Like, 'userId' | 'postId'>,
    TError,
    Pick<Like, 'userId' | 'postId'>
  >((body) => Fetch.post('post/like', body), {
    onSuccess: () => {
      queryClient.invalidateQueries('post');
    },
  });
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
