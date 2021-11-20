import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Fetch } from '../utils/fetcher.utils';
import { Post } from 'p7_types';
import { TError, TPost } from '../types';

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
