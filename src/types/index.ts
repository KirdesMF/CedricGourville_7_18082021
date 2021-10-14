export type User = {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  bio?: string;
  picture?: string;
};

export type Data = {
  user?: User;
  success?: Record<string, string>;
  error?: Record<string, string>;
  token?: string;
};
