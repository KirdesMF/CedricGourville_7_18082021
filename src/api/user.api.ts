import { User } from 'p7_types';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useHistory } from 'react-router';
import { TError } from '../types';
import { Fetch } from '../utils/fetcher.utils';

export function useUser() {
  return useQuery<User, TError>(['user'], () => Fetch.get('user'), {
    staleTime: 1 * 60 * 60 * 1000, // 1 hour
    retry: 0,
  });
}

// TODO
// improve typing
export function useCreateUser() {
  return useMutation<User, TError, Partial<User>>((body) =>
    Fetch.post('user/register', body)
  );
}

export function useCheckNotUsed() {
  const queryClient = useQueryClient();
  return useMutation<Record<string, string>, TError, Record<string, string>>(
    (body) => Fetch.post('user/not-used', body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
    }
  );
}

export function useLogUser() {
  const { push } = useHistory();

  return useMutation<Record<string, string>, TError, Record<string, string>>(
    (body) => Fetch.patch('user/login', body),
    {
      onSuccess: () => {
        push('/feed');
      },
    }
  );
}

export function useLogOutUser() {
  const queryClient = useQueryClient();
  const { push } = useHistory();

  return useMutation(() => Fetch.deleted('user/logout'), {
    onSettled: () => {
      queryClient.removeQueries('user');
      push('/');
    },
  });
}
