import { convertMegaBytesToBytes } from './utils';

export const MAX_FILE_SIZE = convertMegaBytesToBytes(2.5);
export const FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/svg+xml',
  'image/svg',
  'image/webp',
];

// more secure regex password must be :
// more than 8 chars
// at least one number
// at least one special character
// at least one uppercase  and one lowercase letter
export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

export const REGEX_EMAIL = /.+@groupomania.com+/;
