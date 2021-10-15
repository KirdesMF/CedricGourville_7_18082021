export const config = {
  cors: { origin: 'http://localhost:3000', credentials: true },
  cookies: {
    maxAge: 5000 * 5000,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  },
} as const;
