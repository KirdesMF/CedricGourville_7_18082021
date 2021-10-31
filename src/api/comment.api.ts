import { Comment } from 'p7_types';
import { useMutation, useQueryClient } from 'react-query';
import { TError } from '../types';
import { Fetch } from '../utils/fetcher.utils';

export function useCreateComment() {
  const queryClient = useQueryClient();
  return useMutation<Comment, TError, Comment>(
    (body) => Fetch.post('comment', body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('post');
      },
    }
  );
}
