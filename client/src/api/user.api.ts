import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';
import { TError } from '../types';
import { Fetch } from '../utils/fetcher.utils';
import { convertHoursToMilliseconds } from '../utils/utils';
import type { Comment, Like, Post, User } from '@server/types';

/**
 * get current user
 */
type TCurrentUser = Pick<
  User,
  'id' | 'email' | 'username' | 'role' | 'department' | 'avatar'
>;

export function useCurrentUser() {
  const navigate = useNavigate();

  return useQuery(['user'], () => Fetch.get<TCurrentUser>('user'), {
    staleTime: convertHoursToMilliseconds(1),
    retry: false,
    onError: () => {
      navigate('/login');
    },
  });
}

/**
 * get user by id
 */
type TUserById = Omit<User, 'role' | 'avatarId' | 'updatedAt' | 'email'> & {
  likes: Like[];
  posts: Post[];
  comments: Comment[];
};

export function useUserId(id: string) {
  return useQuery([`user`, id], () =>
    Fetch.get<TUserById>(`user/details/${id}`)
  );
}

/**
 * get all users
 */
export function useUsers() {
  return useQuery(['users'], () => Fetch.get<User[]>('user/all'));
}

/**
 * create user
 */
type TCreateUser = Pick<User, 'email' | 'username' | 'password'>;
type TResponseCreateUser = Omit<User, 'password'>;

export function useCreateUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation<TResponseCreateUser, TError, TCreateUser>(
    (body) => Fetch.post('user/register', body),
    {
      onSuccess: (data) => {
        queryClient.setQueriesData(['user'], data);
        navigate('/posts');
      },
    }
  );
}

/**
 * login user
 */
type TLoginUser = Pick<User, 'email' | 'password'>;
type TResponseLoginUser = Omit<User, 'password'>;

export function useLogUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation<TResponseLoginUser, TError, TLoginUser>(
    (body) => Fetch.post('user/login', body),
    {
      onSuccess: (data) => {
        queryClient.setQueriesData(['user'], data);
        navigate('/posts');
      },
    }
  );
}

/**
 * logout user
 */
export function useLogOutUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<Pick<User, 'id'>, TError, Pick<User, 'id'>>(
    (body) => Fetch.remove('user/logout', body),
    {
      onSettled: () => {
        queryClient.resetQueries('user');
        navigate('/');
      },
    }
  );
}

/**
 * update user
 */
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

/**
 * delete user
 */
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

export function useUnregisterUserByAdmin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<Pick<User, 'id'>, TError, Pick<User, 'id'>>(
    (body) => Fetch.remove('user/admin/unregister', body),
    {
      onSuccess: () => {
        queryClient.resetQueries('user');
        navigate('/admin');
      },
    }
  );
}
