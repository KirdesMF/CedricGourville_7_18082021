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
