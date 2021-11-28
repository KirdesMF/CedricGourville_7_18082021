import 'express';
import { TokenVerify } from '.';

declare global {
  namespace Express {
    interface Request {
      userId: string;
      avatarId: string | null;
      user: TokenVerify;
    }
  }
}
