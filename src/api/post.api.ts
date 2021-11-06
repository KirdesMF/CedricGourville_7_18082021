import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Fetch } from '../utils/fetcher.utils';
import { Comment, Post, User } from 'p7_types';
import { TError } from '../types';

type TUsePost = Post & {
  user: Pick<User, 'username' | 'id' | 'role'>;
  comments: Pick<Comment, 'content'>[];
};

export function usePosts() {
  return useQuery<TUsePost[], TError>(['post'], () =>
    Fetch.get<TUsePost[]>('post')
  );
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
