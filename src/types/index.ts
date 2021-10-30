import { User } from 'p7_types';

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
