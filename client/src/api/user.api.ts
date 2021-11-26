import { Comment, Like, Post, User } from '@server/types';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';
import { TError } from '../types';
import { Fetch } from '../utils/fetcher.utils';
import { convertHoursToMilliseconds } from '../utils/utils';

/**
 * get current user
 */
export type CurrentUser = Pick<
  User,
  'id' | 'email' | 'username' | 'role' | 'department' | 'avatar'
>;

export function useCurrentUser() {
  return useQuery<CurrentUser, TError>(['user'], () => Fetch.get('user'), {
    staleTime: convertHoursToMilliseconds(1),
    retry: false,
  });
}

/**
 * get user by id
 */

export type UserById = Omit<
  User,
  'role' | 'avatarId' | 'updatedAt' | 'email'
> & {
  likes: Like[];
  posts: Post[];
  comments: Comment[];
};

export function useUserId(id: string) {
  return useQuery<UserById>([`user`, id], () => Fetch.get(`user/${id}`), {});
}

/**
 * create user
 */

type CreateUser = Pick<User, 'email' | 'username' | 'password'>;
type ResponseCreateUser = Omit<User, 'password'>;

export function useCreateUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation<ResponseCreateUser, TError, CreateUser>(
    (body) => Fetch.post('user/register', body),
    {
      onSuccess: (data) => {
        queryClient.setQueriesData(['user'], data);
        navigate('/posts');
      },
    }
  );
}

type LoginUser = Pick<User, 'email' | 'password'>;

export function useLogUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation<Record<string, string>, TError, Record<string, string>>(
    (body) => Fetch.post('user/login', body),
    {
      onSuccess: (data) => {
        queryClient.setQueriesData(['user'], data);

        navigate('/posts');
      },
    }
  );
}

export function useLogOutUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation((body) => Fetch.remove('user/logout', body), {
    onSettled: () => {
      queryClient.resetQueries('user');
      navigate('/');
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
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation<Pick<User, 'id'>, TError, Pick<User, 'id'>>(
    (body) => Fetch.remove('user/unregister', body),
    {
      onSuccess: () => {
        queryClient.resetQueries('user');
        navigate('/');
      },
    }
  );
}
