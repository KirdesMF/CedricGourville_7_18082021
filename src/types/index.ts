export type User = {
  firstName: string;
  lastName: string;
  password: string;
  bio: string;
  email: string;
};

export type Data = {
  user?: User;
  success?: Record<string, string>;
  error?: Record<string, string>;
  token?: string;
};
