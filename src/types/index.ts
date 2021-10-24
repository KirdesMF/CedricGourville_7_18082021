export type Department = 'DIRECTION' | 'TECH' | 'COM' | 'SOCIAL' | 'VISITOR';

export type User = {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  department: Department;
  bio: string;
};

export type Post = {
  title: string;
  content: string;
};

// TODO
// type DATA should have more info
// like createdAt updatedAt
export type Data = {
  user?: User;
  message?: string;
};

export type TError = Error & {
  status: number;
  message: string;
};
