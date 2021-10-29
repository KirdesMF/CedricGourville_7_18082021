import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Fetch } from '../utils/fetcher.utils';
import { Post } from 'p7_types';
import { TError } from '../types';

export function usePosts() {
  return useQuery<Post[], TError>(['post'], () => Fetch.get<Post[]>('post'));
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation<FormData, unknown, FormData>(
    (body) => Fetch.postFormData('post', body),
    {
      onSettled: () => {
        queryClient.invalidateQueries('post');
      },
    }
  );
}
