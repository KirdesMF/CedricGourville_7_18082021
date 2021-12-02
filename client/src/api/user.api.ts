import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';
import { TError } from '../types';
import { Fetch } from '../utils/fetcher.utils';
import type { Comment, Like, Post, User } from '@server/types';
import toast from 'react-hot-toast';

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
        toast.success('User created successfully');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
}

/**
 * login user
 */
export type TLoginFields = {
  log: string;
  password: string;
};
type TResponseLoginUser = Omit<User, 'password'>;

export function useLogUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation<TResponseLoginUser, TError, TLoginFields>(
    (body) => Fetch.post('user/login', body),
    {
      onSuccess: (data) => {
        queryClient.setQueriesData(['user'], data);
        navigate('/posts');
        toast.success('User logged successfully');
      },
      onError: (error) => {
        toast.error(error.message);
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
      onSuccess: () => {
        queryClient.resetQueries('user');
        navigate('/');
        toast.success('Logout successfully');
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
        queryClient.resetQueries('user');
        queryClient.invalidateQueries('user/details/:id');
        toast.success('User updated');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
}

/**
 * update user departement
 */
type TUpdateUserDepartment = Pick<User, 'department' | 'id'>;

export function useUpdateUserDepartment() {
  const queryClient = useQueryClient();

  return useMutation<TUpdateUserDepartment, TError, TUpdateUserDepartment>(
    (body) => Fetch.patch('user/edit/department', body),
    {
      onSuccess: () => {
        queryClient.resetQueries('user');
        queryClient.resetQueries('users');
        toast.success('User department updated');
      },
      onError: (error) => {
        toast.error(error.message);
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
      onError: (error) => {
        toast.error(error.message);
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
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
}
