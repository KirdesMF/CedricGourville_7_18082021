import { convertHoursToMilliseconds } from '../utils/utils';

const expiredTime = convertHoursToMilliseconds(1);

export const config = {
  cors: { origin: 'http://localhost:3000', credentials: true },
  cookies: {
    maxAge: expiredTime,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  },
  jwt: {
    expire: expiredTime,
  },
} as const;
