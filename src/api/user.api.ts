import { Comment, Like, Post, User } from 'p7_types';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useHistory } from 'react-router';
import { TError } from '../types';
import { Fetch } from '../utils/fetcher.utils';
import { convertHoursToMilliseconds } from '../utils/utils';

/**
 * get current user
 */
type CurrentUser = Pick<
  User,
  'id' | 'email' | 'username' | 'password' | 'role' | 'department' | 'avatar'
>;

export function useCurrentUser() {
  const { push } = useHistory();
  return useQuery<CurrentUser, TError>(
    'user',
    () => Fetch.get<CurrentUser>('user'),
    {
      staleTime: convertHoursToMilliseconds(1),
    }
  );
}

/**
 * get user by id
 */
type UserById = Omit<User, 'role' | 'avatarId' | 'updatedAt' | 'email'> & {
  likes: Like[];
} & { posts: Post[] } & { comments: Comment[] };

export function useUserId(id: string) {
  return useQuery<UserById, TError>(`user/:id`, () =>
    Fetch.get<UserById>(`user/${id}`)
  );
}

/**
 * create user
 */
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation<User, TError, Partial<User>>(
    (body) => Fetch.post('user/register', body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
    }
  );
}

export function useLogUser() {
  const { push } = useHistory();
  const queryClient = useQueryClient();

  return useMutation<Record<string, string>, TError, Record<string, string>>(
    (body) => Fetch.post('user/login', body),
    {
      onSuccess: () => {
        push('/feed');
        queryClient.invalidateQueries('user');
      },
    }
  );
}

export function useLogOutUser() {
  const queryClient = useQueryClient();
  const { push } = useHistory();

  return useMutation((body) => Fetch.remove('user/logout', body), {
    onSettled: () => {
      queryClient.resetQueries('user');
      push('/');
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation<FormData, TError, FormData>(
    (body) => Fetch.patchFormData('user/edit', body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
        queryClient.invalidateQueries('user/:id');
      },
    }
  );
}

export function useUnregisterUser() {
  const { push } = useHistory();
  const queryClient = useQueryClient();

  return useMutation<Pick<User, 'id'>, TError, Pick<User, 'id'>>(
    (body) => Fetch.remove('user/unregister', body),
    {
      onSuccess: () => {
        queryClient.resetQueries('user');
        push('/');
      },
    }
  );
}
