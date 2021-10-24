import { User } from 'p7_types';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useHistory } from 'react-router';
import { useAuth } from '../context/auth.context';
import { TError } from '../types';
import { Fetch } from '../utils/fetcher.utils';

export type Department = 'DIRECTION' | 'TECH' | 'COM' | 'SOCIAL' | 'VISITOR';

export function useUser() {
  const { setUser } = useAuth();

  return useQuery<User, TError>(['user'], () => Fetch.get('user'), {
    onError: () => {
      setUser(false);
    },
  });
}

export function useCreateUser() {
  return useMutation<User, TError, User>((body) =>
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
  const { setUser } = useAuth();
  const { push } = useHistory();

  return useMutation<Record<string, string>, TError, Record<string, string>>(
    (body) => Fetch.patch('user/login', body),
    {
      onSuccess: () => {
        setUser(true);
        push('/feed');
      },
    }
  );
}

export function useLogOutUser() {
  const queryClient = useQueryClient();
  const { setUser } = useAuth();

  return useMutation(() => Fetch.deleted('user/logout'), {
    onSettled: () => {
      queryClient.removeQueries('user');
    },
    onSuccess: () => {
      setUser(false);
    },
  });
}
