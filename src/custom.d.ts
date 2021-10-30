import 'express';

declare global {
  namespace Express {
    interface Request {
      userId: string;
      avatarId: string | null;
    }
  }
}
