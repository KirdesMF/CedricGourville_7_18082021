import { Role } from '@prisma/client';

export type TokenVerify = {
  userId: string;
  role: Role;
};
