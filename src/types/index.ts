export type Department = 'DIRECTION' | 'TECH' | 'COM' | 'SOCIAL' | 'VISITOR';

export type User = {
  email: string;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  department: Department;
  bio: string;
};

export type Data = {
  user?: User;
  success?: Record<string, string>;
  error?: Record<string, string>;
  token?: string;
};
